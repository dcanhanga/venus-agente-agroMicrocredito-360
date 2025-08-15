// routes/PrivateRoute.tsx
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '../../presentation/providers/authContext'

export function PrivateRoute() {
  const { signed: isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate replace to="/login" />
}
