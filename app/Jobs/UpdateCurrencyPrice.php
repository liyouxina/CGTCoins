<?php

//decode by http://www.yunlu99.com/
namespace App\Jobs;


use App\Currency;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
class UpdateCurrencyPrice implements ShouldQueue
{
	use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
	private $kline_data;
	public function __construct($kline_data)
	{
		$this->kline_data = $kline_data;
	}
	public function handle()
	{
		if (empty($this->kline_data)) {
			return 0;
		}
		$XiVKBkQ = $this->kline_data["currency_id"];
		$xDyZXYQ = Currency::find($XiVKBkQ);
		if ($xDyZXYQ) {
			$xDyZXYQ->price = $this->kline_data["close"];
			$xDyZXYQ->save();
		}
	}
}