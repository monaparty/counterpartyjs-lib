import { CounterpartyAPIStub } from '../CounterpartyAPIStub';

export interface Params {
  /**
   * The pubkeyhash/address.
   */
  pubkeyhash: string;

  /**
   * A list of supplied pubkeys.
   * If one of these pubkeys matches the pubkeyhash, used if one of the supplied pubkey hashes to the pubkeyhash.
   * (Can be useful if the pubkeyhash has not sent out at least one transaction and you have a list of pubkeys
   * that may match it.)
   */
  provided_pubkeys: string[]|null;
}

export type Success = string;
export type Fail = any; /* TODO: */
export type Result = Success|Fail;

export class SearchPubKey extends CounterpartyAPIStub<Params, Result> {

  public call = (arg: string|Params, providedPubKeys = null): Result =>
    super.callback((typeof arg === 'string') ?
      {
        pubkeyhash: arg,
        provided_pubkeys: providedPubKeys,
      } :
      arg)

}
