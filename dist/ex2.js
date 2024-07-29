"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcularMediaPonderada(notasPesos) {
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
// Exemplo de uso:
const notasPesos1 = [
    { nota: 8, peso: 2 },
    { nota: 7, peso: 3 }
];
const notasPesos2 = [
    { nota: 8, peso: 2 },
    { nota: 7, peso: 3 },
    { nota: 9, peso: 5 }
];
const resultado1 = calcularMediaPonderada(notasPesos1);
const resultado2 = calcularMediaPonderada(notasPesos2);
console.log(`Resultado: ${resultado1}`);
console.log(`Resultado: ${resultado2}`);
