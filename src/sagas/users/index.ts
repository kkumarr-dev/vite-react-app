import { PutEffect, takeLatest, put } from "@redux-saga/core/effects";
import { setUsers } from "../../reducers";
import { userService } from "../../services";
import { IUser, IUserResponse } from "../../types";
import { GETUSERS } from "../action-types";

function* handleUsers(): Generator<Promise<IUserResponse> | PutEffect, void, IUserResponse> {
  try {
    const users: IUserResponse = yield userService.get();
    yield put(setUsers(users))
  } catch (error) {
    console.log(error)
  }
}

export function* takeAllUserActions() {
  yield takeLatest(GETUSERS, handleUsers)
}