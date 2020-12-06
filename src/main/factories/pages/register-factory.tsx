import Register from '../../../presentation/pages/Register'
import { makeDbCreateUser } from '../usecases'
import React from 'react'

export const makeRegister: React.FC = () => {
  return (
    <Register/>
  )
}