import { UIElement } from "./helper/uielement.js";

export class Textarea extends UIElement {
    constructor(placeholder, rowCount) {
        super();

        this.htmlElement = document.createElement("textarea");
        this.htmlElement.classList.add("sc-textarea");

        if (placeholder !== undefined) {
            this.htmlElement.placeholder = placeholder;
        }

        this.htmlElement.rows = rowCount;
    }

    set(text) {
        this.htmlElement.textContent = text;
    }

    get() {
        return this.htmlElement.textContent;
    }
}
