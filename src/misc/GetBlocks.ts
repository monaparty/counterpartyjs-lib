import { CounterpartyAPIStub } from '../CounterpartyAPIStub';
import { Message } from '../objects/Message';

export interface Params {
  /**
   * Each element must be a integer value.
   */
  block_indexes: number[];
  min_message_index: number|null;
}

export interface MessageBlock {
  /**
   * It must be a integer value.
   */
  block_index: number;

  block_hash: string;

  /**
   * It must be a integer value.
   */
  block_time: number;

  _messages: Message[];
}

export type Result = MessageBlock[];

export class GetBlocks extends CounterpartyAPIStub<Params, Result> {

  public call = (arg: number[]|Params, minMessageIndex: number|null = null): Result =>
    super.callback(Array.isArray(arg) ?
      {
        block_indexes: arg as number[],
        min_message_index: minMessageIndex,
      } : arg)
}
