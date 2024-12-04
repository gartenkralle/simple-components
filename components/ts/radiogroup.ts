export class Radiogroup {
    public htmlElement: HTMLElement;
  
    constructor(description: string) {
      this.htmlElement = document.createElement("fieldset");
  
      const legend = document.createElement("legend");
      legend.textContent = description;
  
      this.htmlElement.appendChild(legend);
    }
  
    add(name: string, value: string): void {
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
  
    getSelectedItem(): string | null {
      const selectedRadio = this.htmlElement.querySelector<HTMLInputElement>('input[type="radio"]:checked');
      return selectedRadio ? selectedRadio.value : null;
    }
  
    show(targetElement: HTMLElement): void {
      targetElement.appendChild(this.htmlElement);
    }
  }