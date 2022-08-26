<?php

//decode by http://www.yunlu99.com/
namespace App\Jobs;


use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\UserChat;
class SendMarket implements ShouldQueue
{
	use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
	protected $marketData;
	public function __construct($market_data)
	{
		$this->marketData = $market_data;
	}
	public function handle()
	{
		UserChat::sendText($this->marketData);
	}
}