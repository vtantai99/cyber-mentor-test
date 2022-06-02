import React from 'react'
import { Navigate } from 'react-router-dom'

// configs
import { ROUTES_NAME } from 'Routes/constans'

function AuthGuard({ children }) {
  const isAuth = false

  if (!isAuth) return <Navigate to={ROUTES_NAME.SIGN_IN} />

  return <>{children}</>
}

export default AuthGuard
