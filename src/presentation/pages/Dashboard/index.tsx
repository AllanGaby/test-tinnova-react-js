import React, { useState, useEffect } from 'react';
import { ListUsers } from './../../../domain/usecases'
import { User } from './../../../domain/models'

interface Props {
  listUsers: ListUsers
}

const Dashboard: React.FC<Props> = ({listUsers}: Props) => {
  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    async function loadUsers(): Promise<void> {
      const usersInLocalstorage = await listUsers.list(undefined)
      console.log(usersInLocalstorage)
      setUsers(usersInLocalstorage)
    }
    loadUsers()
  }, [listUsers])

  return (
    <h1>Lista de usuários</h1>
  )
}

export default Dashboard;