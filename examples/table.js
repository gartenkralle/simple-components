import { Table } from "/components/table.js";

const headerData = ["Name", "Email", "Salary"];

const response = await fetch("data/customers.json");
const bodyData = await response.json();

const targetElement = document.getElementById("customer-table");

const table = new Table(headerData, bodyData);
table.show(targetElement);
