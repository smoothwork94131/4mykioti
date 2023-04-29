<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Wishlist;
use Auth;
use Illuminate\Support\Facades\DB;


class WishlistController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function wishlists(Request $request)
    {
        $sort = '';
        $user = Auth::guard('web')->user();
        $wishlists = array();
        // Search By Sort

        $wishes = Wishlist::where('user_id', '=', $user->id)->get();

        foreach($wishes as $wish) {
            $wish_id = $wish->id;
            $table = $wish->series;
            $product_id = $wish->product_id;
            $product = DB::table($table . ' as products');
            $product = $product->where('products.id', $product_id);
            if($table == 'products') {
                $product = $product->select('products.*');
            }
            else {
                $product = $product->leftjoin($table . '_categories as category', 'products.category_id', '=', 'category.group_Id');
                $product = $product->select('products.*', 'category.model', 'category.section_name', 'category.group_name');
            }
            
            $product = $product->get();
            $product = $product[0];

            if($product) {
                $product->series = $table;
                $product->wish_id = $wish_id;
                $wishlists[] = $product;
            }
        }

        // dd($wishlists);

        $wishlists = collect($wishlists);

        if (!empty($request->sort)) {
            $sort = $request->sort;
            
            if ($sort == "date_asc") {
                $wishlists = $wishlists->sortBy('products.id')->paginate(8);
            } else if ($sort == "date_desc") {
                $wishlists = $wishlists->sortByDesc('products.')->paginate(8);
            } else if ($sort == "price_asc") {
                $wishlists = $wishlists->sortBy('price')->paginate(8);
            } else if ($sort == "price_desc") {
                $wishlists = $wishlists->sortByDesc('price')->paginate(8);
            }

            if ($request->ajax()) {
                return view('front.pagination.wishlist', compact('user', 'wishlists', 'sort'));
            }

            return view('user.wishlist', compact('user', 'wishlists', 'sort'));
        }

        if ($request->ajax()) {
            return view('front.pagination.wishlist', compact('user', 'wishlists', 'sort'));
        }
        return view('user.wishlist', compact('user', 'wishlists', 'sort'));
    }

    public function addwish($series, $prod_id)
    {
        $user = Auth::guard('web')->user();
        $data[0] = 0;
        $ck = Wishlist::where('user_id', '=', $user->id)->where('series', $series)->where('product_id', '=', $prod_id)->get()->count();
        if ($ck > 0) {
            return response()->json($data);
        }
        $wish = new Wishlist();
        $wish->user_id = $user->id;
        $wish->series = $series;
        $wish->product_id = $prod_id;
        $wish->save();
        $data[0] = 1;
        $data[1] = count($user->wishlists);
        return response()->json($data);
    }

    public function removewish($id)
    {
        $user = Auth::guard('web')->user();
        $wish = Wishlist::findOrFail($id);
        $wish->delete();
        $data[0] = 1;
        $data[1] = count($user->wishlists);
        return response()->json($data);
    }

}
