
/**
 * An object that describes a specific event in the counterpartyd message feed.
 * (which can be used by 3rd party applications
 * to track state changes to the counterpartyd database on a block-by-block basis).
 */
export interface Message {

  /**
   * The message index (i.e. transaction index).
   */
  message_index: number;

  /**
   * The block index (block number in the block chain) this event occurred on.
   */
  block_index: number;

  /**
   * A string denoting the entity that the message relates to; e.g. `credits`; `burns`; `debits`.
   * The category matches the relevant table name in counterpartyd (see blocks.py for more info).
   */
  category: string;

  /**
   * The operation done to the table noted in category. This is either `insert`; or `update`.
   */
  command: string;

  /**
   * A JSON-encoded object containing the message data.
   * The properties in this object match the columns in the table referred to by category.
   */
  bindings: string;
}
