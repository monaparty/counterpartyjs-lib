import { CounterpartyAPIStub } from '../CounterpartyAPIStub';

export interface Params {
  /**
   * The transaction hash identifier
   */
  tx_hash: string;

  /**
   * Include some additional information in the result data
   */
  verbose: boolean;

  /**
   * If set to false, and the transaction hash cannot be found, return null, otherwise if true, throw an exception.
   */
  skip_missing: boolean;
}

export interface ScriptSig {
  /**
   * asm.
   */
  asm: string;

  /**
   * hex.
   */
  hex: string;
}

export type TxInWitness = string[];

export interface Vin {
  /**
   * The transaction id.
   */
  txid: string;

  vout: number;

  /**
   * The script.
   */
  scriptSig: ScriptSig;

  /**
   * The script sequence number.
   */
  sequence: number;

  /**
   * hex-encoded witness data (if any).
   */
  txinwitness: TxInWitness;
}

export interface ScriptPubKey {
  /**
   * the asm.
   */
  asm: string;

  /**
   * the hex.
   */
  hex: string;

  /**
   * The required sigs.
   */
  reqSigs: number;

  /**
   * The type, eg 'pubkeyhash'.
   */
  type: string;

  /**
   * bitcoin addresses.
   */
  addresses: string[];
}

export interface Vout {
  /**
   * The value in BTC.
   */
  value: number;

  /**
   * index.
   */
  n: number;

  /**
   *
   */
  scriptPubKey: ScriptPubKey;
}

export interface RawTransaction {

  /**
   * The serialized, hex-encoded data for 'txid'.
   */
  hex: string;

  /**
   * The transaction id (same as provided).
   */
  txid: string;

  /**
   * The transaction hash (differs from txid for witness transactions).
   */
  hash: string;

  /**
   * The serialized transaction size.
   */
  size: number;

  /**
   * The virtual transaction size (differs from size for witness transactions).
   */
  vsize: number;

  /**
   * The version.
   */
  version: number;

  /**
   * The lock time.
   */
  locktime: number;

  vin: Vin[];

  vout: Vout[];

  /**
   * the block hash.
   */
  blockhash: string;

  /**
   * The confirmations.
   */
  confirmations: number;

  /**
   * The transaction time in seconds since epoch (Jan 1 1970 GMT).
   */
  time: number;

  /**
   * The block time in seconds since epoch (Jan 1 1970 GMT).
   */
  blocktime: number;
}

export type Result = RawTransaction;

export class GetRawTransaction extends CounterpartyAPIStub<Params, Result> {

  public call = (arg: string|Params, verbose_ = false, skipMissing = false): Result =>
    super.callback((typeof arg === 'string') ? {
      tx_hash: arg,
      verbose: verbose_,
      skip_missing: skipMissing,
    } : arg)
}
