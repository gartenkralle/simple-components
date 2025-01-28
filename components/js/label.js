export class Label extends HTMLElement {
    constructor(text) {
        super();

        this.label = document.createElement("label");
        this.label.className = "font-sans block text-sm font-medium leading-6 text-gray-900";
        this.label.textContent = text;

        this.appendChild(this.label);
    }
}

customElements.define("simple-label", Label);