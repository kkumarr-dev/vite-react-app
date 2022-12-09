import {
  Container,
  Row,
  Col,
  Stack,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
  Badge,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand={'sm'} className='mb-3'>
      <Container fluid>
        <Navbar.Brand href='#'>Vite-React</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='pe-3'>
              <Link to='/dashboard/users' className='nav-link'>
                Users
              </Link>
              <Link to='/dashboard/products' className='nav-link'>
                Products
              </Link>
            </Nav>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Link to={'/'} className='btn btn-outline-danger'>
                <i className='bi bi-box-arrow-left'></i>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
