
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "Yellow";


const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "Blue"
});

const element2 = document.getElementById("fruits");
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "Green"

const ulElements2 = document.querySelectorAll("ul");

ulElements2.forEach(ulElement => {
  const lastChild = ulElement.lastElementChild;
  lastChild.style.backgroundColor = "Red"
});