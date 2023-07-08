<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    |
    | This option defines the default log channel that gets used when writing
    | messages to the logs. The name specified in this option should match
    | one of the channels defined in the "channels" configuration array.
    |
    */

    'default' => env('LOG_CHANNEL', 'stack'),

    /*
    |--------------------------------------------------------------------------
    | Log Channels
    |--------------------------------------------------------------------------
    |
    | Here you may configure the log channels for your application. Out of
    | the box, Laravel provides a variety of powerful log handlers / formatters
    | that utilize the Monolog library. However, you free to specify any of
    | the additional handlers provided by Monolog or even implement your own.
    |
    | Supported: "single", "daily", "slack", "syslog",
    |            "errorlog", "custom", "stack"
    |
    */

    'channels' => [
        'stack' => [
            'driver' => 'stack',
            'channels' => ['single'],
            'ignore_exceptions' => false,
        ],

        'single' => [
            'driver' => 'single',
            'path' => storage_path('logs/laravel.log'),
            'level' => env('LOG_LEVEL', 'debug'),
        ],

        'api_quantity' => [
            'driver' => 'daily',
            'path' => storage_path('logs/api/quantity.log'),
            'level' => 'debug',
            'days' => 14,
            'permission' => 0777
        ],

        'api_price' => [
            'driver' => 'daily',
            'path' => storage_path('logs/api/price.log'),
            'level' => 'debug',
            'days' => 14,
            'permission' => 0777
        ],

        'api_phone' => [
            'driver' => 'daily',
            'path' => storage_path('logs/api/phone.log'),
            'level' => 'debug',
            'days' => 14,
            'permission' => '0777'
        ],

        'api_shopify' => [
            'driver' => 'daily',
            'path' => storage_path('logs/api/shopify.log'),
            'level' => 'debug',
            'days' => 14,
            'permission' => '0777'
        ],

        // ...
    ],

];
