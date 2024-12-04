export class Textbox {
    public htmlElement: HTMLInputElement;

    constructor() {
        this.htmlElement = document.createElement("input");
        this.htmlElement.type = "text";
    }

    show(targetElement: HTMLElement): void {
        targetElement.appendChild(this.htmlElement);
    }
}
