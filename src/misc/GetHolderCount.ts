import { CounterpartyAPIStub } from '../CounterpartyAPIStub';
import { AssetParams, AssetParamsBuilder } from './AssetParams';

export type Params = AssetParams;
export type Result = any; /* TODO: */

export class GetHolderCount extends CounterpartyAPIStub<Params, Result> {
  public call = (arg: string|Params): Result =>
    super.callback(AssetParamsBuilder.build(arg))
}
