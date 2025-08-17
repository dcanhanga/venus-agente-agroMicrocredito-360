import { Navigate } from 'react-router-dom'

import { useAuth } from '../../presentation/providers/authContext'

export function FallbackRoute() {
  const { signed: isAuthenticated, user } = useAuth()
  const isAdmin = user?.tipo_utilizador === 'ADMIN'


  return isAuthenticated ? (
    <Navigate replace to={isAdmin ? '/reports' : '/'} />
  ) : (
    <Navigate replace to="/login" />
  )
}
