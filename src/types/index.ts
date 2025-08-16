import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface IGuarantee {
  id: number
  tipo: string
  descricao: string
  valorEstimado: number
}

export interface IEvaluation {
  id: number
  decisao: string
  aprovada: number
  dataDecisao: string
  instituicao: number
}

export interface ICooperative {
  id: number
  nif: string
  nome: string
  fundacao: string
  localizacao: string
  tipoProduto: string
  volumeProducao: number
  patrimonio_liquido: number
  indicadoresIndimplencia: number
}

export interface IRequest {
  id: number
  status: string
  dataSolicitacao: string
  valorSolicitado: number
  finalidadeCredito: string
}

export interface IApplicant {
  id: number
  email: string
}

export interface IRiskAnalysis {
  id: number
  score: number
  dataAnalise: string
  justificativa: string
  classificacaoRisco: string
}

export interface ILastEvaluation {
  id: number
  decisao: string
  aprovada: number
  dataDecisao: string
  instituicao: number
}

export interface IUser {
  id: number
  email: string
  tipoUtilizador: string
}

export interface ICooperativeMember {
  id: number
  nome: string
  utilizador: IUser
  idUtilizador: number
}

export interface ICreditAnalysis {
  garantias: IGuarantee[]
  avaliacoes: IEvaluation[]
  cooperativa: ICooperative
  solicitacao: IRequest
  solicitante: IApplicant
  analisesRisco: IRiskAnalysis[]
  statusAnalise: string
  statusAvaliacao: string
  ultimaAvaliacao: ILastEvaluation
  membrosCooperativa: ICooperativeMember[]
}

export interface IHistoryAnalysis {
  cooperative: ICooperative
  request: IRequest
  lastReview: ILastEvaluation
  requester: IApplicant
  riskAnalysis: IRiskAnalysis | undefined
  guarantees: string
}
