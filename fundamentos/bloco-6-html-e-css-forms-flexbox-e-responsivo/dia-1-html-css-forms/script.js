const button = document.querySelector("#submit");

function getUserValue(event) {
  event.preventDefault();
}
button.addEventListener('click', getUserValue);