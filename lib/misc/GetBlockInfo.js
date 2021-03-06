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
var BlockIndexParams_1 = require("./BlockIndexParams");
var GetBlockInfo = /** @class */ (function (_super) {
    __extends(GetBlockInfo, _super);
    function GetBlockInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.call = function (arg) {
            return _this.callback(BlockIndexParams_1.BlockIndexParamsBuilder.build(arg));
        };
        return _this;
    }
    return GetBlockInfo;
}(CounterpartyAPIStub_1.CounterpartyAPIStub));
exports.GetBlockInfo = GetBlockInfo;
//# sourceMappingURL=GetBlockInfo.js.map