export class Textbox {
    constructor() {
        this.htmlElement = document.createElement("input");
        this.htmlElement.type = "text";
    }
    
    show(targetElement) {
        targetElement.appendChild(this.htmlElement);
    }
}
