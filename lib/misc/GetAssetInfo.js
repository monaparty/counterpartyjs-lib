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
var AssetParams_1 = require("./AssetParams");
var GetAssetInfo = /** @class */ (function (_super) {
    __extends(GetAssetInfo, _super);
    function GetAssetInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @deprecated
         */
        _this.call = function (arg) {
            return _super.prototype.callback.call(_this, AssetParams_1.AssetParamsBuilder.build(arg));
        };
        return _this;
    }
    return GetAssetInfo;
}(CounterpartyAPIStub_1.CounterpartyAPIStub));
exports.GetAssetInfo = GetAssetInfo;
//# sourceMappingURL=GetAssetInfo.js.map