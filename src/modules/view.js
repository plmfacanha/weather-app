const validateInput = (input) => {
  if (input.validity.valueMissing) {
    input.setCustomValidity("You need to type something!");
  } else if (input.value.trim() === "") {
    input.setCustomValidity("Cannot be only spaces!");
  } else {
    input.setCustomValidity("");
  }
};

export default { displayData, validateInput };
