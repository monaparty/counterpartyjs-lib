import { CounterpartyAPIStub } from '../CounterpartyAPIStub';
import { RawTransaction } from '../objects/RawTransaction';

export interface Params {
  /**
   * The transaction hash identifier
   */
  txhash_list: string[];

  /**
   * Include some additional information in the result data
   */
  verbose: boolean;

  /**
   * If set to false, and the transaction hash cannot be found, return null, otherwise if true, throw an exception.
   */
  skip_missing: boolean;
}

export type Result = RawTransaction;

export class GetRawTransactionBatch extends CounterpartyAPIStub<Params, Result> {

  public call = (arg: string[]|Params, verbose_ = false, skipMissing = false): Result =>
    super.callback(Array.isArray(arg) ? {
      txhash_list: arg as string[],
      verbose: verbose_,
      skip_missing: skipMissing,
    } : arg)
}
