import "./styles.css";
// import getData from "./modules/data.js";
import view from "./modules/view.js";
import getData from "./modules/data.js";

const form = document.querySelector(".form");
const input = document.getElementById("location");
console.log(input);

input.addEventListener("input", () => {
  view.validateInput(input);
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  view.validateInput(input);

  if (!form.checkValidity()) {
    return;
  }

  const data = await getData(input.value.trim());
  view.displayData(data);
});
