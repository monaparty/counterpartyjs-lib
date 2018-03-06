
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
