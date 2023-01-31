<?php

namespace App\Http\Controllers\Vendor;

use Datatables;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Auth;
use Validator;

class SubCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    //*** JSON Request
    public function datatables()
    {
        $user = Auth::user();
        $datas = $user->subcategories()->orderBy('id', 'desc')->get();
        //  $datas = Subcategory::orderBy('id','desc')->get();
        //--- Integrating This Collection Into Datatables
        return Datatables::of($datas)
            ->addColumn('category', function (Subcategory $data) {
                return $data->category->name;
            })
            ->addColumn('status', function (Subcategory $data) {
                $class = $data->status == 1 ? 'drop-success' : 'drop-danger';
                $s = $data->status == 1 ? 'selected' : '';
                $ns = $data->status == 0 ? 'selected' : '';
                return '<div class="action-list"><select class="process select droplinks ' . $class . '"><option data-val="1" value="' . route('vendor-subcat-status', ['id1' => $data->id, 'id2' => 1]) . '" ' . $s . '>Activated</option><<option data-val="0" value="' . route('vendor-subcat-status', ['id1' => $data->id, 'id2' => 0]) . '" ' . $ns . '>Deactivated</option>/select></div>';
            })
            ->addColumn('action', function (Subcategory $data) {
                return '<div class="action-list"><a data-href="' . route('vendor-subcat-edit', $data->id) . '" class="edit" data-toggle="modal" data-target="#modal1"> <i class="fas fa-edit"></i>Edit</a><a href="javascript:;" data-href="' . route('vendor-subcat-delete', $data->id) . '" data-toggle="modal" data-target="#confirm-delete" class="delete"><i class="fas fa-trash-alt"></i></a></div>';
            })
            ->rawColumns(['status', 'attributes', 'action'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    //*** GET Request
    public function index()
    {
        return view('vendor.subcategory.index');
    }

    //*** GET Request
    public function create()
    {
        $cats = Category::all();
        return view('vendor.subcategory.create', compact('cats'));
    }

    //*** POST Request
    public function store(Request $request)
    {
        //--- Validation Section
        $rules = [
            'slug' => 'unique:subcategories|regex:/^[a-zA-Z0-9\s-]+$/'
        ];
        $customs = [
            'slug.unique' => 'This slug has already been taken.',
            'slug.regex' => 'Slug Must Not Have Any Special Characters.'
        ];
        $validator = Validator::make(Input::all(), $rules, $customs);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }


        //--- Validation Section Ends

        //--- Logic Section
        $data = new Subcategory();
        $input = $request->all();
        $user = Auth::user();

        //---- validate subcategory unique.

        $subcategories = $data->where("category_id", $input['category_id'])->get();
        $check_unique = true;
        foreach ($subcategories as $sub) {
            if ($sub->name == $input['name']) {
                $check_unique = false;
            }
        }

        if (!$check_unique) {
            $message = "The subcategory name have been used.";
            return response()->json(array('errors' => [$message]));
        }
        //---- end validate subcategory unique.

        $input['user_id'] = $user->id;
        $data->fill($input)->save();
        //--- Logic Section Ends

        //--- Redirect Section
        $msg = 'New Data Added Successfully.';
        Session::put('success', $msg);
        return response()->json(array(
            'flag' => 'ok',
            'route' => route('vendor-subcategory-index')
        ));
        //--- Redirect Section Ends
    }

    //*** GET Request
    public function edit($id)
    {
        $cats = Category::all();
        $data = Subcategory::findOrFail($id);

        return view('vendor.subcategory.edit', compact('data', 'cats'));
    }

    //*** POST Request
    public function update(Request $request, $id)
    {
        //--- Validation Section
        $rules = [
            'slug' => 'unique:subcategories,slug,' . $id . '|regex:/^[a-zA-Z0-9\s-]+$/'
        ];
        $customs = [
            'slug.unique' => 'This slug has already been taken.',
            'slug.regex' => 'Slug Must Not Have Any Special Characters.'
        ];
        $validator = Validator::make(Input::all(), $rules, $customs);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends

        //--- Logic Section
        $data = Subcategory::findOrFail($id);
        $input = $request->all();

        //---- validate subcategory unique.
        $subcat = new Subcategory();
        $subcategories = $subcat->where("category_id", $input['category_id'])->get();
        $check_unique = true;
        foreach ($subcategories as $sub) {
            if ($sub->name == $input['name']) {
                $check_unique = false;
            }
        }

        if (!$check_unique) {
            $message = "The subcategory name have been used.";
            return response()->json(array('errors' => [$message]));
        }
        //---- end validate subcategory unique.


        $data->update($input);
        //--- Logic Section Ends

        //--- Redirect Section
        $msg = 'Data Updated Successfully.';
        Session::put('success', $msg);
        return response()->json(array(
            'flag' => 'ok',
            'route' => route('vendor-subcategory-index')
        ));
        //--- Redirect Section Ends
    }

    //*** GET Request Status
    public function status($id1, $id2)
    {
        $data = Subcategory::findOrFail($id1);
        $data->status = $id2;
        $data->update();
    }

    //*** GET Request
    public function load($id)
    {
        $cat = Category::findOrFail($id);
        return view('load.subcategory', compact('cat'));
    }

    //*** GET Request Delete
    public function destroy($id)
    {
        $data = Subcategory::findOrFail($id);


        if ($data->attributes->count() > 0) {
            //--- Redirect Section
            $msg = 'Remove the Attributes first !';
            return response()->json($msg);
            //--- Redirect Section Ends
        }
        if ($data->childs->count() > 0) {
            //--- Redirect Section
            $msg = 'Remove the Child Categories first !';
            return response()->json($msg);
            //--- Redirect Section Ends
        }
        if ($data->products->count() > 0) {
            //--- Redirect Section
            $msg = 'Remove the products first !';
            return response()->json($msg);
            //--- Redirect Section Ends
        }


        $data->delete();
        //--- Redirect Section
        $msg = 'Data Deleted Successfully.';
        return response()->json($msg);
        //--- Redirect Section Ends
    }
}
