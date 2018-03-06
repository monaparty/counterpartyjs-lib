import { CounterpartyAPIStub } from '../CounterpartyAPIStub';
import { Message } from '../objects/Message';
import { BlockIndexParams, BlockIndexParamsBuilder } from './BlockIndexParams';

export type Params = BlockIndexParams;
export type Result = Message[];

export class GetMessages extends CounterpartyAPIStub<Params, Result> {
  public call = (arg: number|BlockIndexParams): Result =>
    super.callback(BlockIndexParamsBuilder.build(arg))
}
