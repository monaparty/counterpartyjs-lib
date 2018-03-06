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
var GetRawTransactionBatch = /** @class */ (function (_super) {
    __extends(GetRawTransactionBatch, _super);
    function GetRawTransactionBatch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.call = function (arg, verbose_, skipMissing) {
            if (verbose_ === void 0) { verbose_ = false; }
            if (skipMissing === void 0) { skipMissing = false; }
            return _super.prototype.callback.call(_this, Array.isArray(arg) ? {
                txhash_list: arg,
                verbose: verbose_,
                skip_missing: skipMissing,
            } : arg);
        };
        return _this;
    }
    return GetRawTransactionBatch;
}(CounterpartyAPIStub_1.CounterpartyAPIStub));
exports.GetRawTransactionBatch = GetRawTransactionBatch;
//# sourceMappingURL=GetRawTransactionBatch.js.map