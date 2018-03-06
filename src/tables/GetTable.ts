import { CounterpartyAPIStub } from '../CounterpartyAPIStub'
import { Filter } from '../objects/Filter';
import { GetTableParams } from './GetTableParams';

export class GetTable<V> extends CounterpartyAPIStub<GetTableParams, V> {

  public call = (arg: GetTableParams|Filter[],
                 filterop_ = 'AND',
                 orderBy = null,
                 orderDir = null,
                 startBlock = null,
                 endBlock = null,
                 status_ = null,
                 limit_ = 1000,
                 offset_ = 0,
                 showExpired = true): V =>
    super.callback(Array.isArray(arg) ? {
      filters: arg as Filter[],
      filterop: filterop_,
      order_by: orderBy,
      order_dir: orderDir,
      start_block: startBlock,
      end_block: endBlock,
      status: status_,
      limit: limit_,
      offset: offset_,
      show_expired: showExpired,
    } : arg)
}
