console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result;

  const inputNumberA = Number(event.target.numberA.value);
  const inputNumberB = Number(event.target.numberB.value);
  const operator = event.target.operator.value;

  if (operator === "addition") {
    result = add(inputNumberA, inputNumberB);
  } else if (operator === "subtraction") {
    result = subtract(inputNumberA, inputNumberB);
  } else if (operator === "multiplication") {
    result = multiply(inputNumberA, inputNumberB);
  } else if (operator === "division") {
    result = divide(inputNumberA, inputNumberB);
  }

  resultOutput.textContent = result;
});
