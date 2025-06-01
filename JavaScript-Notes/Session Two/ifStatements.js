const myText = document.getElementById("myText");

const myButton = document.getElementById("myButton");

const resultElement = document.getElementById("resultElement");

let age;

myButton.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = `You are too old`;
  } else if (age == 0) {
    resultElement.textContent = `You were just born`;
  } else if (age >= 18) {
    resultElement.textContent = `You are an adult`;
  } else if (age < 18 && age > 0) {
    resultElement.textContent = `You are still a kid`;
  } else {
    resultElement.textContent = `invalid age`;
  }
};
