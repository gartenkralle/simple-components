import { UIElement } from "./base/uielement.js";

export class SoftButton extends UIElement {
    constructor(text) {
        super();
        
        this.htmlElement = document.createElement("button");
        this.htmlElement.classList.add("sc-button");
        this.htmlElement.innerText = text;
    }
}
