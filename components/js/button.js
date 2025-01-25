import { UIElement } from "./base/uielement.js";

export class Button extends HTMLElement {
    constructor(text) {
        super();

        const buttonElement = document.createElement("button");
        buttonElement.classList.add("sc-button");
        buttonElement.innerText = text;

        this.appendChild(buttonElement);
    }
}

customElements.define("simple-button", Button);