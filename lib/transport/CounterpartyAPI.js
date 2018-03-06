"use strict";
/**
 * A wrapper for Counterparty API.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns Counterparty API transport.
 *
 * @param transport (optional) the NPM module name that you want to use.
 */
exports.getAPI = function (transport) {
    var result;
    if (module && module.require) {
        /* for Node */
        if (typeof transport !== 'string') {
            transport = 'cunterparty-promise';
        }
        result = module.require(transport);
    }
    else {
        /* for browsers */
        if (typeof transport !== 'string') {
            transport = 'ngx-cunterparty-api';
        }
        result = require(transport);
    }
    return result;
};
//# sourceMappingURL=CounterpartyAPI.js.map