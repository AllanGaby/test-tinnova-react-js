import React, { useEffect } from 'react';
import { CreateUser } from './../../../domain/usecases'
import { mockUser } from './../../../data/test/models'

interface Props {
  createUser: CreateUser
}

const Register: React.FC<Props> = ({createUser}: Props) => {
  useEffect(() => {
    async function includeUserInLocalStorage(): Promise<void> {
      createUser.create(mockUser())
    }
    includeUserInLocalStorage()
  }, [createUser])

  return (
    <h1>Registro de usuário</h1>
  )
}

export default Register;