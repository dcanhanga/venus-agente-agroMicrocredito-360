// routes/FallbackRoute.tsx
import { Navigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

export function FallbackRoute() {
  const isAuthenticated = useAuth()

  return isAuthenticated ? (
    <Navigate replace to="/" />
  ) : (
    <Navigate replace to="/login" />
  )
}
