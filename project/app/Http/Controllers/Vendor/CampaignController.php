<?php

namespace App\Http\Controllers\Vendor;

use Datatables;
use Carbon\Carbon;

use App\Models\Campaign;
use App\Models\CampaignOption;
use App\Models\Currency;
use App\Models\Generalsetting;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\File;

use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Stripe\Error\Card;

use Auth;
use DB;
use Validator;
use Session;
use Config;

class CampaignController extends Controller
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
        $datas = CampaignOption::orderBy('id', 'desc')->get();

        //--- Integrating This Collection Into Datatables
        return Datatables::of($datas)
            ->editColumn('number_texts', function (CampaignOption $data) {
                $number_texts = $data->number_texts;
                return $number_texts;
            })
            ->editColumn('price', function (CampaignOption $data) {
                $price = $data->price;
                return $price;
            })
            ->addColumn('action', function(CampaignOption $data) {
                return '<div class="action-list">
                    <a href="' . route('vendor-campaign-purchase',$data->id) . '">
                        <i class="fas fa-eye"></i>Purchase Now
                    </a>
                </div>';
            })
            ->rawColumns(['number_texts', 'price', 'action'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    //*** GET Request
    public function index()
    {
        return view('vendor.campaign.index');
    }

    //*** GET Request
    public function add()
    {
        return view('vendor.campaign.createone');
    }

    public function store(Request $request)
    {
        //--- Validation Section
        $rules = array(
            'number_texts' => 'required',
            'price' => 'required',
        );
        $customs = array(
            'number_texts.required' => 'Number of Text field is required.',
            'price.required' => 'Price field is required.',
        );

        $validator = Validator::make(Input::all(), $rules, $customs);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends

        //--- Logic Section
        $data = new CampaignOption();
        $input = $request->all();

        $data->fill($input)->save();
        //--- Logic Section Ends

        //--- Redirect Section        
        $msg = 'New Campaign Option Added Successfully.';
        return response()->json($msg);


        //--- Redirect Section Ends    
    }

    public function purchase(Request $request, $id) {
        $data = CampaignOption::findOrFail($id);

        $vendor_id = Auth::user()->id;

        $product = Product::where('user_id', $vendor_id)
            ->where('status', 1)
            ->get()
            ->groupBy('category_id');
        
        return view('vendor.campaign.purchase', compact('data', 'product'));
    }

    public function buy(Request $request) {
        $validator = Validator::make($request->all(), [
            'message' => 'required',
            'cardNumber' => 'required',
            'cardCVC' => 'required',
            'month' => 'required',
            'year' => 'required',
        ], [
            'message.required' => 'Please select a product.'
        ]);


        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }

        $vendor_id = Auth::user()->id;
        $price = $request->price;

        ////////////////////////////

        $input = Array();

        $input['message'] = $request->message;

        if($request->link == 1) {
            $store_name = User::find($vendor_id)->shop_name;
            $input['link'] = route('front.vendor', $store_name);
        }
        else {
            $product_id = $request->product_id;
            $product_slug = Product::find($product_id)->slug;
            $input['link'] = route('front.product', $product_slug);
        }

        $input['approved'] = 0;
        $input['option_id'] = $request->option_id;
        $input['vendor_id'] = $vendor_id;
        
        $campaign = new Campaign;
        $campaign->fill($input)->save();

        //--- Redirect Section
        $msg = 'You have purchased the Campaign Text Successfully.';
        Session::put('success', $msg);
        return response()->json(array(
            'flag' => 'ok',
            'route' => route('vendor-campaign-index')
        )); 
        
        /////////////////////////////

        // $stripe = Stripe::make(Config::get('services.stripe.secret'));

        // try {
        //     $token = $stripe->tokens()->create([
        //         'card' => [
        //             'number' => $request->cardNumber,
        //             'exp_month' => $request->month,
        //             'exp_year' => $request->year,
        //             'cvc' => $request->cardCVC,
        //         ],
        //     ]);
        //     if (!isset($token['id'])) {
        //         return response()->json(array('errors' => ['Token Problem With Your Token.']));
        //     }

        //     $charge = $stripe->charges()->create([
        //         'card' => $token['id'],
        //         'currency' => 'USD',
        //         'amount' => $price,
        //         'description' => $request->message,
        //     ]);

        //     if ($charge['status'] == 'succeeded') {

                
        //         $input = Array();

        //         $input['message'] = $request->message;

        //         if($request->link == 1) {
        //             $store_name = User::find($vendor_id)->shop_name;
        //             $input['link'] = route('front.vendor', $store_name);
        //         }
        //         else {
        //             $product_id = $request->product_id;
        //             $product_slug = Product::find($product_id)->slug;
        //             $input['link'] = route('front.product', $product_slug);
        //         }

        //         $input['approved'] = 0;
        //         $input['option_id'] = $request->option_id;
        //         $input['vendor_id'] = $vendor_id;
                
        //         $campaign = new Campaign;
        //         $campaign->fill($input)->save();

        //         $to = 'mr.david.hansem@outlook.com';
        //         $subject = 'Complaign Purchase';
        //         $msg = 'Mr'. Auth::user()->name." has purchased a campaign text, <a href=" . url('admin/message/campaign') . ">click here to check:</a>";
        //         //Sending Email To Customer
        //         if ($gs->is_smtp == 1) {
        //             $data = [
        //                 'to' => $to,
        //                 'subject' => $subject,
        //                 'body' => $msg,
        //             ];

        //             $mailer = new GeniusMailer();
        //             $mailer->sendCustomMail($data);
        //         } else {
        //             $headers = "From: " . $gs->from_name . "<" . $gs->from_email . ">";
        //             mail($to, $subject, $msg, $headers);
        //         }

        //         //--- Redirect Section
        //         $msg = 'You have purchased the Campaign Text Successfully.';
        //         Session::put('success', $msg);
        //         return response()->json(array(
        //             'flag' => 'ok',
        //             'route' => route('vendor-campaign-index')
        //         ));            
        //     } else {
        //         return response()->json(array('errors' => ['Token Problem With Your Token.']));
        //     }

        // } catch (Exception $e) {
        //     return response()->json(array('errors' => [$e->getMessage()]));
        // } catch (\Cartalyst\Stripe\Exception\CardErrorException $e) {
        //     return response()->json(array('errors' => [$e->getMessage()]));
        // } catch (\Cartalyst\Stripe\Exception\MissingParameterException $e) {
        //     return response()->json(array('errors' => [$e->getMessage()]));
        // }
    }
}
