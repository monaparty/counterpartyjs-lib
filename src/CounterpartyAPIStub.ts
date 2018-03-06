export abstract class CounterpartyAPIStub<T, V> {

  private callback_: (params: T) => V;

  constructor(callback: (params: T) => V) {
    this.callback_ = callback;
  }

  public callback(params: T): V {
    return this.callback_(params);
  }
}
