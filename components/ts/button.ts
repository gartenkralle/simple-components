export class Button {
  public htmlElement: HTMLButtonElement;

  constructor(text: string) {
    this.htmlElement = document.createElement("button");
    this.htmlElement.innerText = text;
  }

  show(targetElement: HTMLElement): void {
    targetElement.appendChild(this.htmlElement);
  }
}
