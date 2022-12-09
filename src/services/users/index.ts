import { AxiosResponse } from 'axios'
import { IUserResponse } from '../../types'
import http from '../api'
const get = async () => {
  let products: IUserResponse = {} as IUserResponse;
  await http.get('users')
    .then((res: AxiosResponse<IUserResponse>) => {
      if (res.status === 200) {
        products = res.data
      }
    })
    .catch((err) => {
      console.log('error in getting users -->', err)
    })
  return products;
}
export const userService = { get };