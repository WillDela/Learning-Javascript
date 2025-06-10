const myCheckBox = document.getElementById("myChckBox");
const maybeBtn = document.getElementById("maybeBtn");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const finalResult = document.getElementById("finalResult");

mySubmit.onclick = function() {
  if(myCheckBox.checked) {
    subResult.textContent = `You `
  }
}