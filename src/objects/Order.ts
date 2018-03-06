
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
