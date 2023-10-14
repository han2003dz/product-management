const buttonPlus = document.querySelector(".btn--card__plus");
const buttonMinus = document.querySelector(".btn--card__minus");
const inputElement = document.querySelector("#amount");

const minAttributeValue = parseInt(inputElement.getAttribute("min"));

const maxAttributeValue = parseInt(inputElement.getAttribute("max"));

console.log(maxAttributeValue);

let counterValue = parseInt(inputElement.value);
buttonPlus.addEventListener("click", () => {
  if (counterValue < maxAttributeValue) counterValue++;
  else alert("Vượt quá số lượng mặt hàng còn !");
  inputElement.value = counterValue;
});

buttonMinus.addEventListener("click", () => {
  if (counterValue > minAttributeValue) counterValue--;
  inputElement.value = counterValue;
});

// Show Alert
const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
  const time = parseInt(showAlert.getAttribute("data-time"));
  const closeAlert = showAlert.querySelector("[close-alert]");

  setTimeout(() => {
    showAlert.classList.add("alert-hidden");
  }, time);

  closeAlert.addEventListener("click", () => {
    showAlert.classList.add("alert-hidden");
  });
}
// End Show Alert
