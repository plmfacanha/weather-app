import "./styles.css";
import getData from "./modules/data.js";
import { validateInput, displayData } from "./modules/view.js";

const form = document.querySelector(".form");
const input = document.getElementById("location");
console.log(input);

input.addEventListener("input", () => {
  validateInput(input);
});

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    form.reportValidity();
    e.preventDefault();
  }
});
