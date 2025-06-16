import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/presentation/hooks'

export function PublicRoute() {
  const isAuthenticated = useAuth()

  return isAuthenticated ? <Navigate replace to="/" /> : <Outlet />
}
