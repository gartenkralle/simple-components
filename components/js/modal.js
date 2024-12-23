import { UIElement } from "./base/uielement.js";

export class Modal extends UIElement {
    constructor() {
        super();

        this.htmlElement = document.createElement("div");
        this.htmlElement.classList.add("sc-modal");

        this.modalContent = document.createElement("div");
        this.modalContent.classList.add("sc-modal-content");

        this.htmlElement.appendChild(this.modalContent);
        document.body.appendChild(this.htmlElement);

        this.htmlElement.addEventListener("mousedown", (e) => {
            if (e.target === this.htmlElement) {
                this.hide();
            }
        });

        this.htmlElement.addEventListener("animationend", (e) => {
            if (e.animationName === "fadeOut") {
                this.htmlElement.style.display = "none";
                this.htmlElement.classList.remove("sc-fade-out");
            }
        });
    }

    add(htmlElement) {
        this.modalContent.appendChild(htmlElement);
    }

    connect(sourceElement) {
        sourceElement.addEventListener("click", () => {
            this.show();
        });
    }

    show(){
        this.htmlElement.style.display = "flex";
        this.htmlElement.classList.remove("sc-fade-out");
        this.htmlElement.classList.add("sc-fade-in");
        this.htmlElement.dispatchEvent(new CustomEvent('opened'));
    }

    hide(){
        this.htmlElement.classList.remove("sc-fade-in");
        this.htmlElement.classList.add("sc-fade-out");
        this.htmlElement.dispatchEvent(new CustomEvent('closed'));
    }
}
