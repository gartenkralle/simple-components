export class Dropdown {
  public htmlElement: HTMLElement;

  private button: HTMLElement;
  private menu: HTMLElement;
  private items: NodeListOf<HTMLElement>;
  private isOpen: boolean;

  constructor(text: string, options: string[]) {
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

    this.button = this.htmlElement.querySelector(".dropdown-button") as HTMLElement;
    this.menu = this.htmlElement.querySelector(".dropdown-menu") as HTMLElement;
    this.items = this.menu.querySelectorAll(".dropdown-item") as NodeListOf<HTMLElement>;
    this.isOpen = false;

    this.addEventListeners();
  }

  show(targetElement: HTMLElement): void {
    targetElement.appendChild(this.htmlElement);
  }

  private addEventListeners(): void {
    this.button.addEventListener("click", () => this.toggleDropdown());
    document.addEventListener("click", (event) => this.closeDropdownOnOutsideClick(event));
    this.items.forEach((item) => item.addEventListener("click", (e) => this.onItemClick(e)));
  }

  private toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    this.menu.style.display = this.isOpen ? "block" : "none";
    this.button.setAttribute("aria-expanded", this.isOpen.toString());
  }

  private closeDropdownOnOutsideClick(event: MouseEvent): void {
    if (!this.htmlElement.contains(event.target as Node)) {
      this.isOpen = false;
      this.menu.style.display = "none";
      this.button.setAttribute("aria-expanded", "false");
    }
  }

  private onItemClick(event: MouseEvent): void {
    event.preventDefault();
    const selectedItem = (event.target as HTMLElement).textContent;
    if (selectedItem) {
      this.button.textContent = selectedItem;
    }
    this.toggleDropdown();
  }
}
