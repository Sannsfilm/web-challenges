console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const messages = document.createElement("li");
  messages.classList.add("toast-container__message");

  messages.innerHTML = "here is your message";
  toastContainer.appendChild(messages);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
