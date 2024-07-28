export type Resultado = {
  media: number;
  aprovado: boolean;
};

export type NotaPeso = {
  nota: number;
  peso: number;
};

export type ResultadoSimples = {
  media: number;
  aprovado: boolean;
};

export type ResultadoMediaPonderada = {
  mediaPonderada: number;
  aprovado: boolean;
};

export type ResultadoTransacao = {
  sucesso: boolean;
  mensagem: string;
};
