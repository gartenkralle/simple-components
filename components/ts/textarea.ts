export class Textarea {
    public htmlElement: HTMLTextAreaElement;

    constructor(placeholder: string) {
        this.htmlElement = document.createElement("textarea");
        this.htmlElement.placeholder = placeholder;
    }

    public show(targetElement: HTMLElement): void {
        targetElement.appendChild(this.htmlElement);
        this.htmlElement.rows = this.getRowCount(targetElement);
    }

    private getRowCount(targetElement: HTMLElement): number {
        const lineHeight = parseFloat(window.getComputedStyle(this.htmlElement).lineHeight || "0");
        return Math.floor(targetElement.clientHeight / lineHeight);
    }
}
