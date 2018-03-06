"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CounterAPIProxy_1 = require("CounterAPIProxy");
var GetAssetInfo_1 = require("./GetAssetInfo");
exports.GetAssetInfo = GetAssetInfo_1.GetAssetInfo;
var GetTableParams_1 = require("./GetTableParams");
exports.GetTableParams = GetTableParams_1.GetTableParams;
exports.GetTableParamsBuilder = GetTableParams_1.GetTableParamsBuilder;
var filter_1 = require("./types/filter");
exports.Filter = filter_1.Filter;
var GetTable = /** @class */ (function () {
    function GetTable() {
        var _this = this;
        this.assets = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getAssets);
        };
        this.balances = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getBalances);
        };
        this.bets = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getBets);
        };
        this.betExpirations = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getBetExpirations);
        };
        this.betMatches = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getBetMatches);
        };
        this.betMatchExpirations = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getBetMatchExpirations);
        };
        this.betMatchResolutions = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getBetMatchResolutions);
        };
        this.broadcasts = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getBroadcasts);
        };
        this.btcpays = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getBtcpays);
        };
        this.burns = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getBurns);
        };
        this.cancels = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getCancels);
        };
        this.credits = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getCredits);
        };
        this.debits = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getDebits);
        };
        this.dividends = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getDividends);
        };
        this.issuances = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getIssuances);
        };
        this.mempool = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getMempool);
        };
        this.orders = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getOrders);
        };
        this.orderExpirations = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getOrderExpirations);
        };
        this.orderMatches = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getOrderMatches);
        };
        this.orderMatchExpirations = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getOrderMatchExpirations);
        };
        this.sends = function (params) {
            return _this.common(params, CounterAPIProxy_1.API.getSends);
        };
        /*--- misc ---*/
        this.getAssetNames = function () { return CounterAPIProxy_1.API.getAssetNames(); };
        this.getHolderCount = function () { return CounterAPIProxy_1.API.getHolderCount(); };
        this.getHolders = function () { return CounterAPIProxy_1.API.getHolders(); };
        this.getMessages = function () { return CounterAPIProxy_1.API.getMessages(); };
        this.getMessagesByIndex = function () { return CounterAPIProxy_1.API.getMessagesByIndex(); };
        this.getBlockInfo = function () { return CounterAPIProxy_1.API.getBlockInfo(); };
        this.getBlocks = function () { return CounterAPIProxy_1.API.getBlocks(); };
        this.getRunningInfo = function () { return CounterAPIProxy_1.API.getRunningInfo(); };
        this.getElementCounts = function () { return CounterAPIProxy_1.API.getElementCounts(); };
        this.getUnspentTxouts = function () { return CounterAPIProxy_1.API.getUnspentTxouts(); };
        this.getRawTransaction = function () { return CounterAPIProxy_1.API.getRawtransaction(); };
        this.getRawTransactionBatch = function () { return CounterAPIProxy_1.API.getRawtransactionBatch(); };
        this.searchRawTransactions = function () { return CounterAPIProxy_1.API.searchRawTransactions(); };
        this.getTxInfo = function () { return CounterAPIProxy_1.API.getTxInfo(); };
        this.searchPubkey = function () { return CounterAPIProxy_1.API.searchPubkey(); };
        this.unpack = function () { return CounterAPIProxy_1.API.unpack(); };
        this.common = function (params, callback) {
            return callback(params);
        };
    }
    return GetTable;
}());
exports.GetTable = GetTable;
//# sourceMappingURL=index.js.map