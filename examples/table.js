import { Table } from "/components/table.js";

const headerData = ["Name", "Email", "Salary"];
const response = await fetch("data/customers.json");
const jsonData = await response.json();

const targetElement = document.getElementById("customer-table");

const table = new Table(jsonData, headerData);
table.show(targetElement);
