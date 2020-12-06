import React, { useState, useEffect } from 'react';
import { ListUsers } from './../../../domain/usecases'
import { User } from './../../../domain/models'
import { Link } from 'react-router-dom'

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
    <>
    <h1>Lista de usuários</h1>
    <Link to="/register">
      Cadastrar novo usuário
    </Link>
    <ul>
      {users?.map(user => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
    </>
  )
}

export default Dashboard;