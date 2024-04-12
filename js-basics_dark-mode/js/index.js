console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkMode = document.querySelector('[data-js="dark-mode-button"]');
const lightMode = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  bodyElement.classList.remove("light");
});

lightMode.addEventListener("click", () => {
  bodyElement.classList.add("light");
  bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
