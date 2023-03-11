<?php

namespace App\Http\Controllers\Vendor;

use Datatables;
use App\Models\StoreLocations;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Auth;
use Validator;
use Session;

class LocationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    //*** JSON Request
    public function datatables()
    {
        $user = Auth::user();
        $datas = $user->locations()->orderBy('id', 'desc')->get();
        //--- Integrating This Collection Into Datatables
        return Datatables::of($datas)
            ->addColumn('name', function (StoreLocations $data) {
                return '<b>' . $data->location_name . '</b>';
            })
            ->addColumn('address', function (StoreLocations $data) {
                return $data->address . " " . $data->city;
            })
            ->addColumn('contact_info', function (StoreLocations $data) {
                return $data->contact_name . '<br>' . $data->contact_number . '<br>' . $data->contact_email;
            })
            ->addColumn('action', function (StoreLocations $data) {
                return '<div class="action-list"><a href="' . route('vendor-location-edit', $data->id) . '" class="edit"> <i class="fas fa-edit"></i>Edit</a><a href="javascript:;" data-href="' . route('vendor-location-delete', $data->id) . '" data-toggle="modal" data-target="#confirm-delete" class="delete"><i class="fas fa-trash-alt"></i></a></div>';
            })
            ->rawColumns(['contact_info', 'action', 'name'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    //*** GET Request
    public function index()
    {
        return view('vendor.location.index');
    }

    //*** GET Request
    public function create()
    {
        $user = Auth::user();
        $location = StoreLocations::where('user_id', $user->id)->get();
        $location_count = $location->count();

        return view('vendor.location.create', array(
            'location_count' => $location_count
        ));
    }

    //*** POST Request
    public function store(Request $request)
    {
        //--- Validation Section
        $rules = [
            'lat' => 'required',
        ];
        $customs = [
            'lat.required' => 'Please use "Enter Your Address".'
        ];
        // $customs = [
        //     'slug.unique' => 'This slug has already been taken.',
        //     'slug.regex' => 'Slug Must Not Have Any Special Characters.'
        //            ];
        $validator = Validator::make(Input::all(), $rules, $customs);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends

        //--- Logic Section
        $data = new StoreLocations();
        $input = $request->all();

        $user = Auth::user();
        $input['address'] = $input['street_number'] . " " . $input['street_address'];
        unset($input['street_number']);
        unset($input['street_address']);
        $input['user_id'] = $user->id;
        $data->fill($input)->save();
        //--- Logic Section Ends
        

        if($request->step_flow) {
            $msg = 'New Location Added Successfully.';
            Session::put('success', $msg);
            return response()->json(array(
                'flag' => 'step_flow',
                'route' => route('vendor-return-policy-create')
            ));
        }

        //--- Redirect Section
        $msg = 'New Data Added Successfully.';
        Session::put('success', $msg);
        return response()->json(array(
            'flag' => 'ok',
            'route' => route('vendor-location-index')
        ));
        //--- Redirect Section Ends
    }

    //*** GET Request
    public function edit($id)
    {
        $data = StoreLocations::findOrFail($id);
        return view('vendor.location.edit', compact('data'));
    }

    //*** POST Request
    public function update(Request $request, $id)
    {
        //--- Validation Section
        $rules = [
            'lat' => 'required',
        ];
        $customs = [
            'lat.required' => 'Please use "Enter Your Address".'
        ];
        // $customs = [
        //     'slug.unique' => 'This slug has already been taken.',
        //     'slug.regex' => 'Slug Must Not Have Any Special Characters.'
        //            ];
        $validator = Validator::make(Input::all(), $rules, $customs);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends

        //--- Logic Section
        $data = StoreLocations::findOrFail($id);
        $input = $request->all();
        $input['address'] = $input['street_number'] . " " . $input['street_address'];

        $data->update($input);
        //--- Logic Section Ends

        //--- Redirect Section
        $msg = 'Data Updated Successfully.';
        Session::put('success', $msg);
        return response()->json(array(
            'flag' => 'ok',
            'route' => route('vendor-location-index')
        ));
        //--- Redirect Section Ends
    }


    //*** GET Request Delete
    public function destroy($id)
    {
        $data = StoreLocations::findOrFail($id);


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
