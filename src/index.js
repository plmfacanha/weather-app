import "./styles.css";
// import getData from "./modules/data.js";
import validateInput from "./modules/view.js";

const form = document.querySelector(".form");
const input = document.getElementById("location");
console.log(input);

input.addEventListener("input", () => {
  validateInput(input);
});

form.addEventListener("submit", (e) => {
  validateInput(input);

  if (!form.checkValidity()) {
    e.preventDefault();
    form.reportValidity();
  }
});
