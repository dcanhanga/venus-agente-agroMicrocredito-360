import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '../../presentation/providers/authContext'

export function PublicRoute() {
  const { signed: isAuthenticated, user } = useAuth()
  const isAdmin = user?.tipo_utilizador === 'ADMIN'

  return isAuthenticated ? (
    <Navigate replace to={isAdmin ? '/reports' : '/'} />
  ) : (
    <Outlet />
  )
}
