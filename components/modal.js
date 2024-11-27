export class Modal {
  constructor() {
    this.htmlElements = [];

    this.htmlElement = document.createElement("div");

    this.htmlElement.innerHTML =
      /*html*/
      `<div class="modal">
           <div class="modal-content">
           </div>
       </div>`;

    this.htmlElement = this.htmlElement.firstChild;
  }

  add(htmlElement) {
    this.htmlElements.push(htmlElement);
  }

  show(sourceElement) {
    const modalContent = this.htmlElement.querySelector(".modal-content");

    this.htmlElements.forEach((htmlElement) => {
      modalContent.appendChild(htmlElement);
    });

    document.body.appendChild(this.htmlElement);

    sourceElement.addEventListener("click", () => {
      if (this.htmlElement) {
        this.htmlElement.style.display = "block";
        this.htmlElement.classList.remove("fade-out");
        this.htmlElement.classList.add("fade-in");
      }
    });
    window.addEventListener("click", (event) => {
      if (event.target === this.htmlElement) {
        if (this.htmlElement) {
          this.htmlElement.classList.remove("fade-in");
          this.htmlElement.classList.add("fade-out");

          this.htmlElement.addEventListener("animationend", this.handleAnimationEnd.bind(this));
        }
      }
    });
  }

  handleAnimationEnd(event) {
    if (event.animationName === "fadeOut") {
      this.htmlElement.style.display = "none";
      this.htmlElement.classList.remove("fade-out");

      this.htmlElement.removeEventListener("animationend", this.handleAnimationEnd.bind(this));
    }
  }
}
