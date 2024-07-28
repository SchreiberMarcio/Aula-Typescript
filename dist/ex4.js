"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProdutoManager {
    produtos = [];
    currentId = 1;
    adicionarProduto(nome, preco) {
        const novoProduto = { id: this.currentId++, nome, preco };
        this.produtos.push(novoProduto);
        console.log(`Produto adicionado: ${JSON.stringify(novoProduto)}`);
    }
    listarProdutos() {
        console.log('Lista de Produtos:');
        this.produtos.forEach(produto => {
            console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`);
        });
    }
    excluirProduto(id) {
        const index = this.produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            const produtoExcluido = this.produtos.splice(index, 1)[0];
            console.log(`Produto excluído: ${JSON.stringify(produtoExcluido)}`);
        }
        else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }
    }
}
const gerenciador = new ProdutoManager();
gerenciador.adicionarProduto('Produto 1', 100.00);
gerenciador.adicionarProduto('Produto 2', 200.00);
gerenciador.listarProdutos();
gerenciador.excluirProduto(1);
gerenciador.listarProdutos();
