<?php

namespace App\Http\Controllers\Admin;

use Datatables;
use App\Models\Subscription;
use App\Models\AdvertisingPlan;
use App\Models\AdvertisingProduct;
use App\Models\Category;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Validator;

class AdvertisingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
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
                return '<div class="action-list"><a data-href="' . route('admin-advertising-edit', $data->id) . '" class="edit" data-toggle="modal" data-target="#modal1"> <i class="fas fa-edit"></i>Edit</a></div>';
            })
            ->rawColumns(['action', 'type'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    public function product_current_datatables()
    {
        $datas = AdvertisingProduct::orderBy('id', 'desc')->get();
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
            ->addColumn('vendor', function (AdvertisingProduct $data) {
                
                $vendor = '<a href="'.route('admin-vendor-show', $data->vendor->id).'" target="_blank">'.$data->vendor->name.'</a>';
                return  $vendor;
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
            ->rawColumns(['product', 'plans', 'vendor'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    public function product_future_datatables()
    {
        $status = "Future";
        $datas = AdvertisingProduct::orderBy('id', 'desc')->get();
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
            ->addColumn('vendor', function (AdvertisingProduct $data) {
                
                $vendor = '<a href="'.route('admin-vendor-show', $data->vendor->id).'" target="_blank">'.$data->vendor->name.'</a>';
                return  $vendor;
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
            ->rawColumns(['product', 'vendor', 'plans'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    public function product_past_datatables()
    {
        $status = "Past";
        $datas = AdvertisingProduct::orderBy('id', 'desc')->get();
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
            ->addColumn('vendor', function (AdvertisingProduct $data) {
                
                $vendor = '<a href="'.route('admin-vendor-show', $data->vendor->id).'" target="_blank">'.$data->vendor->name.'</a>';
                return  $vendor;
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
            ->rawColumns(['product', 'vendor', 'plans'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    //*** GET Request
    public function index()
    {
        return view('admin.advertising.index');
    }

    //*** GET Request
    public function create()
    {
        $cats = Category::all();
        return view('admin.advertising.create', compact('cats'));
    }

    public function products($status) {
        if($status == "current")
            return view('admin.advertising.currentproducts');
        if($status == "future")
            return view('admin.advertising.futureproducts');
        if($status == "past")
            return view('admin.advertising.pastproducts');
    }

    //*** POST Request
    public function store(Request $request)
    {

        //--- Logic Section
        $data = new AdvertisingPlan();
        $input = $request->all();

        $existing = $data->where('category_id', $input['category_id'])->where('type', $input['type'])->get();

        if(count($existing) > 0){
            return response()->json(array('errors' => ['You have already added this plan. Please try to add another plan']));
        }


        $data->fill($input)->save();
        //--- Logic Section Ends

        //--- Redirect Section        
        $msg = 'New Data Added Successfully.';
        return response()->json($msg);
        //--- Redirect Section Ends    
    }

    //*** GET Request
    public function edit($id)
    {
        $data = AdvertisingPlan::findOrFail($id);
        $cats = Category::all();
        return view('admin.advertising.edit', compact('data', 'cats'));
    }

    //*** POST Request
    public function update(Request $request, $id)
    {
        //--- Logic Section
        $data = AdvertisingPlan::findOrFail($id);
        $input = $request->all();
        
        $data->update($input);
        //--- Logic Section Ends

        //--- Redirect Section     
        $msg = 'Data Updated Successfully.';
        return response()->json($msg);
        //--- Redirect Section Ends            
    }

    //*** GET Request Delete
    public function destroy($id)
    {
        $data = Subscription::findOrFail($id);
        $data->delete();
        //--- Redirect Section     
        $msg = 'Data Deleted Successfully.';
        return response()->json($msg);
        //--- Redirect Section Ends     
    }
}
