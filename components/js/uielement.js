export class UIElement {
    hide() {
        this.htmlElement.hidden = true;
    }

    show(targetElement) {
        this.htmlElement.hidden = false;
        targetElement.appendChild(this.htmlElement);
    }
}