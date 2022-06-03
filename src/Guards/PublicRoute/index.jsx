import { useAuth } from 'Hooks'
import React from 'react'
import { Navigate } from 'react-router-dom'

// configs
import { ROUTES_NAME } from 'Routes/constans'

const PublicRoute = ({ children }) => {
  const { auth } = useAuth()
  return auth ? <Navigate to={ROUTES_NAME.PROJECTS} /> : children 
}

export default PublicRoute
