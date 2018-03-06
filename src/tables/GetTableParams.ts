import { Filter } from '../objects/Filter';

export interface GetTableParams {
  filters?: Filter[]|null;
  filterop?: string|null;
  order_by?: string|null;
  order_dir?: string|null;
  start_block?: number|null;
  end_block?: number|null;
  status?: string|any[]|null;
  limit?: number;
  offset?: number;
  show_expired?: boolean;
}
