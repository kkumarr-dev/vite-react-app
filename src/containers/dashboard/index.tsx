import { Outlet } from 'react-router-dom'
import { NavBar } from '../../layouts'
import { Container, Row, Col } from 'react-bootstrap'

export const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}
