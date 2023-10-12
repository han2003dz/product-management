const buttonPlus = document.querySelector(".btn--card__plus");
const buttonMinus = document.querySelector(".btn--card__minus");
const amount = document.querySelector("#amount");

let counterValue = parseInt(amount.value);
console.log(counterValue);
buttonPlus.addEventListener("click", () => {
  counterValue++;
  amount.value = counterValue;
});

buttonMinus.addEventListener("click", () => {
  if (counterValue > 1) counterValue --;
  amount.value = counterValue;
});
