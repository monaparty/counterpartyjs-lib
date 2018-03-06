
/**
 * An object that describes a balance that is associated to a specific address
 */
export interface Balance {

  /**
   * A PubkeyHash Bitcoin address; or the pubkey associated with it (in case the address hasn't sent anything before).
   */
  address: string;

  /**
   * The ID of the assets in which the balance is specified.
   */
  asset: string;

  /**
   * The quantities of the specified asset at this address.
   */
  quantity: number;
}
