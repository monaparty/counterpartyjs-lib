import { GetTable } from './tables/GetTable';
import { API } from './transport/CounterpartyAPI';

import { Result as GetAssetsResult } from './tables/GetAssets';
import { Result as GetBalancesResult } from './tables/GetBalances';
import { Result as GetBetExpirationsResult } from './tables/GetBetExpirations';
import { Result as GetBetMatchesResult } from './tables/GetBetMatches';
import { Result as GetBetMatchExpirationsResult } from './tables/GetBetMatchExpirations';
import { Result as GetBetMatchResolutionsResult } from './tables/GetBetMatchResolutions';
import { Result as GetBetsResult } from './tables/GetBets';
import { Result as GetBroadcastsResult } from './tables/GetBroadcasts';
import { Result as GetBTCPaysResult } from './tables/GetBTCPays';
import { Result as GetBurnsResult } from './tables/GetBurns';
import { Result as GetCancelsResult } from './tables/GetCancels';
import { Result as GetCreditsResult } from './tables/GetCredits';
import { Result as GetDebitsResult } from './tables/GetDebits';
import { Result as GetDividendsResult } from './tables/GetDividends';
import { Result as GetIssuancesResult } from './tables/GetIssuances';
import { Result as GetMempoolResult } from './tables/GetMempool';
import { Result as GetOrderExpirationsResult } from './tables/GetOrderExpirations';
import { Result as GetOrderMatchesResult } from './tables/GetOrderMatches';
import { Result as GetOrderMatchExpirationsResult } from './tables/GetOrderMatchExpirations';
import { Result as GetOrdersResult } from './tables/GetOrders';
import { Result as GetSendsResult } from './tables/GetSends';
import { GetTableParams } from './tables/GetTableParams';

import { GetAssetInfo, Params as GetAssetInfoParams, Result as GetAssetInfoResult } from './misc/GetAssetInfo';
import { GetAssetNames, Result as GetAssetNamesResult } from './misc/GetAssetNames';
import { GetBlockInfo, Params as GetBlockInfoParams, Result as GetBlockInfoResult } from './misc/GetBlockInfo';
import { GetBlocks, Params as GetBlocksParams, Result as GetBlocksResult } from './misc/GetBlocks';
import { GetElementCounts, Result as GetElementCountsResult } from './misc/GetElementCounts';
import { GetHolderCount, Params as GetHolderCountParams, Result as GetHolderCountResult } from './misc/GetHolderCount';
import { GetHolders, Params as GetHoldersParams, Result as GetHoldersResult } from './misc/GetHolders';
import { GetMessages, Params as GetMessagesParams, Result as GetMessagesResult } from './misc/GetMessages';
import { GetMessagesByIndex, Params as GetMessagesByIndexParams, Result as GetMessagesByIndexResult } from './misc/GetMessagesByIndex';
import { GetRawTransaction, Params as GetRawTransactionParams, Result as GetRawTransactionResult } from './misc/GetRawTransaction';
import { GetRawTransactionBatch, Params as GetRawTransactionBatchParams, Result as GetRawTransactionBatchResult } from './misc/GetRawTransactionBatch';
import { GetRunningInfo, Result as GetRunningInfoResult } from './misc/GetRunningInfo';
import { GetSupply, Params as GetSupplyParams, Result as GetSupplyResult } from './misc/GetSupply';
import { GetTxInfo, Params as GetTxInfoParams, Result as GetTxInfoResult } from './misc/GetTxInfo';
import { GetUnspentTxouts, Params as GetUnspentTxoutsParams, Result as GetUnspentTxoutsResult } from './misc/GetUnspentTxouts';
// tslint:disable-next-line:ordered-imports
import { SearchPubKey, Params as SearchPubKeyParams, Result as SearchPubKeyResult } from './misc/SearchPubKey';
// tslint:disable-next-line:ordered-imports
import { SearchRawTransactions, Params as SearchRawTransactionsParams, Result as SearchRawTransactionsResult } from './misc/SearchRawTransactions';
// tslint:disable-next-line:ordered-imports
import { Unpack, Params as UnpackParams, Result as UnpackResult } from './misc/Unpack';

export {
  GetAssetsResult,
  GetBalancesResult,
  GetBetExpirationsResult,
  GetBetMatchesResult,
  GetBetMatchExpirationsResult,
  GetBetMatchResolutionsResult,
  GetBetsResult,
  GetBroadcastsResult,
  GetBTCPaysResult,
  GetBurnsResult,
  GetCancelsResult,
  GetCreditsResult,
  GetDebitsResult,
  GetDividendsResult,
  GetIssuancesResult,
  GetMempoolResult,
  GetOrderExpirationsResult,
  GetOrderMatchesResult,
  GetOrderMatchExpirationsResult,
  GetOrdersResult,
  GetSendsResult,
  GetTableParams,

  GetAssetInfoParams, GetAssetInfoResult,
  GetAssetNamesResult,
  GetBlockInfoParams, GetBlockInfoResult,
  GetBlocksParams, GetBlocksResult,
  GetElementCountsResult,
  GetHolderCountParams, GetHolderCountResult,
  GetHoldersParams, GetHoldersResult,
  GetMessagesParams, GetMessagesResult,
  GetMessagesByIndexParams, GetMessagesByIndexResult,
  GetRawTransactionParams, GetRawTransactionResult,
  GetRawTransactionBatchParams, GetRawTransactionBatchResult,
  GetRunningInfoResult,
  GetSupplyParams, GetSupplyResult,
  GetTxInfoParams, GetTxInfoResult,
  GetUnspentTxoutsParams, GetUnspentTxoutsResult,
  SearchPubKeyParams, SearchPubKeyResult,
  SearchRawTransactionsParams, SearchRawTransactionsResult,
  UnpackParams, UnpackResult,
};

export class Counterparty {
  public getAssets: any;
  public getBTCPays: any;
  public getBalances: any;
  public getBetExpirations: any;
  public getBetMatchExpirations: any;
  public getBetMatchResolutions: any;
  public getBetMatches: any;
  public getBets: any;
  public getBroadcasts: any;
  public getBurns: any;
  public getCancels: any;
  public getCredits: any;
  public getDebits: any;
  public getDividends: any;
  public getIssuances: any;
  public getMempool: any;
  public getOrderExpirations: any;
  public getOrderMatchExpirations: any;
  public getOrderMatches: any;
  public getOrders: any;
  public getSends: any;

  public assetParams: any;
  public blockIndexParams: any;
  public blockInfo: any;
  public getAssetInfo: any;
  public getAssetNames: any;
  public getBlockInfo: any;
  public getBlocks: any;
  public getElementCounts: any;
  public getHolderCount: any;
  public getHolders: any;
  public getMessages: any;
  public getMessagesByIndex: any;
  public getRawTransaction: any;
  public getRawTransactionBatch: any;
  public getRunningInfo: any;
  public getSupply: any;
  public getTxInfo: any;
  public getUnspentTxouts: any;
  public searchPubKey: any;
  public searchRawTransactions: any;
  public unpack: any;

  public constructor(transport: API) {
    /* Get Tables */
    this.getAssets = new GetTable<GetAssetsResult>(transport.getAssets).call;
    this.getBTCPays = new GetTable<GetBTCPaysResult>(transport.getBtcpays).call;
    this.getBalances = new GetTable<GetBalancesResult>(transport.getBalances).call;
    this.getBetExpirations = new GetTable<GetBetExpirationsResult>(transport.getBetExpirations).call;
    this.getBetMatchExpirations = new GetTable<GetBetMatchExpirationsResult>(transport.getBetMatchExpirations).call;
    this.getBetMatchResolutions = new GetTable<GetBetMatchResolutionsResult>(transport.getBetMatchResolutions).call;
    this.getBetMatches = new GetTable<GetBetMatchesResult>(transport.getBetMatches).call;
    this.getBets = new GetTable<GetBetsResult>(transport.getBets).call;
    this.getBroadcasts = new GetTable<GetBroadcastsResult>(transport.getBroadcasts).call;
    this.getBurns = new GetTable<GetBurnsResult>(transport.getBurns).call;
    this.getCancels = new GetTable<GetCancelsResult>(transport.getCancels).call;
    this.getCredits = new GetTable<GetCreditsResult>(transport.getCredits).call;
    this.getDebits = new GetTable<GetDebitsResult>(transport.getDebits).call;
    this.getDividends = new GetTable<GetDividendsResult>(transport.getDividends).call;
    this.getIssuances = new GetTable<GetIssuancesResult>(transport.getIssuances).call;
    this.getMempool = new GetTable<GetMempoolResult>(transport.getMempool).call;
    this.getOrderExpirations = new GetTable<GetOrderExpirationsResult>(transport.getOrderExpirations).call;
    this.getOrderMatchExpirations = new GetTable<GetOrderMatchExpirationsResult>(transport.getOrderMatchExpirations).call;
    this.getOrderMatches = new GetTable<GetOrderMatchesResult>(transport.getOrderMatches).call;
    this.getOrders = new GetTable<GetOrdersResult>(transport.getOrders).call;
    this.getSends = new GetTable<GetSendsResult>(transport.getSends).call;

    /* misc */
    this.getAssetInfo = new GetAssetInfo(transport.getAssetInfo).call;
    this.getAssetNames = new GetAssetNames(transport.getAssetNames).call;
    this.getBlockInfo = new GetBlockInfo(transport.getBlockInfo).call;
    this.getBlocks = new GetBlocks(transport.getBlocks).call;
    this.getElementCounts = new GetElementCounts(transport.getElementCounts).call;
    this.getHolderCount = new GetHolderCount(transport.getHolderCount).call;
    this.getHolders = new GetHolders(transport.getHolders).call;
    this.getMessages = new GetMessages(transport.getMessages).call;
    this.getMessagesByIndex = new GetMessagesByIndex(transport.getMessagesByIndex).call;
    this.getRawTransaction = new GetRawTransaction(transport.getRawtransaction).call;
    this.getRawTransactionBatch = new GetRawTransactionBatch(transport.getRawtransactionBatch).call;
    this.getRunningInfo = new GetRunningInfo(transport.getRunningInfo).call;
    this.getSupply = new GetSupply(transport.getSupply).call;
    this.getTxInfo = new GetTxInfo(transport.getTxInfo).call;
    this.getUnspentTxouts = new GetUnspentTxouts(transport.getUnspentTxouts).call;
    this.searchPubKey = new SearchPubKey(transport.searchPubkey).call;
    this.searchRawTransactions = new SearchRawTransactions(transport.searchRawTransactions).call;
    this.unpack = new Unpack(transport.unpack).call;
  }
}
