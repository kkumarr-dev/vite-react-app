import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button, Form, Alert, Card } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../types/store'
import { doLogin } from '../../reducers'
import { IAuthRequest } from '../../types'
import { AppSpinner } from '../../components'

export const Signin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [validated, setValidated] = useState(false)
  const isLoggedIn = useSelector((state: IStore) => state.auth.isLoggedin)
  const isFetching = useSelector((state: IStore) => state.auth.isFetching)
  const message = useSelector((state: IStore) => state.auth.data.message)
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')
  useEffect(() => {
    navigateToDashboard()
  }, [isLoggedIn])
  const navigateToDashboard = () => {
    if (isLoggedIn) {
      navigate('/dashboard')
    }
  }
  const handleSign = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    event.preventDefault()
    if (!form.checkValidity()) {
      event.stopPropagation()
    }
    setValidated(true)
    const authRequest: IAuthRequest = {
      password: passWord,
      username: userName,
    }
    dispatch(doLogin(authRequest))
    navigateToDashboard()
  }

  if (isFetching) return <AppSpinner />
  return (
    <>
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col lg={4} md={6} sm={6}>
            <Card className='shadow'>
              <Card.Title>
                <h2 className='p-3'>Login</h2>
              </Card.Title>
              <Card.Body>
                {message ? <Alert variant='danger'>{message}</Alert> : null}
                <Form noValidate validated={validated} onSubmit={handleSign}>
                  <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control
                      required
                      type='text'
                      placeholder='Enter UserName'
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserName(event.target.value)
                      }
                    />
                    <Form.Text>kminchelle</Form.Text>
                    <Form.Control.Feedback type='invalid'>
                      Enter valid Email
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type='Password'
                      placeholder='Enter Password'
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPassWord(event.target.value)
                      }
                    />
                    <Form.Text>0lelplR</Form.Text>
                    <Form.Control.Feedback type='invalid'>
                      Enter Password
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button type='submit'>Signin</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
