"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarInformacoesDiretor(diretor) {
    const salario = diretor.salario !== undefined ? `R$ ${diretor.salario}` : "N/A";
    console.log(`Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salario}`);
}
const diretor1 = {
    nome: "Daphne",
    idade: 23,
    salario: 1000,
    nivelComissionamento: 5,
};
const diretor2 = {
    nome: "Carlos",
    idade: 30,
    nivelComissionamento: 3,
};
mostrarInformacoesDiretor(diretor1);
mostrarInformacoesDiretor(diretor2);
