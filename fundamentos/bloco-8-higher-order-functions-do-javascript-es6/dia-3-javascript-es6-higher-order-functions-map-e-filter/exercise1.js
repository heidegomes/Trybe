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
//1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const booksInfo = books.map((book) => `${book.name} ${book.genre} ${book.author.name}`);

console.log(booksInfo);

//2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const booksObject = books.map((book) => (
  {
    author: book.author.name,
    age:book.releaseYear - book.author.birthYear, 
  }
));

const booksObjectOrder = booksObject.sort((age1, age2) => age1.age - age2.age);
console.log(booksObjectOrder);  

//Tudo junto

const booksObject2 = books
  .map((book) => ({
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear, 
  }))
  .sort(
    (age1, age2) => age1.age - age2.age
  );

console.log(booksObject2); 


//3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const booksGenre = books.filter((book) => (book.genre === 'Fantasia' || book.genre === 'Ficção Científica'));

console.log(booksGenre); 

//4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const booksRelease = books
  .filter(
    (book) => (2022 - book.releaseYear) > 60
  )
  .sort(
    (release1, release2) => release1.releaseYear - release2.releaseYear
  );

console.log(booksRelease); 

//5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const booksAuthorGenre = books
  .filter(
    (book) => (book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  );
console.log(booksAuthorGenre); 

const booksAuthor = booksAuthorGenre
  .map(
    (book) => (book.author.name)
  );
console.log(booksAuthor); 

const orderAlphab = booksAuthor
  .sort();
console.log(orderAlphab); 

//6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const booksOlder60 = books.filter(
    (book) => (2022 - book.releaseYear) > 60
  );
console.log(booksOlder60);

const booksTitle = booksOlder60
  .map(
    (book) => (book.name)
  );
console.log(booksTitle); 

//7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const authorName = books.filter(
  (book) => (book.author.name === 'J. R. R.')
);
  console.log(authorName);

const authorName3Dots = authorName
  .map(
    (book) => (book.name)
  );
console.log(authorName3Dots); 