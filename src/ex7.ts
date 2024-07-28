import { EmpresaMembro } from "./interfaces";
import { User } from "./interfaces";
import { Diretor } from "./interfaces";

function mostrarInformacoes(membro: EmpresaMembro): void {
  if ("ocupacao" in membro) {
    // Trata-se de um User
    const user = membro as User;
    const salario = user.salario !== undefined ? `R$ ${user.salario}` : "N/A";
    console.log(
      `${user.nome}, ${user.idade} anos, ${user.ocupacao}, salário ${salario}`
    );
  } else {
    // Trata-se de um Diretor
    const diretor = membro as Diretor;
    const salario =
      diretor.salario !== undefined ? `R$ ${diretor.salario}` : "N/A";
    console.log(
      `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salario}`
    );
  }
}

function mostrarListaDeMembros(membros: EmpresaMembro[]): void {
  membros.forEach(mostrarInformacoes);
}

const membros: EmpresaMembro[] = [
  { nome: "Daphne", idade: 23, ocupacao: "analista de TI", salario: 1000 },
  { nome: "Carlos", idade: 30, ocupacao: "desenvolvedor" },
  { nome: "Alice", idade: 28, ocupacao: "designer", salario: 2000 },
  { nome: "Fernando", idade: 40, nivelComissionamento: 5, salario: 5000 },
  { nome: "Bianca", idade: 35, nivelComissionamento: 3 },
];

mostrarListaDeMembros(membros);
