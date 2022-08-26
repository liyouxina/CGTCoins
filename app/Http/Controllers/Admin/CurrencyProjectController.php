<?php


namespace App\Http\Controllers\Admin;


use App\Currency;
use App\CurrencyProject;
use App\AccountLog;
use App\UsersWallet;
use App\CurrencyProjectOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CurrencyProjectController extends Controller
{


    public function projectList(Request $request){
        $limit = $request->get('limit', 20);
        $model = new CurrencyProject();
        $currency_id = $request->get('currency_id');
        $where = [];
        if($currency_id){
            $where['currency_id'] = $currency_id;
        }
        $list = $model->where($where)->paginate($limit);
        return $this->layuiData($list);
    }

    public function projectDetail(Request $request){
        $id = $request->get('project_id');
        $project = CurrencyProject::find($id);
        return $this->success($project);
    }
    public function newProject(Request $request){
        $currencyId = $request->get('currency_id');
        $payCurrencyId = $request->get('pay_currency_id');
        $title = $request->get('title');
        $summary = $request->get('summary');
        $content = $request->get('content');
        $startAt = $request->get('start_at');
        $endAt = $request->get('end_at');
        $whiteBook = $request->get('white_book');
        $price = $request->get('price');
        $link = $request->get('link');
        $logo = $request->get('logo');
        $amount = $request->get('amount');
        if(empty($currencyId) || empty($title) || empty($summary) || empty($content) || empty($startAt) || empty($endAt) || empty($whiteBook) || empty($link)){
            return $this->error('内容不能为空');
        }
        $currency = Currency::find($currencyId);
        if(!$currency){
            return $this->error('币种不存在');
        }
        $payCurrency = Currency::find($payCurrencyId);
        if(!$payCurrency){
            return $this->error('支付币种不存在');
        }
        $res = CurrencyProject::where('currency_id',$currencyId)->first();
        if($res){
            return $this->error('该币种已成立项目，不能重复');
        }
        if(strtotime($startAt) < time() || strtotime($endAt) < time()){
            return $this->error('开始时间与结束时间不得早于当前时间');
        }
        CurrencyProject::insert([
            'currency_id' => $currencyId,
            'title' => $title,
            'summary' => $summary,
            'content' => $content,
            'white_book' => $whiteBook,
            'link' => $link,
            'price' => $price,
            'pay_currency_id' => 3,
            'start_at' => $startAt,
            'end_at' => $endAt,
            'logo' => $logo,
            'amount' => $amount
        ]);
        return $this->success('创建成功');
    }

    public function editProject(Request $request){
       
        $projectId = $request->get('project_id');
        $title = $request->get('title');
        $summary = $request->get('summary');
        $content = $request->get('content');
        $startAt = $request->get('start_at');
        $price = $request->get('price');
        $endAt = $request->get('end_at');
        $whiteBook = $request->get('white_book');
        $logo = $request->get('logo');
        $link = $request->get('link');
        $status = $request->get('status');
        $amount = $request->get('amount');

        if(empty($projectId) || empty($title) || empty($summary) || empty($content) || empty($startAt) || empty($endAt) || empty($whiteBook) || empty($link)){
            return $this->error('内容不能为空');
        }

        $project = CurrencyProject::find($projectId);
        if(!$project){
            return $this->error('找不到此项目');
        }
        // if(strtotime($project->start_at) < time()){
        //     return $this->error('项目已开启，不可编辑');
        // }
        if($project->status == 2){
            return $this->error('此项目已完结');
        }
        $data = [
            'title' => $title,
            'summary' => $summary,
            'content' => $content,
            'white_book' => $whiteBook,
            'price' => $price,
            'link' => $link,
            'start_at' => $startAt,
            'logo' => $logo,
            'end_at' => $endAt,
            'status' => $status,
            'amount' => $amount
        ];
        CurrencyProject::where('id',$projectId)->update($data);
        return $this->success('创建成功');
    }
 public function projectOrderList(Request $request){
        $id = $request->get('project_id');
        $project = CurrencyProject::find($id);
        $limit = $request->get('limit');
        // $type = $request->get('type');
        $search = $request->get('search');
        // $status = $request->get('status');
        if(!$project){
            return $this->error('找不到项目');
        }
        $where = [];
       
        $model =  CurrencyProjectOrder::join('users','users.id','=','u_id');
        if($search){
            $model = $model->where("phone", 'like', '%' . $search . '%')
                ->orwhere('email', 'like', '%' . $search . '%')
                ->orWhere('account_number', 'like', '%' . $search . '%');
        }
        $orders =$model->where('project_id',$id)->where($where)
            ->select(['currency_project_order.*','users.account_number'])->paginate($limit);
        return $this->layuiData($orders);
    }
    
    public function unlockOrder(Request $request){
        $id = $request->get('id');
        $order = CurrencyProjectOrder::find($id);
        if($order->is_unlock){
            return $this->success('已解冻');
        }
        $cost = $order->coin_amount;
        $op_wallet = UsersWallet::where('user_id',$order->u_id)
            ->where('currency',$order->currency_id)
            ->first();
         DB::beginTransaction();
        try{
            $result = change_wallet_balance($op_wallet,
                2,
                -$cost,
                AccountLog::IEO_OPERATION,
                'ieo order unlock',
                true);
            if ($result !== true) {
                throw new \Exception($result);
            }
            //币钱包加钱
            $result = change_wallet_balance($op_wallet,
                2,
                $cost,
                AccountLog::IEO_OPERATION,
                'ieo order '
            );

            $order->is_unlock = 1;
            $order->save();
            DB::commit();
        }catch (\Exception $e){
            DB::rollBack();
            return $this->error($e->getMessage());
        }
        return $this->success('解冻成功');
    }


    public function projectOrderView(){
        return view('admin.currency.project_orders');
    }


    public function projectView(){
        return view('admin.currency.project_list');
    }
    public function projectDetailView(){
        $currencies =  Currency::where('id', '>', 0)->get();
        return view('admin.currency.project_detail')->with('currencies', $currencies);
    }
}
