import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Container,
  Offcanvas,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Image,
  NavItem,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { doLogout } from '../../reducers'
import { IStore } from '../../types'

export const AppNavBar = (props: any) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const headerRef = useRef(null)
  const onheaderResize = useCallback(() => {
    const headerHeight = headerRef?.current as any
    props.setHeaderHeight(`${headerHeight?.clientHeight + 20}px`)
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onheaderResize)
    onheaderResize()
    return () => {
      removeEventListener('resize', onheaderResize)
    }
  })
  const authData = useSelector((state: IStore) => state.auth.data)
  const isLoggedIn = useSelector((state: IStore) => state.auth.isLoggedin)
  useEffect(() => {
    if (!isLoggedIn) navigate('/')
  })
  const userTitle = (
    <span>
      <Image
        src={authData.image}
        roundedCircle
        width={40}
        height={40}
        className='p-2'
      />
      {authData.firstName}
    </span>
  )
  return (
    <header className='py-3 mb-3 border-bottom shadow' ref={headerRef}>
      <div className='container-fluid align-items-center d-flex'>
        <div className='flex-shrink-1'>
          <a
            href='#'
            className='d-flex align-items-center link-dark text-decoration-none'
          >
            <i className='bi bi-coin fs-2 text-dark'></i>
            <span className='mx-2'>Vite-React</span>
          </a>
        </div>
        <div className='flex-grow-1 '></div>
        <div className='d-flex align-items-center'>
          <NavDropdown title={userTitle} menuVariant='light'>
            <Link to='/dashboard/users' className='dropdown-item'>
              Users
            </Link>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => dispatch(doLogout())}>
              <i className='bi bi-box-arrow-left'></i> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </header>
  )
}
