import { Route, Router, Routes } from 'react-router-dom'
import { Dashboard, Products, Signin, Users } from '../../containers'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='/dashboard/users' element={<Users />} />
        <Route path='/dashboard/products' element={<Products />} />
      </Route>
    </Routes>
  )
}
