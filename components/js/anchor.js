export class Anchor extends HTMLElement {
    constructor(text, href) {
        super();

        this.anchor = document.createElement("a");
        this.anchor.style = `
            font-family: var(--font-family);
            color: var(--primary-color);
            text-decoration-line: none;`;

        this.anchor.addEventListener("mouseenter", function(){
            this.style.textDecorationLine = "underline";
        });

        this.anchor.addEventListener("mouseleave", function(){
            this.style.textDecorationLine = "none";
        });

        this.anchor.textContent = text;
        this.anchor.href = href;

        this.appendChild(this.anchor);
    }
}

customElements.define("simple-anchor", Anchor);