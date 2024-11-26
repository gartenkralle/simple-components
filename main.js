import { loadTable } from "/components/table.js";

const headerData = ["Name", "Email", "Salary"];
const jsonData = await (await fetch("customers.json")).json();
const targetElement = document.getElementById("customers");

await loadTable(jsonData, headerData, targetElement);

import { loadModal } from "/components/modal.js";

const sourceElement = document.getElementById("modalButton");

loadModal(sourceElement);
