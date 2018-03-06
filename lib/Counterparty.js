"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetTable_1 = require("./tables/GetTable");
var GetAssetInfo_1 = require("./misc/GetAssetInfo");
var GetAssetNames_1 = require("./misc/GetAssetNames");
var GetBlockInfo_1 = require("./misc/GetBlockInfo");
var GetBlocks_1 = require("./misc/GetBlocks");
var GetElementCounts_1 = require("./misc/GetElementCounts");
var GetHolderCount_1 = require("./misc/GetHolderCount");
var GetHolders_1 = require("./misc/GetHolders");
var GetMessages_1 = require("./misc/GetMessages");
var GetMessagesByIndex_1 = require("./misc/GetMessagesByIndex");
var GetRawTransaction_1 = require("./misc/GetRawTransaction");
var GetRawTransactionBatch_1 = require("./misc/GetRawTransactionBatch");
var GetRunningInfo_1 = require("./misc/GetRunningInfo");
var GetSupply_1 = require("./misc/GetSupply");
var GetTxInfo_1 = require("./misc/GetTxInfo");
var GetUnspentTxouts_1 = require("./misc/GetUnspentTxouts");
// tslint:disable-next-line:ordered-imports
var SearchPubKey_1 = require("./misc/SearchPubKey");
// tslint:disable-next-line:ordered-imports
var SearchRawTransactions_1 = require("./misc/SearchRawTransactions");
// tslint:disable-next-line:ordered-imports
var Unpack_1 = require("./misc/Unpack");
var Counterparty = /** @class */ (function () {
    function Counterparty(transport) {
        /* Get Tables */
        this.getAssets = new GetTable_1.GetTable(transport.getAssets).call;
        this.getBTCPays = new GetTable_1.GetTable(transport.getBtcpays).call;
        this.getBalances = new GetTable_1.GetTable(transport.getBalances).call;
        this.getBetExpirations = new GetTable_1.GetTable(transport.getBetExpirations).call;
        this.getBetMatchExpirations = new GetTable_1.GetTable(transport.getBetMatchExpirations).call;
        this.getBetMatchResolutions = new GetTable_1.GetTable(transport.getBetMatchResolutions).call;
        this.getBetMatches = new GetTable_1.GetTable(transport.getBetMatches).call;
        this.getBets = new GetTable_1.GetTable(transport.getBets).call;
        this.getBroadcasts = new GetTable_1.GetTable(transport.getBroadcasts).call;
        this.getBurns = new GetTable_1.GetTable(transport.getBurns).call;
        this.getCancels = new GetTable_1.GetTable(transport.getCancels).call;
        this.getCredits = new GetTable_1.GetTable(transport.getCredits).call;
        this.getDebits = new GetTable_1.GetTable(transport.getDebits).call;
        this.getDividends = new GetTable_1.GetTable(transport.getDividends).call;
        this.getIssuances = new GetTable_1.GetTable(transport.getIssuances).call;
        this.getMempool = new GetTable_1.GetTable(transport.getMempool).call;
        this.getOrderExpirations = new GetTable_1.GetTable(transport.getOrderExpirations).call;
        this.getOrderMatchExpirations = new GetTable_1.GetTable(transport.getOrderMatchExpirations).call;
        this.getOrderMatches = new GetTable_1.GetTable(transport.getOrderMatches).call;
        this.getOrders = new GetTable_1.GetTable(transport.getOrders).call;
        this.getSends = new GetTable_1.GetTable(transport.getSends).call;
        /* misc */
        this.getAssetInfo = new GetAssetInfo_1.GetAssetInfo(transport.getAssetInfo).call;
        this.getAssetNames = new GetAssetNames_1.GetAssetNames(transport.getAssetNames).call;
        this.getBlockInfo = new GetBlockInfo_1.GetBlockInfo(transport.getBlockInfo).call;
        this.getBlocks = new GetBlocks_1.GetBlocks(transport.getBlocks).call;
        this.getElementCounts = new GetElementCounts_1.GetElementCounts(transport.getElementCounts).call;
        this.getHolderCount = new GetHolderCount_1.GetHolderCount(transport.getHolderCount).call;
        this.getHolders = new GetHolders_1.GetHolders(transport.getHolders).call;
        this.getMessages = new GetMessages_1.GetMessages(transport.getMessages).call;
        this.getMessagesByIndex = new GetMessagesByIndex_1.GetMessagesByIndex(transport.getMessagesByIndex).call;
        this.getRawTransaction = new GetRawTransaction_1.GetRawTransaction(transport.getRawtransaction).call;
        this.getRawTransactionBatch = new GetRawTransactionBatch_1.GetRawTransactionBatch(transport.getRawtransactionBatch).call;
        this.getRunningInfo = new GetRunningInfo_1.GetRunningInfo(transport.getRunningInfo).call;
        this.getSupply = new GetSupply_1.GetSupply(transport.getSupply).call;
        this.getTxInfo = new GetTxInfo_1.GetTxInfo(transport.getTxInfo).call;
        this.getUnspentTxouts = new GetUnspentTxouts_1.GetUnspentTxouts(transport.getUnspentTxouts).call;
        this.searchPubKey = new SearchPubKey_1.SearchPubKey(transport.searchPubkey).call;
        this.searchRawTransactions = new SearchRawTransactions_1.SearchRawTransactions(transport.searchRawTransactions).call;
        this.unpack = new Unpack_1.Unpack(transport.unpack).call;
    }
    return Counterparty;
}());
exports.Counterparty = Counterparty;
//# sourceMappingURL=Counterparty.js.map