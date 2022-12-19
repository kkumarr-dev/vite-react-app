import { put, PutEffect, takeLatest } from "redux-saga/effects";
import { loadAuthResponse } from "../../reducers";
import { authService } from "../../services";
import { IActionWithpayload, IAuthRequest, IAuthResponse } from "../../types";
import { LOGIN } from "../action-types";

function* handleLogin(action: IActionWithpayload<IAuthRequest>): Generator<Promise<IAuthResponse> | PutEffect, void, IAuthResponse> {
  try {
    const loginRes: IAuthResponse = yield authService.login(action.payload)
    yield put(loadAuthResponse(loginRes))
  } catch (error) {
    console.log(error)
  }
}

export function* takeAllAuthActions() {
  yield takeLatest(LOGIN, handleLogin)
}