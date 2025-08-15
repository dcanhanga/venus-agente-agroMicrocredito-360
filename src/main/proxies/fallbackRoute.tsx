import { Navigate } from 'react-router-dom'

import { useAuth } from '../../presentation/providers/authContext'

export function FallbackRoute() {
  const { signed: isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <Navigate replace to="/" />
  ) : (
    <Navigate replace to="/login" />
  )
}
