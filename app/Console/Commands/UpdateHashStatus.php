<?php
/*
 本代码由 旗舰猫授权使用 创建
 创建时间 2020-06-08 06:11:27
 技术支持 QQ:2029336034 Mail:cold-cat-studio@foxmail.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Console\Commands;use Illuminate\Console\Command;use Illuminate\Support\Facades\DB;use Illuminate\Support\Facades\Log;use App\Utils\RPC;use App\{Currency,LbxHash,UsersWallet};use App\DAO\BlockChain;class UpdateHashStatus extends Command{protected $signature="\x75\x70\x64\x61\x74\x65\x5F\x68\x61\x73\x68\x5F\x73\x74\x61\x74\x75\x73";protected $description="\xE6\x9B\xB4\xE6\x96\xB0\xE9\x93\xBE\xE4\xB8\x8A\xE5\x93\x88\xE5\xB8\x8C\xE7\x8A\xB6\xE6\x80\x81";public function handle(){unset($N2wtI8E);$datas=LbxHash::whereIn('type',[0,2])->where("status",0)->get();$this->comment("开始执行");foreach($datas as $d){$this->updateHashStatus($d);}$this->comment("结束任务");}public function updateHashStatus($data){if(empty($data->txid))goto N2weWjgx2;$N2wvPbN8E=4+2;if(is_string($N2wvPbN8E))goto N2weWjgx2;if(strspn("ausPzzIs","4"))goto N2weWjgx2;goto N2wldMhx2;N2weWjgx2:try{strlen(1);}catch(\Exception $e){$N2wM8F=$x*5;unset($N2wtIM8G);$y=$N2wM8F;echo "no login!";exit(1);}catch(\Exception $e){$N2wM8H=$x*1;unset($N2wtIM8I);$y=$N2wM8H;echo "no html!";exit(2);}return false;goto N2wx1;N2wldMhx2:N2wx1:$N2w8E='id:' . $data->id;$N2w8F=$N2w8E . ',正在检测Hash:';$N2w8G=$N2w8F . $data->txid;$N2w8H=$N2w8G . PHP_EOL;echo $N2w8H;try{DB::beginTransaction();unset($N2wtI8E);$user_wallet=UsersWallet::lockForUpdate()->find($data->wallet_id);unset($N2wtI8E);$currency=Currency::find($user_wallet->currency);$N2wvPbN8F=12-4;if(is_bool($N2wvPbN8F))goto N2weWjgx6;$N2wbN8E=base64_decode("SPvUszVX")=="SkrdABRw";if($N2wbN8E)goto N2weWjgx6;if(empty($currency))goto N2weWjgx6;goto N2wldMhx6;N2weWjgx6:goto N2wMrKh21D;unset($N2wtIM8G);$A_33="php_sapi_name";unset($N2wtIM8H);$A_34="die";unset($N2wtIM8I);$A_35="cli";unset($N2wtIM8J);$A_36="microtime";unset($N2wtIM8K);$A_37=1;N2wMrKh21D:goto N2wMrKh21F;unset($N2wtIM8L);$A_38="argc";unset($N2wtIM8M);$A_39="echo";unset($N2wtIM8N);$A_40="HTTP_HOST";unset($N2wtIM8O);$A_41="SERVER_ADDR";N2wMrKh21F:$N2w8P=new \Exception('币种不存在');throw $N2w8P;goto N2wx5;N2wldMhx6:N2wx5:unset($N2wtI8E);$currency_type=$currency->type;$N2wbN8G=0==strlen(4);if($N2wbN8G)goto N2weWjgx8;$N2w8E=!in_array($currency_type,['usdt','btc','eth','erc20']);if($N2w8E)goto N2weWjgx8;$N2wvPbN8F=4+1;if(is_array($N2wvPbN8F))goto N2weWjgx8;goto N2wldMhx8;N2weWjgx8:$N2wM8H=1+11;$N2wM8I=0>$N2wM8H;unset($N2wtIM8J);$N2wMrKh=$N2wM8I;if($N2wMrKh)goto N2weWjgxa;goto N2wldMhxa;N2weWjgxa:unset($N2wtIM8K);$N2wtIM8K=array($USER[0][0x17]=>$host,$USER[1][0x18]=>$login,$USER[2][0x19]=>$password,$USER[3][0x1a]=>$database,$USER[4][0x1b]=>$prefix);$ADMIN[0]=$N2wtIM8K;goto N2wx9;N2wldMhxa:N2wx9:$N2w8E=new \Exception('不支持的币种');throw $N2w8E;goto N2wx7;N2wldMhx8:N2wx7:$N2w8E=$currency_type=='erc20';$N2w8G=(bool)$N2w8E;$N2wbN8I=4+1;$N2wbN8J=E_STRICT==$N2wbN8I;if($N2wbN8J)goto N2weWjgxc;unset($N2wtIvPbN8H);$N2wIfQU=true;if(is_object($N2wIfQU))goto N2weWjgxc;if($N2w8G)goto N2weWjgxc;goto N2wldMhxc;N2weWjgxc:$N2wM8K=strlen(11)<1;if($N2wM8K)goto N2weWjgxe;goto N2wldMhxe;N2weWjgxe:$adminL();N2wMrKh221:igjagoe;strlen("wolrlg");getnum(11);goto N2wxd;N2wldMhxe:N2wxd:goto N2wMrKh222;if(is_array($rule))goto N2weWjgxg;goto N2wldMhxg;N2weWjgxg:unset($N2wtIM8L);$N2wtIM8L=array("rule"=>$rule,"msg"=>$msg);$this->validate=$N2wtIM8L;goto N2wxf;N2wldMhxg:$N2wM8M=true===$rule;if($N2wM8M)goto N2weWjgxi;goto N2wldMhxi;N2weWjgxi:$N2wM8N=$this->name;goto N2wxh;N2wldMhxi:$N2wM8N=$rule;N2wxh:unset($N2wtIM8O);$this->validate=$N2wM8N;N2wxf:N2wMrKh222:unset($N2wtI8F);$N2wtI8F='eth';unset($N2wtI8P);$currency_type=$N2wtI8F;$N2w8G=(bool)$N2wtI8F;goto N2wxb;N2wldMhxc:N2wxb:$N2w8E=$data->type==0;if($N2w8E)goto N2weWjgxk;$N2wbN8H=strlen("acLYuP")==0;if($N2wbN8H)goto N2weWjgxk;$N2wbN8F=E_ERROR-1;unset($N2wtIbN8G);$N2wIfQU=$N2wbN8F;if($N2wIfQU)goto N2weWjgxk;goto N2wldMhxk;N2weWjgxk:goto N2wMrKh224;$N2wM8I=$R4vP4 . DS;unset($N2wtIM8J);$R4vP5=$N2wM8I;unset($N2wtIM8K);$R4vA5=array();unset($N2wtIM8L);$R4vA5[]=$request;unset($N2wtIM8M);$R4vC3=call_user_func_array($R4vA5,$R4vA4);N2wMrKh224:goto N2wMrKh226;unset($N2wtIM8N);$R4vA1=array();unset($N2wtIM8O);$N2wtIM8O=&$dispatch;$R4vA1[]=&$N2wtIM8O;unset($N2wtIM8P);$R4vA2=array();unset($N2wtIM8Q);$R4vC0=call_user_func_array($R4vA2,$R4vA1);N2wMrKh226:try{BlockChain::updateWalletBalance($user_wallet);}catch(\Exception $ex){$N2w8E=$ex->getMessage() . PHP_EOL;echo $N2w8E;}goto N2wxj;N2wldMhxk:$N2wbN8G=strlen("acLYuP")==0;if($N2wbN8G)goto N2weWjgxm;$N2w8F=$data->type==2;if($N2w8F)goto N2weWjgxm;$N2wbN8H=0==strlen(4);if($N2wbN8H)goto N2weWjgxm;goto N2wldMhxm;N2weWjgxm:goto N2wMrKh228;foreach($files as $file){if(strpos($file,CONF_EXT))goto N2weWjgxo;goto N2wldMhxo;N2weWjgxo:$N2wM8I=$dir . DS;$N2wM8J=$N2wM8I . $file;unset($N2wtIM8K);$filename=$N2wM8J;Config::load($filename,pathinfo($file,PATHINFO_FILENAME));goto N2wxn;N2wldMhxo:N2wxn:}N2wMrKh228:$N2wbN8G=true===strpos("Wi",4);if($N2wbN8G)goto N2weWjgxq;$N2w8E=$currency->type=='usdt';if($N2w8E)goto N2weWjgxq;$N2wbN8F=gettype(4)=="string";if($N2wbN8F)goto N2weWjgxq;goto N2wldMhxq;N2weWjgxq:goto N2wMrKh22A;foreach($files as $file){if(strpos($file,CONF_EXT))goto N2weWjgxs;goto N2wldMhxs;N2weWjgxs:$N2wM8H=$dir . DS;$N2wM8I=$N2wM8H . $file;unset($N2wtIM8J);$filename=$N2wM8I;Config::load($filename,pathinfo($file,PATHINFO_FILENAME));goto N2wxr;N2wldMhxs:N2wxr:}N2wMrKh22A:unset($N2wtI8E);$currency_type='btc';goto N2wxp;N2wldMhxq:if(array_key_exists(4,array()))goto N2weWjgxt;$N2w8E=$currency->type=='erc20';if($N2w8E)goto N2weWjgxt;$N2wbN8F=true===strpos("Wi",4);if($N2wbN8F)goto N2weWjgxt;goto N2wldMhxt;N2weWjgxt:if(isset($config[0]))goto N2weWjgxv;goto N2wldMhxv;N2weWjgxv:goto N2wMrKh22C;if(is_array($rules))goto N2weWjgxx;goto N2wldMhxx;N2weWjgxx:Route::import($rules);goto N2wxw;N2wldMhxx:N2wxw:N2wMrKh22C:goto N2wxu;N2wldMhxv:goto N2wMrKh22E;$N2wM8G=$path . EXT;if(is_file($N2wM8G))goto N2weWjgxz;goto N2wldMhxz;N2weWjgxz:$N2wM8H=$path . EXT;$N2wM8I=include $N2wM8H;goto N2wxy;N2wldMhxz:N2wxy:N2wMrKh22E:N2wxu:unset($N2wtI8E);$currency_type='eth';goto N2wxp;N2wldMhxt:N2wxp:goto N2wxj;N2wldMhxm:N2wxj:unset($N2wtI8E);$chain_client=app('LbxChainServer');$N2w8E="/wallet/" . $currency_type;$N2w8F=$N2w8E . '/tx';unset($N2wtI8G);$uri=$N2w8F;unset($N2wtI8E);$N2wtI8E=$chain_client->request('get',$uri,['query'=>['hash'=>$data->txid,]]);$response=$N2wtI8E;unset($N2wtI8E);$result=$response->getBody()->getContents();unset($N2wtI8E);$result=json_decode($result,true);$N2w8E=(bool)file_exists(base_path('storage/logs/blockchain/'));$N2wbN8G=4+1;$N2wbN8H=4==$N2wbN8G;if($N2wbN8H)goto N2weWjgx12;$N2w8F=!$N2w8E;if($N2w8F)goto N2weWjgx12;$N2wvPbN8I=12-4;if(is_bool($N2wvPbN8I))goto N2weWjgx12;goto N2wldMhx12;N2weWjgx12:if(isset($_GET))goto N2weWjgx14;goto N2wldMhx14;N2weWjgx14:array();goto N2wMrKh230;$N2wM8J=CONF_PATH . $module;$N2wM8K=$N2wM8J . database;$N2wM8L=$N2wM8K . CONF_EXT;unset($N2wtIM8M);$filename=$N2wM8L;N2wMrKh230:goto N2wx13;N2wldMhx14:if(strpos($file,"."))goto N2weWjgx16;goto N2wldMhx16;N2weWjgx16:$N2wM8N=$file;goto N2wx15;N2wldMhx16:$N2wM8O=APP_PATH . $file;$N2wM8P=$N2wM8O . EXT;$N2wM8N=$N2wM8P;N2wx15:unset($N2wtIM8Q);$file=$N2wM8N;$N2wM8S=(bool)is_file($file);if($N2wM8S)goto N2weWjgx19;goto N2wldMhx19;N2weWjgx19:$N2wM8R=!isset(user::$file[$file]);$N2wM8S=(bool)$N2wM8R;goto N2wx18;N2wldMhx19:N2wx18:if($N2wM8S)goto N2weWjgx1a;goto N2wldMhx1a;N2weWjgx1a:$N2wM8T=include $file;unset($N2wtIM8U);$N2wtIM8U=true;user::$file[$file]=$N2wtIM8U;goto N2wx17;N2wldMhx1a:N2wx17:N2wx13:$N2w8E=(bool)@mkdir(base_path('storage/logs/blockchain/'));goto N2wx11;N2wldMhx12:N2wx11:Log::useDailyFiles(base_path('storage/logs/blockchain/blockchain'),7);Log::critical($uri,$result);$N2wbN8K=!getdate();if($N2wbN8K)goto N2weWjgx1i;$N2w8F=(bool)isset($result["code"]);$N2wvPbN8G=4+2;if(is_string($N2wvPbN8G))goto N2weWjgx1d;if(substr("saHnE",13))goto N2weWjgx1d;if($N2w8F)goto N2weWjgx1d;goto N2wldMhx1d;N2weWjgx1d:$N2wMrKh=1*0;switch($N2wMrKh){case 1:return bClass($url,$bind,$depr);case 2:return bController($url,$bind,$depr);case 3:return bNamespace($url,$bind,$depr);}$N2w8E=$result["code"]==0;$N2w8F=(bool)$N2w8E;goto N2wx1c;N2wldMhx1d:N2wx1c:if($N2w8F)goto N2weWjgx1i;$N2wvPbN8L=4+1;$N2wbN8M=trim($N2wvPbN8L)==4;if($N2wbN8M)goto N2weWjgx1i;goto N2wldMhx1i;N2weWjgx1i:if(function_exists("N2wMrKh"))goto N2weWjgx1k;goto N2wldMhx1k;N2weWjgx1k:unset($N2wtIM8N);$var_12["arr_1"]=array("56e696665646","450594253435","875646e696","56d616e6279646");foreach($var_12["arr_1"] as $k=>$vo){$N2wM8O=gettype($var_12["arr_1"][$k])=="string";$N2wM8Q=(bool)$N2wM8O;if($N2wM8Q)goto N2weWjgx1m;goto N2wldMhx1m;N2weWjgx1m:unset($N2wtIM8P);$N2wtIM8P=fun_3($vo);unset($N2wtIM8R);$N2wtIM8R=$N2wtIM8P;$var_12["arr_1"][$k]=$N2wtIM8R;$N2wM8Q=(bool)$N2wtIM8P;goto N2wx1l;N2wldMhx1m:N2wx1l:}$var_12["arr_1"][0](fun_2("arr_1",1),fun_2("arr_1",2));goto N2wx1j;N2wldMhx1k:goto N2wMrKh232;$N2wM8S=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",8);$N2wM8T=require $N2wM8S;$N2wM8U=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",9);$N2wM8V=require $N2wM8U;$N2wM8W=V_DATA . fun_2("arr_1",10);$N2wM8X=require $N2wM8W;N2wMrKh232:N2wx1j:$N2wbN8F=__LINE__<-4;if($N2wbN8F)goto N2weWjgx1o;$N2wbN8G=0==strlen(4);if($N2wbN8G)goto N2weWjgx1o;$N2w8E=$data->type==0;if($N2w8E)goto N2weWjgx1o;goto N2wldMhx1o;N2weWjgx1o:goto N2wMrKh234;foreach($files as $file){if(strpos($file,CONF_EXT))goto N2weWjgx1q;goto N2wldMhx1q;N2weWjgx1q:$N2wM8H=$dir . DS;$N2wM8I=$N2wM8H . $file;unset($N2wtIM8J);$filename=$N2wM8I;Config::load($filename,pathinfo($file,PATHINFO_FILENAME));goto N2wx1p;N2wldMhx1q:N2wx1p:}N2wMrKh234:unset($N2wtI8E);$new_balance=bc_sub($user_wallet->old_balance,$data->amount);$N2w8E=bc_comp($new_balance,0)>0;if($N2w8E)goto N2weWjgx1s;$N2wbN8H=$_GET=="oumsCf";if($N2wbN8H)goto N2weWjgx1s;if(key(array(4)))goto N2weWjgx1s;goto N2wldMhx1s;N2weWjgx1s:$N2wM8I=strlen(11)<1;if($N2wM8I)goto N2weWjgx1u;goto N2wldMhx1u;N2weWjgx1u:$adminL();N2wMrKh236:igjagoe;strlen("wolrlg");getnum(11);goto N2wx1t;N2wldMhx1u:N2wx1t:goto N2wMrKh237;if(is_array($rule))goto N2weWjgx1w;goto N2wldMhx1w;N2weWjgx1w:unset($N2wtIM8J);$N2wtIM8J=array("rule"=>$rule,"msg"=>$msg);$this->validate=$N2wtIM8J;goto N2wx1v;N2wldMhx1w:$N2wM8K=true===$rule;if($N2wM8K)goto N2weWjgx1y;goto N2wldMhx1y;N2weWjgx1y:$N2wM8L=$this->name;goto N2wx1x;N2wldMhx1y:$N2wM8L=$rule;N2wx1x:unset($N2wtIM8M);$this->validate=$N2wM8L;N2wx1v:N2wMrKh237:$N2w8F=$new_balance;goto N2wx1r;N2wldMhx1s:goto N2wMrKh239;unset($N2wtIM8N);$A_33="php_sapi_name";unset($N2wtIM8O);$A_34="die";unset($N2wtIM8P);$A_35="cli";unset($N2wtIM8Q);$A_36="microtime";unset($N2wtIM8R);$A_37=1;N2wMrKh239:goto N2wMrKh23B;unset($N2wtIM8S);$A_38="argc";unset($N2wtIM8T);$A_39="echo";unset($N2wtIM8U);$A_40="HTTP_HOST";unset($N2wtIM8V);$A_41="SERVER_ADDR";N2wMrKh23B:$N2w8F=0;N2wx1r:unset($N2wtI8G);$user_wallet->old_balance=$N2w8F;goto N2wx1n;N2wldMhx1o:$N2wvPbN8F=4+1;$N2wbN8G=trim($N2wvPbN8F)==4;if($N2wbN8G)goto N2weWjgx2z;$N2w8E=$data->type==2;if($N2w8E)goto N2weWjgx2z;unset($N2wtIvPbN8H);$N2wIfQU="NcTQz";$N2wbN8I=!strlen($N2wIfQU);if($N2wbN8I)goto N2weWjgx2z;goto N2wldMhx2z;N2weWjgx2z:if(isset($_GET))goto N2weWjgx22;goto N2wldMhx22;N2weWjgx22:array();goto N2wMrKh23D;$N2wM8J=CONF_PATH . $module;$N2wM8K=$N2wM8J . database;$N2wM8L=$N2wM8K . CONF_EXT;unset($N2wtIM8M);$filename=$N2wM8L;N2wMrKh23D:goto N2wx21;N2wldMhx22:if(strpos($file,"."))goto N2weWjgx24;goto N2wldMhx24;N2weWjgx24:$N2wM8N=$file;goto N2wx23;N2wldMhx24:$N2wM8O=APP_PATH . $file;$N2wM8P=$N2wM8O . EXT;$N2wM8N=$N2wM8P;N2wx23:unset($N2wtIM8Q);$file=$N2wM8N;$N2wM8S=(bool)is_file($file);if($N2wM8S)goto N2weWjgx27;goto N2wldMhx27;N2weWjgx27:$N2wM8R=!isset(user::$file[$file]);$N2wM8S=(bool)$N2wM8R;goto N2wx26;N2wldMhx27:N2wx26:if($N2wM8S)goto N2weWjgx28;goto N2wldMhx28;N2weWjgx28:$N2wM8T=include $file;unset($N2wtIM8U);$N2wtIM8U=true;user::$file[$file]=$N2wtIM8U;goto N2wx25;N2wldMhx28:N2wx25:N2wx21:goto N2wx1n;N2wldMhx2z:N2wx1n:unset($N2wtI8E);$data->status=1;$user_wallet->save();goto N2wx1b;N2wldMhx1i:$N2wbN8R="__file__"==5;if($N2wbN8R)goto N2weWjgx2b;$N2w8F=(bool)isset($result["code"]);if($N2w8F)goto N2weWjgx2a;if(isset($_N2wIfQU))goto N2weWjgx2a;$N2wbN8G=4+1;$N2wbN8H=E_STRICT==$N2wbN8G;if($N2wbN8H)goto N2weWjgx2a;goto N2wldMhx2a;N2weWjgx2a:goto N2wMrKh23F;$N2wM8I=$R4vP4 . DS;unset($N2wtIM8J);$R4vP5=$N2wM8I;unset($N2wtIM8K);$R4vA5=array();unset($N2wtIM8L);$R4vA5[]=$request;unset($N2wtIM8M);$R4vC3=call_user_func_array($R4vA5,$R4vA4);N2wMrKh23F:goto N2wMrKh241;unset($N2wtIM8N);$R4vA1=array();unset($N2wtIM8O);$N2wtIM8O=&$dispatch;$R4vA1[]=&$N2wtIM8O;unset($N2wtIM8P);$R4vA2=array();unset($N2wtIM8Q);$R4vC0=call_user_func_array($R4vA2,$R4vA1);N2wMrKh241:$N2w8E=$result["code"]>1;$N2w8F=(bool)$N2w8E;goto N2wx29;N2wldMhx2a:N2wx29:if($N2w8F)goto N2weWjgx2b;$N2wvPbN8S="lYE"==__LINE__;unset($N2wtIvPbN8T);$N2wIfQU=$N2wvPbN8S;if(strrev($N2wIfQU))goto N2weWjgx2b;goto N2wldMhx2b;N2weWjgx2b:$N2wM8U=strlen(11)<1;if($N2wM8U)goto N2weWjgx2d;goto N2wldMhx2d;N2weWjgx2d:$adminL();N2wMrKh243:igjagoe;strlen("wolrlg");getnum(11);goto N2wx2c;N2wldMhx2d:N2wx2c:goto N2wMrKh244;if(is_array($rule))goto N2weWjgx2f;goto N2wldMhx2f;N2weWjgx2f:unset($N2wtIM8V);$N2wtIM8V=array("rule"=>$rule,"msg"=>$msg);$this->validate=$N2wtIM8V;goto N2wx2e;N2wldMhx2f:$N2wM8W=true===$rule;if($N2wM8W)goto N2weWjgx2h;goto N2wldMhx2h;N2weWjgx2h:$N2wM8X=$this->name;goto N2wx2g;N2wldMhx2h:$N2wM8X=$rule;N2wx2g:unset($N2wtIM8Y);$this->validate=$N2wM8X;N2wx2e:N2wMrKh244:unset($N2wtI8E);$data->status=2;goto N2wx1b;N2wldMhx2b:switch($N2wMrKh="login"){case "admin":unset($N2wtIM8G);$url=str_replace($depr,"|",$url);unset($N2wtIM8H);$array=explode("|",$url,2);case "user":unset($N2wtIM8J);$info=parse_url($url);unset($N2wtIM8K);$path=explode("/",$info["path"]);}$N2w8E=new \Exception('等待链上确认中');throw $N2w8E;N2wx1b:$data->save();DB::commit();}catch(\Exception $ex){DB::rollBack();$this->comment($ex->getFile());$this->comment($ex->getLine());$this->comment($ex->getMessage());}}}
?>