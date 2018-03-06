"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CounterpartyAPIStub_1 = require("../CounterpartyAPIStub");
var GetUnspentTxouts = /** @class */ (function (_super) {
    __extends(GetUnspentTxouts, _super);
    function GetUnspentTxouts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.call = function (arg, unconfirmed_, unspentTxHash) {
            if (unconfirmed_ === void 0) { unconfirmed_ = false; }
            if (unspentTxHash === void 0) { unspentTxHash = null; }
            return _super.prototype.callback.call(_this, (typeof arg === 'string') ?
                {
                    address: arg,
                    unconfirmed: unconfirmed_,
                    unspent_tx_hash: unspentTxHash,
                } :
                arg);
        };
        return _this;
    }
    return GetUnspentTxouts;
}(CounterpartyAPIStub_1.CounterpartyAPIStub));
exports.GetUnspentTxouts = GetUnspentTxouts;
//# sourceMappingURL=GetUnspentTxouts.js.map