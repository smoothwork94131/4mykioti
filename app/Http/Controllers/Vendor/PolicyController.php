<?php

namespace App\Http\Controllers\Vendor;

use Datatables;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Auth;
use Validator;
use DB;
use Session;

use App\Models\ReturnPolicy;
use App\Models\StoreLocations;

class PolicyController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function datatables()
    {
        $user = Auth::user();

        $datas = ReturnPolicy::where('user_id', $user->id)->get();

        return Datatables::of($datas)
            ->editColumn('location_id', function (ReturnPolicy $data) {
                return '<b>' . $data->get_location_name->location_name . '</b>';
            })
            ->editColumn('policy_text', function (ReturnPolicy $data) {
                $policy_text = mb_strlen(strip_tags($data->policy_text), 'utf-8') > 80 ? mb_substr(strip_tags($data->policy_text), 0, 80, 'utf-8') . '...' : strip_tags($data->policy_text);
                return $policy_text;
            })
            ->addColumn('active', function (ReturnPolicy $data) {
                $class = $data->active == 1 ? 'drop-success' : 'drop-danger';
                $s = $data->active == 1 ? 'selected' : '';
                $ns = $data->active == 0 ? 'selected' : '';
                return '<div class="action-list">
                <select class="process select droplinks ' . $class . '">
                    <option data-val="1" value="' . route('vendor-return-policy-status', ['id1' => $data->id, 'id2' => 1]) . '" ' . $s . '>Activated</option>
                    <<option data-val="0" value="' . route('vendor-return-policy-status', ['id1' => $data->id, 'id2' => 0]) . '" ' . $ns . '>Deactivated</option>
                </select>
            </div>';
            })
            ->addColumn('action', function (ReturnPolicy $data) {
                return '<div class="action-list">
                <a href="' . route('vendor-return-policy-edit', $data->id) . '" class="edit">
                    <i class="fas fa-edit"></i>Edit
                </a>
                <a href="javascript:;" data-href="' . route('vendor-return-policy-delete', $data->id) . '" data-toggle="modal" data-target="#confirm-delete" class="delete">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </div>';
            })
            ->rawColumns(['location_id', 'policy_text', 'active', 'action'])
            ->toJson(); //--- Returning Json Data To Client Side
    }

    public function index()
    {
        return view('vendor.policy.index');
    }

    //*** GET Request
    public function create()
    {
        $user = Auth::user();
        $locations = $user->locations()->orderBy('id', 'desc')->get();

        $policy_count = ReturnPolicy::where('user_id', $user->id)->get()->count();
        return view('vendor.policy.create', array(
            'locations' => $locations,
            'policy_count' => $policy_count
        ));
    }

    //*** POST Request
    public function store(Request $request)
    {
        //--- Validation Section
        $rules = [
            'location_id' => 'required',
            'policy_text' => 'required',
        ];
        $customs = [
            'location_id.required' => 'Please Select Location.',
            'policy_text.required' => 'Please Enter Policy Text.'
        ];
        $validator = Validator::make(Input::all(), $rules, $customs);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends

        $data = new ReturnPolicy();
        $input = $request->all();

        $user = Auth::user();
        $input['user_id'] = $user->id;
        $data->fill($input)->save();

        if($request->step_flow) {
            $msg = 'New Policy Added Successfully. Now you can add your product item.';
            Session::put('success', $msg);
            return response()->json(array(
                'flag' => 'step_flow',
                'route' => route('vendor-prod-index')
            ));
        }

        //--- Redirect Section
        $msg = 'New Data Added Successfully.';
        Session::put('success', $msg);
        return response()->json(array(
            'flag' => 'ok',
            'route' => route('vendor-return-policy')
        ));
    }

    // //*** GET Request
    public function edit($id)
    {
        $user = Auth::user();
        $locations = $user->locations()->orderBy('id', 'desc')->get();
        $policy = ReturnPolicy::findOrFail($id);
        return view('vendor.policy.edit', compact('locations', 'policy'));
    }

    // //*** POST Request
    public function update(Request $request, $id)
    {
        $rules = [
            'location_id' => 'required',
            'policy_text' => 'required',
        ];
        $customs = [
            'location_id.required' => 'Please Select Location.',
            'policy_text.required' => 'Please Enter Policy Text.'
        ];
        $validator = Validator::make(Input::all(), $rules, $customs);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
        //--- Validation Section Ends

        //--- Logic Section
        $data = ReturnPolicy::findOrFail($id);
        $input = $request->all();

        if ($request->active == null) {
            $input['active'] = 0;
        } else {
            $input['active'] = 1;
        }
        $data->update($input);
        //--- Logic Section Ends

        //--- Redirect Section
        $msg = 'Data Updated Successfully.';
        Session::put('success', $msg);
        return response()->json(array(
            'flag' => 'ok',
            'route' => route('vendor-return-policy')
        ));
    }

    public function load($location_id){
        $data = ReturnPolicy::where("active", 1)->where("location_id", $location_id)->get();
        if(count($data) > 0){
            return $data->first->policy_text->policy_text;
        }
        return "0";
    }


    // //*** GET Request Delete
    public function destroy($id)
    {
        $data = ReturnPolicy::findOrFail($id);
        $data->delete();
        $msg = 'Data Deleted Successfully.';
        return response()->json($msg);
    }

    //*** GET Request Status
    public function status($id1, $id2)
    {
        $data = ReturnPolicy::findOrFail($id1);
        $data->active = $id2;
        $data->update();
    }
}
