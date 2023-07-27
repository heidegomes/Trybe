const readline = require('readline-sync')
const { readMissionsData, writeNewMissionData } = require('./utils/fsUtils.js');

async function main() {
  const name = readline.question('Qual é o nome da missão?')
  const year = readline.questionInt('Qual é o ano da missão?')
  const country = readline.question('Qual é o país da missão?')
  const destination = readline.question('Qual é o destino da missão?')

  const newMission = { name, year, country, destination }
  writeNewMissionData(newMission)
  console.log('Nova missão registrada com sucesso')
  // const missions = await readMissionsData()
  // console.log(missions)
  // writeNewMissionData({
  //   name: 'Tryber1',
  //   year: '2019',
  //   country: 'Brasil',
  //   destination: 'Marte'
  // })
}

main();