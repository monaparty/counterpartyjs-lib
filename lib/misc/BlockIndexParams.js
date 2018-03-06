"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockIndexParamsBuilder = /** @class */ (function () {
    function BlockIndexParamsBuilder() {
    }
    BlockIndexParamsBuilder.build = function (arg) {
        return (typeof arg === 'number') ? { block_index: arg } : arg;
    };
    return BlockIndexParamsBuilder;
}());
exports.BlockIndexParamsBuilder = BlockIndexParamsBuilder;
//# sourceMappingURL=BlockIndexParams.js.map