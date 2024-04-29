console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const succes = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  succes.removeAttribute("hidden");
}

function hideSuccess() {
  succes.setAttribute("hidden", "");
}

hideSuccess();

tosCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  hideTosError();
  if (!tosCheckbox.checked) {
    showTosError();
    return;
  }

  showSuccess();
});
