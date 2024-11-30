export class Textarea {
  constructor(placeholder) {
    this.htmlElement = document.createElement("textarea");

    this.htmlElement.placeholder = placeholder;
  }

  show(targetElement) {
    targetElement.appendChild(this.htmlElement);
    this.htmlElement.rows = this.#getRowCount(targetElement);
  }

  #getRowCount(targetElement) {
    return targetElement.clientHeight / parseFloat(window.getComputedStyle(this.htmlElement).lineHeight);
  }
}
