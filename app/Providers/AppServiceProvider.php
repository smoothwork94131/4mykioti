<?php

namespace App\Providers;

use App\Classes\GeniusMailer;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use App\Models\Category;
use App\Models\EcCategory;
use App\Models\Product;
use Carbon\Carbon;
use Session;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use App;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        $admin_lang = DB::table('admin_languages')->where('is_default', '=', 1)->first();
        
        App::setlocale($admin_lang->name);

        view()->composer('*', function ($settings) {
            $gs = DB::table('generalsettings')->find(1);
            $settings->with('gs', $gs);
            $settings->with('seo', DB::table('seotools')->find(1));
            $settings->with('categories', Category::where('status', '=', 1)->orderBy('id', 'asc')->get());
            $settings->with('eccategories', EcCategory::select('product')->distinct()->orderBy('product', 'asc')->get());

            if (Session::has('language')) {
                $data = DB::table('languages')->find(Session::get('language'));
                $data_results = file_get_contents(public_path() . '/assets/languages/' . $data->file);
                $lang = json_decode($data_results);
                $settings->with('langg', $lang);
            } else {
                $data = DB::table('languages')->where('is_default', '=', 1)->first();
                $data_results = file_get_contents(public_path() . '/assets/languages/' . $data->file);
                $lang = json_decode($data_results);
                $settings->with('langg', $lang);
            }

            if (!Session::has('popup')) {
                $settings->with('visited', 1);
            }
            Session::put('popup', 1);

            if ($gs->age_checker) {
                if (!Session::has('age')) {
                    $settings->with('age_no_setted', 1);
                    $settings->with('myage', 15);

                } else {
                    $settings->with('myage', Session::get('age'));
                }

                // $settings->with('age_no_setted', 1);
            } else {
                Session::forget('age');
                $settings->with('myage', 21);
            }

            $solo_mode = $gs->solo_mode;
            $solo_category = $gs->solo_category;
            
            $solo_category_info = array();
            $solo_products = array();
            
            if($solo_mode == 1) {
                $solo_category_info = Category::find($solo_category);
                $solo_products = Product::where('category_id', $solo_category)->paginate(24);

                $settings->with('solo_mode', $solo_mode);
                $settings->with('solo_category', $solo_category);
                $settings->with('solo_category_info', $solo_category_info);
            }
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

        Collection::macro('paginate', function ($perPage, $total = null, $page = null, $pageName = 'page') {
            $page = $page ?: LengthAwarePaginator::resolveCurrentPage($pageName);
            return new LengthAwarePaginator(
                $this->forPage($page, $perPage),
                $total ?: $this->count(),
                $perPage,
                $page,
                [
                    'path' => LengthAwarePaginator::resolveCurrentPath(),
                    'pageName' => $pageName,
                ]
            );
        });
    }
}
