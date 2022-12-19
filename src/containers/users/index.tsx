import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AppAlert, AppSpinner } from '../../components'
import { loadUsers } from '../../reducers'
import { IUser, IUserResponse } from '../../types'
import { IStore } from '../../types/store'
import DataTable, { TableColumn } from 'react-data-table-component'
const columnDefs: TableColumn<IUser>[] = [
  {
    selector: (it) => it.firstName,
    name: 'FirstName',
    sortable: true,
  },
  {
    selector: (it) => it.lastName,
    name: 'LastName',
    sortable: true,
  },
  {
    selector: (it) => it.gender,
    name: 'Gender',
    sortable: true,
  },
  {
    selector: (it) => it.age,
    name: 'Age',
    sortable: true,
  },
  {
    selector: (it) => it.birthDate,
    name: 'BirthDate',
    sortable: true,
  },
  {
    selector: (it) => it.email,
    name: 'Email',
    sortable: true,
  },
  {
    selector: (it) => it.phone,
    name: 'Phone',
    sortable: true,
  },
  {
    selector: (it) => it.bloodGroup,
    name: 'BloodGroup',
    sortable: true,
  },
]
export const Users = () => {
  let users: IUserResponse = useSelector((state: IStore) => state.users.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUsers())
  }, [])
  return (
    <div className='overflow-auto h-100 scrollbar'>
      <DataTable
        title='Users'
        columns={columnDefs}
        data={users && users.users}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='calc(100vh - 265px)'
        selectableRows
      />
    </div>
  )
}
