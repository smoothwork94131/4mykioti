<?php

namespace App\Http\Controllers\User;

use App\Classes\GeniusMailer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use App\Models\Subscription;
use App\Models\Generalsetting;
use App\Models\UserSubscription;
use App\Models\FavoriteSeller;
use App\Models\MyTractor;
use DB ;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $user = Auth::user();
        return view('user.dashboard', compact('user'));
    }

    public function profile()
    {
        $user = Auth::user();
        return view('user.profile', compact('user'));
    }

    public function profileupdate(Request $request)
    {
        //--- Validation Section

        $rules =
        [
            'photo' => 'mimes:jpeg,jpg,png,svg',
            'email' => 'unique:users,email,' . Auth::user()->id
        ];


        $validator = Validator::make(  $request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends
        $input = $request->all();
        $data = Auth::user();
        if ($file = $request->file('photo')) {
            $name = time() . $file->getClientOriginalName();
            // $file->move('public/assets/images/users/', $name);
            move_uploaded_file($file, public_path() . '/assets/images/users/' . $name);
            if ($data->photo != null) {
                if (file_exists(public_path() . '/assets/images/users/' . $data->photo)) {
                    unlink(public_path() . '/assets/images/users/' . $data->photo);
                }
            }
            $input['photo'] = $name;
        }
        $data->update($input);
        $msg = 'Successfully updated your profile';
        return response()->json($msg);
    }

    public function resetform()
    {
        return view('user.reset');
    }

    public function reset(Request $request)
    {
        $user = Auth::user();
        if ($request->cpass) {
            if (Hash::check($request->cpass, $user->password)) {
                if ($request->newpass == $request->renewpass) {
                    $input['password'] = Hash::make($request->newpass);
                } else {
                    return response()->json(array('errors' => [0 => 'Confirm password does not match.']));
                }
            } else {
                return response()->json(array('errors' => [0 => 'Current password Does not match.']));
            }
        }
        $user->update($input);
        $msg = 'Successfully change your passwprd';
        return response()->json($msg);
    }


    public function package()
    {
        $user = Auth::user();
        $subs = Subscription::all();
        $package = $user->subscribes()->where('status', 1)->orderBy('id', 'desc')->first();
        return view('user.package.index', compact('user', 'subs', 'package'));
    }


    public function vendorrequest($id)
    {
        $subs = Subscription::findOrFail($id);
        $gs = Generalsetting::findOrfail(1);
        $user = Auth::user();
        $package = $user->subscribes()->where('status', 1)->orderBy('id', 'desc')->first();
        if ($gs->reg_vendor != 1) {
            return redirect()->back();
        }
        return view('user.package.details', compact('user', 'subs', 'package'));
    }

    public function vendorrequestsub(Request $request)
    {
        $this->validate($request, [
            'shop_name' => 'unique:users',
        ], [
            'shop_name.unique' => 'This shop name has already been taken.'
        ]);
        $user = Auth::user();
        $package = $user->subscribes()->where('status', 1)->orderBy('id', 'desc')->first();
        $subs = Subscription::findOrFail($request->subs_id);
        $settings = Generalsetting::findOrFail(1);
        $today = Carbon::now()->format('Y-m-d');
        $input = $request->all();
        $user->is_vendor = 2;
        $user->date = date('Y-m-d', strtotime($today . ' + ' . $subs->days . ' days'));
        $user->mail_sent = 1;
        $user->update($input);
        $sub = new UserSubscription;
        $sub->user_id = $user->id;
        $sub->subscription_id = $subs->id;
        $sub->title = $subs->title;
        $sub->currency = $subs->currency;
        $sub->currency_code = $subs->currency_code;
        $sub->price = $subs->price;
        $sub->days = $subs->days;
        $sub->allowed_products = $subs->allowed_products;
        $sub->details = $subs->details;
        $sub->method = 'Free';
        $sub->status = 1;
        $sub->save();
        if ($settings->is_smtp == 1) {
            $data = [
                'to' => $user->email,
                'type' => "vendor_accept",
                'cname' => $user->name,
                'oamount' => "",
                'aname' => "",
                'aemail' => "",
                'onumber' => "",
            ];
            $mailer = new GeniusMailer();
            $mailer->sendAutoMail($data);
        } else {
            $headers = "From: " . $settings->from_name . "<" . $settings->from_email . ">";
            mail($user->email, 'Your Vendor Account Activated', 'Your Vendor Account Activated Successfully. Please Login to your account and build your own shop.', $headers);
        }

        return redirect()->route('user-dashboard')->with('success', 'Vendor Account Activated Successfully');

    }

    public function my_tractor() {
        $user_id = Auth::id();
        $tractors = DB::table("users-tractor")->where('user_id', $user_id)->orderBy('updatetime', 'desc')->get();
        // dd($tractors);
        $series = DB::table("categories_home")->select("name as series")->where("parent", ">", "0")->get()->toArray();
        $model = $this->getTractorModel($series[0]->series) ;

        return view('user.myTractor', compact('tractors', 'series', 'model'));
    }

    public function save_my_tractor(Request $request) {
        
        $rules = [
            'hours' => 'required|integer|min:1',
            'hour_per_week' => 'required|integer|min:1',
            'start_date' => 'required|date_format:m/d/Y',
            'start_date' => 'required|date_format:m/d/Y'
        ];

        $messages = [
            'hours.required' => 'This Hours is required.',
            'hour_per_week.required' => 'This Hours per Week is required.',
            'start_date.required' => 'This start_date is required.',
            'start_date.required' => 'This start_date is required.',
            'hours.digits' => 'This Hours must be Digit.',
            'hour_per_week.digits' => 'This Hours per Week must be Digit.',
            'hours.start_date' => 'This start_date must be Date.',
            'hours.start_date' => 'This start_date must be Date.',
        ];
        
        $request->validate($rules);

        $input = $request->all();
        
        $tractor_id = $request->tractor_id ;

        if($tractor_id) {
            $model = MyTractor::findOrFail($tractor_id);
            $model->update($input);
            return redirect()->route('user-my-tractor')->with('success', 'Data Saved Successfully.') ;
        } else {
            $input["user_id"] = Auth::user()->id;
            $input["updatetime"] = date("Y-m-d h:i:s");            
            $model = new MyTractor;
            $model->fill($input)->save();
            
            return redirect()->route('user-my-tractor')->with('success', 'Data Saved Successfully.') ;
        }
    }

    public function remove_my_tractor(Request $request, $id) {
        if(DB::table("users-tractor")->where('id', '=', $id)->delete()) {
            return redirect()->route('user-my-tractor')->with('success', 'Data Deleted Successfully.') ;
        }
        else {
            return redirect()->route('user-my-tractor')->with('error', 'Some Went Wrong during delete.') ;
        }
    }

    public function get_my_tractor_model(Request $request) {
        $series = $request->series ;
        $model = $this->getTractorModel($series) ;
        return response()->json($model) ;
    }

    public function getTractorModel($series) {
        $series = strtolower($series) ;
        $model =  DB::table("{$series}_categories")->select("model")->get()->groupBy("model")->toArray() ;
        return $model ;
    }
}
