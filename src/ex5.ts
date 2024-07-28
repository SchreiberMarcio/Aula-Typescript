import { User } from "./interfaces";

class UserManager {
  private users: User[] = [];

  adicionarUsuario(user: User): void {
    this.users.push(user);
  }

  listarUsuarios(): void {
    this.users.forEach((user) => {
      const salario = user.salario !== undefined ? `R$ ${user.salario}` : "N/A";
      console.log(
        `${user.nome}, ${user.idade} anos, ${user.ocupacao}, salário ${salario}`
      );
    });
  }
}

const gerenciador = new UserManager();
gerenciador.adicionarUsuario({
  nome: "Daphne",
  idade: 23,
  ocupacao: "analista de TI",
  salario: 1000,
});
gerenciador.adicionarUsuario({
  nome: "Carlos",
  idade: 30,
  ocupacao: "desenvolvedor",
  salario: 2000,
});
gerenciador.adicionarUsuario({
  nome: "Alice",
  idade: 28,
  ocupacao: "designer",
}); // Sem salário

gerenciador.listarUsuarios();
