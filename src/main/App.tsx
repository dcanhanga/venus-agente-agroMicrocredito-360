import SplashLoader from '@/presentation/components/molecules/splashLoader'
import { useAuth } from '../presentation/providers/authContext'
import { MainRoute } from './proxies/routes'
export function App() {
  const { splashLoading } = useAuth()
  return splashLoading ? <SplashLoader /> : <MainRoute />
}
