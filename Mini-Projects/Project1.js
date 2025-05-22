const prompt = require("prompt-sync")()

const Num1 = parseFloat(prompt("Enter Number 1: "))
const Num2 = parseFloat(prompt("Enter Number 2: "))
const operator = (prompt("Enter a sign: "))

let result;
let valid = true;

switch(operator) {
  case "+": 
    result = Num1 + Num2
    break;
  case "-": 
    result = Num1 - Num2
    break;
  case "*": 
    result = Num1 * Num2
    break;
  case "/": 
    result = Num1 / Num2
    break;
  default: 
  console.log("Invalid Operator, try again")
  valid = false;
  break;
}

if (valid) {
  console.log(Num1, operator, Num2, "=", result)
}

