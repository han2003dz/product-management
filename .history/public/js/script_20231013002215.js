// button card + -
let amountElement = document.getElementById("amount");
console.log(amountElement);

let amount = amountElement.value;



const handlePlus = () => {
  amount--;
  renderValue(amount);
};
