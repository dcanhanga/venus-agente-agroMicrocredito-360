import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '../../presentation/providers/authContext'

export function PublicRoute() {
  const { signed: isAuthenticated } = useAuth()

  return isAuthenticated ? <Navigate replace to="/" /> : <Outlet />
}
