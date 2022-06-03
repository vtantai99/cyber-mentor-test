import { useAuth } from 'Hooks'
import React from 'react'
import { Navigate } from 'react-router-dom'

// configs
import { ROUTES_NAME } from 'Routes/constans'

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth()
  return auth ? children : <Navigate to={ROUTES_NAME.SIGN_IN} />
}

export default PrivateRoute
