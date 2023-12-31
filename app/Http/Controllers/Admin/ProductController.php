<?php

namespace App\Http\Controllers\Admin;

use App\Models\Childcategory;
use App\Models\Subcategory;
use Datatables;
use Carbon\Carbon;
use App\Models\Product;
use App\Models\Category;
use App\Models\Currency;
use App\Models\Gallery;
use App\Models\Attribute;
use App\Models\AttributeOption;
use App\Models\StoreLocations;
use App\Models\Generalsetting;
use App\Models\ProductPolicy;
use App\Models\Inventory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
 
use Validator;
use Image;
use DB;
use Session;

use Mtownsend\RemoveBg\RemoveBg;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    //*** GET Request
    public function index()
    {
        return view('admin.product.index');
    }

    //*** JSON Request
    public function datatables()
    {
        $datas = Product::where('manufacturer_id', Config::get('app.manufacturer_id'))->orderBy('id', 'desc')->get();

        //--- Integrating This Collection Into Datatables
        return Datatables::of($datas)
            ->editColumn('name', function (Product $data) {
                $name = mb_strlen(strip_tags($data->name), 'utf-8') > 50 ? mb_substr(strip_tags($data->name), 0, 50, 'utf-8') . '...' : strip_tags($data->name);
                $id = '<small>ID: <a href="' . route('front.product', $data->slug) . '" target="_blank">' . sprintf("%'.08d", $data->id) . '</a></small>';
                $id2 = $data->user_id != 0 ? (count($data->user->products) > 0 ? '<small class="ml-2"> VENDOR: <a href="' . route('admin-vendor-show', $data->user_id) . '" target="_blank">' . $data->user->shop_name . '</a></small>' : '') : '';
                $id3 = $data->type == 'Physical' ? '<small class="ml-2"> SKU: <a href="' . route('front.product', $data->slug) . '" target="_blank">' . $data->sku . '</a>' : '';
                return $name . '<br>' . $id . $id3 . $id2;
            })
            ->editColumn('price', function (Product $data) {
                $sign = Currency::where('is_default', '=', 1)->first();
                $price = round($data->price * $sign->value, 2);
                $price = $sign->sign . $price;
                return $price;
            })
            ->editColumn('stock', function (Product $data) {
                $stck = (string)$data->stock;
                if ($stck == "0")
                    return "Out Of Stock";
                elseif ($stck == null)
                    return "Unlimited";
                else
                    return $data->stock;
            })
            ->addColumn('status', function (Product $data) {
                $class = $data->status == 1 ? 'drop-success' : 'drop-danger';
                $s = $data->status == 1 ? 'selected' : '';
                $ns = $data->status == 0 ? 'selected' : '';
                return '<div class="action-list"><select class="process select droplinks ' . $class . '"><option data-val="1" value="' . route('admin-prod-status', ['id1' => $data->id, 'id2' => 1]) . '" ' . $s . '>Activated</option><<option data-val="0" value="' . route('admin-prod-status', ['id1' => $data->id, 'id2' => 0]) . '" ' . $ns . '>Deactivated</option>/select></div>';
            })
            ->addColumn('action', function (Product $data) {
                return '<div class="godropdown">
                    <button class="go-dropdown-toggle"> Actions<i class="fas fa-chevron-down"></i></button>
                    <div class="action-list">
                        <a href="' . route('admin-prod-edit', $data->id) . '"> <i class="fas fa-edit"></i> Edit</a>
                        <a href="javascript" class="set-gallery" data-toggle="modal" data-target="#setgallery">
                            <input type="hidden" value="' . $data->id . '">
                            <i class="fas fa-eye"></i> View Gallery
                        </a>'. 
                        '<a href="javascript:;" data-href="' . route('admin-prod-delete', $data->id) . '" data-toggle="modal" data-target="#confirm-delete" class="delete"><i class="fas fa-trash-alt"></i> Delete</a>
                    </div>
                </div>';
            })
            ->rawColumns(['name', 'status', 'action'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    //*** GET Request
    public function create()
    {
        $cats = Category::where('manufacturer', Config::get('app.manufacturer_id'))->get();
        $locs = StoreLocations::all();
        $sign = Currency::where('is_default', '=', 1)->first();
        return view('admin.product.create', compact('cats', 'sign', 'locs'));
    }

    public function existing() {
        $homecategories = Category::where('manufacturer', Config::get('app.manufacturer_id'))->orderBy('name', 'asc')->get();
        return view('admin.product.existing', array('homecategories' => $homecategories));
    }

    public function existing_category(Request $request) {
        $parent = $request->parent;
        $param = $request->param;

        $data = array();

        if ($parent == "#") {
            $categories = DB::connection('product')
            ->table('categories_home')
            ->select('id', 'name')
            ->where('parent', 0)
            ->where('status', 1)
            ->orderBy('name', 'asc')
            ->get();

            foreach($categories as $item) {
                $data[] = array(
                    "id" => $item->id,
                    "param" => "category",
                    "text" => $item->name,
                    "children" => true
                );
            }
        } else {
            if($param == "category") {
                $series = DB::connection('product')
                ->table('categories_home')
                ->select('id', 'name')
                ->where('parent', $parent)
                ->where('status', 1)
                ->orderBy('name', 'asc')
                ->get();

                foreach($series as $item) {
                    $data[] = array(
                        "id" => strtolower($item->name),
                        "param" => "series",
                        "text" => $item->name,
                        "children" => true
                    );
                }
            }
            else if($param == "series") {
                $model = DB::connection('product')
                ->table($parent.'_categories')
                ->select('model as model_name')
                ->orderBy('model', 'asc')
                ->get()
                ->groupBy('model_name');

                foreach($model as $key => $item) {
                    $data[] = array(
                        "id" => $parent.'_'.$key,
                        "param" => "model",
                        "text" => $key,
                        "children" => true
                    );
                }
            }
            else if($param == "model") {
                $series_model = explode('_', $parent);
                $series = $series_model[0];
                $model = $series_model[1];

                $section = DB::connection('product')
                ->table($series . '_categories')
                ->select('section_name')
                ->orderBy('section_name', 'asc')
                ->where('model', $model)
                ->get()
                ->groupBy('section_name');

                foreach($section as $key => $item) {
                    $data[] = array(
                        "id" => $parent.'_'.$key,
                        "param" => "section",
                        "text" => $key,
                        "children" => true
                    );
                }
            }
            else if($param == "section") {
                $series_model_section = explode('_', $parent);
                $series = $series_model_section[0];
                $model = $series_model_section[1];
                $section = $series_model_section[2];

                $group = DB::connection('product')
                ->table($series . '_categories')
                ->select('group_Id', 'group_name', 'image')
                ->where('model', $model)
                ->where('section_name', $section)
                ->orderBy('group_Id', 'asc')
                ->get();

                foreach($group as $item) {
                    $image = $item->image? public_path() . '/assets/images/group' . $item->image:public_path() . '/assets/images/group' . $item->group_Id . '.png';

                    $data[] = array(
                        "id" => $parent.'_'.$item->group_Id,
                        "param" => "group",
                        "text" => $item->group_name,
                        "children" => false
                    );
                }
            }
            else if($param == "group") {
                $series_model_section_group = explode('_', $parent);
                $series = $series_model_section_group[0];
                $model = $series_model_section_group[1];
                $section = $series_model_section_group[2];
                $group = $series_model_section_group[3];

                $data = DB::connection('product')
                ->table($series)
                ->select('*')
                ->where('subcategory_id', $model)
                ->where('category_id', $group)
                ->orderBy('name', 'asc')
                ->get()
                ->toArray();
            }
        }

        header('Content-type: text/json');
        header('Content-type: application/json');
        header('Access-Control-Allow-Origin: *');
        echo json_encode($data);
    }

    public function attach(Request $request) {
        $category_id = $request->category_id;
        $data = $request->data;
        $data["category_id"] = $category_id;
        $data["subcategory_id"] = "home";
        $data["manufacturer_id"] = Config::get('app.manufacturer_id');
        unset($data["description"]);

        $model = new Product;
        
        if($model->fill($data)->save()) {

            if ($data["photo"]!="" && file_exists(public_path() . '/assets/images/products_home/' . $data["photo"])) {
                $img = Image::make(public_path().'/assets/images/products_home/' . $data["photo"])->resize(800, 800);
                $img->save(public_path().'/assets/images/products/' . $data["photo"]); 
            }

            if ($data["thumbnail"]!="" && file_exists(public_path() . '/assets/images/thumbnails_home/' . $data["thumbnail"])) {
                $img = Image::make(public_path().'/assets/images/thumbnails_home/' . $data["thumbnail"])->resize(250, 250);
                $img->save(public_path().'/assets/images/thumbnails/' . $data["thumbnail"]);
            }
            
            $result = array(
                'result' => true
            );
        }
        else {
            $result = array(
                'result' => false
            );
        }

        return json_encode($result);
    }

    //*** GET Request
    public function status($id1, $id2)
    {
        $data = Product::findOrFail($id1);
        $data->status = $id2;
        $data->update();
    }

    //*** POST Request
    public function uploadUpdate(Request $request, $id)
    {
        //--- Validation Section
        $rules = [
            'image' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }

        $data = Product::findOrFail($id);

        //--- Validation Section Ends
        $image = $request->image;
        list($type, $image) = explode(';', $image);
        list(, $image) = explode(',', $image);
        $image = base64_decode($image);
        $image_name = time() . str_random(8) . '.png';

        $path = public_path() .'/assets/images/products/' . $image_name;
        file_put_contents($path, $image);

        if ($data->photo != null) {
            if (file_exists(public_path() . '/assets/images/products/' . $data->photo)) {
                unlink(public_path() . '/assets/images/products/' . $data->photo);
            }
        }
        $input['photo'] = $image_name;
        $data->update($input);

        if ($data->thumbnail != null) {
            if (file_exists(public_path() . '/assets/images/thumbnails/' . $data->thumbnail)) {
                unlink(public_path() . '/assets/images/thumbnails/' . $data->thumbnail);
            }
        }

        $img = Image::make(public_path() . '/assets/images/products/' . $data->photo)->resize(285, 285);
        $thumbnail = time() . str_random(8) . '.png';
        $img->save(public_path() . '/assets/images/thumbnails/' . $thumbnail);

        $data->thumbnail = $thumbnail;
        $data->update();
        return response()->json(['status' => true, 'file_name' => $image_name]);
    }

    //*** POST Request
    //*** POST Request
    public function store(Request $request)
    {
        $gs = Generalsetting::findOrFail(1);   
        if(1)
        {
            $data = new Product;
            $sign = Currency::where('is_default','=',1)->first();
            $input = $request->all();

            $input["subcategory_id"] = "home";
            $input["manufacturer_id"] = Config::get('app.manufacturer_id');

            if($input['effects'] == '<br>') {
                $input['effects'] = NULL;
            } 

            if (strpos($input['effects'], '<br>')) {
                $input['effects'] = str_replace("<br>","",$input['effects']);
            }

            if (strpos($input['effects'], '<div>')) {
                $input['effects'] = str_replace("<div>","",$input['effects']);
            }

            if (strpos($input['effects'], '</div>')) {
                $input['effects'] = str_replace("</div>","",$input['effects']);
            }
            
            // Check File
            if ($file = $request->file('file'))
            {
                $name = str_replace(' ', '-', $file->getClientOriginalName());
                $name = time().$name;
                // $file->move('public/assets/files', $name);
                move_uploaded_file($file, public_path() . '/assets/files/' . $name);
                $input['file'] = $name;
            }
            //--- Validation Section Ends

            if ($request->file('photo'))
            {      
                $category_name = "+";
                $product_name = $input['name'];

                if($input['category_id']){
                    $category_name = Category::findOrFail($input['category_id'])->name;
                }

                $name = $category_name."-".$product_name.".png";
                $name = str_replace(array( '\'', '"', ',' , ';', '<', '>', '!', '@', '#', '$', '%', '^', '&', '*', ':' ), '', $name); 

                $file = $request->file('photo');
                move_uploaded_file($file, public_path() . '/assets/images/products/' . $name);

                $img = Image::make(public_path().'/assets/images/products/'.$name)->resize(285, 285);
            
                $thumbnail = str_replace('.png', '-tn.png', $name);
                $img->save(public_path().'/assets/images/thumbnails/'.$thumbnail);

                $input['photo'] = $name;
                $input['thumbnail'] = $thumbnail;
            } else {
                $input['photo'] = "";
                $input['thumbnail'] = "";
            }

            //--- Validation Section
            $rules = ['sku' => 'min:8|unique:products'];

            $validator = Validator::make($request->all(), $rules);

            if ($validator->fails()) {
                return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
            }
            //--- Validation Section Ends

            $input["slug"] = str_slug($input["name"], '-') . '-' . strtolower($input["sku"]);

            // Check Condition
            if ($request->product_condition_check == ""){
                $input['product_condition'] = 0;
            }

            // Check Shipping Time
            if ($request->shipping_time_check == ""){
                $input['ship'] = null;
            }

            // Check Size
            if(empty($request->size_check ))
            {
                $input['size'] = null;
                $input['size_qty'] = null;
                $input['size_price'] = null;
            }
            else{
                if(in_array(null, $request->size) || in_array(null, $request->size_qty))
                {
                    $input['size'] = null;
                    $input['size_qty'] = null;
                    $input['size_price'] = null;
                }
                else
                {
                    $input['size'] = implode(',', $request->size);
                    $input['size_qty'] = implode(',', $request->size_qty);
                    $input['size_price'] = implode(',', $request->size_price);
                }
            }

            // Check Whole Sale
            if(empty($request->whole_check ))
            {
                $input['whole_sell_qty'] = null;
                $input['whole_sell_discount'] = null;
            }
            else{
                if(in_array(null, $request->whole_sell_qty) || in_array(null, $request->whole_sell_discount))
                {
                    $input['whole_sell_qty'] = null;
                    $input['whole_sell_discount'] = null;
                }
                else
                {
                    $input['whole_sell_qty'] = implode(',', $request->whole_sell_qty);
                    $input['whole_sell_discount'] = implode(',', $request->whole_sell_discount);
                }
            }

            // Check Color
            if(empty($request->color_check))
            {
                $input['color'] = null;
            }
            else{
                $input['color'] = implode(',', $request->color);
            }

            // Check Measurement
            if ($request->mesasure_check == "")
            {
                $input['measure'] = null;
            }

            // Check Seo
            if (empty($request->seo_check))
            {
                $input['meta_tag'] = null;
                $input['meta_description'] = null;
            }
            else {
                if (!empty($request->meta_tag))
                {
                    $input['meta_tag'] = implode(',', $request->meta_tag);
                }
            }

            $input['features'] = implode(',', str_replace(',',' ',$request->features));
            $input['colors'] = implode(',', str_replace(',',' ',$request->colors));

            //tags
            if (!empty($request->tags))
            {
                $input['tags'] = implode(',', $request->tags);
            }

            // Convert Price According to Currency
            $input['price'] = ($input['price'] / $sign->value);
            $input['previous_price'] = ($input['previous_price'] / $sign->value);

            // store filtering attributes for physical product
            //test comment for update
            $attrArr = [];
            if (!empty($request->category_id)) {
                $catAttrs = Attribute::where('attributable_id', $request->category_id)->where('attributable_type', 'App\Models\Category')->get();
                if (!empty($catAttrs)) {
                    foreach ($catAttrs as $key => $catAttr) {
                        $in_name = $catAttr->input_name;
                        if($request->has("$in_name"."_check")) 
                            if ($request->has("$in_name")) {
                                $attrArr["$in_name"]["values"] = $request["$in_name"];
                                $attrArr["$in_name"]["prices"] = $request["$in_name"."_price"];
                                if ($catAttr->details_status) {
                                    $attrArr["$in_name"]["details_status"] = 1;
                                } else {
                                    $attrArr["$in_name"]["details_status"] = 0;
                                }
                            }
                    }
                }
            }

            if (empty($attrArr)) {
                $input['attributes'] = NULL;
            } else {
                $jsonAttr = json_encode($attrArr);
                $input['attributes'] = $jsonAttr;
            }

            if  (!empty($request->effects)) {
                $input['effects'] = strtolower($input['effects']);
                $segments = explode(', ', $input['effects']);
                $input['effects'] = "";
    
                foreach($segments as $seg) {
                    $seg = str_replace(" ", "-", $seg);
                    $input['effects'] = $input['effects'].$seg.", ";
                }
    
                if($input['effects'] != "") {
                    $input['effects'] = substr($input['effects'], 0, -2);
                }
            }

            // Save Data
            $data->fill($input)->save();
            // Set SLug

            $prod = Product::find($data->id);
            
            // Add To Gallery If any
            $lastid = $data->id;
            
            // if ($files = $request->file('gallery')){
            //     foreach ($files as  $key => $file){
            //         if(in_array($key, $request->galval))
            //         {
            //             $gallery = new Gallery;
            //             $name = str_replace(' ', '-', $file->getClientOriginalName());
            //             $name = time().$name;
            //             $img = Image::make($file->getRealPath())->resize(800, 800);
            //             $img->save(public_path().'/assets/images/galleries/'.$name);

            //             $gallery['photo'] = $name;
            //             $gallery['product_id'] = $lastid;
            //             $gallery->save();
            //         }
            //     }
            // }

            //--- Redirect Section
            if(Session::has('error')){
                $msg = Session::get('error');
            }
            else {
                $msg = 'New Product Added Successfully.<a href="'.route('admin-prod-index').'">View Product Lists.</a>';
            }
            return response()->json($msg);
            //--- Redirect Section Ends
        }
        else {
            //--- Redirect Section
            return response()->json(array('errors' => [ 0 => 'You Can\'t Add More Product.']));
            //--- Redirect Section Ends
        }
    }

    //*** POST Request
    public function import()
    {
        $cats = Category::where('manufacturer', Config::get('app.manufacturer_id'))->get();
        $sign = Currency::where('is_default', '=', 1)->first();
        return view('admin.product.productcsv', compact('cats', 'sign'));
    }

    public function importSubmit(Request $request)
    {
        $log = "";
        $rules = [
            'csvfile' => 'required|mimes:csv,txt',
        ];

        $validator = Validator::make(  $request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }

        $filename = '';
        if ($file = $request->file('csvfile')) {
            $filename = time() . '-' . $file->getClientOriginalName();
            $file->move('assets/temp_files', $filename);
        }

        $datas = "";

        $file = fopen(public_path('assets/temp_files/' . $filename), "r");
        $i = 1;
        while (($line = fgetcsv($file)) !== FALSE) {
            if ($i != 1) {
                if (!Product::where('manufacturer_id', Config::get('app.manufacturer_id'))->where('sku', $line[0])->exists()) {

                    $data = new Product;
                    $sign = Currency::where('is_default', '=', 1)->first();

                    $input['type'] = 'Physical';
                    $input['sku'] = $line[0];

                    $input['category_id'] = "";
                    $input['subcategory_id'] = "";
                    $input['childcategory_id'] = "";

                    $mcat = Category::where(DB::raw('lower(name)'), strtolower($line[1]));
                    //$mcat = Category::where("name", $line[1]);

                    if ($mcat->exists()) {
                        $input['category_id'] = $mcat->first()->id;

                        if ($line[2] != "") {
                            $scat = Subcategory::where(DB::raw('lower(name)'), strtolower($line[2]));

                            if ($scat->exists()) {
                                $input['subcategory_id'] = $scat->first()->id;
                            }
                        }
                        if ($line[3] != "") {
                            $chcat = Childcategory::where(DB::raw('lower(name)'), strtolower($line[3]));

                            if ($chcat->exists()) {
                                $input['childcategory_id'] = $chcat->first()->id;
                            }
                        }

                        $input['photo'] = $line[5];
                        $input['name'] = $line[4];
                        $input['details'] = $line[6];
                        $input['category_id'] = $request->category_id;
                        $input['color'] = $line[13];
                        $input['price'] = $line[7];
                        $input['previous_price'] = $line[8];
                        $input['stock'] = $line[9];
                        $input['size'] = $line[10];
                        $input['size_qty'] = $line[11];
                        $input['size_price'] = $line[12];
                        $input['youtube'] = $line[15];
                        $input['policy'] = $line[16];
                        $input['meta_tag'] = $line[17];
                        $input['meta_description'] = $line[18];
                        $input['tags'] = $line[14];
                        $input['product_type'] = $line[19];
                        $input['affiliate_link'] = $line[20];


                        // Conert Price According to Currency
                        $input['price'] = ($input['price'] / $sign->value);
                        $input['previous_price'] = ($input['previous_price'] / $sign->value);

                        // Save Data
                        $data->fill($input)->save();

                        // Set SLug
                        $prod = Product::find($data->id);

                        $prod->slug = str_slug($data->name, '-') . '-' . strtolower($data->sku);

                        // Set Thumbnail


                        $img = Image::make($line[5])->resize(285, 285);
                        $thumbnail = time() . str_random(8) . '.png';
                        $img->save(public_path() . '/assets/images/thumbnails/' . $thumbnail);

                        $apiKey = "YAypVmKK55sfxF4SPZdMFLyx";
                        $removebg = new RemoveBg($apiKey);

                        $removebg->file(public_path() . '/assets/images/thumbnails/' . $thumbnail)
                        ->headers([
                            'X-Width' => 600,
                            'X-Height' => 600,
                        ])
                        ->body([
                            'size' => '4k', // regular, medium, hd, 4k, auto
                            'channels' => 'rgba', // rgba, alpha
                        ])
                        ->save(public_path() . '/assets/images/thumbnails/' . $thumbnail);

                        $prod->thumbnail = $thumbnail;
                        $prod->update();


                    } else {
                        $log .= "<br>Row No: " . $i . " - No Category Found!<br>";
                    }

                } else {
                    $log .= "<br>Row No: " . $i . " - Duplicate Product Code!<br>";
                }

            }

            $i++;

        }
        fclose($file);


        //--- Redirect Section
        $msg = 'Bulk Product File Imported Successfully.<a href="' . route('admin-prod-index') . '">View Product Lists.</a>' . $log;
        return response()->json($msg);
    }


    //*** GET Request
    public function edit($id)
    {
        if (!Product::where('id', $id)->exists()) {
            return redirect()->route('admin.dashboard')->with('unsuccess', __('Sorry the page does not exist.'));
        }
        $cats = Category::where('manufacturer', Config::get('app.manufacturer_id'))->get();
        $data = Product::findOrFail($id);
        $sign = Currency::where('is_default', '=', 1)->first();
        $locs = StoreLocations::all();

        return view('admin.product.edit', compact('cats', 'data', 'sign', 'locs'));
    }

    //*** POST Request
    public function update(Request $request, $id)
    {
        // return $request;
        //--- Validation Section
        $rules = [
            // 'photo'      => 'mimes:jpeg,jpg,png,svg',
            'file'       => 'mimes:zip'
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends

        //-- Logic Section
        $data = Product::findOrFail($id);
        $sign = Currency::where('is_default','=',1)->first();

        $input = $request->all();

        $input["subcategory_id"] = "home";

        if($input['effects'] == '<br>') {
            $input['effects'] = NULL;
        } 

        if (strpos($input['effects'], '<br>')) {
            $input['effects'] = str_replace("<br>","",$input['effects']);
        }

        if (strpos($input['effects'], '<div>')) {
            $input['effects'] = str_replace("<div>","",$input['effects']);
        }

        if (strpos($input['effects'], '</div>')) {
            $input['effects'] = str_replace("</div>","",$input['effects']);
        }

        if ($file = $request->file('photo')) 
        {              
            if($data->photo != null)
            {
                if (file_exists(public_path().'/assets/images/products/'.$data->photo)) {
                    unlink(public_path().'/assets/images/products/'.$data->photo);
                }
            }   

            $category_name = "+";
            $product_name = $input['name'];

            if($input['category_id']){
                $category_name = Category::findOrFail($input['category_id'])->name;
            }

            $name = $category_name."-".$product_name.".png";

            $name = str_replace(" ", "-", $name);
            $name = str_replace("+-", "", $name);
            $name = str_replace('"', "-inch", $name);
            $name = str_replace("'", "-feet", $name);

            $name = str_replace(array( '\'', '"', ',' , ';', '<', '>', '!', '@', '#', '$', '%', '^', '&', '*', ':' ), '', $name); 

            move_uploaded_file($file, public_path() . '/assets/images/products/' . $name);
            $input['photo'] = $name;
        } 
        //Check Types
        if($request->type_check == 1)
        {
            $input['link'] = null;
        }
        else
        {
            if($data->file!=null){
                if (file_exists(public_path().'/assets/files/'.$data->file)) {
                    unlink(public_path().'/assets/files/'.$data->file);
                }
            }
            $input['file'] = null;
        }


        //--- Validation Section
        $rules = ['sku' => 'min:8|unique:products,sku,'.$id];

        $validator = Validator::make(  $request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends

        // Check Condition
        if ($request->product_condition_check == ""){
            $input['product_condition'] = 0;
        }

        // Check Shipping Time
        if ($request->shipping_time_check == ""){
            $input['ship'] = null;
        }

        // Check Size

        if(empty($request->size_check ))
        {
            $input['size'] = null;
            $input['size_qty'] = null;
            $input['size_price'] = null;
        }
        else{
            if(in_array(null, $request->size) || in_array(null, $request->size_qty) || in_array(null, $request->size_price))
            {
                $input['size'] = null;
                $input['size_qty'] = null;
                $input['size_price'] = null;
            }
            else
            {
                $input['size'] = implode(',', $request->size);
                $input['size_qty'] = implode(',', $request->size_qty);
                $input['size_price'] = implode(',', $request->size_price);
            }
        }

                // Check Whole Sale
        if(empty($request->whole_check ))
        {
            $input['whole_sell_qty'] = null;
            $input['whole_sell_discount'] = null;
        }
        else{
            if(in_array(null, $request->whole_sell_qty) || in_array(null, $request->whole_sell_discount))
            {
                $input['whole_sell_qty'] = null;
                $input['whole_sell_discount'] = null;
            }
            else
            {
                $input['whole_sell_qty'] = implode(',', $request->whole_sell_qty);
                $input['whole_sell_discount'] = implode(',', $request->whole_sell_discount);
            }
        }

        // Check Color
        if(empty($request->color_check ))
        {
            $input['color'] = null;
        }
        else{
            if (!empty($request->color))
                {
                $input['color'] = implode(',', $request->color);
                }
            if (empty($request->color))
                {
                $input['color'] = null;
                }
        }

            // Check Measure
        if ($request->measure_check == "")
        {
            $input['measure'] = null;
        }

        // Check Seo
        if (empty($request->seo_check))
        {
            $input['meta_tag'] = null;
            $input['meta_description'] = null;
        }
        else {
            if (!empty($request->meta_tag))
            {
                $input['meta_tag'] = implode(',', $request->meta_tag);
            }
        }

        // Check Verified
        if (empty($request->is_verified)) {
            $input['is_verified'] = 0;
        }

        // Check Features
        if(!in_array(null, $request->features) && !in_array(null, $request->colors))
        {
                $input['features'] = implode(',', str_replace(',',' ',$request->features));
                $input['colors'] = implode(',', str_replace(',',' ',$request->colors));
        }
        else
        {
            if(in_array(null, $request->features) || in_array(null, $request->colors))
            {
                $input['features'] = null;
                $input['colors'] = null;
            }
            else
            {
                $features = explode(',', $data->features);
                $colors = explode(',', $data->colors);
                $input['features'] = implode(',', $features);
                $input['colors'] = implode(',', $colors);
            }
        }

        //Product Tags
        if (!empty($request->tags))
        {
            $input['tags'] = implode(',', $request->tags);
        }
        if (empty($request->tags))
        {
            $input['tags'] = null;
        }

        $input['price'] = $input['price'] / $sign->value;
        $input['previous_price'] = $input['previous_price'] / $sign->value;

        // store filtering attributes for physical product
        $attrArr = [];
        if (!empty($request->category_id)) {
            $catAttrs = Attribute::where('attributable_id', $request->category_id)->where('attributable_type', 'App\Models\Category')->get();
            if (!empty($catAttrs)) {
            foreach ($catAttrs as $key => $catAttr) {
                $in_name = $catAttr->input_name;
                if($request->has("$in_name"."_check"))
                if ($request->has("$in_name")) {
                $attrArr["$in_name"]["values"] = $request["$in_name"];
                $attrArr["$in_name"]["prices"] = $request["$in_name"."_price"];
                if ($catAttr->details_status) {
                    $attrArr["$in_name"]["details_status"] = 1;
                } else {
                    $attrArr["$in_name"]["details_status"] = 0;
                }
                }
            }
            }
        }

        if (empty($attrArr)) {
            $input['attributes'] = NULL;
        } else {
            $jsonAttr = json_encode($attrArr);
            $input['attributes'] = $jsonAttr;
        }

        $data->slug = str_slug($data->name,'-').'-'.strtolower($data->sku);

        if  (!empty($request->effects)) {
            $input['effects'] = strtolower($input['effects']);
            $segments = explode(', ', $input['effects']);
            $input['effects'] = "";

            foreach($segments as $seg) {
                $seg = str_replace(" ", "-", $seg);
                $input['effects'] = $input['effects'].$seg.", ";
            }

            if($input['effects'] != "") {
                $input['effects'] = substr($input['effects'], 0, -2);
            }
        }

        $data->update($input);
     //-- Logic Section Ends
        if ($file = $request->file('photo')) {
            $prod = Product::find($data->id);
        
            // Set Thumbnail
            $img = Image::make(public_path().'/assets/images/products/'.$prod->photo)->resize(285, 285);
            
            if (file_exists(public_path().'/assets/images/thumbnails/'.$data->thumbnail)) {
                unlink(public_path().'/assets/images/thumbnails/'.$data->thumbnail);
            }
            
            $thumbnail = str_replace('.png', '-tn.png', $prod->photo);
            
            $img->save(public_path().'/assets/images/thumbnails/'.$thumbnail);
         
            $prod->thumbnail  = $thumbnail;
            $prod->update();
        }

        
        $message = 'Product Updated Successfully.';  
        //--- Redirect Section
        return response()->json($message);
        //--- Redirect Section Ends
    }

    public function hasTransparency ($image) {
        if (!is_resource($image)) {
          throw new \InvalidArgumentException("Image resource expected. Got: " . gettype($image));
        }
      
        $shrinkFactor      = 64.0;
        $minSquareToShrink = 64.0 * 64.0;
      
        $width  = imagesx($image);
        $height = imagesy($image);
        $square = $width * $height;
      
        if ($square <= $minSquareToShrink) {
          [$thumb, $thumbWidth, $thumbHeight] = [$image, $width, $height];
        } else {
          $thumbSquare = $square / $shrinkFactor;
          $thumbWidth  = (int) round($width / sqrt($shrinkFactor));
          $thumbWidth < 1 and $thumbWidth = 1;
          $thumbHeight = (int) round($thumbSquare / $thumbWidth);
          $thumb       = imagecreatetruecolor($thumbWidth, $thumbHeight);
          imagealphablending($thumb, false);
          imagecopyresized($thumb, $image, 0, 0, 0, 0, $thumbWidth, $thumbHeight, $width, $height);
        }
      
        for ($i = 0; $i < $thumbWidth; $i++) { 
          for ($j = 0; $j < $thumbHeight; $j++) {
            if (imagecolorat($thumb, $i, $j) & 0x7F000000) {
              return true;
            }
          }
        }
      
        return false;
    }

    //*** GET Request
    public function feature($id)
    {
        $data = Product::findOrFail($id);
        return view('admin.product.highlight', compact('data'));
    }

    //*** POST Request
    public function featuresubmit(Request $request, $id)
    {
        //-- Logic Section
        $data = Product::findOrFail($id);
        $input = $request->all();
        if ($request->featured == "") {
            $input['featured'] = 0;
        }
        if ($request->hot == "") {
            $input['hot'] = 0;
        }
        if ($request->best == "") {
            $input['best'] = 0;
        }
        if ($request->top == "") {
            $input['top'] = 0;
        }
        if ($request->latest == "") {
            $input['latest'] = 0;
        }
        if ($request->big == "") {
            $input['big'] = 0;
        }
        if ($request->trending == "") {
            $input['trending'] = 0;
        }
        if ($request->sale == "") {
            $input['sale'] = 0;
        }
        if ($request->is_discount == "") {
            $input['is_discount'] = 0;
            $input['discount_date'] = null;
        }

        $data->update($input);
        //-- Logic Section Ends

        //--- Redirect Section
        $msg = 'Highlight Updated Successfully.';
        return response()->json($msg);
        //--- Redirect Section Ends

    }

    //*** GET Request
    public function destroy($id)
    {
        $data = Product::findOrFail($id);
        if ($data->galleries->count() > 0) {
            foreach ($data->galleries as $gal) {
                if (file_exists(public_path() . '/assets/images/galleries/' . $gal->photo)) {
                    unlink(public_path() . '/assets/images/galleries/' . $gal->photo);
                }
                $gal->delete();
            }

        }

        if ($data->reports->count() > 0) {
            foreach ($data->reports as $gal) {
                $gal->delete();
            }
        }

        if ($data->ratings->count() > 0) {
            foreach ($data->ratings as $gal) {
                $gal->delete();
            }
        }
        if ($data->wishlists->count() > 0) {
            foreach ($data->wishlists as $gal) {
                $gal->delete();
            }
        }
        if ($data->clicks->count() > 0) {
            foreach ($data->clicks as $gal) {
                $gal->delete();
            }
        }
        if ($data->comments->count() > 0) {
            foreach ($data->comments as $gal) {
                if ($gal->replies->count() > 0) {
                    foreach ($gal->replies as $key) {
                        $key->delete();
                    }
                }
                $gal->delete();
            }
        }


        if (!filter_var($data->photo, FILTER_VALIDATE_URL)) {
            if (file_exists(public_path() . '/assets/images/products/' . $data->photo)) {
                unlink(public_path() . '/assets/images/products/' . $data->photo);
            }
        }

        if (file_exists(public_path() . '/assets/images/thumbnails/' . $data->thumbnail) && $data->thumbnail != "") {
            unlink(public_path() . '/assets/images/thumbnails/' . $data->thumbnail);
        }

        if ($data->file != null) {
            if (file_exists(public_path() . '/assets/files/' . $data->file)) {
                unlink(public_path() . '/assets/files/' . $data->file);
            }
        }
        $data->delete();
        //--- Redirect Section
        $msg = 'Product Deleted Successfully.';
        return response()->json($msg);
        //--- Redirect Section Ends

// PRODUCT DELETE ENDS
    }

    // public function policyload($location_id){
    //     $data = ReturnPolicy::where("active", 1)->where("location_id", $location_id)->get();
    //     if(count($data) > 0){
    //         return $data->first->policy_text->policy_text;
    //     }
    //     return "0";
    // }

    // public function getAttributes(Request $request)
    // {
    //     $model = '';
    //     if ($request->type == 'category') {
    //         $model = 'App\Models\Category';
    //     } elseif ($request->type == 'subcategory') {
    //         $model = 'App\Models\Subcategory';
    //     } elseif ($request->type == 'childcategory') {
    //         $model = 'App\Models\Childcategory';
    //     }

    //     $attributes = Attribute::where('attributable_id', $request->id)->where('attributable_type', $model)->get();
    //     $attrOptions = [];
    //     foreach ($attributes as $key => $attribute) {
    //         $options = AttributeOption::where('attribute_id', $attribute->id)->get();
    //         $attrOptions[] = ['attribute' => $attribute, 'options' => $options];
    //     }
    //     return response()->json($attrOptions);
    // }

    //*** GET Request
    public function catalogs()
    {
        return view('admin.product.catalog');
    }

    //*** JSON Request
    public function catalogdatatables()
    {
        $datas = Product::where('manufacturer_id', Config::get('app.manufacturer_id'))->where('is_catalog', '=', 1)->orderBy('id', 'desc')->get();

        //--- Integrating This Collection Into Datatables
        return Datatables::of($datas)
            ->editColumn('name', function (Product $data) {
                $name = mb_strlen(strip_tags($data->name), 'utf-8') > 50 ? mb_substr(strip_tags($data->name), 0, 50, 'utf-8') . '...' : strip_tags($data->name);
                $id = '<small>ID: <a href="' . route('front.product', $data->slug) . '" target="_blank">' . sprintf("%'.08d", $data->id) . '</a></small>';
                $id3 = $data->type == 'Physical' ? '<small class="ml-2"> SKU: <a href="' . route('front.product', $data->slug) . '" target="_blank">' . $data->sku . '</a>' : '';
                return $name . '<br>' . $id . $id3;
            })
            ->editColumn('price', function (Product $data) {
                $sign = Currency::where('is_default', '=', 1)->first();
                $price = round($data->price * $sign->value, 2);
                $price = $sign->sign . $price;
                return $price;
            })
            ->editColumn('stock', function (Product $data) {
                $stck = (string)$data->stock;
                if ($stck == "0")
                    return "Out Of Stock";
                elseif ($stck == null)
                    return "Unlimited";
                else
                    return $data->stock;
            })
            ->addColumn('status', function (Product $data) {
                $class = $data->status == 1 ? 'drop-success' : 'drop-danger';
                $s = $data->status == 1 ? 'selected' : '';
                $ns = $data->status == 0 ? 'selected' : '';
                return '<div class="action-list"><select class="process select droplinks ' . $class . '"><option data-val="1" value="' . route('admin-prod-status', ['id1' => $data->id, 'id2' => 1]) . '" ' . $s . '>Activated</option><<option data-val="0" value="' . route('admin-prod-status', ['id1' => $data->id, 'id2' => 0]) . '" ' . $ns . '>Deactivated</option>/select></div>';
            })
            ->addColumn('action', function (Product $data) {
                return '<div class="godropdown">
                    <button class="go-dropdown-toggle"> Actions<i class="fas fa-chevron-down"></i></button>
                    <div class="action-list">
                        <a href="' . route('admin-prod-edit', $data->id) . '"> <i class="fas fa-edit"></i> Edit</a>
                        <a href="javascript" class="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" value="' . $data->id . '"><i class="fas fa-eye"></i> View Gallery</a>
                        <a data-href="' . route('admin-prod-feature', $data->id) . '" class="feature" data-toggle="modal" data-target="#modal2"> <i class="fas fa-star"></i> Highlight</a>
                        <a href="javascript:;" data-href="' . route('admin-prod-catalog', ['id1' => $data->id, 'id2' => 0]) . '" data-toggle="modal" data-target="#confirm-delete" class="delete"><i class="fas fa-trash-alt"></i> Remove Catalog</a></div></div>';
            })
            ->rawColumns(['name', 'status', 'action'])
            ->toJson(); //--- Returning Json Data To Client Side
    }
    
    //*** GET Request
    public function catalog($id1, $id2)
    {
        $data = Product::findOrFail($id1);
        $data->is_catalog = $id2;
        $data->update();
        if ($id2 == 1) {
            $msg = "Product added to catalog successfully.";
        } else {
            $msg = "Product removed from catalog successfully.";
        }

        return response()->json($msg);

    }

    public function policy(Request $request) {
        return view('admin.product.policy');
    }

    //*** JSON Request
    public function policydatatables()
    {
        $datas = ProductPolicy::orderBy('id', 'desc')->get();

        //--- Integrating This Collection Into Datatables
        return Datatables::of($datas)
            ->editColumn('name', function (ProductPolicy $data) {
                return $data->name;
            })
            ->editColumn('description', function (ProductPolicy $data) {
                $description = mb_strlen(strip_tags($data->description), 'utf-8') > 150 ? mb_substr(strip_tags($data->description), 0, 150, 'utf-8') . '...' : strip_tags($data->description);
                return $description;
            })
            ->addColumn('action', function (ProductPolicy $data) {
                return '<div class="godropdown">
                    <button class="go-dropdown-toggle"> Actions<i class="fas fa-chevron-down"></i></button>
                    <div class="action-list">
                        <a href="' . route('admin-prod-policy-edit', $data->id) . '"> <i class="fas fa-edit"></i> Edit</a>
                        <a href="javascript:;" data-href="' . route('admin-prod-policy-delete', $data->id) . '" data-toggle="modal" data-target="#confirm-delete" class="delete"><i class="fas fa-trash-alt"></i> Delete</a>
                    </div>
                </div>';
            })
            ->rawColumns(['type', 'description', 'action'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    public function policycreate(Request $request) {
        return view('admin.product.policycreate');
    }

    public function policystore(Request $request) {
        $rules = array(
            'name' => 'required|unique:categories',
            'description' => 'required'
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }

        $input = $request->all();

        $model = new ProductPolicy;
        $model->fill($input)->save();
        $msg = 'New Data Added Successfully.';
        return response()->json($msg);
    }

    public function policyedit(Request $request, $id) {
        if (!ProductPolicy::where('id', $id)->exists()) {
            return redirect()->route('admin.dashboard')->with('unsuccess', __('Sorry the page does not exist.'));
        }
        $data = ProductPolicy::findOrFail($id);
        return view('admin.product.policyedit', compact('data'));
    }

    public function policyupdate(Request $request, $id) {
        $rules = array(
            'name' => 'required|unique:categories',
            'description' => 'required'
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }

        $input = $request->all();

        $model = ProductPolicy::find($id);
        $model->fill($input)->save();
        $msg = 'Data Updated Successfully.';
        return response()->json($msg);
    }

    public function policydestroy(Request $request, $id) {
        $data = ProductPolicy::findOrFail($id);
        $data->delete();
        //--- Redirect Section
        $msg = 'ProductPolicy Deleted Successfully.';
        return response()->json($msg);
        //--- Redirect Section Ends
    }
}
