<?php

//decode by http://www.yunlu99.com/
namespace App\Http\Controllers\Admin;


use App\AdminModule;
use App\AdminModuleAction;
use App\AdminRole;
use App\AdminRolePermission;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
class AdminRolePermissionController extends Controller
{
	public function update()
	{
		if (session()->get("admin_is_super") != "1") {
			abort(403);
		}
		$HUvygEJ = Input::get("id", "");
		$dfGvzEJ = AdminRole::find($HUvygEJ);
		if ($dfGvzEJ == null) {
			abort(404);
		}
		$tWyjrtv = AdminModule::all();
		$rnJBFGJ = [];
		foreach ($tWyjrtv as $TsyTcnQ => $uNBTreJ) {
			$GlWhiDQ = AdminModuleAction::where("admin_module_id", $uNBTreJ->id)->where("level", ">=", 0)->get();
			if (count($GlWhiDQ)) {
				$uNBTreJ->actions = $GlWhiDQ;
				$rnJBFGJ[$TsyTcnQ] = $uNBTreJ;
			}
		}
		$kpxmdmJ = AdminRolePermission::where("role_id", $dfGvzEJ->id)->get();
		if (empty($kpxmdmJ)) {
			$krnWnlQ = [];
		} else {
			$kpxmdmJ = $kpxmdmJ->toArray();
			$krnWnlQ = [];
			foreach ($kpxmdmJ as $RWtaIEJ) {
				$krnWnlQ[$RWtaIEJ["module"]][] = $RWtaIEJ["action"];
			}
		}
		return view("admin.manager.role_permission", ["admin_role" => $dfGvzEJ, "modules" => $rnJBFGJ, "permissions" => $krnWnlQ, "success" => Session::get("success", null)]);
	}
	public function postUpdate()
	{
		if (session()->get("admin_is_super") != "1") {
			abort(403);
		}
		$zqFRztv = Input::get("id", null);
		$HvSEJiJ = AdminRole::find($zqFRztv);
		if ($HvSEJiJ == null) {
			abort(404);
		}
		AdminRolePermission::where("role_id", $zqFRztv)->delete();
		foreach (Input::get("permission") as $FcbcnpQ => $YpZDOCv) {
			foreach ($YpZDOCv as $HelUsAv) {
				$rQbFCvQ = new AdminRolePermission();
				$rQbFCvQ->role_id = $zqFRztv;
				$rQbFCvQ->module = $FcbcnpQ;
				$rQbFCvQ->action = $HelUsAv;
				$rQbFCvQ->save();
			}
		}
		return $this->success("修改成功");
	}
}