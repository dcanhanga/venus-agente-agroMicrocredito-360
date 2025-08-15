import { api } from '.'

const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/api/utilizadores/sign-in', {
      email,
      password,
    })
    return response.data
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}
const addCooperative = async (data: any) => {
  try {
    const response = await api.post('/api/cooperativas', data)
    return response.data.dados[0]
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}

const addFinancialInstituition = async (data: any) => {
  try {
    const response = await api.post('/api/instituicoes-financeiras', data)
    return response.data.dados[0]
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}

const getCooperatives = async () => {
  try {
    const response = await api.get('/api/cooperativas')
    return response.data.dados
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}
const getFinancialInstituitions = async () => {
  try {
    const response = await api.get('/api/instituicoes-financeiras')
    return response.data.dados
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}
const deleteFinancialInstituitions = async (finId: number) => {
  try {
    const response = await api.delete(`/api/instituicoes-financeiras/${finId}`)
    return response.data.data
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}
const deleteCooperative = async (coopId: number) => {
  try {
    const response = await api.delete(`/api/cooperativas/${coopId}`)
    return response.data.data
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}
const addUser = async (data: any) => {
  try {
    const response = await api.post('/api/utilizadores/sign-up', data)
    return response.data.dados[0]
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}
const getUsers = async () => {
  try {
    const users = [
      {
        id: 4,
        email: 'user4@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 5,
        email: 'user5@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 6,
        email: 'user6@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 7,
        email: 'user7@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 8,
        email: 'user8@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 9,
        email: 'user9@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 10,
        email: 'user10@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 11,
        email: 'user11@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 12,
        email: 'user12@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 13,
        email: 'user13@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
      {
        id: 14,
        email: 'user14@dev.ao',
        dataCriacao: '2025-08-15 04:26:13',
        dataAtualizacao: '2025-08-15 04:26:13',
        modificadoPorNome: null,
        idCooperativa: null,
        idMembro: null,
        password: '1234567',
        tipo_utilizador: 'COOPERATIVA',
      },
    ]
    return users
    const response = await api.get('/api/utilizadores/sign-up')
    return response.data.dados
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}
const deleteUser = async (userId: number) => {
  try {
    const response = await api.delete(`/api/utilizadores/sign-up/${userId}`)
    return response.data.data
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}

const addCooperativaUtilizador = async (data: any) => {
  try {
    const response = await api.post('/api/cooperativa-membros', data)
    return response.data.dados[0]
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}

export {
  login,
  addCooperative,
  getCooperatives,
  deleteCooperative,
  addFinancialInstituition,
  getFinancialInstituitions,
  deleteFinancialInstituitions,
  addUser,
  deleteUser,
  getUsers,
  addCooperativaUtilizador,
}
