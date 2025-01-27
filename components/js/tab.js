export class Tab extends HTMLElement {
    constructor() {
        super();
        
        this.htmlElementsMap = new Map();

        this.tab = document.createElement("div");
        this.tab.classList.add("sc-tab-container");
        
        this.nav = document.createElement("nav");
        this.nav.classList.add("sc-tab-nav");
        
        this.tabContent = document.createElement("div");
        this.tabContent.classList.add("sc-tab-content");
        
        this.tab.appendChild(this.nav);
        this.tab.appendChild(this.tabContent);

        this.appendChild(this.tab);
    }

    add(tabName, htmlElement) {
        const link = document.createElement("a");
        
        link.href = "#";
        link.textContent = tabName;
        link.classList.add("sc-tab-link");
        
        this.nav.appendChild(link);
        
        this.htmlElementsMap.set(link, htmlElement);
        
        link.addEventListener("click", (e) => {
            const target = e.target;
            const parentNode = target.parentNode;
            
            parentNode.querySelectorAll(".sc-active").forEach((element) => {
                element.classList.remove("sc-active");
            });

            target.classList.add("sc-active");
            
            this.tabContent.replaceChildren();
            
            const content = this.htmlElementsMap.get(target);
            this.tabContent.appendChild(content);
        });

        const firstTabLink = this.tab.querySelector(".sc-tab-link");
        
        if (firstTabLink) {
            firstTabLink.classList.add("sc-active");
        }

        const activeLink = this.tab.querySelector(".sc-tab-link.sc-active");
        
        if (activeLink) {
            const content = this.htmlElementsMap.get(activeLink);
            
            if (content) {
                this.tabContent.appendChild(content);
            }
        }
    }
}

customElements.define("simple-tab", Tab);