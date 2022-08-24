const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// function authorBornIn1947() {
//   return books.find((element) => element.author.birthYear === 1947).author.name;
// };
// console.log(authorBornIn1947());

// //5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
// function everyoneWasBornOnSecXX(){
//   return books.every((pessoa) => (pessoa.author.birthYear >= 1901 && pessoa.author.birthYear <= 2000));
// };

// console.log(everyoneWasBornOnSecXX());

// //6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
// function someBookWasReleaseOnThe80s() {
//   return books.some((livro) => (livro.releaseYear >= 1981 && livro.releaseYear <= 1990 ))
// }

// console.log(someBookWasReleaseOnThe80s());

//arrow function
// const someBookWasReleaseOnThe80s = books.some((livro) => (livro.releaseYear >= 1981 && livro.releaseYear <= 1990 ));

// console.log(someBookWasReleaseOnThe80s);


function hasBook(name, books) {
  for (let i = 0; i < books.length; i++) {
    const b = books[i];
    if (b.name === name) {
      return true
    }
  }
  return false;
}

console.log(hasBook('Duna', books));

const hasBook2 = (name) => books.find((book) => book.name === name)

console.log(hasBook2('Duna'));



// const someBookWasReleaseOnThe80s = books.some((livro) => (livro.releaseYear >= 1981 && livro.releaseYear <= 1990 ));
// const callBackBookReleaseOnThe80s = function(book) {
//   return book.releaseYear >= 1981 && book.releaseYear <= 1990;
// }
// const callBackBookReleaseOnThe80s = (book) => (book.releaseYear >= 1981 && book.releaseYear <= 1990);
// const someBookWasReleaseOnThe80s2 = books.some(callBackBookReleaseOnThe80s);

const someBookWasReleaseOnThe80s2 = books.some((book) => (book.releaseYear >= 1981 && book.releaseYear <= 1990));

console.log(someBookWasReleaseOnThe80s2)