import { UIElement } from "./helper/uielement.js";

export class Tab extends UIElement{
    constructor() {
        super();
        
        this.htmlElementsMap = new Map();

        this.htmlElement = document.createElement("div");
        this.htmlElement.classList.add("sc-tab-container");
        
        const nav = document.createElement("nav");
        nav.classList.add("sc-tab-nav");
        
        const content = document.createElement("div");
        content.classList.add("sc-tab-content");
        
        this.htmlElement.appendChild(nav);
        this.htmlElement.appendChild(content);
    }

    add(tabName, htmlElement) {
        const nav = this.htmlElement.querySelector("nav");
        const link = document.createElement("a");
        
        link.href = "#";
        link.textContent = tabName;
        link.classList.add("sc-tab-link");
        
        nav.appendChild(link);
        
        this.htmlElementsMap.set(link, htmlElement);
        
        link.addEventListener("click", (e) => {
            const target = e.target;
            const parentNode = target.parentNode;
            
            parentNode.querySelectorAll(".sc-active").forEach((element) => {
                element.classList.remove("sc-active");
            });

            target.classList.add("sc-active");
            
            const tabContent = this.htmlElement.querySelector(".sc-tab-content");
            tabContent.replaceChildren();
            
            const content = this.htmlElementsMap.get(target);
            tabContent.appendChild(content);
        });

        const firstTabLink = this.htmlElement.querySelector(".sc-tab-link");
        
        if (firstTabLink) {
            firstTabLink.classList.add("sc-active");
        }
    }

    attach(targetElement) {
        const activeLink = this.htmlElement.querySelector(".sc-tab-link.sc-active");
        
        if (activeLink) {
            const content = this.htmlElementsMap.get(activeLink);
            const tabContent = this.htmlElement.querySelector(".sc-tab-content");
            
            if (content) {
                tabContent.appendChild(content);
            }
        }
        
        super.attach(targetElement);
    }
}
