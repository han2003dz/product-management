// button card + -
let amountElement = document.getElementById("amount");
console.log(amountElement);

let amount = amountElement.value;

let renderValue= (amount) => {

}

let handlePlus = () => {
  amount--;
  renderValue(amount);
};