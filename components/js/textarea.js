import { UIElement } from "./helper/uielement.js";

export class Textarea extends UIElement {
    constructor() {
        super();

        this.htmlElement = document.createElement("textarea");
        this.htmlElement.classList.add("sc-textarea");
    }

    setPlaceholder(placeholder) {
        this.htmlElement.placeholder = placeholder;
    }

    setRows(rowCount) {
        this.htmlElement.rows = rowCount;
    }

    set(text) {
        this.htmlElement.textContent = text;
    }

    get() {
        return this.htmlElement.textContent;
    }
}
