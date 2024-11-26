import { Table } from "/components/table.js";

const headerData = ["Name", "Email", "Salary"];
const jsonData = await (await fetch("data/customers.json")).json();
const targetElement = document.getElementById("customer-table");

const table = new Table();
table.load(jsonData, headerData, targetElement);
