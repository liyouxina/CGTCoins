<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\{Currency, UsersWallet};
USE App\DAO\BlockChain;
use Illuminate\Support\Facades\DB;
use App\Jobs\UpdateBalance;

class WalletController extends Controller
{ 
    public function index()
    {
        $currencies = Currency::all();
        return view('admin.wallet.index', ['currencies' => $currencies]);
    }

    public function lists(Request $request)
    {
        $limit = $request->input('limit', 10);
        $query = UsersWallet::whereHas('user', function ($query) use ($request) {
                $account_number = $request->input('account_number', '');
                $account_number != '' && $query->where('account_number', $account_number)->orWhere('phone', $account_number);
            })->where(function ($query) use ($request) {
                $currency = $request->input('currency', -1);
                $address = $request->input('address', '');
                $currency != -1 && $query->where('currency', $currency);
                $address != '' && $query->where('address', $address);
            });
        $query_total = clone $query;
        $total = $query_total->select([
            DB::raw('sum(legal_balance) as legal_balance'),
            DB::raw('sum(lock_legal_balance) as lock_legal_balance'),
            DB::raw('sum(change_balance) as change_balance'),
            DB::raw('sum(lock_change_balance) as lock_change_balance'),
            DB::raw('sum(lever_balance) as lever_balance'),
            DB::raw('sum(lock_lever_balance) as lock_lever_balance'),
        ])->first();
        $total = $total->setAppends([]);
        $user_wallet = $query->orderBy('old_balance', 'desc')->paginate($limit);
        $list = $user_wallet->getCollection();
        $list->transform(function ($item, $key) {
            $item->append('account_number');
            return $item;
        });
        $user_wallet->setCollection($list);
        return $this->layuiData($user_wallet, ['total' => $total]);
    }

    public function updateBalance(Request $request)
    {
        $id = $request->input('id', 0);
        $wallet = UsersWallet::find($id);
        if (!$wallet) {
            return $this->error('???????????????');
        }
       //???????????????????????????
       UpdateBalance::dispatch($wallet)->onQueue('update:block:balance');
       return $this->success('????????????????????????????????????,??????????????????');
    }

    /**
     * ???????????????
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function transferPoundage(Request $request)
    {
        $id = $request->input('id', 0);
        $refresh_balance = $request->input('refresh_balance', 0);
        try {
            $wallet = UsersWallet::find($id);
            throw_unless($wallet, new \Exception('???????????????'));
            $result = BlockChain::transferPoundage($wallet, $refresh_balance);
            return $this->success('????????????,????????????:' . ($result['txid'] ?? $result['data']['txHex']));
        } catch (\Throwable $th) {
            return $this->error($th->getMessage());
        }
    }

    /**
     * ????????????
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function collect(Request $request)
    {
        $id = $request->input('id', 0);
        $refresh_balance = $request->input('refresh_balance', 0);
        try {
            $wallet = UsersWallet::find($id);
            throw_unless($wallet, new \Exception('???????????????'));
            $result = BlockChain::collect($wallet, $refresh_balance);
            return $this->success('????????????,HASH:' . $result['txid']);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage().$th->getFile().$th->getLine());
        }
    }
}
