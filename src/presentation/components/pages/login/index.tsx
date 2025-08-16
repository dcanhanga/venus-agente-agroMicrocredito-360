import { useState } from 'react'
import { Input, Button, Card, CardBody } from '@heroui/react'
import { toast } from 'react-toastify'

import { useAuth } from '../../../providers/authContext'
export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')
  const [success, setsuccess] = useState('')

  const { signIn } = useAuth()

  const handleLogin = async (e: any) => {
    try {
      e.preventDefault()
      setErro('')
      setsuccess('')
      setLoading(true)
      await signIn(email, password)
      toast.success('login feito com sucesso')
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-emerald-500 to-green-900">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl">
        <CardBody className="p-8">
          {/* Logo */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-br from-emerald-500 to-green-900 bg-clip-text text-transparent">
              VENUS
            </h1>
          </div>

          {/* Texto de boas-vindas */}
          <p className="text-center text-gray-600 mb-6">
            Bem-vindo de volta! Faça login em sua conta.
          </p>

          {/* Mensagens */}
          {erro && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg border-l-4 border-red-600 mb-4">
              {erro}
            </div>
          )}
          {success && (
            <div className="bg-green-50 text-green-600 p-3 rounded-lg border-l-4 border-green-600 mb-4">
              {success}
            </div>
          )}

          {/* Formulário */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <Input
              required
              label="Email"
              placeholder="Digite seu email"
              type="email"
              value={email}
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              required
              endContent={
                <button
                  className="text-gray-500 hover:text-emerald-500"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              }
              label="password"
              placeholder="Digite sua password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              variant="bordered"
              onChange={(e) => setpassword(e.target.value)}
            />

            {/* Esqueceu password */}
            <div className="text-right">
              <button
                className="text-emerald-500 hover:underline text-sm"
                type="button"
                onClick={() => alert('Recuperação de password em breve!')}
              >
                Esqueceu sua password?
              </button>
            </div>

            {/* Botão login */}
            <Button
              className="w-full bg-gradient-to-br from-emerald-500 to-green-900 text-white font-semibold rounded-xl"
              color="primary"
              isLoading={loading}
              type="submit"
            >
              Entrar
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-4 text-gray-500 text-sm">ou continue com</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social login */}
          <div className="flex gap-4 mb-4">
            <button
              className="flex-1 p-3 border border-gray-200 rounded-xl hover:border-emerald-500 hover:shadow-md transition text-red-500"
              title="Entrar com Google"
              onClick={() => {}}
            >
              🔴
            </button>
            <button
              className="flex-1 p-3 border border-gray-200 rounded-xl hover:border-emerald-500 hover:shadow-md transition text-blue-600"
              title="Entrar com Facebook"
              onClick={() => {}}
            >
              🔵
            </button>
            <button
              className="flex-1 p-3 border border-gray-200 rounded-xl hover:border-emerald-500 hover:shadow-md transition text-black"
              title="Entrar com Apple"
              onClick={() => {}}
            >
              ⚫
            </button>
          </div>

          {/* Link cadastro */}
          <p className="text-center text-gray-600 text-sm">
            Não tem uma conta?{' '}
            <button
              className="text-emerald-500 font-semibold hover:underline"
              onClick={() => alert('Cadastro em breve!')}
            >
              Cadastre-se aqui
            </button>
          </p>
        </CardBody>
      </Card>
    </div>
  )
}
