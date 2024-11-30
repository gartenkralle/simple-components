import { Button } from "/components/button.js";

const button = new Button("Button example");

const targetElement = document.querySelector("#button-example");

button.show(targetElement);
