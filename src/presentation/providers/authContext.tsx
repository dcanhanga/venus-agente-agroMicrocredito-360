import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { toast } from 'react-toastify'

import { STORAGE_TOKEN_KEY, STORAGE_USER_KEY } from '@/constants'
import { login } from '@/services/call'

interface IUser {
  id: number
  email: string
  tipo_utilizador: 'ENTIDADE' | 'ADMIN'
  dataCriacao: string
  dataAtualizacao: string
  modificadoPorNome: string | null
  password: string
}

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContext {
  splashLoading: boolean
  signed: boolean
  user: IUser | null
  changeSplashLoadingValue(value: boolean): void
  signIn(email: string, password: string): Promise<void>
  logout(): void
}
interface LoginResponse {
  dados: {
    utilizador: IUser
    token: string
  }[]
}

const AuthContext = createContext({} as IAuthContext)

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [splashLoading, setSplashLoading] = useState(true)
  const changeSplashLoadingValue = (value: boolean) => {
    setSplashLoading(value)
  }
  const logout = async () => {
    localStorage.clear()
    toast.success('Logout feito com sucesso')
  }
  const signIn = async (email: string, password: string) => {
    try {
      const response: LoginResponse = await login(email, password)
      const { token, utilizador } = response.dados[0]

      setUser(utilizador)
      localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(utilizador))
      localStorage.setItem(STORAGE_TOKEN_KEY, token)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const loadStorageData = () => {
    setSplashLoading(true)
    const storageUserData = localStorage.getItem(STORAGE_USER_KEY)

    if (storageUserData) {
      console.log(storageUserData)
      const storageUser = JSON.parse(storageUserData)

      setUser(storageUser)
    }
    setTimeout(() => {
      setSplashLoading(false)
    }, 4000)
  }

  useEffect(() => {
    loadStorageData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        logout,
        signIn,
        user,
        signed: !!user,
        splashLoading,
        changeSplashLoadingValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
const useAuth = () => {
  const authContext = useContext(AuthContext)

  return authContext
}

export { AuthContext, AuthProvider, useAuth }
