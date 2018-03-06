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
var GetAssetNames = /** @class */ (function (_super) {
    __extends(GetAssetNames, _super);
    function GetAssetNames() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.call = function () {
            return _super.prototype.callback.call(_this, {});
        };
        return _this;
    }
    return GetAssetNames;
}(CounterpartyAPIStub_1.CounterpartyAPIStub));
exports.GetAssetNames = GetAssetNames;
//# sourceMappingURL=GetAssetNames.js.map