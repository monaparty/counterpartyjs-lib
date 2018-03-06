
/**
 * An object that describes a cancellation of a (previously) open order or bet
 */
export interface Cancel {

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
   * The address with the open order or bet that was cancelled.
   */
  source: string;

  /**
   * The transaction hash of the order or bet cancelled.
   */
  offer_hash: string;

  /**
   * Set to `valid` if a valid burn. Any other setting signifies an invalid/improper burn.
   */
  validity: string;
}
