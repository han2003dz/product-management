const buttonPlus = document.querySelector(".btn--card__plus");
const buttonMinus = document.querySelector(".btn--card__minus");
const imput = document.querySelector("#imput");
const min = imput.getAttribute("min");
let counterValue = parseInt(imput.value);
buttonPlus.addEventListener("click", () => {
  counterValue++;
  imput.value = counterValue;
});

buttonMinus.addEventListener("click", () => {
  if (counterValue > 1) counterValue--;
  imput.value = counterValue;
});
