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
var GetTable = /** @class */ (function (_super) {
    __extends(GetTable, _super);
    function GetTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.call = function (arg, filterop_, orderBy, orderDir, startBlock, endBlock, status_, limit_, offset_, showExpired) {
            if (filterop_ === void 0) { filterop_ = 'AND'; }
            if (orderBy === void 0) { orderBy = null; }
            if (orderDir === void 0) { orderDir = null; }
            if (startBlock === void 0) { startBlock = null; }
            if (endBlock === void 0) { endBlock = null; }
            if (status_ === void 0) { status_ = null; }
            if (limit_ === void 0) { limit_ = 1000; }
            if (offset_ === void 0) { offset_ = 0; }
            if (showExpired === void 0) { showExpired = true; }
            return _super.prototype.callback.call(_this, Array.isArray(arg) ? {
                filters: arg,
                filterop: filterop_,
                order_by: orderBy,
                order_dir: orderDir,
                start_block: startBlock,
                end_block: endBlock,
                status: status_,
                limit: limit_,
                offset: offset_,
                show_expired: showExpired,
            } : arg);
        };
        return _this;
    }
    return GetTable;
}(CounterpartyAPIStub_1.CounterpartyAPIStub));
exports.GetTable = GetTable;
//# sourceMappingURL=GetTable.js.map