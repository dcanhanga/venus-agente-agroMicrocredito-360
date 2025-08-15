import { Card, CardBody, Select, SelectItem, Button } from '@heroui/react'
import { useState, useEffect } from 'react'
import {
  addCooperativaUtilizador,
  getCooperatives,
  getUsers,
} from '../../../../services/call'
import { toast } from 'react-toastify'
import { generateHash15 } from '@/presentation/lib/utils'

export function CooperativaUtilizadorPage() {
  const [form, setForm] = useState({
    idCooperativa: '',
    idUtilizador: '',
  })
  const [loading, setLoading] = useState(false)
  const [cooperativas, setCooperativas] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  // Buscar cooperativas e utilizadores ao carregar
  useEffect(() => {
    carregarSelects()
  }, [])

  const carregarSelects = async () => {
    try {
      const coopData = await getCooperatives()
      setCooperativas(coopData)
      const usersData = await getUsers()
      setUsers(usersData)
    } catch (error) {
      toast.error('Erro ao carregar dados para o formulário')
    }
  }

  const cadastrar = async () => {
    if (!form.idCooperativa || !form.idUtilizador) {
      toast.warning('Selecione a cooperativa e o utilizador!')
      return
    }

    try {
      setLoading(true)
      const payload = {
        idCooperativa: Number(form.idCooperativa),
        idUtilizador: Number(form.idUtilizador),
        nome: generateHash15(),
      }
      await addCooperativaUtilizador(payload)
      toast.success('Vínculo cadastrado com sucesso!')
      setForm({ idCooperativa: '', idUtilizador: '' })
    } catch (error) {
      toast.error('Erro ao cadastrar vínculo!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-[800px] mx-auto p-5 bg-gray-50 text-gray-800">
      <Card>
        <CardBody>
          <h2 className="text-lg font-bold mb-5">
            Cadastrar Vínculo Cooperativa ↔ Utilizador
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <Select
              label="Cooperativa"
              placeholder="Selecione a cooperativa"
              selectedKeys={form.idCooperativa ? [form.idCooperativa] : []}
              onChange={(e) => handleChange('idCooperativa', e.target.value)}
            >
              {cooperativas.map((coop) => (
                <SelectItem key={String(coop.id)}>{coop.nome}</SelectItem>
              ))}
            </Select>

            <Select
              label="Utilizador"
              placeholder="Selecione o utilizador"
              selectedKeys={form.idUtilizador ? [form.idUtilizador] : []}
              onChange={(e) => handleChange('idUtilizador', e.target.value)}
            >
              {users.map((user) => (
                <SelectItem key={String(user.id)}>{user.email}</SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              variant="flat"
              color="default"
              onPress={() => setForm({ idCooperativa: '', idUtilizador: '' })}
            >
              Limpar
            </Button>
            <Button color="primary" onPress={cadastrar} isLoading={loading}>
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
