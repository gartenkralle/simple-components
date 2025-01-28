export class Anchor extends HTMLElement {
    constructor(text, href) {
        super();

        this.anchor = document.createElement("a");
        this.anchor.className = "font-sans text-sky-600 no-underline hover:underline";
        this.anchor.textContent = text;
        this.anchor.href = href;

        this.appendChild(this.anchor);
    }
}

customElements.define("simple-anchor", Anchor);