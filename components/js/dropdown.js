export class Dropdown extends HTMLElement {
    constructor(options) {
        super();

        this.dropdown = document.createElement("div");
        this.dropdown.className = "sc-dropdown";
        this.dropdown.setAttribute("aria-expanded", "false");

        this.button = document.createElement("button");
        this.button.className = "sc-dropdown-button";

        this.dropdown.appendChild(this.button);

        this.dropdownMenu = document.createElement("div");
        this.dropdownMenu.className = "sc-dropdown-menu";

        options.forEach((option) => {
            const item = document.createElement("a");
            item.href = "#";
            item.className = "sc-dropdown-item";
            item.textContent = option;

            this.dropdownMenu.appendChild(item);
        });

        this.dropdown.appendChild(this.dropdownMenu);

        this.button = this.dropdown.querySelector(".sc-dropdown-button");
        this.menu = this.dropdown.querySelector(".sc-dropdown-menu");
        this.items = this.menu.querySelectorAll(".sc-dropdown-item");
        this.isOpen = false;

        this.#addEventListeners();

        this.appendChild(this.dropdown);
    }

    focus() {
        this.button.focus();
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
        return this.button.textContent;
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