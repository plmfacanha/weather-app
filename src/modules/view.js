const span = document.querySelector(".error-msg");

const validateInput = (input) => {
  if (input.validity.valueMissing || input.value.trim() === "") {
    // treat as empty
    input.setCustomValidity("Yo! This field cannot be empty!");
    span.textContent = input.validationMessage;
    span.style.display = "block";
  } else {
    input.setCustomValidity("");
    span.textContent = "";
    span.style.display = "";
  }
};

export default validateInput;
