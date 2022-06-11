const livros = require('./listaLivros')     //Chamando a const precosLivros no arquivo listaLivros e armazenando em livros

    let maisBarato = 0;

    for (let atual = 0; atual < livros.length; atual++){
        if(livros[atual].preco < livros[maisBarato].preco){
            maisBarato = atual
        }
        continue
    }

console.log(`O livro mais barato custa: ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`)