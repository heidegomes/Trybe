const connection = require("./connection");

const getAll = async() => {
  const [result] = await connection.execute('SELECT * FROM characters;'); // dessestrututra o array para retornar somente a primeira posição.
  return result;
};

const createSimpson = async (simpson) => {
  const [result] = await connection.execute(
    'INSERT INTO characters (name) VALUES (?);', 
    [simpson.name],
  );
  return {id: result.insertId, ...simpson};
}
module.exports = { getAll, createSimpson };