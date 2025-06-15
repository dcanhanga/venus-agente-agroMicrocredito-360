// routes/PrivateRoute.tsx
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/hooks'

export function PrivateRoute() {
  const isAuthenticated = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate replace to="/" />
}
