import { Diretor } from "./interfaces";

function mostrarInformacoesDiretor(diretor: Diretor): void {
  const salario =
    diretor.salario !== undefined ? `R$ ${diretor.salario}` : "N/A";
  console.log(
    `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salario}`
  );
}

const diretor1: Diretor = {
  nome: "Daphne",
  idade: 23,
  salario: 1000,
  nivelComissionamento: 5,
};
const diretor2: Diretor = {
  nome: "Carlos",
  idade: 30,
  nivelComissionamento: 3,
};

mostrarInformacoesDiretor(diretor1);
mostrarInformacoesDiretor(diretor2);
