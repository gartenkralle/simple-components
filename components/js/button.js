import { UIElement } from "./helper/uielement.js";

export class Button extends UIElement{
    constructor(text) {
        super();
        
        this.htmlElement = document.createElement("button");
        this.htmlElement.classList.add("sc-button");
        this.htmlElement.innerText = text;
    }

    addEventListener(name, action) {
        this.htmlElement.addEventListener(name, (e) => action(e));
    }
}
