console.clear();

const form = document.querySelector('[data-js="form"]');
const inputFirstName = document.querySelector('[data-js="firstName"]');
const inputLastName = document.querySelector('[data-js="lastName"]');
const generateEmailButton = document.querySelector(
  '[data-js="generateButton"]'
);
const generateEmailAppear = document.querySelector(
  '[data-js="generated-email"]'
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

inputFirstName.addEventListener("input", (event) => {
  console.log(event.target.value);
});

inputLastName.addEventListener("input", (event) => {
  console.log(event.target.value);
});

generateEmailButton.addEventListener("click", (event) => {
  const firstName = inputFirstName.value;
  const lastName = inputLastName.value;
  const email = generateEmail(firstName, lastName);
  generateEmailAppear.textContent = email;
});

function generateEmail(firstName, lastName) {
  const domain = "@gmail.com";
  const email = `${firstName.toLowerCase()}${lastName.toLowerCase()}${domain}`;
  return email;
}
