<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Session;
use Image;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use App\Models\Generalsetting;
use App\Models\Inventory;
use App\Classes\GeniusMailer;
use Google\Cloud\Vision\V1\Feature\Type;
use Google\Cloud\Vision\V1\ImageAnnotatorClient;
use Google\Cloud\Vision\V1\Likelihood;


class PhoneController extends Controller
{
    public function loadPartNumFromImage(Request $request) {
        if ($file = $request->file('file'))
        {
            $name = str_replace(' ', '-', $file->getClientOriginalName());
            $name = time().$name;
            $image_path = public_path() . '/assets/images/mobile/' . $name;
            move_uploaded_file($file, $image_path);

            $extension = pathinfo($image_path, PATHINFO_EXTENSION);
            
            $img = Image::make($image_path);
            if($extension == 'heic') {
                $img->encode('jpg', 75)->save($image_path);
            }
            
            $targetSize = 2000; // 100 KB
            $currentSize = $img->filesize();
            $ratio = sqrt($currentSize / ($targetSize * 1024));

            $width = round($img->width() / $ratio);
            $height = round($img->height() / $ratio);

            $img->resize($width, $height);
            $img->save($image_path); 

            $python_path = public_path() . '/assets/exe/pdfdataminer-1106db23d6eb.json'; 
            putenv("GOOGLE_APPLICATION_CREDENTIALS=$python_path");

            $imageAnnotator = new ImageAnnotatorClient();
            $image=file_get_contents($image_path);

            $response = $imageAnnotator->textDetection($image);
            $labels = $response->getTextAnnotations();
            $description = $labels[0]->getDescription();

            $lines = explode("\n", $description);
            $part_number = "";
            foreach ($lines as $line) {
                if (strpos($line, "Part: ") !== false) {
                    $part_number = explode("Part: ", $line)[1];
                } 
                else if(strpos($line, "Part Number: ") !== false) {
                    $part_number = explode("Part Number: ", $line)[1];
                }
                else if(strpos($line, "Part # ") !== false) {
                    $part_number = explode("Part # ", $line)[1];
                }
            }

            $imageAnnotator->close();
            $part_pattern = "^[A-Za-z0-9!@#$%^&*()-_+{}\[\]:;\"'<>,.?/|\\-]+$";

            $result = array();
            if($part_number != "") {
                $result[] = $part_number;
            }
            else {
                foreach($labels as $label) {
                    if(isset($label->description)){
                        if(preg_match($part_pattern, $label->description, $matches)){
                            if(!in_array($matches[0], $result)) {
                                $result[] = $matches[0];
                            }
                        }    
                    }
                }
            }

            return $result;

        }
        else {
            return 0;
        }
    }
    
    public function updateQuantityBySku(Request $request) {

        // Delete Old Log files
        $logPath = storage_path('logs/api');
        $files = File::files($logPath);

        foreach ($files as $file) {
            if (time() - File::lastModified($file) > (7 * 24 * 60 * 60)) {
                File::delete($file);
                Log::info("Deleted log file: " . $file);
            }
        }

        try {
            $manufacturer = $request->manufacturer;
            $sku = $request->sku;
            $quantity = $request->quantity;
            $bin = $request->bin;

            $image_file_name = "";
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $image_file_name = str_replace(' ', '-', $file->getClientOriginalName());
                $image_file_name = time().$image_file_name;
                if($manufacturer == 'kioti') {
                    $image_path = public_path() . '/assets/images/products_home/' . $image_file_name;
                }
                else {
                    $image_path = $document_root . '/4mymahindra.com/public/assets/images/products_home/' . $image_file_name;
                }
                
                move_uploaded_file($file, $image_path);
                $thumbnail_img = Image::make($image_path)->resize(285, 285);
                if($manufacturer == 'kioti') {
                    $thumbnail_path = public_path().'/assets/images/thumbnails_home/'.$image_file_name;   
                }
                else {
                    $thumbnail_path = $document_root . '/4mymahindra.com/public/assets/images/thumbnails_home/' . $image_file_name;
                }
                $thumbnail_img->save($thumbnail_path);
            }

            $result = Inventory::where('part_number', $sku)->update(['bin' => $bin]);
            if($result) {
                $connection = null;
                if(stripos($manufacturer, 'kioti') !== false || stripos($manufacturer, 'mahindra') !== false) {
                    if (stripos($manufacturer, 'kioti') !== false) {
                        $connection = DB::connection('product');
                    }
                    else {
                        $connection = DB::connection('other');
                    }
        
                    $series = $connection->table('categories_home')
                        ->select('name')
                        ->where('parent', '!=', 0)
                        ->where('status', 1)
                        ->get();
        
                    foreach($series as $serie) {
                        $table = strtolower($serie->name);
                        $result = $connection->table($table);
                        $result = $result->where('sku', $sku);
                        if($image_file_name == '') {
                            $result = $result->update([
                                'stock' => $quantity
                            ]);
                        }
                        else {
                            $result = $result->update([
                                'stock' => $quantity,
                                'photo' => $image_file_name,
                                'thumbnail' => $image_file_name
                            ]);
                        }
                        
                        Log::channel('api_phone')->info("Updated Stock as {$quantity} For parts which sku is {$sku} and manufacturer is {$manufacturer} in {$serie->name} Series");
                    }
                }
                else {
                    Log::channel('api_phone')->warning("Coming api request for store sale of {$manufacturer} Manufacturer from phone");
                }
            }

            return true;
        } catch (\Exception $e) {
            // Log the error message
            \Log::error($e->getMessage());

            //Sending email
            $gs = Generalsetting::findOrFail(1);
            $to = 'usamtg@hotmail.com';
            $subject = 'Failed on API Request to update Quantity of Inventory From Mobile APP';
            $msg = "Manufacturer is ". $manufacturer. " and SKU of part is ". $sku .". <br>";
            $content = $msg . $e->getMessage();

            //Sending Email To Customer
            if ($gs->is_smtp == 1) {
                $data = [
                    'to' => $to,
                    'subject' => $subject,
                    'body' => $content,
                ];

                $mailer = new GeniusMailer();
                $mailer->sendCustomMail($data);
            } else {
                $headers = "From: " . $gs->from_name . "<" . $gs->from_email . ">";
                mail($to, $subject, $content, $headers);
            }

            Log::channel('api_phone')->error($content);

            // Return a JSON response with an error message
            return response()->json(['error' => 'An error occurred while updating the quantity.'], 500);
        }
    }
}
