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
            const target = e.target;
            const parentNode = target.parentNode;
            
            parentNode.querySelectorAll(".active").forEach((element) => {
                element.classList.remove("active");
            });

            target.classList.add("active");
            
            const tabContent = this.htmlElement.querySelector(".tab-content");
            tabContent.replaceChildren();
            
            const content = this.htmlElementsMap.get(target);
            
            if (content) {
                tabContent.appendChild(content);
            }
        });

        const firstTabLink = this.htmlElement.querySelector(".tab-link");
        
        if (firstTabLink) {
            firstTabLink.classList.add("active");
        }
    }

    show(targetElement) {
        const activeLink = this.htmlElement.querySelector(".tab-link.active");
        
        if (activeLink) {
            const content = this.htmlElementsMap.get(activeLink);
            const tabContent = this.htmlElement.querySelector(".tab-content");
            
            if (content) {
                tabContent.appendChild(content);
            }
        }
        
        targetElement.appendChild(this.htmlElement);
    }
}
