<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Session;

class ApiController extends Controller
{
    public function updateQuantityBySku(Request $request) {

        $params = $request->param;

        $series = DB::connection('product')
        ->table('categories_home')
        ->select('name')
        ->where('parent', '!=', 0)
        ->where('status', 1)
        ->get();

        $flag = 0;

        foreach($series as $serie) {
            $table = strtolower($serie->name);

            foreach($params as $param) {
                $sku = $param->sku;
                $quantity = $param->quantity;
                
                $result = DB::connection('product')
                ->table($table)
                ->where('sku', $sku)
                ->update(['stock' => $quantity]);

                if($result) {
                    $flag = 1;
                }
            }
        }

        return $flag;
    }
}
