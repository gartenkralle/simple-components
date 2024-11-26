import { Table } from "/components/table.js";
import { Modal } from "/components/modal.js";

const headerData = ["Name", "Email", "Salary"];
const jsonData = await (await fetch("customers.json")).json();
const tableModal = document.getElementById("table-modal");
const tableModalButton = document.getElementById("table-modal-button");

const table = new Table();
table.load(jsonData, headerData, tableModal);

const modal = new Modal();
modal.load(tableModalButton, tableModal);
