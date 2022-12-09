import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AppAlert, AppSpinner } from '../../components'
import { loadUsers } from '../../reducers'
import { IUserResponse } from '../../types'
import { IStore } from '../../types/store'

export const Users = () => {
  // const [users, setUsers] = useState<IUserResponse>({} as IUserResponse)
  let users: IUserResponse = useSelector((state: IStore) => state.users.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUsers())
  }, [])
  return (
    <Container>
      <Row>
        <Col>
          Users
          <table>
            <tbody>
              {users && users.users
                ? users.users.map((it, i) => {
                    return (
                      <tr key={i}>
                        <td>{it.firstName}</td>
                        <td>{it.lastName}</td>
                      </tr>
                    )
                  })
                : null}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  )
}
