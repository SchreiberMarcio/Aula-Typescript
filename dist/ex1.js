"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcularMedia(nota1, nota2) {
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
