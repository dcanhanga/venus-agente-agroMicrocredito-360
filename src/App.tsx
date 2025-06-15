import { Route, Routes } from 'react-router-dom'

import { DashboardPage, LoginPage } from './components/pages'
import { DefaultLayout } from './components/layouts/default'
import { FallbackRoute, PrivateRoute } from './routes'
import { AuthLayout } from './components/layouts'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />} path="/">
        <Route index element={<LoginPage />} path="/" />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route element={<DefaultLayout />} path="/dashboard">
          <Route index element={<DashboardPage />} />
        </Route>
      </Route>
      <Route element={<FallbackRoute />} path="*" />
    </Routes>
  )
}

export default App
