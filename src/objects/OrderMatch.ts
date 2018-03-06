
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
