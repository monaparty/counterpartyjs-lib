"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetParamsBuilder = /** @class */ (function () {
    function AssetParamsBuilder() {
    }
    AssetParamsBuilder.build = function (arg) {
        return (typeof arg === 'string') ? { asset: arg } : arg;
    };
    return AssetParamsBuilder;
}());
exports.AssetParamsBuilder = AssetParamsBuilder;
//# sourceMappingURL=AssetParams.js.map