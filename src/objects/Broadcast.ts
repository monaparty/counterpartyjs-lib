
/**
 * An object that describes a specific occurance of a broadcast event (i.e. creating/extending a feed)
 */
export interface Broadcast {

  /**
   * The transaction index;
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
   * The address that made the broadcast.
   */
  source: string;

  /**
   * The time the broadcast was made; in Unix time..
   */
  timestamp: string;

  /**
   * How much of every bet on this feed should go to its operator; a fraction of 1; (i.e. 0.05 is five percent)
   * This value must be a float value.
   */
  fee_multiplier: number;

  /**
   * The numerical value of the broadcast
   * This value must be a float value.
   */
  value: number;

  /**
   * The textual component of the broadcast.
   */
  text: string;

  /**
   * Set to `valid` if a valid broadcast. Any other setting signifies an invalid/improper broadcast.
   */
  validity: string;
}
