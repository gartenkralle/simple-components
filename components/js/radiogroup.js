import { UIElement } from "./uielement.js";

export class Radiogroup extends UIElement {
    constructor(header) {
        super();

        this.htmlElement = document.createElement("fieldset");
        this.htmlElement.classList.add("sc-fieldset");

        const legend = document.createElement("legend");

        if (header !== undefined) {
            legend.textContent = header;
        }

        this.htmlElement.appendChild(legend);
        this.groupName = crypto.randomUUID();
    }

    add(name) {
        const container = document.createElement("div");
        container.classList.add("sc-radio-group-item");

        const input = document.createElement("input");
        input.classList.add("sc-input");
        input.type = "radio";
        input.name = this.groupName;
        input.id = crypto.randomUUID();

        const label = document.createElement("label");
        label.classList.add("sc-label");

        label.textContent = name;
        label.setAttribute("for", input.id);

        container.appendChild(input);
        container.appendChild(label);

        this.htmlElement.appendChild(container);
    }

    getSelectedItem() {
        return this.htmlElement.querySelector('input[type="radio"]:checked')?.parentElement.querySelector("label").textContent;
    }
}
