<?php

//decode by http://www.yunlu99.com/
namespace App\Http\Controllers\Agent;


use App\Agent;
use App\Users;
class AgentController extends Controller
{
	public function info()
	{
		$OMaivyJ = request("agent_id", 0);
		$RkXpUWJ = request("user_id", Users::getUserId());
		if (!$OMaivyJ && !$RkXpUWJ) {
			return $this->error("参数错误");
		}
		$zROarMQ = new Agent();
		if ($OMaivyJ) {
			$zROarMQ = $zROarMQ->where("id", $OMaivyJ);
		}
		if ($RkXpUWJ) {
			$XjtPzMv = Users::find($RkXpUWJ);
			$zROarMQ = $zROarMQ->where("id", 0);
		}
		$zROarMQ = $zROarMQ->first();
		return $this->success($zROarMQ);
	}
}