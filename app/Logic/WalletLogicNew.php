<?php


namespace App\Logic;

use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

class WalletLogicNew
{
    private static $url = "https://www.bitkein.top/api/source";
    public static $appId = "82c82f62-d7a0-5f3e-ab17-e9a02dffb061";
    private static $appSecret = '5de793ebffeceab2b4cdf30d57c965';

    public static function getAddress($currencyName){
        $data = [
            'currency_name' => $currencyName,
            'uuid' => self::$appId
        ];
        $url = self::$url.'/address';
        $sign = self::create_signature($data,$url);
        $http_client = new Client();
        $data['sign'] = $sign;
        // $data['decode_sign'] = base64_decode($data['sign']);
        // var_dump($data);exit;
        $response = $http_client->post($url,[
            'form_params' => $data
        ]);
        $result = json_decode($response->getBody()->getContents());

        if ($result->status != 200) {
            // var_dump($result);exit;
            return null;
            throw new \Exception('请求地址接口出错');
        }else{
            return $result->data;
        }
    }
    
    public static function getPrivate($address){
        $data = [
            'address' => $address,
            'uuid' => self::$appId
        ];
        $url = self::$url.'/address/private';
        $sign = self::create_signature($data,$url);
        $http_client = new Client();
        $data['sign'] = $sign;
        $response = $http_client->post($url,[
            'form_params' => $data
        ]);
        $result = json_decode($response->getBody()->getContents());

        if ($result->status != 200) {
            var_dump($result);exit;
            return null;
        }else{
            return $result->data;
        }
    }

    public static function create_signature($params, $uri_path, $timestamp = null)
    {

        $salt = self::$appSecret;
        if (!ksort($params))
            return false;

        $method     = strtolower($uri_path);
        $sign_timestamp  = $timestamp ?? time();
        $paramData  = urldecode(http_build_query($params));

        $sign = substr(sha1($paramData . $salt . $sign_timestamp . $method), 0, 15);

        if (!$timestamp) {
            $res = [
                'signature'      => $sign,
                'timestamp' => $sign_timestamp
            ];

            return base64_encode(json_encode($res));
        } else {

            return $sign;
        }
    }
}
