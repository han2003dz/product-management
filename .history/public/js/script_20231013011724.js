const buttonPlus = document.querySelector(".btn--card__plus");
const buttonMinus = document.querySelector(".btn--card__minus");
const amount = document.querySelector("#amount");

let counterValue = parseInt(amount.value);
buttonPlus.addEventListener("click", () => {
  console.log("OK plus");
});

buttonMinus.addEventListener("click", () => {
  console.log("OK minus");
});
