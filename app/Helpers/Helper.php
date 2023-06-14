<?php

namespace App\Helpers;

class Helper {

    public static function reversePartsName($name) {
        $words = explode(',', $name);
        // Remove leading/trailing spaces from each word and remove extra spaces
        $words = array_map(function ($word) {
            $word = trim(preg_replace('/\s+/', ' ', $word));
            if(strpos($word, ' ') !== false) {
                return explode(' ', $word);
            }
            else {
                return $word;
            }
        }, $words);

        $new_word = [];
        foreach($words as $word) {
            if(is_array($word)) {
                foreach($word as $item) {
                    array_push($new_word, $item);    
                }
            }
            else {
                array_push($new_word, $word);
            }
        }

        // Filter and extract only the desired words
        $desiredWords = array_filter($new_word, function ($word) {
            return in_array(strtolower($word), ['filter', 'oil', 'fuel', 'hydraulic', 'pressure']);
        });

        if(isset($desiredWords) && count($desiredWords) > 0) {
            if(strtolower($desiredWords[0]) == 'filter') {
                unset($desiredWords[0]);
                array_push($desiredWords, 'FILTER');
            }
        }

        // Join the desired words back into a string
        $updatedName = implode(' ', $desiredWords);
        return $updatedName;
    }    
}