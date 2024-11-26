import { loadTable } from "/components/table.js";
import { Modal } from "/components/modal.js";

const headerData = ["Name", "Email", "Salary"];
const jsonData = await (await fetch("customers.json")).json();
const tableModal = document.getElementById("table-modal");
const tableModalButton = document.getElementById("table-modal-button");

await loadTable(jsonData, headerData, tableModal);

const modal = new Modal();
modal.load(tableModalButton, tableModal);
