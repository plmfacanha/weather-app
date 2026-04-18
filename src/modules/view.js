const span = document.querySelector(".error-msg");

const validateInput = (input) => {
  if (input.validity.valueMissing || input.value.trim() === "") {
    input.setCustomValidity("This field cannot be empty!");
  } else {
    input.setCustomValidity("");
  }

  if (!input.validity.valid) {
    span.textContent = input.validationMessage;
    span.style.display = "block";
  } else {
    span.textContent = "";
    span.style.display = "";
  }
};

const displayData = (data) => {
  const div = document.querySelector(".weather");
  div.textContent = "";

  Object.entries(data).forEach(([key, value]) => {
    const p = document.createElement("p");
    p.classList.add(`${key}`);
    p.textContent = `${key}: ${value}`;
    div.appendChild(p);
  });

  const temp = document.querySelector(".temp");
  temp.textContent += " F°";
  div.classList.add("weather");
  div.style.display = "block";
};

export default { validateInput, displayData };
