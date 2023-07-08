<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Generalsetting;
use App\Classes\GeniusMailer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Auth;
use Session;
use Config;

class ShopifyController extends Controller
{
    public function shopifySale(Request $request) {
        $params = $request->line_items;
        $product_connection = DB::connection('product');
        $other_connection = DB::connection('other');

        $manufacturer = strtoupper(Config::get('session.domain_name'));
        $product_series = $product_connection->table('categories_home')
            ->select('name')
            ->where('parent', '!=', 0)
            ->where('status', 1)
            ->get();

        $other_series = $other_connection->table('categories_home')
            ->select('name')
            ->where('parent', '!=', 0)
            ->where('status', 1)
            ->get();

        try {
            $parts = array();
            foreach($params as $item) {
                $sku = $item["sku"];
                $name = $item["name"];
                $gram = $item["grams"];
                $price = $item["price"];
                $quantity = $item["quantity"];

                $temp = array(
                    'sku' => $sku,
                    'locationID' => 4,
                    'quantity' => $quantity
                );
                array_push($parts, $temp);

                foreach ($product_series as $serie) {
                    $table = strtolower($serie->name);
                    $result = $product_connection->table($table)
                        ->where('sku', $sku)
                        ->update([
                            'price' => $price,
                            'stock' => DB::raw("stock - $quantity"),
                            'weight_in_grams' => $gram
                        ]);

                    Log::channel('api_shopify')->info("Updated Quantity as {$quantity} For parts which sku is {$sku} and manufacturer is {$manufacturer} in {$serie->name} Series");
                }

                foreach ($other_series as $serie) {
                    $table = strtolower($serie->name);
                    $result = $other_connection->table($table)
                        ->where('sku', $sku)
                        ->update([
                            'price' => $price,
                            'stock' => DB::raw("stock - $quantity"),
                            'weight_in_grams' => $gram
                        ]);

                    Log::channel('api_shopify')->info("Updated Quantity as {$quantity} For parts which sku is {$sku} and manufacturer is {$manufacturer} in {$serie->name} Series");
                }
            }

            if(count($parts) > 0) {
                $response = Http::post(env('STORE_APP_IP') . "/infinitysync/api/login", [
                    'userName' => env('STORE_APP_USERNAME'),
                    'password' => env('STORE_APP_PASSWORD'),
                ]);
    
                if($response->ok()) {
                    $login_result = $response->json();
                    if(!empty($login_result->token)) {
                        $quantity_response = Http::post(env('STORE_APP_IP') . '/infinitysync/api/update_quantity', [
                            'parts' => $parts
                        ]);
    
                        if($quantity_response->ok()) {
                            $this->code_image();
                            if (Session::has('tempcart')) {
                                $oldCart = Session::get('tempcart');
                                $tempcart = new Cart($oldCart);
                                $order = Session::get('temporder');
                            } else {
                                $tempcart = '';
                                $order = '';
                            }
                        }
                    }
                }
                else {
                    
                }
            } else {
                $this->code_image();
                if (Session::has('tempcart')) {
                    $oldCart = Session::get('tempcart');
                    $tempcart = new Cart($oldCart);
                    $order = Session::get('temporder');
                } else {
                    $tempcart = '';
                    $order = '';
                }
            }

            return view('front.success', compact('tempcart', 'order'));
        } catch (\Exception $e) {
            // Log the error message
            Log::channel('api_shopify')->error($e->getMessage());
        }
    }
}
