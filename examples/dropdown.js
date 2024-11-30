import { Dropdown } from "/components/dropdown.js";

const options = ["Option 1", "Option 2", "Option 3"];

const dropdown = new Dropdown(options);
const targetElement = document.querySelector("#dropdown-example");

dropdown.show(targetElement);
