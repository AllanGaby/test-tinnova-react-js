import Dashboard from '../../../presentation/pages/Dashboard'
import { makeDbListUsers } from '../usecases'
import React from 'react'

export const makeDashBoard: React.FC = () => {
  return (
    <Dashboard
      listUsers={makeDbListUsers()}
    />
  )
}