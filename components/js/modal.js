export class Modal extends HTMLElement {
    constructor() {
        super();

        this.classList.add("sc-modal");

        this.modalContent = document.createElement("div");
        this.modalContent.classList.add("sc-modal-content");

        this.appendChild(this.modalContent);

        this.addEventListener("mousedown", (e) => {
            if (e.target === this) {
                this.hide();
            }
        });

        this.addEventListener("animationend", (e) => {
            if (e.animationName === "fadeIn") {
                this.dispatchEvent(new CustomEvent('shown'));
            }
            else if (e.animationName === "fadeOut") {
                this.style.display = "none";
                this.classList.remove("sc-fade-out");
                this.dispatchEvent(new CustomEvent('hidden'));
            }
        });
    }

    add(htmlElement) {
        this.modalContent.appendChild(htmlElement);
    }

    show() {
        this.style.display = "flex";
        this.classList.remove("sc-fade-out");
        this.classList.add("sc-fade-in");
        this.dispatchEvent(new CustomEvent('show'));
    }

    hide() {
        this.classList.remove("sc-fade-in");
        this.classList.add("sc-fade-out");
        this.dispatchEvent(new CustomEvent('hide'));
    }
}

customElements.define("simple-modal", Modal);