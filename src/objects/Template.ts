
/**
 * An object that describes an issuance of dividends on a specific user defined asset
 */
export interface Dividend {

  /**
   * The transaction index.
   */
  tx_index: number;

  /**
   * The transaction hash.
   */
  tx_hash: string;

  /**
   * The block index (block number in the block chain).
   */
  block_index: number;

  /**
   * The address that issued the dividend.
   */
  source: string;

  /**
   * The assets that the dividends are being rewarded on.
   */
  asset: string;

  /**
   * The quantities of XCP rewarded per whole unit of the asset.
   */
  quantity_per_unit: number;

  /**
   * Set to `valid` if a valid burn. Any other setting signifies an invalid/improper burn.
   */
  validity: string;
}

/**
 * An object that describes a specific occurance of a user defined asset being issued; or re-issued
 */
export interface Issuance {

  /**
   * The transaction index.
   */
  tx_index: number;

  /**
   * The transaction hash.
   */
  tx_hash: string;

  /**
   * The block index (block number in the block chain).
   */
  block_index: number;

  /**
   * The assets being issued; or re-issued.
   */
  asset: string;

  /**
   * The subasset longname; if any.
   */
  asset_longname: string | null;

  /**
   * The quantities of the specified asset being issued.
   */
  quantity: number;

  /**
   * Whether or not the asset is divisible (must agree with previous issuances of the asset; if there are any)
   */
  divisible: boolean;

  /**
   *
   */
  issuer: string;

  /**
   * Whether or not this objects marks the transfer of ownership rights for the specified quantity of this asset.
   */
  transfer: boolean;

  /**
   * Set to `valid` if a valid issuance. Any other setting signifies an invalid/improper issuance.
   */
  validity: string;
}

/**
 * An object that describes a specific order
 */
export interface Order {

  /**
   * The transaction index.
   */
  tx_index: number;

  /**
   * The transaction hash.
   */
  tx_hash: string;

  /**
   * The block index (block number in the block chain).
   */
  block_index: number;

  /**
   * The address that made the order.
   */
  source: string;

  /**
   * The assets being offered.
   */
  give_asset: string;

  /**
   * The quantities of the specified asset being offered.
   */
  give_quantity: number;

  /**
   * The quantities of the specified give asset remaining for the order.
   */
  give_remaining: number;

  /**
   * The assets desired in exchange.
   */
  get_asset: string;

  /**
   * The quantities of the specified asset desired in exchange.
   */
  get_quantity: number;

  /**
   * The quantities of the specified get asset remaining for the order.
   */
  get_remaining: number;

  /**
   * The given exchange rate (as an exchange ratio desired from the asset offered to the asset desired).
   * This value must be a float value.
   */
  price: number;

  /**
   * The number of blocks over which the order should be valid.
   */
  expiration: number;

  /**
   * The miners' fee provided; in BTC; required only if selling BTC.
   * (should not be lower than is required for acceptance in a block).
   */
  fee_provided: number;

  /**
   * The miners' fee required to be paid by orders for them to match this one; in BTC;
   * required only if buying BTC (may be zero; though).
   */
  fee_required: number;
}

/**
 * An object that describes a specific occurance of two orders being matched (either partially; or fully)
 */
export interface OrderMatch {

  /**
   * The Bitcoin transaction index of the first (earlier) order.
   */
  tx0_index: number;

  /**
   * The Bitcoin transaction hash of the first order.
   */
  tx0_hash: string;

  /**
   * The Bitcoin block index of the first order.
   */
  tx0_block_index: number;

  /**
   * The number of blocks over which the first order was valid.
   */
  tx0_expiration: number;

  /**
   * The address that issued the first (earlier) order.
   */
  tx0_address: string;

  /**
   * The transaction index of the second (matching) order.
   */
  tx1_index: number;

  /**
   * The transaction hash of the second order.
   */
  tx1_hash: string;

  /**
   * The block index of the second order.
   */
  tx1_block_index: number;

  /**
   * The address that issued the second order.
   */
  tx1_address: string;

  /**
   * The number of blocks over which the second order was valid.
   */
  tx1_expiration: number;

  /**
   * The assets exchanged FROM the first order to the second order.
   */
  forward_asset: string;

  /**
   * The quantities of the specified forward asset.
   */
  forward_quantity: number;

  /**
   * The assets exchanged FROM the second order to the first order.
   */
  backward_asset: string;

  /**
   * The quantities of the specified backward asset.
   */
  backward_quantity: number;

  /**
   * Set to `valid` if a valid order match. Any other setting signifies an invalid/improper order match.
   */
  validity: string;
}

/**
 * An object that describes a specific send (e.g. `simple send` of XCP; or a user defined asset)
 */
export interface Send {

  /**
   * The transaction index.
   */
  tx_index: number;

  /**
   * The transaction hash.
   */
  tx_hash: string;

  /**
   * The block index (block number in the block chain).
   */
  block_index: number;

  /**
   * The source address of the send.
   */
  source: string;

  /**
   * The destination address of the send.
   */
  destination: string;

  /**
   * The assets being sent.
   */
  asset: string;

  /**
   * The quantities of the specified asset sent.
   */
  quantity: number;

  /**
   * Set to `valid` if a valid send. Any other setting signifies an invalid/improper send.
   */
  validity: string;

  /**
   * The memo associated with this transaction.
   */
  memo: string;
}

/**
 * An object that describes a specific event in the counterpartyd message feed.
 * (which can be used by 3rd party applications
 * to track state changes to the counterpartyd database on a block-by-block basis).
 */
export interface Message {

  /**
   * The message index (i.e. transaction index).
   */
  message_index: number;

  /**
   * The block index (block number in the block chain) this event occurred on.
   */
  block_index: number;

  /**
   * A string denoting the entity that the message relates to; e.g. `credits`; `burns`; `debits`.
   * The category matches the relevant table name in counterpartyd (see blocks.py for more info).
   */
  category: string;

  /**
   * The operation done to the table noted in category. This is either `insert`; or `update`.
   */
  command: string;

  /**
   * A JSON-encoded object containing the message data.
   * The properties in this object match the columns in the table referred to by category.
   */
  bindings: string;
}

/**
 * An object that describes the expiration of a bet created by the source address.
 */
export interface BetExpiration {

  /**
   * The transaction index of the bet expiring.
   */
  bet_index: number;

  /**
   * The transaction hash of the bet expiriing.
   */
  bet_hash: string;

  /**
   * The block index (block number in the block chain) when this expiration occurred.
   */
  block_index: number;

  /**
   * The source address that created the bet.
   */
  source: string;
}

/**
 * An object that describes the expiration of an order created by the source address.
 */
export interface OrderExpiration {

  /**
   * The transaction index of the order expiring.
   */
  order_index: number;

  /**
   * The transaction hash of the order expiriing.
   */
  order_hash: string;

  /**
   * The block index (block number in the block chain) when this expiration occurred.
   */
  block_index: number;

  /**
   * The source address that created the order.
   */
  source: string;
}

/**
 * An object that describes the expiration of a bet match.
 */
export interface BetMatchExpiration {

  /**
   * The transaction index of the bet match ID (e.g. the concatenation of the tx0 and tx1 hashes).
   */
  bet_match_id: number;

  /**
   * The tx0 (first) address for the bet match.
   */
  tx0_address: string;

  /**
   * The tx1 (second) address for the bet match.
   */
  tx1_address: string;

  /**
   * The block index (block number in the block chain) when this expiration occurred.
   */
  block_index: number;
}

/**
 * An object that describes the expiration of an order match.
 */
export interface OrderMatchExpiration {

  /**
   * The transaction index of the order match ID (e.g. the concatenation of the tx0 and tx1 hashes).
   */
  order_match_id: number;

  /**
   * The tx0 (first) address for the order match.
   */
  tx0_address: string;

  /**
   * The tx1 (second) address for the order match.
   */
  tx1_address: string;

  /**
   * The block index (block number in the block chain) when this expiration occurred.
   */
  block_index: number;
}

// Status
// Here the list of all possible status for each table/*  */
//
// balances/*  No status field */
// bet_expirations/*  No status field */
// bet_match_expirations/*  No status field */
// bet_matches/*  pending; settled: liquidated for bear (deprecated); settled; settled: liquidated for bull (deprecated); settled: for equal; settled: for notequal; dropped; expired */
// bets/*  open; filled; cancelled; expired; dropped; invalid: {problem(s)} */
// broadcasts/*  valid; invalid: {problem(s)} */
// btcpays/*  valid; invalid: {problem(s)} */
// burns/*  valid; invalid: {problem(s)} */
// cancels/*  valid; invalid: {problem(s)} */
// credits/*  No status field */
// debits/*  No status field */
// dividends/*  valid; invalid: {problem(s)} */
// issuances/*  valid; invalid: {problem(s)} */
// order_expirations/*  No status field */
// order_match_expirations/*  No status field */
// order_matches/*  pending; completed; expired */
// orders/*  open; filled; canceled; expired; invalid: {problem(s)} */
// sends/*  valid; invalid: {problem(s)} */
// API Changes
// This section documents any changes to the API; for version numbers where there were API-level modifications.
//
// There will be no incompatible API pushes that do not either have/*  */
//
// A well known set cut over date in the future
// Or; a deprecation process where the old API is supported for an amount of time
