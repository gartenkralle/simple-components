export class Radiogroup {
    constructor(header) {
        this.htmlElement = document.createElement("fieldset");
        this.htmlElement.classList.add("sc-fieldset");

        const legend = document.createElement("legend");

        if (header !== undefined) {
            legend.textContent = header;
        }

        this.htmlElement.appendChild(legend);
        this.groupName = crypto.randomUUID();
    }

    add(name, value) {
        const container = document.createElement("div");
        container.classList.add("sc-radio-group-item");

        const input = document.createElement("input");
        input.classList.add("sc-input");
        input.type = "radio";
        input.name = this.groupName;
        input.value = value;
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
        const selectedRadio = this.htmlElement.querySelector('input[type="radio"]:checked');

        return selectedRadio ? selectedRadio.value : null;
    }

    show(targetElement) {
        targetElement.appendChild(this.htmlElement);
    }
}
