const prompt = require("prompt-sync")()

let age = (prompt("How old are you? "));
age = Number(age);

age += 1;
console.log(`Happy Birthday! You are now ${age} years old`);
