export interface AssetParams {
  asset: string;
}

export class AssetParamsBuilder {
  public static build = (arg: string|AssetParams): AssetParams =>
    (typeof arg === 'string') ? { asset: arg } : arg
}
