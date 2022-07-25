/*1*/

// let player = {
//     infoPessoal: {
//         name: 'Marta',
//         lastName: 'Silva',
//         age: 34,  
//     },
//     medals: { 
//         golden: 2, 
//         silver: 3, 
//     },
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// }
//     console.log ( 'A ' + player.infoPessoal.name + ' ' + player.infoPessoal.lastName + ' tem ' + player.infoPessoal.age + ' anos de idade.');

//     console.log ('A ' + player.infoPessoal.name + ' ' + player.infoPessoal.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld + ' vezes.');

//     console.log ('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

    /*For in **** For of*/
    /*1*/
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
// };

// for (let index in names) {
//     console.log('Olá ' + names[index]); //imprime os valores
// };

    /*2*/
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
    };

for (let index in car) {
    console.log(index + ' ' + car[index]); //imprime as chaves e os valores
}