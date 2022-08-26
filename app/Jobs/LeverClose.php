<?php

//decode by http://www.yunlu99.com/
namespace App\Jobs;


use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\DB;
use App\AccountLog;
use App\LeverTransaction;
use App\UsersWallet;
class LeverClose implements ShouldQueue
{
	use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
	protected $task_list;
	protected $deduct_balance;
	public function __construct($task_list, $deduct_balance = true)
	{
		$this->task_list = $task_list;
		$this->deduct_balance = $deduct_balance;
	}
	public function handle()
	{
		$FffDejv = LeverTransaction::whereIn("id", $this->task_list)->where("status", LeverTransaction::CLOSING)->get();
		foreach ($FffDejv as $aNuDSLJ => $trade) {
			try {
				DB::transaction(function () use($trade) {
					try {
						if ($this->deduct_balance) {
							if (!$this->deductBalance($trade)) {
								throw new \Exception("平仓扣除资金失败");
							}
						}
						$trade->status = LeverTransaction::CLOSED;
						$trade->fact_profits = $trade->profits;
						$trade->complete_time = microtime(true);
						$IGWOLxQ = $trade->save();
						if (!$IGWOLxQ) {
							throw new \Exception("平仓失败:更新平仓状态失败");
						}
					} catch (\Exception $duYIQuv) {
						throw $duYIQuv;
					}
				});
			} catch (\Exception $UlBZGEJ) {
				echo "File:" . $UlBZGEJ->getFile() . PHP_EOL;
				echo "Line:" . $UlBZGEJ->getLine() . PHP_EOL;
				echo "Message:" . $UlBZGEJ->getMessage() . PHP_EOL;
			}
		}
	}
	public function deductBalance($trade)
	{
		try {
			DB::transaction(function () use($trade) {
				$XrpKzqQ = UsersWallet::where("user_id", $trade->user_id)->where("currency", $trade->legal)->lockForUpdate()->first();
				$GwGJrRJ = bc_add($trade->caution_money, $trade->profits);
				$AswCBsv = bc_add($XrpKzqQ->lever_balance, $GwGJrRJ);
				$jZfhfuQ = 0;
				$liXXOcv = ["trade_id" => $trade->id, "caution_money" => $trade->caution_money, "profit" => $trade->profits, "diff" => $jZfhfuQ];
				$kbGjijv = change_wallet_balance($XrpKzqQ, 3, $GwGJrRJ, AccountLog::LEVER_TRANSACTION_ADD, "平仓资金处理", false, 0, $jZfhfuQ == 0 ? 0 : 1, serialize($liXXOcv), true, true);
				if ($kbGjijv !== true) {
					throw new \Exception($kbGjijv);
				}
			});
			return true;
		} catch (\Exception $TACnEwQ) {
			echo "File:" . $TACnEwQ->getFile() . PHP_EOL;
			echo "Line:" . $TACnEwQ->getLine() . PHP_EOL;
			echo "Message:" . $TACnEwQ->getMessage() . PHP_EOL;
			return false;
		}
	}
}