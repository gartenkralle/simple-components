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

        window.addEventListener("mousedown", (e) => {
            if (e.target === this.htmlElement) {
                this.htmlElement.classList.remove("sc-fade-in");
                this.htmlElement.classList.add("sc-fade-out");
                this.htmlElement.dispatchEvent(new CustomEvent('closed'));
                history.back();
            }
        });

        window.addEventListener("popstate", () => {
            const modal = document.querySelector(".sc-modal");

            if (modal !== undefined) {
                modal.classList.remove("sc-fade-in");
                modal.classList.add("sc-fade-out");
                modal.dispatchEvent(new CustomEvent('closed'));
            }
        });

        this.htmlElement.addEventListener("animationend", (event) => {
            if (event.animationName === "fadeOut") {
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
            this.htmlElement.style.display = "flex";
            this.htmlElement.classList.remove("sc-fade-out");
            this.htmlElement.classList.add("sc-fade-in");
            this.htmlElement.dispatchEvent(new CustomEvent('opened'));

            history.pushState({ open: true }, null);
        });
    }
}
