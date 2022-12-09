export interface IActionWithpayload<T> {
  type: string;
  payload: T;
}
export interface IActionWithOutPayload {
  type: string;
}
