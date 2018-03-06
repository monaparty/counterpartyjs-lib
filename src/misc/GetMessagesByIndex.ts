import { CounterpartyAPIStub } from '../CounterpartyAPIStub';
import { Message } from '../objects/Message';

export interface Params {
  /**
   * Each element must be a integer value.
   */
  message_indexes: number[];
}

export type Result = Message[];

export class GetMessagesByIndex extends CounterpartyAPIStub<Params, Result> {

  public static build =
    (arg: any): Params => arg.iaArray() ?
    { message_indexes: arg } :
    arg as Params

  public call = (arg: number[]|Params): Result =>
    super.callback(GetMessagesByIndex.build(arg)) as Result
}
