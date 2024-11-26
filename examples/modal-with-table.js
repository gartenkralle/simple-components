import { Table } from "/components/table.js";
import { Modal } from "/components/modal.js";

const headerData = ["Name", "Email", "Salary"];
const jsonData = await (await fetch("customers.json")).json();
const targetElement = document.getElementById("table-modal");
const sourceElement = document.getElementById("table-modal-button");

const table = new Table();
table.load(jsonData, headerData, targetElement);

const modal = new Modal();
modal.load(sourceElement, targetElement);
