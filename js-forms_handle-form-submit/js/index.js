console.clear();

const form = document.querySelector('[data-js="form"]');

// add the fungtionality to the form

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  //   add all the form data to the formData object

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data, ", data);

  //   to reset the data in the form

  event.target.reset();

  //   to focus the data in the form

  formElements.firstname.focus();
});
