"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MinhaCarteira {
    saldo;
    transacoes;
    /**
     * Initializes a new instance of the class.
     *
     * This constructor sets the initial values for the `saldo` and `transacoes` properties.
     * The `saldo` property is set to 0, indicating an initial balance of 0.
     * The `transacoes` property is initialized as an empty array, indicating that there are no transactions yet.
     */
    constructor() {
        this.saldo = 0;
        this.transacoes = [];
    }
    adicionarEntrada(valor) {
        if (valor <= 0) {
            return {
                sucesso: false,
                mensagem: "O valor da entrada deve ser positivo.",
            };
        }
        const entrada = { valor, tipo: "entrada", data: new Date() };
        this.transacoes.push(entrada);
        this.saldo += valor;
        return { sucesso: true, mensagem: "Entrada adicionada com sucesso." };
    }
    adicionarSaida(valor) {
        if (valor <= 0) {
            return {
                sucesso: false,
                mensagem: "O valor da saída deve ser positivo.",
            };
        }
        if (this.saldo < valor) {
            return { sucesso: false, mensagem: "Saldo insuficiente para a saída." };
        }
        const saida = { valor, tipo: "saida", data: new Date() };
        this.transacoes.push(saida);
        this.saldo -= valor;
        return { sucesso: true, mensagem: "Saída adicionada com sucesso." };
    }
}
const minhaCarteira = new MinhaCarteira();
let resultado = minhaCarteira.adicionarEntrada(100);
console.log(resultado);
console.log("Saldo atual:", minhaCarteira.saldo);
resultado = minhaCarteira.adicionarSaida(50);
console.log(resultado);
console.log("Saldo atual:", minhaCarteira.saldo);
resultado = minhaCarteira.adicionarSaida(60);
console.log(resultado);
console.log("Saldo atual:", minhaCarteira.saldo);
