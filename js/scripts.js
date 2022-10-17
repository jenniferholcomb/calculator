//business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtraction(number1, number2) {
  return number1 - number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function division(number1, number2) {
  return number1 / number2;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter a second number:"));

const addResult = number1 + " + " + number2 + " = " + add(number1,number2) + "\r";
const subResult = number1 + " - " + number2 + " = " + subtraction(number1, number2) + "\r";
const multResult = number1 + " * " + number2 + " = " + multiplication(number1, number2) + "\r";
const divResult = number1 + " / " + number2 + " = " + division(number1, number2) + "\r";

//window.alert(add(number1, number2));
window.alert(addResult + subResult + multResult + divResult);
//window.alert(addResult);






