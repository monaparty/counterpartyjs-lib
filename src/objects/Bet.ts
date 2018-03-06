/**
 * An object that describes a specific bet
 */
export interface Bet {

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
   * The address that made the bet.
   */
  source: string;

  /**
   * The address with the feed that the bet is to be made on.
   */
  feed_address: string;

  /**
   * 0 for Bullish CFD (deprecated);
   * 1 for Bearish CFD (deprecated);
   * 2 for Equal;
   * 3 for Not Equal.
   */
  bet_type: number;

  /**
   * The timestamp at which the bet should be decided/settled; in Unix time.
   */
  deadline: number;

  /**
   * The quantities of XCP to wager.
   */
  wager_quantity: number;

  /**
   * The minimum quantities of XCP to be wagered by the user to bet against the bet issuer;
   * if the other party were to accept the whole thing.
   */
  counterwager_quantity: number;

  /**
   * The quantity of XCP wagered that is remaining to bet on.
   */
  wager_remaining: number;

  /**
   * This value must be a float value.
   */
  odds: number;

  /**
   * Target value for Equal/NotEqual bet.
   * This value must be a float value.
   */
  target_value: number;

  /**
   * Leverage; as a fraction of 5040.
   */
  leverage: number;

  /**
   * The number of blocks for which the bet should be valid.
   */
  expiration: number;

  /**
   * How much of every bet on this feed should go to its operator; a fraction of 1;
   * (i.e. 1.05 is five percent).
   */
  fee_multiplier: number;

  /**
   * Set to `valid` if a valid bet. Any other setting signifies an invalid/improper bet.
   */
  validity: string;
}

/**
 * An object that describes a specific occurance of two bets being matched (either partially; or fully)
 */
export interface BetMatch {

  /**
   * The Bitcoin transaction index of the initial bet.
   */
  tx0_index: number;

  /**
   * The Bitcoin transaction hash of the initial bet.
   */
  tx0_hash: string;

  /**
   * The Bitcoin block index of the initial bet.
   */
  tx0_block_index: number;

  /**
   * The number of blocks over which the initial bet was valid.
   */
  tx0_expiration: number;

  /**
   * The address that issued the initial bet.
   */
  tx0_address: string;

  /**
   * The type of the initial bet.
   * (0 for Bullish CFD (deprecated); 1 for Bearish CFD (deprecated); 2 for Equal; 3 for Not Equal)
   */
  tx0_bet_type: string;

  /**
   * The transaction index of the matching (counter) bet.
   */
  tx1_index: number;

  /**
   * The transaction hash of the matching bet.
   */
  tx1_hash: string;

  /**
   * The block index of the matching bet.
   */
  tx1_block_index: number;

  /**
   * The address that issued the matching bet.
   */
  tx1_address: string;

  /**
   * The number of blocks over which the matching bet was valid.
   */
  tx1_expiration: number;

  /**
   * The type of the counter bet.
   * (0 for Bullish CFD (deprecated); 1 for Bearish CFD (deprecated); 2 for Equal; 3 for Not Equal)
   */
  tx1_bet_type: string;

  /**
   * The address of the feed that the bets refer to.
   */
  feed_address: string;

  /**
   *
   */
  initial_value: number;

  /**
   * The timestamp at which the bet match was made; in Unix time.
   */
  deadline: number;

  /**
   * Target value for Equal/NotEqual bet.
   * This value must be a float value.
   */
  target_value: number;

  /**
   * Leverage; as a fraction of 5040.
   */
  leverage: number;

  /**
   * The quantities of XCP bet in the initial bet.
   */
  forward_quantity: number;

  /**
   * The quantities of XCP bet in the matching bet.
   */
  backward_quantity: number;

  /**
   *
   */
  fee_multiplier: number;

  /**
   * Set to `valid` if a valid order match. Any other setting signifies an invalid/improper order match.
   */
  validity: string;
}

