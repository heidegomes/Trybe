//Exercício 1 - crie um algoritmo que retorne o fatorial de 10.




//Exercício 2 - desenvolva um algoritmo que é capaz de inverter uma palavra.
/*let word = 'tryber';
let newWord = '';

for (let index = word.length - 1; index >= 0; index--) {
    newWord += word[index];
}
console.log (newWord);*/

//Exercício 3 - retorne a maior palavra deste array e outro que retorne a menor.
let array = ['java', 'javascript', 'python', 'html', 'css'];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        const element = array[i];
    }
    

//Exercicio 4 - escreva um algoritmo que retorne o maior número primo entre 2 e 50.
let Notprimo = 0;
let primo = 0;
for (let index = 2; index <= 50; index += 1) {
    if (index % index !== 0){
        Notprimo += 1;
    } else {
        primo += 1;
    }
}
console.log (primo);
console.log (Notprimo);