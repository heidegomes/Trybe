// importando o modulo do promise
const fs = require('fs').promises;

// Exercício A
// funcao que trabalha no arquivo json, usando o unicode utf8
async function readAllComASyncAwait() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
    const simpsons = JSON.parse(fileContent) //converte o conteúdo do json para um array
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}` ) //A - mapeia cada objeto para que eu possa exibir como string para o ususário final

    strings.forEach((string) => console.log(string));
}

// Exercício B
async function getSimpsonById(id){
  const fileContent = await fs
  .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id); //B - recebe o id do personagem e retorna uma promisse
  if(!chosenSimpson){
    throw new Error('id não encontrado'); // rejeita a promisse quando o id não for encontrado
  }
  return chosenSimpson
}

// Exercício C
async function filterSimpsons(){
  const fileContent = await fs
  .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6'); //C - remove do array as posições 6 e 10
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray)); //chamada da promise, que escreve o nosso arquivo
}

//Exercicio D
async function createSimpsonsFamily(){
  const fileContent = await fs
  .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
  .filter((simpson) => familyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

//Exercicio E
async function addNelsonFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({id: '8', name: 'Nelson Muntz'});
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
  
//Exercicio F
async function replaceNelson() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsonsFamily.filter((simpson) => simpson.id !== '8');
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{id: '15', name: 'Maggie Simpson'}]);
    
    return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

// A função main é apenas para termos um ponto de enrada centralizado para nosso script
function main() {
  // readAllComASyncAwait();
  // getSimpsonById(3)
  // .then((simpson) => console.log(simpson)); // retorna o simpson de id 3
  // filterSimpsons(); // Apaga as duas posições do id informado no arquivo.
  // createSimpsonsFamily()
  // addNelsonFamily();
  replaceNelson();
}

main();