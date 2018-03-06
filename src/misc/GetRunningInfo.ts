import { CounterpartyAPIStub } from '../CounterpartyAPIStub';

export interface Result {
  db_caught_up: boolean;

  /**
   * It must be a integer value.
   */
  bitcoin_block_count: number;

  /**
   * It must be a integer value.
   */
  last_block: number;

  /**
   * It must be a integer value.
   */
  last_message_index: number;

  running_testnet: boolean;

  running_testcoin: boolean;

  /**
   * It must be a integer value.
   */
  version_major: number;

  /**
   * It must be a integer value.
   */
  version_minor: number;

  /**
   * It must be a integer value.
   */
  version_revision: number;
}

export class GetRunningInfo extends CounterpartyAPIStub<object, Result> {
  public call = (): Result => super.callback({});
}
