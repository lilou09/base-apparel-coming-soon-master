const submit = document.querySelector(".submit");
const error = document.querySelector(".error");
const form = document.querySelector("form");
const input = document.querySelector("input");

const validate = (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();
  if (!isEmail(inputValue)) {
    error.style.opacity = "1";
  } else {
    error.style.opacity = "0";
  }
};

const isEmail = (input) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    input
  );
};

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);
