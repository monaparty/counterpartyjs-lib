/**
 * An object that matches a request to settle an Order Match for which BTC is owed.
 */
export interface BTCPay {
  /**
   * The transaction index.
   * It must be a number value.
   */
  tx_index: number;

  /**
   * The transaction hash.
   */
  tx_hash: string;

  /**
   * The block index (block number in the block chain).
   * It must be a number value.
   */
  block_index: number;

  source: string;

  order_match_id: string;

  /**
   * Set to "valid" if valid.
   */
  validity: string;
}
