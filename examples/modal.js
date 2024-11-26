import { Modal } from "/components/modal.js";

const sourceElement = document.getElementById("text-modal-button");
const targetElement = document.getElementById("text-modal");

const modal = new Modal();
modal.load(sourceElement, targetElement);
