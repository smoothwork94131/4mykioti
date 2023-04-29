<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Session;

class ApiController extends Controller
{
    public function updateQuantityBySku(Request $request) {
        $sku = $request->sku;
        $quantity = $request->quantity;

        $series = DB::table('categories_home')
            ->select('name')
            ->where('parent', '!=', 0)
            ->where('status', 1)
            ->get();

        $flag = 0;

        foreach($series as $serie) {
            $table = strtolower($serie->name);

            $result = DB::table($table)
                ->where('sku', $sku)
                ->update(['stock' => $quantity]);

            if($result) {
                $flag = 1;
            }
        }

        return $flag;
    }
}
