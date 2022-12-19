import { AxiosError, AxiosResponse } from 'axios'
import { IAuthResponse, IAuthRequest } from '../../types'
import http from '../api'
const login = async (req: IAuthRequest) => {
  let loginRes: IAuthResponse = {} as IAuthResponse;
  await http.post('auth/login', req)
    .then((res: AxiosResponse<IAuthResponse, IAuthRequest>) => {
      if (res.status === 200) {
        loginRes = res.data;
      }
      loginRes.status = res.status;
      loginRes.message = res.statusText;
    })
    .catch((err: AxiosError<IAuthResponse, IAuthRequest>) => {
      console.log('error in login -->', err)
      loginRes.status = err.status || 500;
      loginRes.message = err.message;
    })
  return loginRes;
}

export const authService = {
  login
};