<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'API\AuthController@login')->name('login.api')->withoutMiddleware("throttle:api");
Route::post('/register','API\AuthController@register')->name('register.api')->withoutMiddleware("throttle:api");

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/logout', 'API\AuthController@logout')->name('logout.api')->withoutMiddleware("throttle:api");
    
    // This api is for inventory in mobile.
    Route::post('/load_partnum_from_image', 'API\PhoneController@loadPartNumFromImage')->withoutMiddleware("throttle:api");
    Route::post('/update_quantity_from_phone', 'API\PhoneController@updateQuantityBySku')->withoutMiddleware("throttle:api");
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

// This api is for sale in store.
Route::group(['middleware' => 'check.api.ip'], function() {
    Route::post('/update_quantity', 'API\StoreController@updateQuantityBySku')->withoutMiddleware("throttle:api");
    Route::post('/update_price', 'API\StoreController@updatePriceBySku')->withoutMiddleware("throttle:api");
});