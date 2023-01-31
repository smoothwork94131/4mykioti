<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdvertisingProduct extends Model
{
    protected $fillable = ['adplan_id', 'product_id', 'category_id', 'viewed_count', 'vendor_id'];
    public $timestamps = false;
    
    protected $dates = ['created_at'];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->created_at = $model->freshTimestamp();
        });
    }

    function product()
    {
        return $this->hasOne('App\Models\Product', 'id', 'product_id');
    }

    public function adplan()
    {
        return $this->belongsTo('App\Models\AdvertisingPlan')->withDefault(function ($data) {
            foreach ($data->getFillable() as $dt) {
                $data[$dt] = __('Deleted');
            }
        });
    }

    public function vendor()
    {
        return $this->belongsTo('App\Models\User')->withDefault(function ($data) {
            foreach ($data->getFillable() as $dt) {
                $data[$dt] = __('Deleted');
            }
        });
    }
}