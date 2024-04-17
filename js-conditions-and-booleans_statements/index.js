console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd

const number = 6;

if (number % 2 === 0) {
  console.log("is even number");
} else {
  console.log("odd number");
}
console.log(number);

// or with this versions

// const number = 6;

if (number % 2) {
  console.log("odd number");
} else {
  console.log("is even number");
}
console.log(number);

// Part 3: Hotdogs
const numberOfHotdogs = 4;

if (numberOfHotdogs < 5) {
  console.log("The price to pay: " + numberOfHotdogs * 2 + " euro");
} else if (numberOfHotdogs < 100) {
  console.log("The price to pay: " + numberOfHotdogs * 1.5 + " euro");
} else if (numberOfHotdogs < 1000000) {
  console.log("The price to pay: " + numberOfHotdogs * 1 + " euro");
} else {
  console.log("The price to pay: " + numberOfHotdogs * 0.1 + " euro");
}
console.log();

// Part 4: Daytime
const currentHour = 20;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const CoachName = "Coach";

const greeting = "Hello " + (userName !== CoachName ? "Coach" : userName) + "!";

console.log(greeting);
