
/**
 * An object that describes the expiration of a bet match.
 */
export interface BetMatchExpiration {

  /**
   * The transaction index of the bet match ID (e.g. the concatenation of the tx0 and tx1 hashes).
   */
  bet_match_id: number;

  /**
   * The tx0 (first) address for the bet match.
   */
  tx0_address: string;

  /**
   * The tx1 (second) address for the bet match.
   */
  tx1_address: string;

  /**
   * The block index (block number in the block chain) when this expiration occurred.
   */
  block_index: number;
}
