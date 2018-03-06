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
var SearchPubKey = /** @class */ (function (_super) {
    __extends(SearchPubKey, _super);
    function SearchPubKey() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.call = function (arg, providedPubKeys) {
            if (providedPubKeys === void 0) { providedPubKeys = null; }
            return _super.prototype.callback.call(_this, (typeof arg === 'string') ?
                {
                    pubkeyhash: arg,
                    provided_pubkeys: providedPubKeys,
                } :
                arg);
        };
        return _this;
    }
    return SearchPubKey;
}(CounterpartyAPIStub_1.CounterpartyAPIStub));
exports.SearchPubKey = SearchPubKey;
//# sourceMappingURL=SearchPubKey.js.map