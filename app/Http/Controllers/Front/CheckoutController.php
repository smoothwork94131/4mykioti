<?php
namespace App\Http\Controllers\Front;

use App\Classes\GeniusMailer;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Coupon;
use App\Models\Currency;
use App\Models\Generalsetting;
use App\Models\Notification;
use App\Models\Order;
use App\Models\OrderTrack;
use App\Models\Pagesetting;
use App\Models\PaymentGateway;
use App\Models\Pickup;
use App\Models\Product;
use App\Models\User;
use App\Models\TempCart;
use App\Models\UserNotification;
use App\Models\VendorOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Auth;
use DB;
use Config;
use Session;
use Validator;
use PHPShopify\ShopifySDK;

class CheckoutController extends Controller
{
    public function index()
    {
        $this->code_image();

        if (!Session::has('cart')) {
            return redirect()->route('front.cart')->with('success', "You don't have any products to checkout.");
        }

        $gs = Generalsetting::findOrFail(1);
        if (Session::has('currency')) {
            $curr = Currency::find(Session::get('currency'));
        } else {
            $curr = Currency::where('is_default', '=', 1)->first();
        }

        $pickups = Pickup::all();
        $oldCart = Session::get('cart');
        $cart = new Cart($oldCart);
        $products = $cart->items;
        // Shipping Method
        $shipping_data = DB::table('shippings')->where('user_id', '=', 0)->get();
        $package_data = DB::table('packages')->where('user_id', '=', 0)->get();

        $total = $cart->totalPrice;
        $coupon = Session::has('coupon') ? Session::get('coupon') : 0;
        if ($gs->tax != 0) {
            $tax = ($total / 100) * $gs->tax;
            $total = $total + $tax;
        }
        if (!Session::has('coupon_total')) {
            $total = $total - $coupon;
            $total = $total + 0;
        } else {
            $total = Session::get('coupon_total');
            $total = $total + round(0 * $curr->value, 2);
        }
        return view('front.checkout', ['products' => $products, 'totalPrice' => $total, 'pickups' => $pickups, 'totalQty' => $cart->totalQty, 'shipping_cost' => 0, 'curr' => $curr, 'shipping_data' => $shipping_data, 'package_data' => $package_data]);
    }

    private function createProductOnShopify($prod) {
        $shop_url = env('SHOPIFY_SHOP_URL', '');
        $storefrontAccessToken = env('SHOPIFY_FRONTSTORE_ACCESS_TOKEN', '');
        $storeAccessToken = env('SHOPIFY_ACCESS_TOKEN', '');
        $shopify_api_version = env('SHOPIFY_API_VERSION', '2023-01');
        
        $adminConfig = array(
            'ShopUrl' => $shop_url,
            'AccessToken' => $storeAccessToken,
            'FrontAccessToken' => $storefrontAccessToken,
            'ApiVersion' => $shopify_api_version
        );
        
        $adminshopify = ShopifySDK::config($adminConfig);
        
        $input = '{
            title: "'.$prod['item']->name.'", 
            descriptionHtml: "'.$prod['item']->name.'", 
            vendor: "Tractor Brothers",
            variants: [
                {
                    sku: "'.$prod['item']->sku.'",
                    weight: '.$prod['item']->file??$prod['item']->weight_in_grams.'
                    price: '.$prod['item']->price.'
                }
            ]
        }';

        $checkoutsh = $adminshopify->GraphQL->post(<<<QUERY
        mutation {
            productCreate(input: {$input}) {
                product {
                    id
                }
            }
        }
        QUERY,);
    }

    public function store(Request $request) {
        if ($request->pass_check) {
            $users = User::where('email', '=', $request->personal_email)->get();
            if (count($users) == 0) {
                if ($request->personal_pass == $request->personal_confirm) {
                    $user = new User;
                    $user->name = $request->personal_name;
                    $user->email = $request->personal_email;
                    $user->password = bcrypt($request->personal_pass);
                    $user->phone = $request->phone;
                    $user->address = $request->address;
                    $user->city = $request->city;
                    $user->country = $request->customer_country;
                    $user->zip = $request->zip;
                    
                    $token = md5(time() . $request->personal_name . $request->personal_email);
                    $user->verification_link = $token;
                    $user->affilate_code = md5($request->name . $request->email);
                    $user->email_verified = 'Yes';
                    $user->save();
                    Auth::guard('web')->login($user);
                } else {
                    return redirect()->back()->with('unsuccess', "Password Doesn't Match.");
                }
            } else {
                return redirect()->back()->with('unsuccess', "This Email Already Exists.");
            }
        }

        if (!Session::has('cart')) {
            return redirect()->route('front.cart')->with('success', "You don't have any products to checkout.");
        }

        if (Session::has('currency')) {
            $curr = Currency::find(Session::get('currency'));
        } else {
            $curr = Currency::where('is_default', '=', 1)->first();
        }

        $gs = Generalsetting::findOrFail(1);
        $oldCart = Session::get('cart');
        $cart = new Cart($oldCart);
        
        $shop_url = env('SHOPIFY_SHOP_URL', '');
        $storefrontAccessToken = env('SHOPIFY_FRONTSTORE_ACCESS_TOKEN', '');
        $storeAccessToken = env('SHOPIFY_ACCESS_TOKEN', '');
        $shopify_api_version = env('SHOPIFY_API_VERSION', '2023-01');
        
        $config = array(
            'ShopUrl' => $shop_url,
            'AccessToken' => $storeAccessToken,
            'FrontAccessToken' => $storefrontAccessToken,
            'ApiVersion' => $shopify_api_version
        );

        $shopify = ShopifySDK::config($config);
        
        $input = '{
            allowPartialAddresses: true,
            buyerIdentity: {
              countryCode: US
            },
            customAttributes: {
                key: "email",
                value: "' . $request->personal_email . '"
            },
            email: "'.$request->personal_email.'",
            note: "'.$request->order_notes.'",
            shippingAddress: {
                address1: "'.($request->shipping_address ?? $request->address).'",
                address2: "",
                city: "'.($request->shipping_city ?? $request->city).'",
                company: "",
                country: "'.($request->shipping_country ?? $request->customer_country).'",
                firstName: "'.($request->shipping_name ?? $request->name).'",
                lastName: "",
                phone: "'.($request->shipping_phone ?? $request->phone).'",
                province: "PA",
                zip: "'.($request->shipping_zip ?? $request->zip).'"
              }
            lineItems: [';
        
        try {
            $i = 0;
            $count = count($cart->items);
            $needToTemp = false;
            foreach ($cart->items as $key => $prod) {
                $i++;
                
                $query = '{
                    products(first: 1, query:"(title:'.$prod['item']->name.') AND (variants.sku:'.$prod['item']->sku.')",) {
                        edges {
                            node {
                                variants(first: 5) {
                                    edges {
                                        node {
                                            id
                                        }
                                    }
                                }
                            }
                        }
                    }
                }';
                
                $productFromShopify = $shopify->GraphQL->post($query);

                if ($productFromShopify['data']['products']['edges']) {
                    $update_input = '{
                        id: "'. $productFromShopify['data']['products']['edges'][0]['node']['variants']['edges'][0]['node']['id'] .'",
                        price: '. $prod['item']->price .'
                    }';
    
                    $update_query = <<<QUERY
                    mutation {
                        productVariantUpdate( input: {$update_input}) {
                            productVariant {
                                id
                                title
                                inventoryPolicy
                                inventoryQuantity
                                price
                                compareAtPrice
                            }
                            userErrors {
                                field
                                message
                            }
                        }
                    }
                    QUERY;
    
                    $graphql_url = "https://" . $shop_url . "/admin/api/". $shopify_api_version ."/graphql.json";
                    
                    $post_data = array();
                    $post_data['query'] = $update_query;
                    $curl_init = curl_init();
                    curl_setopt($curl_init, CURLOPT_URL, $graphql_url);
                    curl_setopt($curl_init, CURLOPT_HTTPHEADER, array(
                        'Content-Type: application/json', 
                        'Accept: application/json', 
                        'X-Shopify-Storefront-Access-Token: '. $storefrontAccessToken, 
                        'X-Shopify-Access-Token: '. $storeAccessToken
                    ));
                    curl_setopt($curl_init, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($curl_init, CURLOPT_CUSTOMREQUEST, "POST");
                    curl_setopt($curl_init, CURLOPT_POSTFIELDS, json_encode($post_data));
                    curl_setopt($curl_init, CURLOPT_SSL_VERIFYPEER, false);
                    $response = curl_exec ($curl_init);
                    $product_info = json_decode($response, true);
                    $curl_info = curl_getinfo($curl_init, CURLINFO_HTTP_CODE);
                    curl_close ($curl_init);
    
                    if($i == $count) {
                        $input .= "{
                            quantity: {$prod['qty']},
                            variantId: \"{$productFromShopify['data']['products']['edges'][0]['node']['variants']['edges'][0]['node']['id']}\"
                        }";
                    }
                    else {
                        $input .= "{
                            quantity: {$prod['qty']},
                            variantId: \"{$productFromShopify['data']['products']['edges'][0]['node']['variants']['edges'][0]['node']['id']}\"
                        },";
                    }
                } else {
                    $this->createProductOnShopify($prod);
                }

                if(!empty($prod['item']->weight_in_grams)) {
                    $cart->removeItem($key);
                }
                else {
                    $needToTemp = true;
                }
            }

            $input.=']}';
            
            if ($needToTemp) {
                $content = [
                    'totalQty' => $cart->totalQty,
                    'totalPrice' => $cart->totalPrice,
                    'items' => $cart->items
                ];
                $tempcart = new TempCart;
                $tempcart->content = json_encode($content);
                $tempcart->user_email = $request->email;
                $tempcart->save();
                $to = 'usamtg@hotmail.com';
                $subject = 'No Weight Alert';
                $msg = "A customer has tried to buy no weight products, <a href=" . url('admin/tempcart/edit')."/". $tempcart->id . "> click here to review:</a>";
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
            }

            $query = <<<QUERY
            mutation {
                checkoutCreate(input: {$input}) {
                    checkout {
                    id
                    webUrl
                    }
                    checkoutUserErrors {
                    field
                    message
                    }
                }
            }
            QUERY;

            $graphql_url = "https://" . $shop_url . "/api/". $shopify_api_version ."/graphql.json";
            $post_data = array();
            $post_data['query'] = $query;
            $curl_init = curl_init();
            curl_setopt($curl_init, CURLOPT_URL, $graphql_url);
            curl_setopt($curl_init, CURLOPT_HTTPHEADER, array(
                'Content-Type: application/json', 
                'Accept: application/json', 
                'X-Shopify-Storefront-Access-Token: '. $storefrontAccessToken, 
                'X-Shopify-Access-Token: '. $storeAccessToken
            ));
            curl_setopt($curl_init, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl_init, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($curl_init, CURLOPT_POSTFIELDS, json_encode($post_data));
            curl_setopt($curl_init, CURLOPT_SSL_VERIFYPEER, false);
            $response = curl_exec ($curl_init);
            $checkoutsh = json_decode($response, true);
            $curl_info = curl_getinfo($curl_init, CURLINFO_HTTP_CODE);
            curl_close ($curl_init);

            // $checkoutsh = $shopify->GraphQL->post();

            if ($checkoutsh['data']['checkoutCreate']['checkout']['webUrl']) {
                Session::forget('cart');
                Session::forget('already');
                Session::forget('coupon');
                Session::forget('coupon_total');
                Session::forget('coupon_total1');
                Session::forget('coupon_percentage');
                return redirect($checkoutsh['data']['checkoutCreate']['checkout']['webUrl']);
            } else {
                Session::forget('cart');
                Session::forget('already');
                Session::forget('coupon');
                Session::forget('coupon_total');
                Session::forget('coupon_total1');
                Session::forget('coupon_percentage');
                return redirect()->route('front.index')->with('success', "Something went wrong. Try again later!");
            }
        } catch (\Exception $e) {
            echo $e->getMessage(); exit;
            Session::forget('cart');
            Session::forget('already');
            Session::forget('coupon');
            Session::forget('coupon_total');
            Session::forget('coupon_total1');
            Session::forget('coupon_percentage');
            return redirect()->route('front.index')->with('success', "Something went wrong. Try again later!");
        }
    }

    public function completed(Request $request) {
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
    // Capcha Code Image
    private function code_image()
    {
        $actual_path = str_replace('project', '', base_path());
        $image = imagecreatetruecolor(200, 50);
        $background_color = imagecolorallocate($image, 255, 255, 255);
        imagefilledrectangle($image, 0, 0, 200, 50, $background_color);
        $pixel = imagecolorallocate($image, 0, 0, 255);
        for ($i = 0; $i < 500; $i++) {
            imagesetpixel($image, rand() % 200, rand() % 50, $pixel);
        }

        $font = $actual_path . '/public/assets/front/fonts/NotoSans-Bold.ttf';
        $allowed_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        $length = strlen($allowed_letters);
        $letter = $allowed_letters[rand(0, $length - 1)];
        $word = '';
        //$text_color = imagecolorallocate($image, 8, 186, 239);
        $text_color = imagecolorallocate($image, 0, 0, 0);
        $cap_length = 6;// No. of character in image
        for ($i = 0; $i < $cap_length; $i++) {
            $letter = $allowed_letters[rand(0, $length - 1)];
            imagettftext($image, 25, 1, 35 + ($i * 25), 35, $text_color, $font, $letter);
            $word .= $letter;
        }
        $pixels = imagecolorallocate($image, 8, 186, 239);
        for ($i = 0; $i < 500; $i++) {
            imagesetpixel($image, rand() % 200, rand() % 50, $pixels);
        }
        session(['captcha_string' => $word]);
        imagepng($image, $actual_path . "/public/assets/images/capcha_code.png");
    }
}