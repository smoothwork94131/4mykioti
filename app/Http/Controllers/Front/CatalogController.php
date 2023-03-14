<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Childcategory;
use App\Models\Comment;
use App\Models\Currency;
use App\Models\Order;
use App\Models\Product;
use App\Models\AdvertisingProduct;
use App\Models\ProductClick;
use App\Models\ColorSetting;
use App\Models\Rating;
use App\Models\Reply;
use App\Models\Report;
use App\Models\Subcategory;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Session;
use Illuminate\Support\Facades\Input;
use Validator;
use Illuminate\Support\Facades\DB;

class CatalogController extends Controller
{

    // CATEGORIES SECTOPN

    public function categories()
    {
        return view('front.categories');
    }

    // -------------------------------- CATEGORY SECTION ----------------------------------------
    //
    // public function filteredProducts(Request $request, $slug=null, $slug1=null, $slug2=null)
    // {
    //
    //
    //   return $products;
    // }

    // -------------------------------- CATEGORY SECTION ----------------------------------------

    public function category(Request $request, $slug = null, $slug1 = null, $slug2 = null)
    {

        $minprice = $request->min;
        $maxprice = $request->max;
        $sort = $request->sort;
        $search = $request->search;
        $db = strtolower($slug);

        $prods = DB::table($db)
        ->when($minprice, function ($query, $minprice) {
            return $query->where('price', '>=', $minprice);
        })
        ->when($maxprice, function ($query, $maxprice) {
            return $query->where('price', '<=', $maxprice);
        })
        ->when($sort, function ($query, $sort) {
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
        });

        // if(!Auth::guard('web')->check()) {
        //     $prods = $prods->where('is_verified', 0);
        // } else {
        //     if(!Auth::user()->is_verified) {
        //         $prods = $prods->where('is_verified', 0);
        //     }
        // }
            
        if ($search) {
            $search1 = ' ' . $search;
            $prods = $prods->where('name', 'like', '%' . $search . '%')->orWhere('name', 'like', $search1 . '%');
        }


        $prods = $prods->where('status', 1);

        if ($slug2) {
            if ($slug2 == 'common') {
                $prods = $prods->where('best', 1)->where('subcategory_id', $slug1)->get();
            } else {
                $prods = $prods->where('category_id', $slug2)->where('subcategory_id', $slug1)->get();
            }
        } else {
            $prods = $prods->get();
        }
        

        $group = DB::table($db.'_categories')->where('group_id', $slug2)->first();

        $data['prods'] = $prods;
        $data['group'] = $group;

        $colorsetting_style1 = ColorSetting::where('type', 2)->where('style_id', 1)->first();
        $colorsetting_style2 = ColorSetting::where('type', 2)->where('style_id', 2)->first();

        $data['colorsetting_style1'] = $colorsetting_style1;
        $data['colorsetting_style2'] = $colorsetting_style2;
        $data['db'] = $db;

        if ($request->ajax()) {

            $data['ajax_check'] = 1;
            
            return view('includes.product.filtered-products', $data);
        }

        return view('front.category', $data);
    }

    public function getsubs(Request $request)
    {
        $category = Category::where('slug', $request->category)->firstOrFail();
        $subcategories = Subcategory::where('category_id', $category->id)->get();
        return $subcategories;
    }


    // -------------------------------- PRODUCT DETAILS SECTION ----------------------------------------

    public function report(Request $request)
    {

        //--- Validation Section
        $rules = [
            'note' => 'max:400',
        ];
        $customs = [
            'note.max' => 'Note Must Be Less Than 400 Characters.',
        ];
        $validator = Validator::make(Input::all(), $rules, $customs);
        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends

        //--- Logic Section
        $data = new Report;
        $input = $request->all();
        $data->fill($input)->save();
        //--- Logic Section Ends

        //--- Redirect Section
        $msg = 'New Data Added Successfully.';
        return response()->json($msg);
        //--- Redirect Section Ends

    }

    public function sub_category( $prod_name, $series, $model) {

        $sql = "select * from {$series} where `subcategory_id`='{$model}' and `name` = '{$prod_name}' ;" ;
        $productt =DB::select($sql);
        $productt = $productt[0] ;

        $colorsetting_style1 = ColorSetting::where('type', 1)->where('style_id', 1)->first();
        $colorsetting_style2 = ColorSetting::where('type', 1)->where('style_id', 2)->first();

        if (Session::has('currency')) {
            $curr = Currency::find(Session::get('currency'));
        } else {
            $curr = Currency::where('is_default', '=', 1)->first();
        }
        
        $vendors = DB::table($series)->where('subcategory_id', '=', $model)->where('name', '!=', $prod_name)->take(8)->get();
        // $vendors = Product::where('status', '=', 1)->where('user_id', '=', 0)->take(8)->get();
        // $vendors = array() ;
        $db=$series ;

        return view('front.product', compact('productt', 'curr', 'vendors', 'colorsetting_style1', 'colorsetting_style2', "db"));
    }
    public function product(Request $request, $slug)
    {
        
        $this->code_image();
        $productt = Product::where('slug', '=', $slug)->firstOrFail();
        $productt->views += 1;
        $productt->update();
        
        
        $adproducts = AdvertisingProduct::where('product_id', $productt->id)->get();

        foreach($adproducts as $adprod) {
            if($adprod->viewed_count < $adprod->adplan->view_count) {
                $adprod->viewed_count += 1;
                $adprod->update();
            }
        }
        
        if (Session::has('currency')) {
            $curr = Currency::find(Session::get('currency'));
        } else {
            $curr = Currency::where('is_default', '=', 1)->first();
        }

        // $product_click = new ProductClick;

        // if(Auth::user()) {
        //     $product_click->user_id = Auth::user()->id;
        // }
        // else {
        //     $product_click->user_id = 0;
        // }
        
        // $product_click->category_id = $productt->showCategoryID();
        // $product_click->product_id = $productt->id;
        // $product_click->search_term = '';
        // $product_click->action = 'view';
        // $product_click->date = Carbon::now()->format('Y-m-d');
        // $product_click->save();

        if ($productt->user_id != 0) {
            $vendors = Product::where('status', '=', 1)->where('user_id', '=', $productt->user_id)->take(8)->get();
        } else {
            $vendors = Product::where('status', '=', 1)->where('user_id', '=', 0)->take(8)->get();
        }

        $colorsetting_style1 = ColorSetting::where('type', 1)->where('style_id', 1)->first();
        $colorsetting_style2 = ColorSetting::where('type', 1)->where('style_id', 2)->first();

        $db="product" ;
        return view('front.product', compact('productt', 'curr', 'vendors', 'colorsetting_style1', 'colorsetting_style2'));
    }

    public function iproduct(Request $request, $slug, $slug1)
    {
        $this->code_image();

        $db = strtolower($slug);

        $productt = DB::table($db)->where('slug', '=', $slug1)->first();

        $adproducts = AdvertisingProduct::where('product_id', $productt->id)->get();

        foreach($adproducts as $adprod) {
            if($adprod->viewed_count < $adprod->adplan->view_count) {
                $adprod->viewed_count += 1;
                $adprod->update();
            }
        }


        if (Session::has('currency')) {
            $curr = Currency::find(Session::get('currency'));
        } else {
            $curr = Currency::where('is_default', '=', 1)->first();
        }

        // $product_click = new ProductClick;

        // if(Auth::user()) {
        //     $product_click->user_id = Auth::user()->id;
        // }
        // else {
        //     $product_click->user_id = 0;
        // }
        
        // $product_click->category_id = $productt->showCategoryID();
        // $product_click->product_id = $productt->id;
        // $product_click->search_term = '';
        // $product_click->action = 'view';
        // $product_click->date = Carbon::now()->format('Y-m-d');
        // $product_click->save();

        if ($productt->user_id != 0) {
            $vendors = Product::where('status', '=', 1)->where('user_id', '=', $productt->user_id)->take(8)->get();
        } else {
            $vendors = Product::where('status', '=', 1)->where('user_id', '=', 0)->take(8)->get();
        }

        $colorsetting_style1 = ColorSetting::where('type', 1)->where('style_id', 1)->first();
        $colorsetting_style2 = ColorSetting::where('type', 1)->where('style_id', 2)->first();

        return view('front.product', compact('db','productt', 'curr', 'vendors', 'colorsetting_style1', 'colorsetting_style2'));
    }
    // Capcha Code Image
    private function code_image()
    {
        $actual_path = base_path();
        
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

    public function quick($id)
    {
        $product = Product::findOrFail($id);
        if (Session::has('currency')) {
            $curr = Currency::find(Session::get('currency'));
        } else {
            $curr = Currency::where('is_default', '=', 1)->first();
        }

        // $product_click = new ProductClick;

        // if(Auth::user()) {
        //     $product_click->user_id = Auth::user()->id;
        // }
        // else {
        //     $product_click->user_id = 0;
        // }
        
        // $product_click->category_id = $product->showCategoryID();
        // $product_click->product_id = $product->id;
        // $product_click->search_term = '';
        // $product_click->action = 'quick_view';
        // $product_click->date = Carbon::now()->format('Y-m-d');
        // $product_click->save();

        return view('load.quick', compact('product', 'curr'));

    }

    public function iquick($db, $id)
    {


        $product = DB::table($db)->find($id);
        if (Session::has('currency')) {
            $curr = Currency::find(Session::get('currency'));
        } else {
            $curr = Currency::where('is_default', '=', 1)->first();
        }

        // $product_click = new ProductClick;

        // if(Auth::user()) {
        //     $product_click->user_id = Auth::user()->id;
        // }
        // else {
        //     $product_click->user_id = 0;
        // }
        
        // $product_click->category_id = $product->showCategoryID();
        // $product_click->product_id = $product->id;
        // $product_click->search_term = '';
        // $product_click->action = 'quick_view';
        // $product_click->date = Carbon::now()->format('Y-m-d');
        // $product_click->save();

        return view('load.quick', compact('product', 'curr', 'db'));

    }

    public function affProductRedirect($slug)
    {
        $product = Product::where('slug', '=', $slug)->first();
//        $product->views+=1;
//        $product->update();


        return redirect($product->affiliate_link);

    }
    // -------------------------------- PRODUCT DETAILS SECTION ENDS----------------------------------------


    // -------------------------------- PRODUCT COMMENT SECTION ----------------------------------------

    public function comment(Request $request)
    {
        $comment = new Comment;
        $input = $request->all();
        $comment->fill($input)->save();
        $comments = Comment::where('product_id', '=', $request->product_id)->get()->count();
        $data[0] = $comment->user->photo ? url('assets/images/users/' . $comment->user->photo) : url('assets/images/noimage.png');
        $data[1] = $comment->user->name;
        $data[2] = $comment->created_at->diffForHumans();
        $data[3] = $comment->text;
        $data[4] = $comments;
        $data[5] = route('product.comment.delete', $comment->id);
        $data[6] = route('product.comment.edit', $comment->id);
        $data[7] = route('product.reply', $comment->id);
        $data[8] = $comment->user->id;
        return response()->json($data);
    }

    public function commentedit(Request $request, $id)
    {
        $comment = Comment::findOrFail($id);
        $comment->text = $request->text;
        $comment->update();
        return response()->json($comment->text);
    }

    public function commentdelete($id)
    {
        $comment = Comment::findOrFail($id);
        if ($comment->replies->count() > 0) {
            foreach ($comment->replies as $reply) {
                $reply->delete();
            }
        }
        $comment->delete();
    }

    // -------------------------------- PRODUCT COMMENT SECTION ENDS ----------------------------------------

    // -------------------------------- PRODUCT REPLY SECTION ----------------------------------------

    public function reply(Request $request, $id)
    {
        $reply = new Reply;
        $input = $request->all();
        $input['comment_id'] = $id;
        $reply->fill($input)->save();
        $data[0] = $reply->user->photo ? url('assets/images/users/' . $reply->user->photo) : url('assets/images/noimage.png');
        $data[1] = $reply->user->name;
        $data[2] = $reply->created_at->diffForHumans();
        $data[3] = $reply->text;
        $data[4] = route('product.reply.delete', $reply->id);
        $data[5] = route('product.reply.edit', $reply->id);
        return response()->json($data);
    }

    public function replyedit(Request $request, $id)
    {
        $reply = Reply::findOrFail($id);
        $reply->text = $request->text;
        $reply->update();
        return response()->json($reply->text);
    }

    public function replydelete($id)
    {
        $reply = Reply::findOrFail($id);
        $reply->delete();
    }

    // -------------------------------- PRODUCT REPLY SECTION ENDS----------------------------------------


    // ------------------ Rating SECTION --------------------

    public function reviewsubmit(Request $request)
    {
        $ck = 0;
        $orders = Order::where('user_id', '=', $request->user_id)->where('status', '=', 'completed')->get();

        foreach ($orders as $order) {
            $cart = unserialize(bzdecompress(utf8_decode($order->cart)));
            foreach ($cart->items as $product) {
                if ($request->product_id == $product['item']['id']) {
                    $ck = 1;
                    break;
                }
            }
        }
        if ($ck == 1) {
            $user = Auth::guard('web')->user();
            $prev = Rating::where('product_id', '=', $request->product_id)->where('user_id', '=', $user->id)->get();
            if (count($prev) > 0) {
                return response()->json(array('errors' => [0 => 'You Have Reviewed Already.']));
            }
            $Rating = new Rating;
            $Rating->fill($request->all());
            $Rating['review_date'] = date('Y-m-d H:i:s');
            $Rating->save();
            $data[0] = 'Your Rating Submitted Successfully.';
            $data[1] = Rating::rating($request->product_id);
            return response()->json($data);
        } else {
            return response()->json(array('errors' => [0 => 'Buy This Product First']));
        }
    }


    public function reviews($id)
    {
        $productt = Product::find($id);
        return view('load.reviews', compact('productt', 'id'));

    }

    // ------------------ Rating SECTION ENDS --------------------
}
