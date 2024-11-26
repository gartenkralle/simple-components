export class Modal {
  constructor() {
    this.modal = null;
  }

  load(sourceElement, targetElement) {
    const template = document.createElement("div");

    template.innerHTML =
      /*html*/
      `<div class="modal">
           <div class="modal-content">
           </div>
         </div>`;

    this.modal = template.firstChild;

    this.modal.querySelector(".modal-content").innerHTML = targetElement.innerHTML;
    targetElement.innerHTML = "";

    targetElement.appendChild(this.modal);

    sourceElement.addEventListener("click", () => this.show());
    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.close();
      }
    });
  }

  show() {
    if (this.modal) {
      this.modal.style.display = "block";
      this.modal.classList.remove("fade-out");
      this.modal.classList.add("fade-in");
    }
  }

  close() {
    if (this.modal) {
      this.modal.classList.remove("fade-in");
      this.modal.classList.add("fade-out");

      this.modal.addEventListener("animationend", this.handleAnimationEnd.bind(this));
    }
  }

  handleAnimationEnd(event) {
    if (event.animationName === "fadeOut") {
      this.modal.style.display = "none";
      this.modal.classList.remove("fade-out");

      this.modal.removeEventListener("animationend", this.handleAnimationEnd.bind(this));
    }
  }
}
