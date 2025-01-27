export class Textbox extends HTMLElement {
    constructor() {
        super();

        this.textbox = document.createElement("input");
        this.textbox.classList.add("sc-input");
        this.textbox.type = "text";

        this.appendChild(this.textbox);
    }

    set(text) {
        this.textbox.value = text;
    }

    get() {
        return this.textbox.value;
    }
}

customElements.define("simple-textbox", Textbox);
