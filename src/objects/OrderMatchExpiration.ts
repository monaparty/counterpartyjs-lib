
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
