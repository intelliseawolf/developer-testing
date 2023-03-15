<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    function getData(Request $request) {
        $params = $request->all();
        $jsonData = file_get_contents(public_path('data.json'));
        $result = [];
        $data = json_decode($jsonData, true)['Items'];
        if (array_key_exists('years', $params) && $params['years']) {
            $years = $params['years'];
        };
        if (array_key_exists('display', $params) && $params['display']) {
            $display = $params['display'];
        };

        if (array_key_exists('companyName', $params) && $params['companyName']) {
            $data = array_filter($data, function($item) use ($params) {
                return strpos($item['Company'], $params['companyName']) !== false;
            });
        };

        foreach($data as $item) {
            if (array_key_exists('currency', $params) && $params['currency'] && $item['Quote'] && count($item['Quote'])) {
                $item['Quote'] = array_filter($item['Quote'], function($quoteItem) use ($params) {
                    return strtolower($quoteItem['Currency']) === strtolower($params['currency']);
                });
            };

            array_push($result, $item);
        }

        return $result;
    }
}
