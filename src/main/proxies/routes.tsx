import { Route, Routes } from 'react-router-dom'

import { FallbackRoute, PrivateRoute, PublicRoute } from '../proxies'

import { AuthLayout, DefaultLayout } from '@/presentation/components/layouts'
import {
  DashboardPage,
  LoginPage,
  ReportsPage,
  ReviewsPage,
  HistoryPage,
  CooperativesTab,
} from '@/presentation/components/pages'
import { useAuth } from '@/presentation/providers/authContext'
import { tipo_utilizador } from '@/constants'
const MainRoute = () => {
  const { user } = useAuth()
  const isAdmin = user?.tipo_utilizador === tipo_utilizador.ADMIN

  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />} path="/login">
            <Route index element={<LoginPage />} path="/login" />
          </Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<DefaultLayout />} path="/">
            {isAdmin ? (
              <>
                <Route element={<ReportsPage />} path="reports" />
                <Route element={<CooperativesTab />} path="cooperatives" />
              </>
            ) : (
              <>
                <Route index element={<DashboardPage />} />
                <Route element={<HistoryPage />} path="history" />
                <Route element={<ReviewsPage />} path="/reviews" />
              </>
            )}
          </Route>
        </Route>
        <Route element={<FallbackRoute />} path="*" />
      </Routes>
    </>
  )
}

export { MainRoute }
