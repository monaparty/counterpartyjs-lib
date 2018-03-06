import { CounterpartyAPIStub } from '../CounterpartyAPIStub';

export type Result = string[]|null;

export class GetAssetNames extends CounterpartyAPIStub<object, Result> {

  public call = (): Result =>
    super.callback({})
}
