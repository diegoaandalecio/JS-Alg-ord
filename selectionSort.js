// selectionSort

const livros = require('./listaLivros')     //importando o array de livros
const menorValor = require('./menorValor')  //importando a function de menorValor

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)   //Utilizando a função menorValor como parâmetro o objeto livros e a posição atual (0) do for
    //Precisamos salvar a informação em uma variável para realizar a troca de posições das chaves
    //Nestas variáveis, estão sendo guardados dados, informações
    let livroAtual = livros[atual];   //Variável para guardar a posição atual
    console.log(`Livro atual`, livros[atual])
    let livroMenorPreco = livros[menor];    //Variável para guardar o retorno maisBarato da função menorValor
    console.log(`Livro menor preço`, livros[menor])
    
    livros[atual] = livroMenorPreco;    
    livros[menor] = livroAtual;
}

console.log(livros)