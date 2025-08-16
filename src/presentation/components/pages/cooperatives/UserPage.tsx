import {
  Card,
  CardBody,
  Input,
  Button,
  Select,
  SelectItem,
} from '@heroui/react'
import { useState, useEffect } from 'react'
import { addUser, deleteUser, getUsers } from '../../../../services/call'
import { toast } from 'react-toastify'

export function UsersPage() {
  const [users, setUsers] = useState<any>([])
  const [form, setForm] = useState({
    email: '',
    password: '',
    tipo_utilizador: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (field: any, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  // Buscar lista ao carregar a página
  useEffect(() => {
    carregarUsers()
  }, [])

  const carregarUsers = async () => {
    try {
      const data = await getUsers({
        estado: false,
      })
      setUsers(data)
    } catch (error) {
      toast.error('Erro ao carregar utilizadores')
    }
  }

  const cadastrarUser = async () => {
    if (!form.email || !form.password || !form.tipo_utilizador) {
      toast.warning('Preencha todos os campos!')
      return
    }

    try {
      setLoading(true)
      const newUser = {
        email: form.email,
        password: form.password,
        tipo_utilizador: form.tipo_utilizador,
      }

      await addUser(newUser)
      toast.success('Utilizador cadastrado com sucesso!')
      setForm({ email: '', password: '', tipo_utilizador: '' })
      await carregarUsers()
    } catch (error) {
      toast.error('Erro ao cadastrar utilizador!')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: any) => {
    try {
      await deleteUser(id)
      toast.success('Utilizador excluído com sucesso!')
      setUsers((prev: any) => prev.filter((user: any) => user.id !== id))
    } catch (error) {
      toast.error('Erro ao excluir utilizador!')
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto p-5 bg-gray-50 text-gray-800">
      {/* Formulário */}
      <Card className="mb-8">
        <CardBody>
          <h2 className="text-lg font-bold mb-5">Cadastrar Novo Utilizador</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            <Input
              label="Email"
              type="email"
              placeholder="Digite o email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="Digite a senha"
              value={form.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
            <Select
              label="Tipo de Utilizador"
              placeholder="Selecione o tipo"
              selectedKeys={form.tipo_utilizador ? [form.tipo_utilizador] : []}
              onChange={(e) => handleChange('tipo_utilizador', e.target.value)}
            >
              <SelectItem key="COOPERATIVA">COOPERATIVA</SelectItem>
              <SelectItem key="ENTIDADEF">ENTIDADEF</SelectItem>
              <SelectItem key="ADMIN">ADMIN</SelectItem>
            </Select>
          </div>
          <div className="flex justify-end gap-4">
            <Button
              variant="flat"
              color="default"
              onPress={() =>
                setForm({ email: '', password: '', tipo_utilizador: '' })
              }
            >
              Limpar
            </Button>
            <Button color="primary" onPress={cadastrarUser} isLoading={loading}>
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Lista */}
      <h2 className="text-xl font-bold mb-5">Utilizadores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {users.map((user: any) => (
          <Card
            key={user.id}
            className="shadow-md hover:scale-[1.02] transition-transform"
          >
            <CardBody>
              <h3 className="font-bold text-gray-800 mb-2">{user.email}</h3>
              <p className="text-sm text-gray-400">
                📅 Criado: {user.dataCriacao}
              </p>
              <p className="text-sm text-gray-400">
                🔄 Atualizado: {user.dataAtualizacao}
              </p>
              <p className="text-sm text-gray-400">
                ✏️ Modificado por: {user.modificadoPorNome || '—'}
              </p>
              <div className="flex gap-3 mt-4">
                <Button size="sm" color="success">
                  Ver
                </Button>
                <Button size="sm" color="warning">
                  Editar
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  onPress={() => handleDelete(user.id)}
                >
                  Excluir
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
