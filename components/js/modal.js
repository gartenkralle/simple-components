export class Modal extends HTMLElement {
    constructor() {
        super();

        this.modal = document.createElement("div");
        this.modal.classList.add("sc-modal");

        this.modalContent = document.createElement("div");
        this.modalContent.classList.add("sc-modal-content");

        this.modal.appendChild(this.modalContent);

        this.modal.addEventListener("mousedown", (e) => {
            if (e.target === this.modal) {
                this.hide();
            }
        });

        this.modal.addEventListener("animationend", (e) => {
            if (e.animationName === "fadeIn") {
                this.modal.dispatchEvent(new CustomEvent('shown'));
            }
            else if (e.animationName === "fadeOut") {
                this.modal.style.display = "none";
                this.modal.classList.remove("sc-fade-out");
                this.modal.dispatchEvent(new CustomEvent('hidden'));
            }
        });

        this.appendChild(this.modal);
    }

    add(htmlElement) {
        this.modalContent.appendChild(htmlElement);
    }

    show(){
        this.modal.style.display = "flex";
        this.modal.classList.remove("sc-fade-out");
        this.modal.classList.add("sc-fade-in");
        this.modal.dispatchEvent(new CustomEvent('show'));
    }

    hide(){
        this.modal.classList.remove("sc-fade-in");
        this.modal.classList.add("sc-fade-out");
        this.modal.dispatchEvent(new CustomEvent('hide'));
    }
}

customElements.define("simple-modal", Modal);