console.clear();

const nextButton = document.querySelector('[data-js="next-button"]');
nextButton.addEventListener("click", () => {
  console.log("Go to next question");
});

const prevButton = document.querySelector('[data-js="prev-button"]');
prevButton.addEventListener("click", () => {
  console.log("Go to previous question");
});

// ------------------ 3 & 4 -----------------

const firstChoiceButton = document.querySelector('[data-js="choice-button-1"]');
const secondChoiceButton = document.querySelector(
  '[data-js="choice-button-2"]'
);

firstChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.add("active-choice");
  secondChoiceButton.classList.remove("active-choice");
  console.log("Selected first choice");
});

secondChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.remove("active-choice");
  secondChoiceButton.classList.add("active-choice");
  console.log("Selected second choice");
});
