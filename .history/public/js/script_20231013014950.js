const buttonPlus = document.querySelector(".btn--card__plus");
const buttonMinus = document.querySelector(".btn--card__minus");
const inputElement = document.querySelector("#amount");

const minAttributeValue = parseInt(inputElement.getAttribute("min"));

const maxAttributeValue = parseInt(inputElement.getAttribute("max"));

console.log(maxAttributeValue);

let counterValue = parseInt(inputElement.value);
buttonPlus.addEventListener("click", () => {
  if (counterValue < maxAttributeValue) counterValue++;
  else
  inputElement.value = counterValue;
  
});

buttonMinus.addEventListener("click", () => {
  if (counterValue > minAttributeValue) counterValue--;
  inputElement.value = counterValue;
});
