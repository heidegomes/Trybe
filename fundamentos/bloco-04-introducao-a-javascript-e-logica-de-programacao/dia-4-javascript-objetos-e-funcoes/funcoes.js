function verificaPalindrome(word) {
    for (index in word) {
        if (word[index] != word[(word.length - 1) - index]) {
            return false;
        }
    }
    return true;
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.*/
function maiorIndice(lista) {
    let indiceMaior = 0;
    for (index in lista) {
        if (lista[index] > lista[indiceMaior]) {
            indiceMaior = index;
        }
    }
    return indiceMaior;
}
console.log(maiorIndice([2, 3, 6, 7, 10, 1]));

/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.*/
function menorIndice(lista) {
    let indiceMenor = 0;
    for (index in lista) {
        if (lista[index] < lista[indiceMenor]) {
            indiceMenor = index;
        }
    }
    return indiceMenor;
}
console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));

/*4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. Não resolvido */

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let index in palavras) {
        if (maiorPalavra.length < palavras[index].lenght) {
            maiorPalavra = palavras[index];
        }
    }
    return maiorPalavra;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));



/*5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.*/
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

/*6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.*/
function somaTodosNumeros(numero) {
    let total = 0;
    for (let index = 1; index <= numero; index += 1) {
        total = total + index;
    }
    return total;
}
console.log(somaTodosNumeros(5));

/*7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.*/
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    let controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
        if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
            controle = false;
        }
    }
    return controle;
}

console.log(verificaFimPalavra('trybe', 'be')); 
console.log(verificaFimPalavra('joaofernando', 'fernan'));
