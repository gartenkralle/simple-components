import { UIElement } from "./base/uielement.js";

export class Slider extends UIElement {
    constructor(text) {
        super();
        this.htmlElement = document.createElement("div");
        this.htmlElement.classList.add("sc-toggle-container");

        const toggleSwitch = document.createElement("div");
        toggleSwitch.id = "toggle-switch";
        toggleSwitch.classList.add("sc-toggle-switch");

        toggleSwitch.addEventListener('click', () => {
            toggleSwitch.classList.toggle('sc-active');
        });

        const span = document.createElement("span");
        span.classList.add("sc-label");
        span.textContent = text;

        this.htmlElement.appendChild(toggleSwitch);
        this.htmlElement.appendChild(span);
    }
}