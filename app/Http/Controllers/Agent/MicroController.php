<?php

namespace App\Http\Controllers\Agent;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\{Agent,
    AgentMoneylog,
    CoinTrade,
    Currency,
    LeverTransaction,
    TransactionComplete,
    TransactionOrder,
    Users,
    UsersWallet,
    CurrencyMatch,
    MicroOrder};

/**
 * 秒合约。
 * Class ReportController
 * @package App\Http\Controllers\Agent
 */
class MicroController extends Controller
{
    
    public function batchRisk(Request $request)
    {
        try {
            $ids = $request->input('ids', []);
            $risk = $request->input('risk', 0);
            $rate = $request->input('rate',null);
            if (empty($ids)) {
                throw new \Exception('请先选择要处理的交易');
            }
            if (!in_array($risk, [-1, 0, 1])) {
                throw new \Exception('风控类型不正确');
            }
            $affect_rows = MicroOrder::where('status', MicroOrder::STATUS_OPENED)
                ->whereIn('id', $ids)
                ->update([
                    'pre_profit_result' => $risk,
                ]);
            return $this->success('本次提交:' . count($ids) . '条,设置成功:' . $affect_rows . '条');
        } catch (\Throwable $th) {
            return $this->error($th->getMessage());
        }
    }
    
}