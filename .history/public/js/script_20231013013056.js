const buttonPlus = document.querySelector(".btn--card__plus");
const buttonMinus = document.querySelector(".btn--card__minus");
const inputE = document.querySelector("#inputE");
const min = inputE.getAttribute("min");
let counterValue = parseInt(inputE.value);
buttonPlus.addEventListener("click", () => {
  counterValue++;
  inputE.value = counterValue;
});

buttonMinus.addEventListener("click", () => {
  if (counterValue > 1) counterValue--;
  inputE.value = counterValue;
});
