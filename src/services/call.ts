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
const getUsers = async (params: any) => {
  try {
    const response = await api.get('/api/utilizadores/unsed/user', {
      params,
    })

    return response.data.dados
  } catch (responseError: any) {
    const error = responseError.response.data

    throw new Error(error.erro[0])
  }
}
const getAllUsers = async (params: any) => {
  try {
    const response = await api.get('/api/utilizadores', {
      params,
    })

    return response.data.dados
  } catch (responseError: any) {
    const error = responseError.response.data

    throw new Error(error.erro[0])
  }
}
const deleteUser = async (userId: number) => {
  try {
    const response = await api.delete(`/api/utilizadores/${userId}`)

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
const addDecision = async (data: any) => {
  try {
    const response = await api.post('/api/avaliacoes-solicitacao', data)
    return response.data.dados[0]
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}
const addAnalisys = async (solicitacaoId: any) => {
  try {
    const response = await api.post(
      '/api/analises-risco/gerar-automatica/' + solicitacaoId,
    )
    return response.data.dados[0]
  } catch (responseError: any) {
    const error = responseError.response.data
    throw new Error(error.erro[0])
  }
}
const getAvaliations = async (params: any) => {
  try {
    const response = await api.get(
      '/api/solicitacoes-micro-credito/historico',
      {
        params,
      },
    )

    return response.data.dados
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
  getAvaliations,
  addDecision,
  addAnalisys,
  getAllUsers,
}
