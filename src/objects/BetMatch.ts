/**
 * An object that describes a specific occurance of two bets being matched (either partially, or fully):
 */
export interface BetMatch {

  /**
   * The Bitcoin transaction index of the initial bet.
   * This must be a integer value
   */
  tx0_index: number;

  /**
   * The Bitcoin transaction hash of the initial bet.
   */
  tx0_hash: string;

  /**
   * The Bitcoin block index of the initial bet.
   * This must be a integer value
   */
  tx0_block_index: number;

  /**
   * The number of blocks over which the initial bet was valid.
   */
  tx0_expiration: number;

  /**
   * The address that issued the initial bet.
   * This must be a integer value
   */
  tx0_address: string;

  /**
   * The type of the initial bet.
   * (0 for Bullish CFD (deprecated), 1 for Bearish CFD (deprecated), 2 for Equal, 3 for Not Equal)
   */
  tx0_bet_type: string;

  /**
   * The transaction index of the matching (counter) bet.
   * This must be a integer value
   */
  tx1_index: number;

  /**
   * The transaction hash of the matching bet.
   */
  tx1_hash: string;

  /**
   * The block index of the matching bet.
   * This must be a integer value
   */
  tx1_block_index: number;

  /**
   * The address that issued the matching bet.
   */
  tx1_address: string;

  /**
   * The number of blocks over which the matching bet was valid.
   * This must be a integer value
   */
  tx1_expiration: number;

  /**
   * The type of the counter bet.
   * (0 for Bullish CFD (deprecated), 1 for Bearish CFD (deprecated), 2 for Equal, 3 for Not Equal)
   */
  tx1_bet_type: string;

  /**
   * The address of the feed that the bets refer to.
   */
  feed_address: string;

  /**
   * This must be a integer value
   */
  initial_value: number;

  /**
   * The timestamp at which the bet match was made, in Unix time..
   * This must be a integer value
   */
  deadline: number;

  /**
   * Target value for Equal/NotEqual bet.
   */
  target_value: number;

  /**
   * Leverage, as a fraction of 5040.
   * This must be a integer value
   */
  leverage: number;

  /**
   * The quantities of XCP bet in the initial bet.
   * This must be a integer value
   */
  forward_quantity: number;

  /**
   * The quantities of XCP bet in the matching bet.
   * This must be a integer value
   */
  backward_quantity: number;

  /**
   * This must be a integer value
   */
  fee_multiplier: number;

  /**
   * Set to 'valid' if a valid order match. Any other setting signifies an invalid/improper order match.
   */
  validity: string;
}
