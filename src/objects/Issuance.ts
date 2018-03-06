
/**
 * An object that describes a specific occurance of a user defined asset being issued; or re-issued
 */
export interface Issuance {

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
   * The assets being issued; or re-issued.
   */
  asset: string;

  /**
   * The subasset longname; if any.
   */
  asset_longname: string | null;

  /**
   * The quantities of the specified asset being issued.
   */
  quantity: number;

  /**
   * Whether or not the asset is divisible (must agree with previous issuances of the asset; if there are any)
   */
  divisible: boolean;

  /**
   *
   */
  issuer: string;

  /**
   * Whether or not this objects marks the transfer of ownership rights for the specified quantity of this asset.
   */
  transfer: boolean;

  /**
   * Set to `valid` if a valid issuance. Any other setting signifies an invalid/improper issuance.
   */
  validity: string;
}
