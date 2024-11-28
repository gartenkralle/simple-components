export class Modal {
  constructor() {
    this.htmlElements = [];

    this.htmlElement = document.createElement("div");
    this.htmlElement.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    this.htmlElement.appendChild(modalContent);

    // Use an arrow function to define the handleAnimationEnd method
    this.#handleAnimationEnd = (event) => {
      if (event.animationName === "fadeOut") {
        this.htmlElement.style.display = "none";
        this.htmlElement.classList.remove("fade-out");

        this.htmlElement.removeEventListener("animationend", this.#handleAnimationEnd);
      }
    };
  }

  add(htmlElement) {
    this.htmlElements.push(htmlElement);
  }

  connect(sourceElement) {
    const modalContent = this.htmlElement.querySelector(".modal-content");

    this.htmlElements.forEach((htmlElement) => {
      modalContent.appendChild(htmlElement);
    });

    document.body.appendChild(this.htmlElement);

    sourceElement.addEventListener("click", () => {
      this.htmlElement.style.display = "block";
      this.htmlElement.classList.remove("fade-out");
      this.htmlElement.classList.add("fade-in");
    });

    window.addEventListener("click", (e) => {
      if (e.target === this.htmlElement) {
        this.htmlElement.classList.remove("fade-in");
        this.htmlElement.classList.add("fade-out");

        this.htmlElement.addEventListener("animationend", this.#handleAnimationEnd);
      }
    });
  }

  // The arrow function defined in the constructor ensures "this" is always bound correctly
  #handleAnimationEnd;
}
