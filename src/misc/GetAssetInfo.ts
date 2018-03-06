import { CounterpartyAPIStub } from '../CounterpartyAPIStub';
import { AssetParams, AssetParamsBuilder } from './AssetParams';

export type Params = AssetParams;

export interface Result {
  /**
   * The assets of the asset itself
   */
  asset: string;

  /**
   * The subasset longname, if any
   */
  asset_longname: string;

  /**
   * The address that currently owns the asset (i.e. has issuance rights to it)
   */
  owner: string;

  /**
   * Whether the asset is divisible or not
   */
  divisible: boolean;

  /**
   * Whether the asset is locked (future issuances prohibited)
   */
  locked: boolean;

  /**
   * The quantities of the asset issued, in total
   * This value must be integer.
   */
  total_issued: number;

  /**
   * The asset's current description
   */
  description: string;

  /**
   * The asset's original owner (i.e. issuer)
   */
  issuer: string;
}

export class GetAssetInfo extends CounterpartyAPIStub<Params, Result> {
  /**
   * @deprecated
   */
  public call = (arg: string|Params): Result =>
    super.callback(AssetParamsBuilder.build(arg))
}
