// button card + -
let amountElement = document.getElementById("amount");
console.log(amountElement);

let amount = amountElement.value;
console.log(amount);

const handlePlus = () => {
  amount--;
  renderValue()
};
