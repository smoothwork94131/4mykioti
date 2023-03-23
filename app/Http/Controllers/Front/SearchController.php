<?php 

namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Category;

class SearchController extends Controller{
    
    public function index(Request $request, $keyword = "") {
        $search_word = $keyword;
        
        $arr_tbl = array("products");
        $sql = "" ;
        $flag = false ;
        $products = DB::table("products")
            ->select("*", DB::raw("'product' as `table`"))
            ->where('sku', 'like', '%'. $search_word .'%')
            ->orWhere('category_id', 'like', '%'. $search_word .'%')
            ->orWhere('subcategory_id', 'like', '%'. $search_word .'%')
            ->orWhere('name', 'like', '%'. $search_word .'%')
            ->get();

        return view('front.search', compact('products'));
    }
    
    public function search(Request $request) {
        $search_word = $_REQUEST['search_word'] ;
        $tbl_name = $_REQUEST['key'] ;

        
    
        $where_clause = "where 
        `sku` like '%{$search_word}%' or
        `category_id` like '%{$search_word}%' or
        `subcategory_id` like '%{$search_word}%' or
        `name` like '%{$search_word}%'" ;
        
    
        if($tbl_name == "") {
            $sql = "select * from categories where parent > 0 and `status` = 1 ; " ;
        } else {
            $sql = "select * from categories where `name` = '{$tbl_name}' " ;
            $category_info =DB::select($sql);
            $parent_id = $category_info[0]->id ;
            $sql = "select * from categories where parent = {$parent_id}" ;
            
        }   
        
        $tbl_info =DB::select($sql);

        $sql = "" ;
        $flag = false ;
        
        
        foreach($tbl_info as $item) {
            $arr_tbl[] = strtolower($item->name) ;
        }

        for($k = 0 ; $k < count($arr_tbl) ; $k++) {
            if($flag) {
                $sql.=" union all " ;
            } 
            $sql .= "select subcategory_id, name, photo, price, '$arr_tbl[$k]' as `table`  from $arr_tbl[$k] {$where_clause} " ;
            $flag = true ;
        }

        echo $sql ;
        exit ;
        $sql.=" limit 50" ;


        $categoreis =DB::select($sql) ;
        echo json_encode($categoreis) ;
    }
}

?>