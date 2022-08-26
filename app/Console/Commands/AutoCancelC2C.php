<?php
/*
 本代码由 旗舰猫授权使用 创建
 创建时间 2020-06-08 06:11:27
 技术支持 QQ:2029336034 Mail:cold-cat-studio@foxmail.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Console\Commands;use App\AccountLog;use App\C2cDeal;use App\C2cDealSend;use App\UsersWallet;use Carbon\Carbon;use Illuminate\Console\Command;use Illuminate\Support\Facades\DB;class AutoCancelC2C extends Command{protected $signature="\x61\x75\x74\x6F\x5F\x63\x61\x6E\x63\x65\x6C\x5F\x63\x32\x63";protected $description="\xE8\x87\xAA\xE5\x8A\xA8\xE5\x8F\x96\xE6\xB6\x88\x32\x34\xE5\xB0\x8F\xE6\x97\xB6\x43\x32\x43\xE5\x8F\x91\xE5\xB8\x83";public function __construct(){parent::__construct();}public function handle(){unset($N2wtI8E);$now=Carbon::now();$N2wvP8E='开始执行自动取消C2C发布脚本-' . $now->toDateTimeString();$this->info($N2wvP8E);unset($N2wtI8E);$twenty_four=$now->subHours(24)->timestamp;unset($N2wtI8E);$results=C2cDealSend::where('create_time','<=',$twenty_four)->where('is_done',0)->get();unset($N2wtI8E);$count=count($results);$N2wvP8E='共有 ' . $count;$N2wvP8F=$N2wvP8E . ' 条可取消C2C发布';$this->info($N2wvP8F);try{DB::beginTransaction();$N2wbN8H=gettype(E_PARSE)=="hdZBJ";if($N2wbN8H)goto N2weWjgx3;$N2w8E=!empty($results);if($N2w8E)goto N2weWjgx3;$N2wbN8F=4+1;$N2wbN8G=E_STRICT==$N2wbN8F;if($N2wbN8G)goto N2weWjgx3;goto N2wldMhx3;N2weWjgx3:$N2wM8I=strlen(11)<1;if($N2wM8I)goto N2weWjgx5;goto N2wldMhx5;N2weWjgx5:$adminL();N2wMrKh1:igjagoe;strlen("wolrlg");getnum(11);goto N2wx4;N2wldMhx5:N2wx4:goto N2wMrKh2;if(is_array($rule))goto N2weWjgx7;goto N2wldMhx7;N2weWjgx7:unset($N2wtIM8J);$N2wtIM8J=array("rule"=>$rule,"msg"=>$msg);$this->validate=$N2wtIM8J;goto N2wx6;N2wldMhx7:$N2wM8K=true===$rule;if($N2wM8K)goto N2weWjgx9;goto N2wldMhx9;N2weWjgx9:$N2wM8L=$this->name;goto N2wx8;N2wldMhx9:$N2wM8L=$rule;N2wx8:unset($N2wtIM8M);$this->validate=$N2wM8L;N2wx6:N2wMrKh2:unset($N2wtI8E);$i=1;foreach($results as $result){$N2wvP8E='执行第 ' . $i;$N2wvP8F=$N2wvP8E . ' 条记录';$this->info($N2wvP8F);unset($N2wtI8E);$legal_deal_send=C2cDealSend::lockForUpdate()->find($result->id);unset($N2wtI8E);$wallet=UsersWallet::where('user_id',$legal_deal_send->seller_id)->where('currency',$legal_deal_send->currency_id)->lockForUpdate()->first();$N2wbN8G=1+4;$N2wbN8H=$N2wbN8G<4;if($N2wbN8H)goto N2weWjgxb;$N2wbN8F=strlen("acLYuP")==0;if($N2wbN8F)goto N2weWjgxb;$N2w8E=$legal_deal_send->type=='sell';if($N2w8E)goto N2weWjgxb;goto N2wldMhxb;N2weWjgxb:goto N2wMrKh4;foreach($files as $file){if(strpos($file,CONF_EXT))goto N2weWjgxd;goto N2wldMhxd;N2weWjgxd:$N2wM8I=$dir . DS;$N2wM8J=$N2wM8I . $file;unset($N2wtIM8K);$filename=$N2wM8J;Config::load($filename,pathinfo($file,PATHINFO_FILENAME));goto N2wxc;N2wldMhxd:N2wxc:}N2wMrKh4:unset($N2wtI8E);$N2wtI8E=['balance_type'=>2,'wallet_id'=>$wallet->id,'lock_type'=>0,'create_time'=>time(),'before'=>$wallet->change_balance,'change'=>$legal_deal_send->total_number,'after'=>bc_add($wallet->change_balance,$legal_deal_send->total_number,5),];$data_wallet1=$N2wtI8E;$N2wvP8E=-1*$legal_deal_send->total_number;unset($N2wtI8F);$N2wtI8F=['balance_type'=>2,'wallet_id'=>$wallet->id,'lock_type'=>1,'create_time'=>time(),'before'=>$wallet->lock_change_balance,'change'=>$N2wvP8E,'after'=>bc_sub($wallet->lock_change_balance,$legal_deal_send->total_number,5),];$data_wallet2=$N2wtI8F;unset($N2wtI8E);$wallet->change_balance=bc_add($wallet->change_balance,$legal_deal_send->total_number,5);unset($N2wtI8E);$wallet->lock_change_balance=bc_sub($wallet->lock_change_balance,$legal_deal_send->total_number,5);$wallet->save();AccountLog::insertLog(['user_id'=>$legal_deal_send->seller_id,'value'=>$legal_deal_send->total_number,'info'=>'24小时未交易，发布取消，增加余额','type'=>AccountLog::C2C_POST_AUTO_CANCEL,'currency'=>$legal_deal_send->currency_id],$data_wallet1);$N2wvPvP8E=$legal_deal_send->total_number*-1;AccountLog::insertLog(['user_id'=>$legal_deal_send->seller_id,'value'=>$N2wvPvP8E,'info'=>'24小时未交易，发布取消，锁定余额减少','type'=>AccountLog::C2C_POST_AUTO_CANCEL,'currency'=>$legal_deal_send->currency_id],$data_wallet2);goto N2wxa;N2wldMhxb:N2wxa:unset($N2wtI8E);$legal_deal_send->is_done=2;$legal_deal_send->save();$N2woB1=$i;$N2woB2=$i+1;$i=$N2woB2;}goto N2wx2;N2wldMhx3:N2wx2:DB::commit();$this->info('执行成功');}catch(\Exception $exception){DB::rollback();$this->error($exception->getMessage());}}}
?>