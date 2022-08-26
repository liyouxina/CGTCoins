<?php


namespace App\Http\Controllers\Api;


use App\AccountLog;
use App\CurrencyProjectOrder;
use App\CurrencyProject;
use App\Users;
use App\UsersWallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CurrencyProjectController extends Controller
{
    public function projectList(Request $request){
        $limit = $request->get('limit', 20);
        $page = $request->get('page', 1);
//        $model = new CurrencyProject();

        $list = CurrencyProject::where('status',1)
            ->skip($limit*($page-1))->take($limit)
            ->select(['title','summary','amount','price','start_at','end_at','logo','id','currency_id','pay_currency_id'])->orderBy('start_at','desc')->get();
//        foreach($list as &$v){
//            $v['time_status']
//        }
        return $this->success(['list' => $list]);
    }

    public function projectDetail(Request $request){
        $id = $request->get('project_id');
        $project = CurrencyProject::find($id);
        if(!$project){
            return $this->error('project not found');
        }
        if($project->status != 1){
            return $this->error('project status error');
        }
        return $this->success([
            'info' => $project
        ]);
    }


    public function postOrder(Request $request){
        $id = $request->get('project_id');
        $amount = $request->get('amount');
        $pay_currency_id = $request->get('pay_currency');
        $userId = Users::getUserId();
        $project = CurrencyProject::find($id);
        if(!$project){
            return $this->error('找不到项目');
        }
        if($project->status != 1){
            return $this->error('project status error');
        }
        if($project->time_status != 2){
            return $this->error('project time out');
        }
        if(!in_array($pay_currency_id,[1,2,3])){
            return $this->error('非法支付币种');
        }
        if(bc_sub($project->amount,bc_add($amount,$project->total_sell,8))< 0){
            return $this->error('already sold out');
        }
        switch($pay_currency_id){
            case 1:
                //  $wallet = UsersWallet::where("user_id", $userId)
                // ->where("currency", 1)
                // ->lockForUpdate()
                // ->first();
                $p = $project->btc_price;
                $cost = $project->btc_price * $amount;
                break;
            case 2:
                //  $wallet = UsersWallet::where("user_id", $userId)
                //     ->where("currency", 2)
                //     ->lockForUpdate()
                //     ->first();
                $p = $project->eth_price;
                $cost = $project->eth_price * $amount;
                break;
            case 3:
                //  $wallet = UsersWallet::where("user_id", $userId)
                //     ->where("currency", $project->pay_currency_id)
                //     ->lockForUpdate()
                //     ->first();
                $p = $project->price;
                $cost = $project->price * $amount;
                break;
                default:
                     return $this->error('非法支付币种');
        }
        $wallet = UsersWallet::where("user_id", $userId)
            ->where("currency", $pay_currency_id)
            ->lockForUpdate()
            ->first();
        if(!$wallet){
            return $this->error('wallet not found');
        }
        $op_wallet = UsersWallet::where('user_id',$userId)
            ->where('currency',$project->currency_id)
            ->first();
        if(!$op_wallet){
            return $this->error('wallet not found');
        }
        // $price = bc_mul($project->price,$amount,8);
        if($cost>$wallet->change_balance){
            // var_dump([$project->pay_currency_id,$userId]);
            return $this->error('钱包余额不足.');
        }
        DB::beginTransaction();
        try{
            $result = change_wallet_balance($wallet,
                2,
                -$cost,
                AccountLog::IEO_OPERATION,
                'ieo order');
            if ($result !== true) {
                throw new \Exception($result);
            }
            //币钱包加钱
            $result = change_wallet_balance($op_wallet,
                2,
                $amount,
                AccountLog::IEO_OPERATION,
                'ieo order',
                true);

            $model = new CurrencyProjectOrder();
            $model->u_id = $userId;
            $model->project_id = $project->id;
            $model->currency_id = $project->currency_id;
            $model->pay_currency_id = $project->pay_currency_id;
            $model->coin_amount = $amount;
            $model->price = $p;
            $model->total_price = $cost;
            $model->created_at = date('Y-m-d H:i:s');
            $model->save();
            DB::commit();
        }catch (\Exception $e){
            DB::rollBack();
            return $this->error($e->getMessage());
        }
        return $this->success('success');


    }
}
