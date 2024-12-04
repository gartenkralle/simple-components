export class Textarea {
    htmlElement;
    constructor(placeholder) {
        this.htmlElement = document.createElement("textarea");
        this.htmlElement.placeholder = placeholder;
    }
    show(targetElement) {
        targetElement.appendChild(this.htmlElement);
        this.htmlElement.rows = this.getRowCount(targetElement);
    }
    getRowCount(targetElement) {
        const lineHeight = parseFloat(window.getComputedStyle(this.htmlElement).lineHeight || "0");
        return Math.floor(targetElement.clientHeight / lineHeight);
    }
}
