<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Session;
use Image;
use App\Models\Generalsetting;
use App\Classes\GeniusMailer;

class PhoneController extends Controller
{
    public function loadPartNumFromImage(Request $reqest) {

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

            // get the current file size in bytes
            $currentSize = $image->filesize();

            // calculate the resize ratio
            $ratio = sqrt($currentSize / ($targetSize * 1024));

            
            $width = round($img->width() / $ratio);
            $height = round($img->height() / $ratio);

            $img->resize($width, $height);
            $img->save($image_path); 

            // $image_path = public_path() . '/assets/images/mobile/product1.png';
            $python_path = public_path() . '/assets/exe/'; 
            $command = "python " . $python_path . "findPartNumFromImage.py " . $image_path . " " . $python_path;
            $output = shell_exec($command);
            echo $output;
        }
    }
    
    public function updateQuantityBySku(Request $request) {
        try {
            $manufacturer = $request->manufacturer;
            $sku = $request->sku;
            $quantity = $request->quantity;

            $connection = null;
            if($manufacturer == 'kioti') {
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
                $result = $connection->table($table)
                ->where('sku', $sku)
                ->update([
                    'stock' => $quantity
                ]); 
            }

            return true;
        } catch (\Exception $e) {
            // Log the error message
            \Log::error($e->getMessage());

            //Sending email
            $gs = Generalsetting::findOrFail(1);
            $to = 'usamtg@hotmail.com';
            $subject = 'Failed on API Request to update Quantity of Inventory From Mobile APP';
            $msg = "Manufacturer is ". $manufacturer. " and SKU of part is ". $sku .".";

            //Sending Email To Customer
            if ($gs->is_smtp == 1) {
                $data = [
                    'to' => $to,
                    'subject' => $subject,
                    'body' => $msg,
                ];
                $mailer = new GeniusMailer();
                $mailer->sendCustomMail($data);
            } else {
                $headers = "From: " . $gs->from_name . "<" . $gs->from_email . ">";
                mail($to, $subject, $msg, $headers);
            }

            // Return a JSON response with an error message
            return response()->json(['error' => 'An error occurred while updating the quantity.'], 500);
        }
    }
}
