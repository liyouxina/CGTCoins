<?php

//decode by http://www.yunlu99.com/
namespace App\Jobs;


use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\MicroOrder;
use App\UserChat;
class SendClosedMicroOrder implements ShouldQueue
{
	use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
	protected $order;
	public function __construct(MicroOrder $order)
	{
		$this->order = $order;
	}
	public function handle()
	{
		$vkImrzQ = ["type" => "closed_microorder", "to" => $this->order->user_id, "data" => $this->order];
		dump(UserChat::sendText($vkImrzQ));
	}
}