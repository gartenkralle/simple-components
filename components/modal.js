export class Modal {
    constructor() {
        this.htmlElement = document.createElement("div");
        this.htmlElement.classList.add("sc-modal");

        const modalContent = document.createElement("div");
        modalContent.classList.add("sc-modal-content");

        this.htmlElement.appendChild(modalContent);
        document.body.appendChild(this.htmlElement);

        window.addEventListener("click", (e) => {
            if (e.target === this.htmlElement) {
                this.htmlElement.classList.remove("sc-fade-in");
                this.htmlElement.classList.add("sc-fade-out");
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
        const modalContent = this.htmlElement.querySelector(".sc-modal-content");

        modalContent.appendChild(htmlElement);
    }

    connect(sourceElement) {
        sourceElement.addEventListener("click", () => {
            this.htmlElement.style.display = "flex";
            this.htmlElement.classList.remove("sc-fade-out");
            this.htmlElement.classList.add("sc-fade-in");
        });
    }
}
