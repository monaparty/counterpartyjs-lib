export interface Filter {
  field: string;

  /**
   * Operator
   *
   * @pattern ==|!=>|<|>=|<=|IN|LIKE|NOT IN|NOT LIKE
   */
  op: string;

  value: string;
}
