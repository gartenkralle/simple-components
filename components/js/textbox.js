import { UIElement } from "./uielement.js";

export class Textbox extends UIElement {
    constructor() {
        super();

        this.htmlElement = document.createElement("input");
        this.htmlElement.classList.add("sc-input");
        this.htmlElement.type = "text";
    }
}
