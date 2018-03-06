
/**
 * An object that describes an instance of a specific burn
 */
export interface Burn {

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
   * The address the burn was performed from.
   */
  source: string;

  /**
   * The quantities of BTC burned.
   */
  burned: number;

  /**
   * The quantities of XPC actually earned from the burn.
   * (takes into account any bonus quantitys; 1 BTC limitation; etc)
   */
  earned: number;

  /**
   * Set to `valid` if a valid burn. Any other setting signifies an invalid/improper burn.
   */
  validity: string;
}
