import { loadTable } from "/components/table.js";

const headerData = ["Name", "Email", "Salary"];
const jsonData = await (await fetch("customers.json")).json();
const targetElement = document.getElementById("customer-table");

await loadTable(jsonData, headerData, targetElement);
