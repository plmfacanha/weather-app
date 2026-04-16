import "./styles.css";
import getData from "./modules/data.js";
import displayData from "./modules/view.js";

const data = await getData("Recife");
displayData(data);
