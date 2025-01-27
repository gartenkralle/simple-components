export class Button extends HTMLElement {
    constructor(text) {
        super();

        this.buttonElement = document.createElement("button");
        this.buttonElement.classList.add("sc-button");
        this.buttonElement.innerText = text;

        this.appendChild(this.buttonElement);
    }
}

customElements.define("simple-button", Button);