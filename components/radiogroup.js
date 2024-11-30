export class Radiogroup {
  constructor() {
    this.htmlElement = document.createElement("fieldset");
  }

  add(name, value) {
    const container = document.createElement("div");

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
