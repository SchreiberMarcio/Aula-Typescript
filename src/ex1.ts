import { Resultado } from "./types";

function calcularMedia(nota1: number, nota2: number): Resultado {
  const media = (nota1 + nota2) / 2;
  const aprovado = media >= 6;

  return {
    media,
    aprovado,
  };
}

const resultado = calcularMedia(7, 5);
const status = resultado.aprovado ? "Aprovado" : "Reprovado";
console.log(`Média: ${resultado.media}, Status: ${status}`);
