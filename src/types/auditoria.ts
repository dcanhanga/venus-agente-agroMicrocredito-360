export type Auditoria = {
  dados: Dados
  sucesso: boolean
}

type Dados = {
  alteracoes: Alteracao[]
  ultimos_logins: UltimosLogin[]
  usuarios_deletados: UsuariosDeletado[]
}

export type Alteracao = {
  password?: string
  email_novo: string
  data_evento: string
  email_antigo: string
  id_utilizador: number
  tipo_utilizador_novo: string
  tipo_utilizador_antigo: string
}

export type UltimosLogin = {
  email: string
  ultimo_login: string
  id_utilizador: number
}

export type UsuariosDeletado = {
  email: string
  data_evento: string
  id_utilizador: number
}
