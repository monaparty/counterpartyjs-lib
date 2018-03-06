/**
 * A wrapper for Counterparty API.
 */

/**
 * All wrappers must implements them.
 */
export interface API {
  getAssets(params: object): any;
  getBalances(params: object): any;
  getBets(params: object): any;
  getBetExpirations(params: object): any;
  getBetMatches(params: object): any;
  getBetMatchExpirations(params: object): any;
  getBetMatchResolutions(params: object): any;
  getBroadcasts(params: object): any;
  getBtcpays(params: object): any;
  getBurns(params: object): any;
  getCancels(params: object): any;
  getCredits(params: object): any;
  getDebits(params: object): any;
  getDividends(params: object): any;
  getIssuances(params: object): any;
  getMempool(params: object): any;
  getOrders(params: object): any;
  getOrderExpirations(params: object): any;
  getOrderMatches(params: object): any;
  getOrderMatchExpirations(params: object): any;
  getSends(params: object): any;

  getAssetInfo(params: object): any;
  getSupply(params: object): any;
  getAssetNames(params: object): any;
  getHolderCount(params: object): any;
  getHolders(params: object): any;
  getMessages(params: object): any;
  getMessagesByIndex(params: object): any;
  getBlockInfo(params: object): any;
  getBlocks(params: object): any;
  getRunningInfo(params: object): any;
  getElementCounts(params: object): any;
  getUnspentTxouts(params: object): any;
  getRawtransaction(params: object): any;
  getRawtransactionBatch(params: object): any;
  searchRawTransactions(params: object): any;
  getTxInfo(params: object): any;
  searchPubkey(params: object): any;
  unpack(params: object): any;

  createBet(params: object): any;
  createBroadcast(params: object): any;
  createBtcpay(params: object): any;
  createBurn(params: object): any;
  createCancel(params: object): any;
  createDividend(params: object): any;
  createIssuance(params: object): any;
  createOrder(params: object): any;
  createSend(params: object): any;
}

/**
 * Returns Counterparty API transport.
 *
 * @param transport (optional) the NPM module name that you want to use.
 */
export const getAPI = (transport?: string): API => {
  let result: any;

  if (module && module.require) {
    /* for Node */
    if (typeof transport !== 'string') {
      transport = 'cunterparty-promise';
    }
    result = module.require(transport);
  } else {
    /* for browsers */
    if (typeof transport !== 'string') {
      transport = 'ngx-cunterparty-api';
    }
    result = require(transport);
  }
  return result as API;
};
