import { UIElement } from "./uielement.js";

export class Textarea extends UIElement {
    constructor(placeholder) {
        super();
        
        this.htmlElement = document.createElement("textarea");
        this.htmlElement.classList.add("sc-textarea");

        if (placeholder !== undefined) {
            this.htmlElement.placeholder = placeholder;
        }
    }

    show(targetElement) {
        this.htmlElement.hidden = false;

        targetElement.appendChild(this.htmlElement);

        this.htmlElement.rows = this.getRowCount(targetElement);
    }

    getRowCount(targetElement) {
        const lineHeight = parseFloat(window.getComputedStyle(this.htmlElement).lineHeight || "0");

        return Math.floor(targetElement.clientHeight / lineHeight);
    }
}
