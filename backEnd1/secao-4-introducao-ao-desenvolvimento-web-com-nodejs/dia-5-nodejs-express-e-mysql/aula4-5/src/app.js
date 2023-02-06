const express = require('express'); // importa a biblioteca express
const simpsonsRouter = require('./routes/simpsonsRouter');

const app = express(); // cria um servidor express

app.use(express.json()); //informa o servidor que ele vai receber informações atraves do body no formato json

app.use('/simpsons', simpsonsRouter);


module.exports = app; //exporta o serviodr express que esta dentro do app para outro luigar