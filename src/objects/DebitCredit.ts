
/**
 * An object that describes a account debit or credit
 */
export interface DebitCredit {

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
   * The address debited or credited.
   */
  address: string;

  /**
   * The assets debited or credited.
   */
  asset: string;

  /**
   * The quantities of the specified asset debited or credited.
   */
  quantity: number;
}
