import { NotaPeso } from "./types";


function calcularMediaPonderada(notasPesos: NotaPeso[]): string {
  let somaNotasPonderadas = 0;
  const numeroNotas = notasPesos.length;

  for (const np of notasPesos) {
    somaNotasPonderadas += np.nota * np.peso;
  }

  const mediaPonderada = somaNotasPonderadas / numeroNotas;
  const expressao = notasPesos
    .map((np, index) => `(N${index + 1}*P${index + 1})`)
    .join(' + ');

  return `${expressao} / ${numeroNotas} = ${mediaPonderada.toFixed(2)}`;
}


const notasPesos1: NotaPeso[] = [
  { nota: 8, peso: 2 },
  { nota: 7, peso: 3 }
];

const notasPesos2: NotaPeso[] = [
  { nota: 8, peso: 2 },
  { nota: 7, peso: 3 },
  { nota: 9, peso: 5 }
];

const resultado1 = calcularMediaPonderada(notasPesos1);
const resultado2 = calcularMediaPonderada(notasPesos2);

console.log(`Resultado: ${resultado1}`);
console.log(`Resultado: ${resultado2}`);