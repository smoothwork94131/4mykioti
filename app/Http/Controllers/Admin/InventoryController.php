<?php

namespace App\Http\Controllers\Admin;

use App\Models\Inventory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
 
use Validator;
use Image;
use DB;
use Session;

class InventoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index(Request $request) {
        $inventories = new Inventory;

        $manufacturer = 'Kioti';
        if(isset($request->manufacturer)) {
            $manufacturer = $request->manufacturer;
        }

        $inventories = $inventories->where('line_number', 'like', '%'. $manufacturer .'%');

        $search_text = "";
        if(isset($request->inventory_search)) {
            $search_text = $request->inventory_search;
            $inventories = $inventories->where(function ($query) use ($search_text) {
                $query->where('part_number', 'like', '%'. $search_text .'%')
                ->orWhere('description', 'like', '%'. $search_text .'%')
                ->orWhere('bin', 'like', '%'. $search_text .'%');
            });
        }
    
        $inventories = $inventories->orderByRaw('bin is NULL ASC, bin ASC')->paginate(10);
        return view('admin.inventory.index', compact('inventories', 'search_text', 'manufacturer'));
    }

    public function update(Request $request) {

        $params = $request->update_data;
        $params = json_decode($params);

        $series = DB::connection('product')
        ->table('categories_home')
        ->select('name')
        ->where('status', 1)
        ->where('parent', '!=', 0)
        ->get();

        try {
            foreach($params as $param) {
                foreach($series as $index => $db) {
                    $result = DB::connection('product')->table($db->name)->where('sku', $param->sku)->update(['stock' => $param->quantity]);
                }
                $inventory_update = Inventory::where('part_number', $param->sku)->update(['bin' => $param->bin]);
            }
 
            $response = Http::post('http://24.239.36.98/infinitysync/api/login', [
                'userName' => 'dhansen',
                'password' => 'T75676Grep34!',
            ]);

            if($response->ok()) {
                $login_result = $response->json();
                if(!empty($login_result->token)) {
                    foreach($params as $param) {
                        $param->locationID = 4;
                    }

                    $quantity_response = Http::post('http://24.239.36.98/infinitysync/api/set_quantity', [
                        'parts' => $params
                    ]);

                    if($quantity_response->ok()) {
                        return redirect()->route('admin-prod-inventory')->with('success', 'Updated successfully');           
                    }
                }
            }
        }
        catch (Exception $e) {
            return redirect()->route('admin-prod-inventory')->with('error', 'Something went wrong during update. Try again');
        }
    }
}
