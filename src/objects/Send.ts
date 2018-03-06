
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
