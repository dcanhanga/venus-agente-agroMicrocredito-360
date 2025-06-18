import { Route, Routes } from 'react-router-dom'

import { FallbackRoute, PrivateRoute, PublicRoute } from './proxies'

import { AuthLayout, DefaultLayout } from '@/presentation/components/layouts'
import {
  DashboardPage,
  LoginPage,
  ReportsPage,
  ReviewsPage,
  CooperativesPage,
  HistoryPage,
} from '@/presentation/components/pages'

export function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />} path="/login">
          <Route index element={<LoginPage />} path="/login" />
        </Route>
      </Route>

      <Route element={<PrivateRoute />}>
        <Route element={<DefaultLayout />} path="/">
          <Route index element={<DashboardPage />} />
          <Route element={<ReviewsPage />} path="/reviews" />
          <Route element={<HistoryPage />} path="history" />
          <Route element={<ReportsPage />} path="reports" />
          <Route element={<CooperativesPage />} path="cooperatives" />
        </Route>
      </Route>
      <Route element={<FallbackRoute />} path="*" />
    </Routes>
  )
}
