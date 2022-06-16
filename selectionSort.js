// selectionSort é um ALGORITMO DE ORDENAÇÃO. Ele utiliza uma função externa para recorrer o objeto e ordenar de acordo com as chaves passadas

const livros = require('./listaLivros')     //importando o array de livros
const menorValor = require('./menorValor')  //importando a function de menorValor

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)   //Utilizando a função menorValor como parâmetro o objeto livros e a posição atual (0) do for
    //Precisamos salvar a informação em uma variável para realizar a troca de posições das chaves
    //Nestas variáveis, estão sendo guardados dados, informações
    let livroAtual = livros[atual];         //Guardando os dados do objeto em uma variável   
    console.log(`Livro atual`, livros[atual])   //Somente para verificação
    let livroMenorPreco = livros[menor];    //Guardando os dados do objeto em uma variável   
    console.log(`Livro menor preço`, livros[menor]) //Somente para verificação
    
    livros[atual] = livroMenorPreco;   //Invertendo os lugares dos dados do objeto
    livros[menor] = livroAtual;        //Invertendo os lugares dos dados do objeto
}

console.log(livros)