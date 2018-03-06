import { CounterpartyAPIStub } from '../CounterpartyAPIStub';

export interface Params {
  /**
   * The canonical hexadecimal serialization of the transaction (not its hash).
   */
  tx_hex: string;

  /**
   * This must be a integer value.
   */
  block_index: number|null;
}

export interface Result {
  source: string;
  destination: string;
  btc_amount: number;
  fee: number;
  /**
   * The embedded raw protocol data, in hexadecimal-serialized format.
   *
   * @pattern [0-9a-fA-F]
   */
  data: string;
}

export class GetTxInfo extends CounterpartyAPIStub<Params, Result> {

  public call = (arg: string|Params, blockIndex = null): Result =>
    super.callback((typeof arg === 'string') ?
      {
        tx_hex: arg,
        block_index: blockIndex,
      } : arg)

}
