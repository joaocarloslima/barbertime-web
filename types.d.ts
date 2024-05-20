interface Servico {
    id: number;
    nome: string;
    valor: number;
  }
  
  interface Barbearia {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    cnpj: string;
    servicos: Servico[];
  }
  