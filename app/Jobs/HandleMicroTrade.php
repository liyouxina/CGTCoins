<?php

//decode by http://www.yunlu99.com/
namespace App\Jobs;


use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Carbon;
use App\Logic\MicroTradeLogic;
class HandleMicroTrade implements ShouldQueue
{
	use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
	protected $klineData = [];
	public function __construct($kline_data)
	{
		$this->klineData = $kline_data;
	}
	public function handle()
	{
		echo Carbon::now()->toDateTimeString() . PHP_EOL;
		$UzTyWuv = $this->klineData["match_id"];
		$BeninVQ = $this->klineData["close"];
		MicroTradeLogic::newPrice($UzTyWuv, $BeninVQ);
		MicroTradeLogic::close($UzTyWuv);
	}
}