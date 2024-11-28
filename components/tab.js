export class Tab {
  constructor() {
    this.htmlElementsMap = new Map();

    this.htmlElement = document.createElement("div");
    this.htmlElement.classList.add("tab-container");

    const nav = document.createElement("nav");
    nav.classList.add("tab-nav");

    this.htmlElement.appendChild(nav);
  }

  add(tabName, htmlElement) {
    const nav = this.htmlElement.querySelector("nav");

    const link = document.createElement("a");

    link.href = "#";
    link.textContent = tabName;
    link.classList.add("tab-link");

    nav.appendChild(link);

    this.htmlElementsMap.set(link, htmlElement);

    link.addEventListener("click", (e) => {
      e.target.parentNode.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
      });

      e.target.classList.add("active");

      const content = this.htmlElementsMap.get(e.target);
      this.htmlElement.parentNode.appendChild(content);
    });
  }

  show(targetElement) {
    this.htmlElement.querySelector(".tab-link").classList.add("active");
    targetElement.appendChild(this.htmlElement);
  }
}
