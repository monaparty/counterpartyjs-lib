import { CounterpartyAPIStub } from '../CounterpartyAPIStub';
import { RawTransaction } from '../objects/RawTransaction';

export interface Params {

  /**
   * The address for which to receive the raw transactions.
   */
  address: string;

  /**
   * Set to true to include unconfirmed transactions (e.g. those in the mempool).
   */
  unconfirmed: boolean;
}

export type Result = RawTransaction;

export class SearchRawTransactions extends CounterpartyAPIStub<Params, Result> {

  public call = (arg: string|Params, unconfirmed_ = false): Result =>
    super.callback((typeof arg === 'string') ?
    {
      address: arg,
      unconfirmed: unconfirmed_,
    } :
    arg)
}
