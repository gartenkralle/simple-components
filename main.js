import { loadTable } from "/components/table.js";
{
  const headerData = ["Name", "Email", "Salary"];
  const jsonData = await (await fetch("customers.json")).json();
  const targetElement = document.getElementById("customer-table");

  await loadTable(jsonData, headerData, targetElement);
}

import { loadModal } from "/components/modal.js";
{
  const sourceElement = document.getElementById("text-modal-button");
  const targetElement = document.getElementById("text-modal");

  loadModal(sourceElement, targetElement);
}

{
  const headerData = ["Name", "Email", "Salary"];
  const jsonData = await (await fetch("customers.json")).json();
  const tableModal = document.getElementById("table-modal");
  const tableModalButton = document.getElementById("table-modal-button");

  await loadTable(jsonData, headerData, tableModal);
  loadModal(tableModalButton, tableModal);
}
