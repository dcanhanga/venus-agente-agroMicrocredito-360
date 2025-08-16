import { useAuth } from '../presentation/providers/authContext'

import { MainRoute } from './proxies/routes'

import SplashLoader from '@/presentation/components/molecules/splashLoader'
export function App() {
  const { splashLoading } = useAuth()

  return splashLoading ? <SplashLoader /> : <MainRoute />
}
