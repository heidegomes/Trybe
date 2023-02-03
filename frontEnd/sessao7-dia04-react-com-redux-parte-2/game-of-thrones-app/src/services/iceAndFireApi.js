

const getCurrentCharacter = async () => {
  const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${NOME DO PERSONAGEM}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCurrentCharacter;
