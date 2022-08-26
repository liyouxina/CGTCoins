<?php


namespace App\Console\Commands;


use App\Currency;
use App\CurrencyMatch;
use App\UsersWallet;
use App\UsersWalletOut;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CurrencyDelete extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete_currency';//operate = single

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '删除币种';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }
    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        DB::table('currency')->whereIn('id',[12,13])->delete();
        $currencyId = DB::table('currency')->pluck('id');
//        $currencyId = array_column($currencyId,'id');

        //删除交易对
        CurrencyMatch::whereNotIn('currency_id',$currencyId)->delete();
        //删除钱包
        UsersWallet::whereNotIn('currency',$currencyId)->delete();
        UsersWalletOut::whereNotIn('currency',$currencyId)->delete();

    }
}
