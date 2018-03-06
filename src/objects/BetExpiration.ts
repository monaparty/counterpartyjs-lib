
/**
 * An object that describes the expiration of a bet created by the source address.
 */
export interface BetExpiration {

  /**
   * The transaction index of the bet expiring.
   */
  bet_index: number;

  /**
   * The transaction hash of the bet expiriing.
   */
  bet_hash: string;

  /**
   * The block index (block number in the block chain) when this expiration occurred.
   */
  block_index: number;

  /**
   * The source address that created the bet.
   */
  source: string;
}
