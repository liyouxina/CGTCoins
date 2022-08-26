<?php

//decode by http://www.yunlu99.com/
namespace App\Http\Controllers\Api;


use Illuminate\Http\Request;
use Session;
use App\FeedBack;
use App\Users;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
class FeedBackController extends Controller
{
	public function myFeedBackList(Request $request)
	{
		$siJDdRv = Input::get("limit", 10);
		$yXzXyEQ = Input::get("page", 1);
		$KkPsHfJ = Users::getUserId();
		$FvuHelv = FeedBack::where("user_id", $KkPsHfJ)->orderBy("id", "desc")->paginate($siJDdRv, ["*"], "page", $yXzXyEQ);
		foreach ($FvuHelv->items() as &$VDcEtwQ) {
			unset($VDcEtwQ->replay_content);
		}
		return $this->success(array("list" => $FvuHelv->items(), "count" => $FvuHelv->total(), "page" => $yXzXyEQ, "limit" => $siJDdRv));
	}
	public function feedBackDetail()
	{
		$MJLLtMJ = Input::get("id", 10);
		$zRlpXlQ = FeedBack::find($MJLLtMJ);
		return $this->success($zRlpXlQ);
	}
	public function feedBackAdd()
	{
		$dplyYdQ = Users::getUserId();
		$iyXmpRQ = Input::get("content", "");
		if (empty($iyXmpRQ)) {
			return $this->error("内容不能为空");
		}
		$qUQQstQ = Input::get("img", "");
		try {
			$rfzKLFJ = new FeedBack();
			$rfzKLFJ->user_id = $dplyYdQ;
			$rfzKLFJ->content = $iyXmpRQ;
			$rfzKLFJ->is_reply = 0;
			$rfzKLFJ->img = $qUQQstQ;
			$rfzKLFJ->create_time = time();
			$rfzKLFJ->save();
			return $this->success("提交成功，我们会尽快给你回复");
		} catch (\Exception $auYpEHv) {
			return $this->error($auYpEHv->getMessage());
		}
	}
}