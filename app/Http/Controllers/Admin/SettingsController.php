<?php

//decode by http://www.yunlu99.com/
namespace App\Http\Controllers\Admin;


use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
class SettingsController extends Controller
{
	public function index()
	{
		$uOQnHZv = Setting::getValueByKey("user_bonus");
		$ZkqFehJ = Setting::getValueByKey("ecology_bonus");
		$GWfXiBQ = json_decode($uOQnHZv);
		$ZkqFehJ = json_decode($ZkqFehJ);
		return view("admin.settings.index", ["bouns" => $GWfXiBQ, "ecology" => $ZkqFehJ]);
	}
	public function base()
	{
		$DgZABTQ = Setting::getValueByKey("rate_exchange");
		$cNTpvTJ = Setting::getValueByKey("company_eth_address");
		$yJSfCpQ = Setting::getValueByKey("lock_daily_return");
		$qiSeGQv = Setting::getValueByKey("version", "1.0");
		$VIuYNaQ = Setting::getValueByKey("transaction_fee", []);
		$VIuYNaQ = @json_decode($VIuYNaQ, true);
		$ZrDzDOJ = array("rate_exchange" => $DgZABTQ, "lock_daily_return" => $yJSfCpQ, "company_eth_address" => $cNTpvTJ, "version" => $qiSeGQv);
		return view("admin.settings.base", ["results" => $ZrDzDOJ, "transaction_fee" => $VIuYNaQ]);
	}
	public function setBase(Request $request)
	{
		$XKQpzuQ = $request->all();
		$vKttpTv = array("service_one_min" => $XKQpzuQ["service_one_min"], "service_one_max" => $XKQpzuQ["service_one_max"], "service_one_proportion" => $XKQpzuQ["service_one_proportion"], "service_two_min" => $XKQpzuQ["service_two_min"], "service_two_max" => $XKQpzuQ["service_two_max"], "service_two_proportion" => $XKQpzuQ["service_two_proportion"], "service_three_min" => $XKQpzuQ["service_three_min"], "service_three_max" => $XKQpzuQ["service_three_max"], "service_three_proportion" => $XKQpzuQ["service_three_proportion"]);
		foreach ($XKQpzuQ as $NiyvIJv => $DuilxqQ) {
			if (isset($vKttpTv[$NiyvIJv])) {
				continue;
			}
			switch ($NiyvIJv) {
				case "rate_exchange":
					break;
				case "company_eth_address":
					break;
				case "lock_daily_return":
					break;
				case "version":
					break;
			}
			Setting::updateValueByKey($NiyvIJv, $DuilxqQ);
		}
		$vKttpTv = json_encode($vKttpTv);
		Setting::updateValueByKey("transaction_fee", $vKttpTv);
		return $this->success("操作成功");
	}
	public function Insert()
	{
		$dWkaiJJ = Input::get("bonus", "");
		$ppHvNiv = Input::get("total_arr", "");
		$uwGSJSQ = Input::get("ecology", "");
		$qKOlGmQ = Input::get("ecology_arr", "");
		$ppHvNiv = json_encode($ppHvNiv);
		$qKOlGmQ = json_encode($qKOlGmQ);
		if (empty($dWkaiJJ) || empty($ppHvNiv)) {
			return $this->error("日均收益参数错误");
		}
		if (empty($uwGSJSQ) || empty($qKOlGmQ)) {
			return $this->error("推广奖励参数错误");
		}
		try {
			Setting::updateValueByKey($dWkaiJJ, $ppHvNiv);
			Setting::updateValueByKey($uwGSJSQ, $qKOlGmQ);
			return $this->success("设置成功");
		} catch (\Exception $yHcmUWQ) {
			return $this->error($yHcmUWQ->getMessage());
		}
	}
}