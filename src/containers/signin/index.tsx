import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const Signin = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button variant='primary'>
            <Link to={'/dashboard'} className='text-white text-decoration-none'>
              Signin
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
