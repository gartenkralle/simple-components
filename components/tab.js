export class Tab {
  constructor() {
    this.htmlElementsMap = new Map();

    this.htmlElement = document.createElement("div");
    this.htmlElement.classList.add("tab-container");

    const nav = document.createElement("nav");
    nav.classList.add("tab-nav");

    const content = document.createElement("div");
    content.classList.add("tab-content");

    this.htmlElement.appendChild(nav);
    this.htmlElement.appendChild(content);
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

      this.htmlElement.querySelector(".tab-content").replaceChildren();

      const content = this.htmlElementsMap.get(e.target);
      this.htmlElement.querySelector(".tab-content").appendChild(content);
    });

    this.htmlElement.querySelector(".tab-link").classList.add("active");
  }

  show(targetElement) {
    const activeLink = this.htmlElement.querySelector(".tab-link.active");
    const content = this.htmlElementsMap.get(activeLink);
    
    this.htmlElement.querySelector(".tab-content").appendChild(content);

    targetElement.appendChild(this.htmlElement);
  }
}
