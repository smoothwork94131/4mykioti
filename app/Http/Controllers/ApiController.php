<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Session;

class ApiController extends Controller
{
    public function updateQuantityBySku(Request $request) {

        $params = $request->orders;

        foreach($params as $param) {
            $manufacturer = $param->name;
            $parts = $param->parts;

            $connection = null;
            if($manufacturer == 'kioti') {
                $connection = DB::connection('product');
            }
            else {
                $connection = DB::connection('other');
            }

            $series = $connection->table('categories_home')
                ->select('name')
                ->where('parent', '!=', 0)
                ->where('status', 1)
                ->get();

            foreach($series as $serie) {
                $table = strtolower($serie->name);
    
                foreach($parts as $part) {
                    $sku = $part->sku;
                    $quantity = $part->quantity;
                    
                    $result = $connection->table($table)
                        ->where('sku', $sku)
                        ->update(['stock' => DB::raw('stock') - $quantity]);
                }
            }
        }

        return true;
    }
}
