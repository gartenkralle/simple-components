import { Table } from "/components/table.js";
import { Tab } from "/components/tab.js";

const headerData = ["Name", "Email", "Salary"];

const response = await fetch("data/customers.json");
const bodyData = await response.json();

const customerTable = new Table(headerData, bodyData);
const orderTable = new Table(headerData, bodyData);
const addressTable = new Table(headerData, bodyData);

const targetElement = document.getElementById("tab-view");

const tab = new Tab();

tab.add('Customers', customerTable.htmlElement);
tab.add('Orders', orderTable.htmlElement);
tab.add('Addresses', addressTable.htmlElement);

tab.show(targetElement);
