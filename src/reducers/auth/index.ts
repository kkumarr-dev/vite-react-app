import { createSlice } from "@reduxjs/toolkit";
import { IActionWithOutPayload, IActionWithpayload, IAuthReducer, IAuthRequest, IAuthResponse } from "../../types";

const initialState: IAuthReducer = {
  data: {} as IAuthResponse,
  isFetching: false,
  isLoggedin: false,
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    doLogin: (state: IAuthReducer, action: IActionWithpayload<IAuthRequest>) => {
      state.isFetching = true;
      state.isLoggedin = false;
    },
    loadAuthResponse: (state: IAuthReducer, action: IActionWithpayload<IAuthResponse>) => {
      debugger;
      state.data = action.payload;
      state.token = action.payload.token;
      if (state.data?.status === 200) {
        state.isLoggedin = true;
      }
      state.isFetching = false;
    },
    doLogout: (state: IAuthReducer, action: IActionWithOutPayload) => {
      state.isFetching = true;
      state.isLoggedin = false;
      state.data = {} as IAuthResponse;
      state.token = '';
      state.isFetching = false;
    }
  },
})

export const { doLogin, doLogout, loadAuthResponse } = authSlice.actions;