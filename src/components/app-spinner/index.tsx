import { Col, Container, Row, Spinner } from 'react-bootstrap'

export const AppSpinner = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Spinner animation='border' variant='danger' />
        </Col>
      </Row>
    </Container>
  )
}
