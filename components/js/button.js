export class Button {
    htmlElement;
    constructor(text) {
        this.htmlElement = document.createElement("button");
        this.htmlElement.innerText = text;
    }
    show(targetElement) {
        targetElement.appendChild(this.htmlElement);
    }
}
