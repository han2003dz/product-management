const buttonPlus = document.querySelector(".btn--card__plus");
const buttonMinus = document.querySelector(".btn--card__minus");
const inputElement = document.querySelector("#amount");

const minAttributeValue = parseInt(inputElement.getAttribute("min"));

const maxAttributeValue = parseInt(inputElement.getAttribute("max"));

console.log(minAttributeValue);

let counterValue = parseInt(inputElement.value);
buttonPlus.addEventListener("click", () => {
  if (counterValue < maxAttributeValue) counterValue++;
  inputElement.value = counterValue;
  alert("Vượt quá số lượng mặt hàng còn !")
});

buttonMinus.addEventListener("click", () => {
  if (counterValue > 1) counterValue--;
  inputElement.value = counterValue;
});
