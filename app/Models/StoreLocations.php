<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoreLocations extends Model
{
    protected $fillable = ['name', 'address', 'city', 'state', 'zip', 'country', 'lat', 'lng', 'contact_name', 'contact_number', 'contact_email', 'hours', 'facebook_url', 'youtube_url'];

    public $timestamps = false;

    public function products()
    {
        return $this->hasMany('App\Models\Product', 'location_id');
    }
}
