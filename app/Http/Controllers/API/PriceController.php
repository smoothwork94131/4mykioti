<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Session;
use Illuminate\Support\Facades\Log;
use App\Models\Generalsetting;
use App\Classes\GeniusMailer;

class PriceController extends Controller
{
    public function updatePriceBySku(Request $request) {
        $params = $request->orders;
        try {
            foreach($params as $item) {
                $manufacturer = $item["name"];
                $parts = $item["parts"];

                $connection = null;
                if($manufacturer == 'kioti' || $manufacturer == 'mahindra') {
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
                        foreach($parts as $part) {
                            $sku = $part["sku"];
                            $price = $part["price"];
                            $result = $connection->table($table)
                            ->where('sku', $sku)
                            ->update([
                                'price' => $price
                            ]);
                            
                            Log::channel('api_price')->info("Updated Price as {$price} For parts which sku is {$sku} and manufacturer is {$manufacturer} in {$serie->name} Series");
                        }
                    }
                }
                else {
                    Log::channel('api_price')->warning("Coming api request for store sale of {$manufacturer} Manufacturer");
                }
            }

            return true;
        } catch (\Exception $e) {
            // Log the error message
            \Log::error($e->getMessage());

            //Sending email
            $gs = Generalsetting::findOrFail(1);
            $to = 'usamtg@hotmail.com';
            $subject = 'Failed on API Request to update Price of Inventory';
            $msg = "Sale order received from the store server. Contents: <br>";
            $jsonMsg = json_encode($params, JSON_PRETTY_PRINT) . " <br>";
            $content = $msg . $jsonMsg . $e->getMessage();

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

            Log::channel('api_price')->error($content);

            // Return a JSON response with an error message
            return response()->json(['error' => 'An error occurred while updating the Price.'], 500);
        }
    }
}
