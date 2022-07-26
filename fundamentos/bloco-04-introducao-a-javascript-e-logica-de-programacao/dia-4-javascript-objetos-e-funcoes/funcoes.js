function palindrome(str) {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] == str[str.length - 1 - i]) {
            return true;
        }
    }
}

palindrome('desenvolvimento')
/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.*/
function maiorIndice(lista) {
    // Escreva aqui seu código
    let indice = 0;
    for (i = 0; i < lista.length; i++) {
        if (lista[i] > lista[indice]) {
            indice += i;
        }
    }

    return indice;
}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]))

/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.*/
function menorIndice(lista) {
    // Escreva aqui seu código
    let indice = 0;
    for (i = 0; i < lista.length; i++) {
        if (lista[i] < lista[indice]) {
            indice += i;
        }
    }

    return indice;
}

console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]))

/*4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.*/

/*5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.*/
function repeteNum(lista) {
    let indice = 0;
    for (i = 0; i < lista.length; i++) {
        if (lista[i] == lista[indice]) {
            indice += i;
        }
    }
    return indice;
}

console.log(repeteNum([2, 3, 2, 5, 8, 2, 3]))

/*6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.*/
function somaNaturais (x){
    let array = [];
    for (let index = 1; index <= 5; index++) {
    array.push(index);
}
somaNaturais(5);

/*7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.*/
function verificaFimPalavra (word, ending){

}

verificaFimPalavra('trybe', 'be');
