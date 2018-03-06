export interface BlockIndexParams {
  /**
   * It must be a integer value.
   */
  block_index: number;
}

export class BlockIndexParamsBuilder {
  public static build = (arg: number|BlockIndexParams): BlockIndexParams =>
    (typeof arg === 'number') ? { block_index: arg } : arg
}
