import { IAuthResponse, IUserResponse } from "../users";

export interface IActionWithpayload<T> {
  type: string;
  payload: T;
}
export interface IActionWithOutPayload {
  type: string;
}

export interface IUserReducer {
  isFetching: boolean;
  user: IUserResponse
}

export interface IAuthReducer {
  isFetching: boolean;
  isLoggedin: boolean;
  data: IAuthResponse;
  token: string;
}
