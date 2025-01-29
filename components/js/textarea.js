export class Textarea extends HTMLElement {
    constructor() {
        super();

        this.textarea = document.createElement("textarea");
        this.textarea.classList.add("sc-textarea");

        this.appendChild(this.textarea);
    }

    setPlaceholder(placeholder) {
        this.textarea.placeholder = placeholder;
    }

    setRows(rowCount) {
        this.textarea.rows = rowCount;
    }

    set(text) {
        this.textarea.textContent = text;
    }

    get() {
        return this.textarea.value;
    }
}

customElements.define("simple-textarea", Textarea);
