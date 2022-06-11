// const livros = require('./listaLivros')     //Chamando a const precosLivros no arquivo listaLivros e armazenando em livros

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
    }

    return maisBarato;
}

module.exports = menorValor;    //exportando a função menorValor

// console.log(`O livro mais barato custa: ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`)