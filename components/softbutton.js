export class SoftButton {
    constructor(text) {
        this.htmlElement = document.createElement("button");
        this.htmlElement.classList.add("sc-button");
        this.htmlElement.innerText = text;
    }
    
    show(targetElement) {
        targetElement.appendChild(this.htmlElement);
    }
}
