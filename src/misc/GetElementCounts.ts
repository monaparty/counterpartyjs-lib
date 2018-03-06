import { CounterpartyAPIStub } from '../CounterpartyAPIStub';

export type Result = any; /* TODO: */

export class GetElementCounts extends CounterpartyAPIStub<object, Result> {
  public call = (): Result => this.callback({});
}
