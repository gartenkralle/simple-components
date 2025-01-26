import { UIElement } from "./base/uielement.js";

export class Dropdown extends HTMLElement {
    constructor(options) {
        super();

        const htmlElement = document.createElement("div");
        htmlElement.className = "sc-dropdown";
        htmlElement.setAttribute("aria-expanded", "false");

        const button = document.createElement("button");
        button.className = "sc-dropdown-button";

        htmlElement.appendChild(button);

        const dropdownMenu = document.createElement("div");
        dropdownMenu.className = "sc-dropdown-menu";

        options.forEach((option) => {
            const item = document.createElement("a");
            item.href = "#";
            item.className = "sc-dropdown-item";
            item.textContent = option;
            dropdownMenu.appendChild(item);
        });

        htmlElement.appendChild(dropdownMenu);

        this.button = htmlElement.querySelector(".sc-dropdown-button");
        this.menu = htmlElement.querySelector(".sc-dropdown-menu");
        this.items = this.menu.querySelectorAll(".sc-dropdown-item");
        this.isOpen = false;

        this.#addEventListeners();

        this.appendChild(htmlElement);
    }

    focus() {
        this.querySelector(".sc-dropdown-button").focus();
    }
    
    addEventListener(name, action) {
        this.items.forEach((item) => item.addEventListener(name, (e) => action(e)));
    }

    set(text) {
        const item = Array.from(this.items).find(item => item.textContent === text);
        item.dispatchEvent(new CustomEvent('change'));

        this.button.textContent = text;
    }

    get() {
        return this.querySelector(".sc-dropdown-button").textContent;
    }

    setPlaceholder(placeholder) {        
        this.button.textContent = placeholder;
    }

    #addEventListeners() {
        this.button.addEventListener("click", () => this.#toggleDropdown());
        document.addEventListener("click", (e) => this.#closeDropdownOnOutsideClick(e));
        this.items.forEach((item) => item.addEventListener("click", (e) => this.#onItemClick(e)));
    }

    #toggleDropdown() {
        this.isOpen = !this.isOpen;
        this.menu.style.display = this.isOpen ? "block" : "none";
        this.button.setAttribute("aria-expanded", this.isOpen.toString());
    }

    #closeDropdownOnOutsideClick(event) {
        if (!this.contains(event.target)) {
            this.isOpen = false;
            this.menu.style.display = "none";
            this.button.setAttribute("aria-expanded", "false");
        }
    }

    #onItemClick(e) {
        e.preventDefault();

        this.button.textContent = e.target.textContent;

        this.#toggleDropdown();

        e.target.dispatchEvent(new CustomEvent('change'));
    }
}

customElements.define("simple-dropdown", Dropdown);