<?php 

namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Category;

class SearchController extends Controller{
    public function search(Request $request) {
        $search_word = $_REQUEST['search_word'] ;
        
        $where_clause = "where 
        `sku` like '%{$search_word}%' or
        `category_id` like '%{$search_word}%' or
        `subcategory_id` like '%{$search_word}%' or
        `name` like '%{$search_word}%'" ;
        
        $arr_tbl = array("products") ;
        $sql = "select * from ec_categories ; " ;
        $tbl_info =DB::select($sql);
        $sql = "" ;
        $flag = false ;
        
        
        foreach($tbl_info as $item) {
            $arr_tbl[] = strtolower($item->series) ;
        }

        
        
        for($k = 0 ; $k < count($arr_tbl) ; $k++) {
            if($flag) {
                $sql.=" union all " ;
            } 
            $sql .= "select subcategory_id, name, photo, price, '$arr_tbl[$k]' as `table`  from $arr_tbl[$k] {$where_clause} " ;
            $flag = true ;
        }

        $sql.=" group by `name` order by `name` asc limit 50" ;
        $categoreis =DB::select($sql) ;
        echo json_encode($categoreis) ;

    }
    public function detail(Request $request) {
        
    }
}

?>