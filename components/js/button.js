import { UIElement } from "./uielement.js";

export class Button extends UIElement{
    constructor(text) {
        super();
        
        this.htmlElement = document.createElement("button");
        this.htmlElement.classList.add("sc-button");
        this.htmlElement.innerText = text;
    }
    
    show(targetElement) {
        targetElement.appendChild(this.htmlElement);
    }

    addEventListener(name, action) {
        this.htmlElement.addEventListener(name, (e) => action(e));
    }
}
