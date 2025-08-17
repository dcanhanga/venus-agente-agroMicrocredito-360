// routes/PrivateRoute.tsx
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '../../presentation/providers/authContext'

import { tipo_utilizador } from '@/constants'

export function PrivateRoute() {
  const { signed: isAuthenticated, user } = useAuth()
  const isAdmin = user?.tipo_utilizador === tipo_utilizador.ADMIN

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to={isAdmin ? '/reports' : '/login'} />
  )
}
