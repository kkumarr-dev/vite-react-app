import { createSlice } from "@reduxjs/toolkit"
import { IActionWithOutPayload, IActionWithpayload, IUserReducer, IUserResponse } from "../../types";

const initialState: IUserReducer = {
  isFetching: false,
  user: {} as IUserResponse
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUsers: (state: IUserReducer, _action: IActionWithOutPayload) => {
      state.isFetching = true;
    },
    setUsers: (state: IUserReducer, action: IActionWithpayload<IUserResponse>) => {
      state.user = action.payload;
      state.isFetching = false
    }
  }
});

export const { loadUsers, setUsers } = userSlice.actions;