// Exercício 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index++) {
    console.log (numbers[index]);
}*/

// Exercício 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
console.log (soma);*/

// Exercicio 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
console.log (soma);
let media = soma / numbers.length;
console.log (media);*/



// Exerício 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
let media = soma / numbers.length;
console.log (soma);
console.log (media);
if (media > 20) {
    console.log('Valor maior que 20!');
} else {
    console.log('Valor menor ou igual a 20');
}*/

// Exercicio 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if ( numbers[index] > maiorValor ) {
        maiorValor = numbers[index];
    }
}
console.log (maiorValor);*/

// Exercicio 6 - ****** Não resolvido ******
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        impar += 1;
    }
}
if (impar === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(impar);
}*/

// Exercicio 7 -Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if ( numbers[index] < menorValor ) {
    menorValor = numbers[index];
    }
}
console.log (menorValor);*/


// Exercicio 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.

/*let array = [];
for (let index = 1; index <= 25; index++) {
    array.push(index);
}
console.log (array)*/

// //Exercicio 9 - ****** Não resolvido ******
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

/*let array = [];
for (let index = 1; index <= 25; index++) {
    array.push(index);
}
for (let index = 0; index < array.length; index += 1) {
    console.log (array[index]/2);
}*/
