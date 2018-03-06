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
var GetMessages = /** @class */ (function (_super) {
    __extends(GetMessages, _super);
    function GetMessages() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.call = function (arg) {
            return _super.prototype.callback.call(_this, BlockIndexParams_1.BlockIndexParamsBuilder.build(arg));
        };
        return _this;
    }
    return GetMessages;
}(CounterpartyAPIStub_1.CounterpartyAPIStub));
exports.GetMessages = GetMessages;
//# sourceMappingURL=GetMessages.js.map