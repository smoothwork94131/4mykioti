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

Route::post('/login', 'API\AuthController@login')->name('login.api');
Route::post('/register','API\AuthController@register')->name('register.api');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', 'API\AuthController@logout')->name('logout.api');
    Route::post('/load_partnum_from_image', 'API\PhoneController@loadPartNumFromImage');
    Route::post('/update_quantity_from_phone', 'API\PhoneController@updateQuantityBySku');
});

Route::middleware('check.api.ip')->group(function () {
    Route::post('/update_quantity', 'API\QuantityController@updateQuantityBySku');
    Route::post('/update_price', 'API\PriceController@updatePriceBySku');
});