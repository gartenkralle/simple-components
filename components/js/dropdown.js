export class Dropdown {
    htmlElement;
    button;
    menu;
    items;
    isOpen;
    constructor(text, options) {
        this.htmlElement = document.createElement("div");
        this.htmlElement.className = "dropdown";
        this.htmlElement.setAttribute("aria-expanded", "false");
        const button = document.createElement("button");
        button.className = "dropdown-button";
        button.textContent = text;
        this.htmlElement.appendChild(button);
        const dropdownMenu = document.createElement("div");
        dropdownMenu.className = "dropdown-menu";
        options.forEach((option) => {
            const item = document.createElement("a");
            item.href = "#";
            item.className = "dropdown-item";
            item.textContent = option;
            dropdownMenu.appendChild(item);
        });
        this.htmlElement.appendChild(dropdownMenu);
        this.button = this.htmlElement.querySelector(".dropdown-button");
        this.menu = this.htmlElement.querySelector(".dropdown-menu");
        this.items = this.menu.querySelectorAll(".dropdown-item");
        this.isOpen = false;
        this.addEventListeners();
    }
    show(targetElement) {
        targetElement.appendChild(this.htmlElement);
    }
    addEventListeners() {
        this.button.addEventListener("click", () => this.toggleDropdown());
        document.addEventListener("click", (event) => this.closeDropdownOnOutsideClick(event));
        this.items.forEach((item) => item.addEventListener("click", (e) => this.onItemClick(e)));
    }
    toggleDropdown() {
        this.isOpen = !this.isOpen;
        this.menu.style.display = this.isOpen ? "block" : "none";
        this.button.setAttribute("aria-expanded", this.isOpen.toString());
    }
    closeDropdownOnOutsideClick(event) {
        if (!this.htmlElement.contains(event.target)) {
            this.isOpen = false;
            this.menu.style.display = "none";
            this.button.setAttribute("aria-expanded", "false");
        }
    }
    onItemClick(event) {
        event.preventDefault();
        const selectedItem = event.target.textContent;
        if (selectedItem) {
            this.button.textContent = selectedItem;
        }
        this.toggleDropdown();
    }
}
