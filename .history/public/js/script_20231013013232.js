const buttonPlus = document.querySelector(".btn--card__plus");
const buttonMinus = document.querySelector(".btn--card__minus");
const inputElement = document.querySelector("#amount");
var minAttributeValue = inputElement.getAttribute("min");

let counterValue = parseInt(inputElement.value);
buttonPlus.addEventListener("click", () => {
  counterValue++;
  inputElement.value = counterValue;
});

buttonMinus.addEventListener("click", () => {
  if (counterValue > 1) counterValue--;
  inputElement.value = counterValue;
});