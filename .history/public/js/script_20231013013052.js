const buttonPlus = document.querySelector(".btn--card__plus");
const buttonMinus = document.querySelector(".btn--card__minus");
const i = document.querySelector("#i");
const min = i.getAttribute("min");
let counterValue = parseInt(i.value);
buttonPlus.addEventListener("click", () => {
  counterValue++;
  i.value = counterValue;
});

buttonMinus.addEventListener("click", () => {
  if (counterValue > 1) counterValue--;
  i.value = counterValue;
});
