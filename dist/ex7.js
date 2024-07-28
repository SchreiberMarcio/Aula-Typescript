"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarInformacoes(membro) {
    if ('ocupacao' in membro) {
        // Trata-se de um User
        const user = membro;
        const salario = user.salario !== undefined ? `R$ ${user.salario}` : 'N/A';
        console.log(`${user.nome}, ${user.idade} anos, ${user.ocupacao}, salário ${salario}`);
    }
    else {
        // Trata-se de um Diretor
        const diretor = membro;
        const salario = diretor.salario !== undefined ? `R$ ${diretor.salario}` : 'N/A';
        console.log(`Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salario}`);
    }
}
function mostrarListaDeMembros(membros) {
    membros.forEach(mostrarInformacoes);
}
const membros = [
    { nome: 'Daphne', idade: 23, ocupacao: 'analista de TI', salario: 1000 },
    { nome: 'Carlos', idade: 30, ocupacao: 'desenvolvedor' },
    { nome: 'Alice', idade: 28, ocupacao: 'designer', salario: 2000 },
    { nome: 'Fernando', idade: 40, nivelComissionamento: 5, salario: 5000 },
    { nome: 'Bianca', idade: 35, nivelComissionamento: 3 }
];
mostrarListaDeMembros(membros);
