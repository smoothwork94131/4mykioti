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
        
        $sql = "select * from `categories` where parent > 0 " ;

        $sql ="select * from products "; 
        $categoreis =DB::select($sql);

        
        echo json_encode($categoreis) ;
    }
    public function detail(Request $request) {
        
    }
}

?>