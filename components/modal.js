export class Modal {
  constructor(targetElement) {
    this.htmlElement = document.createElement("div");
    this.htmlElement.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    this.htmlElement.appendChild(modalContent);

    document.body.appendChild(this.htmlElement);

    targetElement.addEventListener("click", () => {
      this.htmlElement.style.display = "block";
      this.htmlElement.classList.remove("fade-out");
      this.htmlElement.classList.add("fade-in");
    });

    window.addEventListener("click", (e) => {
      if (e.target === this.htmlElement) {
        this.htmlElement.classList.remove("fade-in");
        this.htmlElement.classList.add("fade-out");
      }
    });

    this.htmlElement.addEventListener("animationend", (event) => {
      if (event.animationName === "fadeOut") {
        this.htmlElement.style.display = "none";
        this.htmlElement.classList.remove("fade-out");
      }
    });
  }

  add(htmlElement) {
    this.htmlElement.querySelector(".modal-content").appendChild(htmlElement);
  }
}
