<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdvertisingPlan extends Model
{
    protected $fillable = ['name', 'category_id', 'view_count', 'price', 'product_count'];
    public $timestamps = false;

    public function category()
    {
        return $this->belongsTo('App\Models\Category')->withDefault(function ($data) {
            foreach ($data->getFillable() as $dt) {
                $data[$dt] = __('Deleted');
            }
        });
    }


    public function products() {
        return $this->hasMany('App\Models\AdvertisingProduct', 'adplan_id');
    }

}