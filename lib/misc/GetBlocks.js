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
var GetBlocks = /** @class */ (function (_super) {
    __extends(GetBlocks, _super);
    function GetBlocks() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.call = function (arg, minMessageIndex) {
            if (minMessageIndex === void 0) { minMessageIndex = null; }
            return _super.prototype.callback.call(_this, Array.isArray(arg) ?
                {
                    block_indexes: arg,
                    min_message_index: minMessageIndex,
                } : arg);
        };
        return _this;
    }
    return GetBlocks;
}(CounterpartyAPIStub_1.CounterpartyAPIStub));
exports.GetBlocks = GetBlocks;
//# sourceMappingURL=GetBlocks.js.map