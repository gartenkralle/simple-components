import { Utils } from "./helper/utils.js";

export class Radiogroup extends HTMLElement {
    constructor(header) {
        super();

        this.radiogroup = document.createElement("fieldset");
        this.radiogroup.classList.add("sc-fieldset");

        if (header !== undefined) {
            const legend = document.createElement("legend");
            legend.classList.add("sc-legend");
            legend.textContent = header;
            this.radiogroup.appendChild(legend);
        }

        this.groupName = Utils.getUId();

        this.appendChild(this.radiogroup);
    }

    add(name) {
        const container = document.createElement("div");
        container.classList.add("sc-radio-group-item");

        const input = document.createElement("input");
        input.classList.add("sc-input");
        input.type = "radio";
        input.name = this.groupName;
        input.id = Utils.getUId();

        const label = document.createElement("label");
        label.classList.add("sc-radio-label");

        label.textContent = name;
        label.setAttribute("for", input.id);

        container.appendChild(input);
        container.appendChild(label);

        this.radiogroup.appendChild(container);
    }

    set(label) {
        const inputElement = Array.from(this.radiogroup.querySelectorAll('label')).find(el => el.textContent.trim() === label).parentElement.querySelector("input");

        inputElement.checked = true;
    }

    get() {
        return this.radiogroup.querySelector('input[type="radio"]:checked')?.parentElement.querySelector("label").textContent;
    }
}

customElements.define("simple-radiogroup", Radiogroup);