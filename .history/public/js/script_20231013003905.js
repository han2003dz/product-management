// button card + -
let amountElement = document.getElementById("amount");
console.log(amountElement);

let amount = amountElement.value;

let renderValue = (amount) => {
  amountElement.value = amount;
};

let handlePlus = () => {
  amount++;
  renderValue(amount);
};

let handleMinus = () => {
  if (amount > 1) amount--;
  renderValue(amount);
};

amountElement.addEventListener("input", () => {
  amount = amountElement.value;
  amount = parseInt(amount);
  amount = isNaN(amount) || amount == 0 ? 1 : amount;
  renderValue(amount);
});
