
/**
 * An object that describes an issuance of dividends on a specific user defined asset
 */
export interface Dividend {

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
   * The address that issued the dividend.
   */
  source: string;

  /**
   * The assets that the dividends are being rewarded on.
   */
  asset: string;

  /**
   * The quantities of XCP rewarded per whole unit of the asset.
   */
  quantity_per_unit: number;

  /**
   * Set to `valid` if a valid burn. Any other setting signifies an invalid/improper burn.
   */
  validity: string;
}
