const express = require('express'); //express que é o serviodr que cria as rotas

const simpsonsDB = require('../db/simpsonsDB');

const simpsonsRouter = express.Router(); // transforma o simpsonsRouter em um rota

simpsonsRouter.get('/', async (req, res) => {
  const result = await simpsonsDB.getAll();
  res.status(200).json(result);
});

simpsonsRouter.post('/', async (req, res) => {
  const simpson = req.body;
  const result = await simpsonsDB.createSimpson(simpson);
  res.status(201).json(result);
});

module.exports = simpsonsRouter;