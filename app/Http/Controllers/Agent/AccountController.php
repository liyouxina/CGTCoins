<?php

//decode by http://www.yunlu99.com/
namespace App\Http\Controllers\Agent;


use App\AgentMoneylog;
use App\Users;
class AccountController extends Controller
{
	public function moneyLog()
	{
		$ZNMeHSv = request()->input("start", "");
		$WccaxzJ = request()->input("end", "");
		$xpPSXaJ = new AgentMoneylog();
		if ($ZNMeHSv && $WccaxzJ) {
			$ZNMeHSv = strtotime($ZNMeHSv);
			$WccaxzJ = strtotime($WccaxzJ);
			$xpPSXaJ = $xpPSXaJ->whereBetween("created_time", [$ZNMeHSv, $WccaxzJ]);
		}
		$FHtaqJQ = Users::find(Users::getUserId());
		$BmIWWlv = $xpPSXaJ->where("agent_id", $FHtaqJQ->agent_id)->paginate();
		return $this->layuiData($BmIWWlv);
	}
}