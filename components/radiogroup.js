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

    const label = document.createElement("label");
    label.textContent = name;

    container.appendChild(input);
    container.appendChild(label);

    this.htmlElement.appendChild(container)
  }

  show(targetElement) {
    targetElement.appendChild(this.htmlElement);
  }
}
