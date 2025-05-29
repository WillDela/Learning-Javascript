let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof gpa, typeof price, typeof age);
console.log(`You are ${age} years old.`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);

let firstName = "William";
let favoriteFood = "pizza";
let email = "William123@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`William is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

let fullName = "William D";
let ageNow = 19;
let isSchool = true;

document.getElementById("p1").textContent = `Your name is ${fullName} .`;
document.getElementById("p2").textContent = `You are ${ageNow} years old.`;
document.getElementById("p3").textContent = `Enrolled: ${isSchool}`;