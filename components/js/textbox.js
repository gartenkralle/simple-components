export class Textbox extends HTMLElement {
    constructor() {
        super();

        this.textbox = document.createElement("input");
        this.textbox.style = `
            font-family: var(--font-family);
            width: 100%;
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1.5rem;
            padding: 6px 12px 6px 12px;
            color: #333;
            background-color: #fff;
            border-radius: 5px;
            border-width: 0px;
            outline-color: #d1d5db;
            outline-offset: -1px;
            outline-style: solid;
            outline-width: 1px;
            box-sizing: border-box;`;

        this.textbox.addEventListener("focus", function(){
            this.style.outlineColor = "var(--primary-color)";
            this.style.outlineOffset = "-2px";
            this.style.outlineWidth = "2px";

        });

        this.textbox.addEventListener("blur", function(){
            this.style.outlineColor = "#d1d5db";
            this.style.outlineOffset = "-1px";
            this.style.outlineWidth = "1px";
        });

        this.textbox.type = "text";

        this.appendChild(this.textbox);
    }

    set(text) {
        this.textbox.value = text;
    }

    get() {
        return this.textbox.value;
    }
}

customElements.define("simple-textbox", Textbox);
