import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { userSlice } from "../reducers";
import { rootSaga } from "../sagas";
const sagaMiddleWare = createSagaMiddleware();
export default configureStore({
  reducer: {
    users: userSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(logger).concat(sagaMiddleWare)
  }
})
sagaMiddleWare.run(rootSaga);