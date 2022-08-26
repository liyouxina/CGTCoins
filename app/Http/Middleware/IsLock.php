<?php

//decode by http://www.yunlu99.com/
namespace App\Http\Middleware;


use App\Users;
use Closure;
use App\UserReal;
class IsLock
{
	public function handle($request, Closure $next)
	{
		$MjCeAuv = Users::getUserId();
		$MROIyGQ = Users::where("id", $MjCeAuv)->first();
		if ($MROIyGQ->status == 1) {
			return response()->json(["type" => "error", "message" => "您处于锁定状态！"]);
		}
		return $next($request);
	}
}