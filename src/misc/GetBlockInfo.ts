import { CounterpartyAPIStub } from '../CounterpartyAPIStub';
import { BlockIndexParams, BlockIndexParamsBuilder } from './BlockIndexParams';

export type Params = BlockIndexParams;

export interface Result {
  /**
   * It must be a integer value.
   */
  block_index: number;

  block_hash: string;

  /**
   * It must be a integer value.
   */
  block_time: number;
}

export class GetBlockInfo extends CounterpartyAPIStub<Params, Result> {
  public call = (arg: number|BlockIndexParams): Result =>
    this.callback(BlockIndexParamsBuilder.build(arg))
}
