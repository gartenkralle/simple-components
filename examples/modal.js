import { Button } from "/components/button.js";
import { Table } from "/components/table.js";
import { Modal } from "/components/modal.js";

const headerData = ["Name", "Email", "Salary"];

const response = await fetch("data/customers.json");
const bodyData = await response.json();

const sourceElement = new Button("Show Modal");
const targetElement = document.querySelector("#modal-example")

sourceElement.show(targetElement);

const table = new Table(headerData, bodyData);
const modal = new Modal();

const button = new Button("Button inside modal");

modal.add(table.htmlElement);
modal.add(button.htmlElement);

modal.connect(sourceElement.htmlElement);
