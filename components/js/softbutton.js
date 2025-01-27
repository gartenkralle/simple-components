export class SoftButton extends HTMLElement {
    constructor(text) {
        super();
        
        this.softButton = document.createElement("button");
        this.softButton.classList.add("sc-button");
        this.softButton.innerText = text;

        this.appendChild(this.softButton);
    }
}

customElements.define("simple-softbutton", SoftButton);