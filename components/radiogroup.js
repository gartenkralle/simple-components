export class Radiogroup {
    constructor(description) {
        this.htmlElement = document.createElement("fieldset");
        
        const legend = document.createElement("legend");
        legend.textContent = description;

        this.htmlElement.appendChild(legend);
    }

    add(name, value) {
        const container = document.createElement("div");        
        container.classList.add("radio-group-item");
        
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "single-group";
        input.value = value;
        input.id = value;
        
        const label = document.createElement("label");
        label.textContent = name;
        label.setAttribute("for", value);
        
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
