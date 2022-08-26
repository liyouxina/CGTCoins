<?php


namespace App\Http\Controllers\Api;


use App\AccountLog;
use App\LegalDealSend;
use App\Logic\WalletLogic;

use App\Logic\WalletLogicNew;
use App\Logic\TranslationLogic;
use App\MarketHour;
use App\Setting;
use App\Users;
use App\UsersWallet;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use App\Jobs\ZTPayAddressWithdraw;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\URL;


class NoticeController extends Controller
{
    public function walletNotify(Request $request){
        $param = $request->all();

        //判断签名
        $sign = $param['sign'];
        if(!isset($param['sign'])){
           return $this->error('sign missed');
        }
        unset($param['sign']);
        $sign = base64_decode($sign);
        //json_decode
        $sign_arr = json_decode($sign, true);

        $url = URL::full();
        $makeSign = WalletLogicNew::create_signature($param,$url,$sign_arr['timestamp']);
        if ($makeSign != $sign_arr['signature']){
            return $this->error('signature error');
        }
        $record = DB::table('ztpay_log')->where('unique_key',$param['hash'])->first();

        $address = $param['to'];
        $currencNameId = [
            'BTC' => 1,
            'ETH' => 2,
            'USDT_ERC20' => 3,
            'USDT_OMNI' => 3,
            'USDT_TRC20' => 3,
            'TRX' => 34
            ];
        if(!isset($currencNameId[$param['currency_name']])){
            echo '币种不存在';exit;
        }
        $currencyId= $currencNameId[$param['currency_name']];
        $amount = $param['value'];
        if(!$record){
            $legal = UsersWallet::where('currency',$currencyId)->where(function($query) use($address){
                return $query->where('address',$address)->orWhere('address_2',$address)->orWhere('address_3',$address)
               ;
            })
                ->lockForUpdate()
                ->first();
            if(!$legal){
//                log_exception('找不到钱包',$param);
                return $this->error('找不到钱包');
            }
            DB::beginTransaction();
            try{

                change_wallet_balance(
                    $legal,2,
                    $amount,
                    AccountLog::WALLET_CURRENCY_IN,
                    '充币记录',
                    false,
                    0,
                    0,
                    serialize([
                        'address_from' => $param['from'],
                        'address_to' => $param['to']
                    ]),
                    false,
                    true
                );
                DB::table('ztpay_log')->insert([
                    'unique_key'=>$param['hash'],
                    'add_from' => $param['from'],
                    'add_to' => $param['to'],
                    'wallet_id' => $legal->id,
                    'amount' => $amount,
                    'body' => json_encode($param),
                    'created_at'=>date("Y-m-d H:i:s")]);
                DB::commit();
            }catch (\Exception $e){
                DB::rollBack();
                echo 'error'.$e->getMessage();exit;
            }
        }
        echo 'success';
        return;
    }
    public function walletNotifyNew(Request $request){

        $param = $request->getContent();
        $param = json_decode($param,true);
        $data = $param['data'];
        $sign = $param['sign'];
        if(!$data || !$sign){
            // var_dump($request->getContent());
            // log_exception('钱包回调请求数据异常',$param);
                return $this->error(getLang('a232'));
        }
        $data['appid'] = WalletLogic::$appId;
        if(WalletLogic::getSign($data) != $sign){
            // log_exception('钱包签名异常',$param);
            return $this->error(getLang('a233'));
        }
        if($data['type'] == 2){
            //充值转出成功后 删除转出队列
            WalletLogic::delWithdrawQueue($data['from']);
            echo 'success';exit;
        }
        $address = $data['to'];

        $amount = $data['amount'];
        //先查询是否有值
        $record = DB::table('ztpay_log')->where('unique_key',$data['hash'])->first();
        if(!$record){
            if(WalletLogic::isChangeAddress($address)){
                echo 'success';exit; // 过滤掉充值零钱的消息
            }
            $legal = UsersWallet::where('address',$address)->orWhere('address_2',$address)
                ->lockForUpdate()
                ->first();
            if(!$legal){
                // log_exception('找不到钱包',$param);
                return $this->error(getLang('a10'));
            }
            DB::beginTransaction();
            try{

                change_wallet_balance(
                    $legal,1,
                    $amount,
                    AccountLog::WALLET_CURRENCY_IN,
                    '充币记录',
                    false,
                    0,
                    0,
                    serialize([
                        'address_from' => $data['from'],
                        'address_to' => $data['to']
                    ]),
                    false,
                    true
                );
                DB::table('ztpay_log')->insert(['unique_key'=>$data['hash'],'body' => json_encode($param),'created_at'=>date("Y-m-d H:i:s")]);
                DB::commit();
            }catch (\Exception $e){
                DB::rollBack();
                throw $e;
            }
        }

//        $amount = bc_sub($data['amount'],$data['fee_amount'],8);

        try{
//            ZTPayAddressWithdraw::dispatch($address)->onConeection('redis')->onQueue('withdraw_coin')->delay(Carbon::now()->addMinutes(10));
        }catch (\Exception $e){
            // throw $e;
        }
        echo 'success';

        exit;
        return $this->success('');
    }
public function test(){
       
    }
}
