
type TotalSolicitacoesPorMes = {
  mes: string;
  quantidade: number;
}


type Dados= {
  volumeTotal: number;
  aprovadasEsteMes: number;
  rejeitadasEsteMes: number;
  totalSolicitacoesPorMes: TotalSolicitacoesPorMes[];
}


export type Dashboard= {
  dados: Dados;
  sucesso: boolean;
}
