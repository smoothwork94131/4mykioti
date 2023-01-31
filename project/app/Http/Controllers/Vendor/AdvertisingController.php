<?php

namespace App\Http\Controllers\Vendor;

use Datatables;
use App\Models\Subscription;
use App\Models\AdvertisingPlan;
use App\Models\AdvertisingProduct;
use App\Models\Category;
use App\Models\Product;
use App\Models\Currency;
use App\Models\Generalsetting;

use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Stripe\Error\Card;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Session;
use DB;
use Config;
use Validator;


class AdvertisingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        if (Session::has('language'))
        {
            $data = DB::table('languages')->find(Session::get('language'));
            $data_results = file_get_contents(public_path().'/assets/languages/'.$data->file);
            $this->vendor_language = json_decode($data_results);
        }
        else
        {
            $data = DB::table('languages')->where('is_default','=',1)->first();
            $data_results = file_get_contents(public_path().'/assets/languages/'.$data->file);
            $this->vendor_language = json_decode($data_results);

        }

        $stripe = Generalsetting::findOrFail(1);
        Config::set('services.stripe.key', $stripe->stripe_key);
        Config::set('services.stripe.secret', $stripe->stripe_secret);
        
    }

    //*** JSON Request
    public function datatables()
    {
        $datas = AdvertisingPlan::orderBy('id', 'asc')->get();
        //--- Integrating This Collection Into Datatables
        return Datatables::of($datas)
            ->editColumn('price', function (AdvertisingPlan $data) {
                $price = round($data->price, 2);
                return $price;
            })
            ->addColumn('action', function (AdvertisingPlan $data) {
                return '<div class="action-list"><a href="' . route('vendor-advertising-purchase', $data->id) . '" class="edit">Purchase</a></div>';
            })
            ->rawColumns(['action'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    public function product_datatables($id) {
        $user = Auth::user();

        $this->adplan = AdvertisingPlan::findOrFail($id);


        $datas = $user->products()->where('product_type','normal');

        if($this->adplan->id != 1) {
            $datas = $datas->where('category_id', $this->adplan->category_id);
        }

        $datas = $datas->orderBy('id','desc')->get();

        //--- Integrating This Collection Into Datatables
        return Datatables::of($datas)
                           ->editColumn('name', function(Product $data) {
                               $name = strlen(strip_tags($data->name)) > 50 ? substr(strip_tags($data->name),0,50).'...' : strip_tags($data->name);
                               $id = '<small id="'.$data->id.'">Product ID: <a href="'.route('front.product', $data->slug).'" target="_blank">'.sprintf("%'.08d",$data->id).'</a></small>';
                               return  $name.'<br>'.$id;
                           })
                           ->editColumn('price', function(Product $data) {
                               $sign = Currency::where('is_default','=',1)->first();
                               $price = round($data->price * $sign->value , 2);
                               $price = $sign->sign.$price ;
                               return  $price;
                           })
                           
                           ->addColumn('action', function(Product $data) {
                               return '<div class="action-list"><a href="javascript" class="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" value="'.$data->id.'"><i class="fas fa-eye"></i> '.$this->vendor_language->lang716.'</a></div>';
                           })
                           ->addColumn('selection', function(Product $data) {

                                $check_ad_products = $this->adplan->products->where('product_id', $data->id);
                                $is_ad_product = false;
                                foreach($check_ad_products as $prod) {
                                    if($prod->viewed_count < $this->adplan->view_count) {
                                        $is_ad_product = true;
                                    }
                                }
                                if($is_ad_product)
                                    return '<input class="form-control select-product" type="radio" name="product_id" value="'.$data->id.'" disabled>';
                                else
                                    return '<input class="form-control select-product" type="radio" name="product_id" value="'.$data->id.'">';

                           })
                           ->rawColumns(['name', 'status', 'action', 'selection'])
                           ->toJson(); //--- Re
    }

    public function product_current_datatables()
    {
        $user = Auth::user();
        $datas = AdvertisingProduct::where('vendor_id', $user->id)->orderBy('id', 'desc')->get();
        $ads = [];
        foreach($datas as $ad){
            $filter_products = [];

            foreach ($datas as $filter_prod) {
                if($filter_prod->adplan_id == $ad->adplan_id && $filter_prod->viewed_count < $filter_prod->adplan->view_count) {
                    array_push($filter_products, $filter_prod);
                }
            }

            $product_count = $ad->adplan->product_count;

            $filter_products = array_slice($filter_products, 0 ,$product_count);


            if(in_array($ad, $filter_products))
                array_push($ads, $ad);
        }

        //--- Integrating This Collection Into Datatables
        return Datatables::of($ads)
            ->addColumn('product', function (AdvertisingProduct $data) {
                $product = strlen(strip_tags($data->product->name)) > 50 ? substr(strip_tags($data->product->name),0,50).'...' : strip_tags($data->product->name);
                $id = '<small id="'.$data->product->id.'">Product ID: <a href="'.route('front.product', $data->product->slug).'" target="_blank">'.sprintf("%'.08d",$data->product->id).'</a></small>';
                return  $product.'<br>'.$id;
            })
            ->editColumn('viewed_count', function(AdvertisingProduct $data) {
                return $data->viewed_count.'/'.$data->adplan->view_count;
            })
            ->addColumn('price', function(AdvertisingProduct $data) {
                return $data->adplan->price;
            })
            ->addColumn('plans', function(AdvertisingProduct $data) {
                return "<span>".$data->adplan->name." </span>";
            })
            ->rawColumns(['product', 'plans'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    public function product_future_datatables()
    {
        $status = "Future";
        $user = Auth::user();
        $datas = AdvertisingProduct::where('vendor_id', $user->id)->orderBy('id', 'desc')->get();
        $ads = [];
        foreach($datas as $ad){
            $filter_products = [];

            foreach ($datas as $filter_prod) {
                if($filter_prod->adplan_id == $ad->adplan_id && $filter_prod->viewed_count < $filter_prod->adplan->view_count) {
                    array_push($filter_products, $filter_prod);
                }
            }

            $product_count = $ad->adplan->product_count;

            $filter_products = array_slice($filter_products, $product_count);


            if(in_array($ad, $filter_products))
                array_push($ads, $ad);
        }

        //--- Integrating This Collection Into Datatables
        return Datatables::of($ads)
            ->addColumn('product', function (AdvertisingProduct $data) {
                $product = strlen(strip_tags($data->product->name)) > 50 ? substr(strip_tags($data->product->name),0,50).'...' : strip_tags($data->product->name);
                $id = '<small id="'.$data->product->id.'">Product ID: <a href="'.route('front.product', $data->product->slug).'" target="_blank">'.sprintf("%'.08d",$data->product->id).'</a></small>';
                return  $product.'<br>'.$id;
            })
            ->editColumn('viewed_count', function(AdvertisingProduct $data) {
                return $data->viewed_count.'/'.$data->adplan->view_count;
            })
            ->addColumn('price', function(AdvertisingProduct $data) {

                return $data->adplan->price;
            })
            ->addColumn('plans', function(AdvertisingProduct $data) {
        

                return "<span>".$data->adplan->name." </span>";
            })
            ->rawColumns(['product', 'plans'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    public function product_past_datatables()
    {
        $status = "Past";
        $user = Auth::user();
        $datas = AdvertisingProduct::where('vendor_id', $user->id)->orderBy('id', 'desc')->get();
        $ads = [];
        foreach($datas as $ad){
            $filter_products = [];

            foreach ($datas as $filter_prod) {
                if($filter_prod->viewed_count >= $filter_prod->adplan->view_count) {
                    array_push($filter_products, $filter_prod);
                }
            }

            if(in_array($ad, $filter_products))
                array_push($ads, $ad);
        }

        //--- Integrating This Collection Into Datatables
        return Datatables::of($ads)
            ->addColumn('product', function (AdvertisingProduct $data) {
                $product = strlen(strip_tags($data->product->name)) > 50 ? substr(strip_tags($data->product->name),0,50).'...' : strip_tags($data->product->name);
                $id = '<small id="'.$data->product->id.'">Product ID: <a href="'.route('front.product', $data->product->slug).'" target="_blank">'.sprintf("%'.08d",$data->product->id).'</a></small>';
                return  $product.'<br>'.$id;
            })
            ->editColumn('viewed_count', function(AdvertisingProduct $data) {
                return $data->viewed_count.'/'.$data->adplan->view_count;
            })
            ->addColumn('price', function(AdvertisingProduct $data) {

                return $data->adplan->price;
            })
            ->addColumn('plans', function(AdvertisingProduct $data) {
                

                return "<span>".$data->adplan->name." </span>";
            })
            ->rawColumns(['product', 'plans'])
            ->toJson(); //--- Returning Json Data To Client Side
    }


    //*** GET Request
    public function index()
    {
        return view('vendor.advertising.index');
    }

    public function purchase($id)
    {
        $data = AdvertisingPlan::findOrFail($id);
        return view('vendor.advertising.purchase', compact('data'));
    }

    public function products($status) {
        if($status == "current")
            return view('vendor.advertising.currentproducts');
        if($status == "future")
            return view('vendor.advertising.futureproducts');
        if($status == "past")
            return view('vendor.advertising.pastproducts');
    }
    
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'product_id' => 'required',
            'cardNumber' => 'required',
            'cardCVC' => 'required',
            'month' => 'required',
            'year' => 'required',
        ], [
            'product_id.required' => 'Please select a product.'
        ]);


        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }

        $adPlan = AdvertisingPlan::findOrFail($request->adplan_id);


        // Check this product is active for ad

        $checkProducts = AdvertisingProduct::where('product_id', $request->product_id)->where('category_id', $adPlan->category_id)->where('viewed_count', '<', $adPlan->view_count)->get();

        if(count($checkProducts)){
            return response()->json(array('errors' => ['The product has already been submitted for the advertising plan.']));
        }

        // end



        $stripe = Stripe::make(Config::get('services.stripe.secret'));

        try {
            $token = $stripe->tokens()->create([
                'card' => [
                    'number' => $request->cardNumber,
                    'exp_month' => $request->month,
                    'exp_year' => $request->year,
                    'cvc' => $request->cardCVC,
                ],
            ]);
            if (!isset($token['id'])) {
                return response()->json(array('errors' => ['Token Problem With Your Token.']));
            }


            $charge = $stripe->charges()->create([
                'card' => $token['id'],
                'currency' => 'USD',
                'amount' => $adPlan->price,
                'description' => $adPlan->name,
            ]);

            if ($charge['status'] == 'succeeded') {

                $input = Array();

                $input['adplan_id'] = $adPlan->id;
                $input['product_id'] = $request->product_id;
                $input['category_id'] = $adPlan->category_id;
                $input['adplan_id'] = $adPlan->id;
                $input['vendor_id'] = Auth::user()->id;

                $adProducts = new AdvertisingProduct;
                $adProducts->fill($input)->save();


                //--- Redirect Section
                $msg = 'You have purchased the advertising plan Successfully.';
                Session::put('success', $msg);
                return response()->json(array(
                    'flag' => 'ok',
                    'route' => route('vendor-advertising-index')
                ));            
            } else {
                return response()->json(array('errors' => ['Token Problem With Your Token.']));
            }

        } catch (Exception $e) {
            return response()->json(array('errors' => [$e->getMessage()]));
        } catch (\Cartalyst\Stripe\Exception\CardErrorException $e) {
            return response()->json(array('errors' => [$e->getMessage()]));
        } catch (\Cartalyst\Stripe\Exception\MissingParameterException $e) {
            return response()->json(array('errors' => [$e->getMessage()]));
        }
    }
}
