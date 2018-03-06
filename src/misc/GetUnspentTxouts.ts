import { CounterpartyAPIStub } from '../CounterpartyAPIStub';

export interface Params {
  address: string;
  unconfirmed?: boolean;
  unspent_tx_hash?: string|null;
}

export interface ResultItem {
  /**
   * The amount of the UTXO
   * It must be a integer value.
   */
  amount: number;

  /**
   * Number of confirmations since the UTXO was created
   * It must be a integer value.
   */
  confirmations: number;

  /**
   * The UTXO's scriptPubKey, encoded in hex format
   */
  scriptPubKey: string;

  /**
   * The txid (hash) that the UTXO was included in
   */
  txid: string;

  /**
   * The vout number in the specified txid for the UTXO
   * It must be a integer value.
   */
  vout: number;
}

export type Result = ResultItem;

export class GetUnspentTxouts extends CounterpartyAPIStub<Params, Result> {

  public call = (arg: string|Params, unconfirmed_= false, unspentTxHash = null): Result =>
    super.callback((typeof arg === 'string') ?
      {
        address: arg,
        unconfirmed: unconfirmed_,
        unspent_tx_hash: unspentTxHash,
      } :
      arg)
}
