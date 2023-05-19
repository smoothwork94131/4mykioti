<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Session;

class PriceController extends Controller
{
    public function updatePriceBySku(Request $request) {
        $params = $request->orders;
        try {
            foreach($params as $item) {
                $manufacturer = $item["name"];
                $parts = $item["parts"];

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
        
                    foreach($parts as $part) {
                        $sku = $part["sku"];
                        $price = $part["price"];
                        $result = $connection->table($table)
                        ->where('sku', $sku)
                        ->update([
                            'price' => $price
                        ]);                   
                    }
                }
            }

            return true;
        } catch (\Exception $e) {
            // Log the error message
            \Log::error($e->getMessage());

            //Sending email

            $json = json_encode($params);

            $to = 'usamtg@hotmail.com';
            $subject = 'Failed on API Request to update Price of Inventory';
            $msg = "Something wrong happened during updating the Price of Inventory. Please check below Json. <br>" . $json;

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
            return response()->json(['error' => 'An error occurred while updating the Price.'], 500);
        }
    }
}
