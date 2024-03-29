function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
/* Exercício 1
Crie um calendário dinamicamente.
O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
A tag <ul> deve conter o id 'days';
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li> */

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfTheMonth() {
  let monthDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dayMonth = decemberDaysList[index];
    let dayListItemMonth = document.createElement('li');
    dayListItemMonth.innerHTML = dayMonth;

    if (dayMonth === 24 || dayMonth === 31) {
      dayListItemMonth.className = 'day holiday';
      monthDaysList.appendChild(dayListItemMonth);
    } else if (dayMonth === 4 || dayMonth === 11 || dayMonth === 18){
      dayListItemMonth.className = 'day friday';
      monthDaysList.appendChild(dayListItemMonth);
    } else if (dayMonth === 25) {
      dayListItemMonth.className = 'day holiday friday';
      monthDaysList.appendChild(dayListItemMonth);
    } else {
      dayListItemMonth.className = 'day';
      monthDaysList.appendChild(dayListItemMonth);
    }
  };
};
createDaysOfTheMonth();

/* Exercício 2
Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */

function createHolidayButton(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

/* Exercício 3
Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday" */

function displayHolidays(){
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      };
    }
  });
}

displayHolidays();

/* Exercício 4
Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
Adicione a esse botão o ID "btn-friday";
Adicione esse botão como filho/filha da tag <div> com classe "buttons-container". */

function createFridayButton(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;//adiciona o nome do botão
  newButton.id = newButtonID;//adiciona o id do botão
  buttonContainer.appendChild(newButton);//adiciona o botão como filho do container de botões
}

createFridayButton('Sexta-feira');

/* Exercício 5
Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras. */
function displayFridays(fridaysArray){
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function(){// cria o escutador de eventos
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  });
}

let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

/* Exercício 6
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. */

function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });

}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

dayMouseOver();
dayMouseOut();