//O insertion Sort é uma motodologia que vai inserindo os elementos com o While. Ele também é um ALGORITMO DE ORDENAÇÃO

const livros = require('./listaLivros');

function insertioSort(lista) {

    for(let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while(analise> 0 && lista[analise].preco < lista[analise - 1].preco) {    //Enquanto o preco do item atual (no loop) for menor do que o item que vem antes dele (analise-1)

            let itemAnalise = lista[analise];              //Guardando os dados do objeto em uma variável   
            // console.log(`Livro atual`, lista[analise])
            let itemAnterior = lista[analise-1];           //Guardando os dados do objeto em uma variável   
            // console.log(`Livro menor preço`, lista[analise-1])
            
            lista[analise] = itemAnterior;     //Invertendo os lugares dos dados do objeto
            lista[analise-1] = itemAnalise;    //Invertendo os lugares dos dados do objeto

            analise--   //Condição de parada do while. analise-- vai "voltando", decrementando
        }
    }

    console.log(lista);
}

insertioSort(livros);