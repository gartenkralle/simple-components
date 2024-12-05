export class Slider {
    constructor(text) {
        this.htmlElement = document.createElement("div");
        this.htmlElement.classList.add("toggle-container");

        const toggleSwitch = document.createElement("div");
        toggleSwitch.id = "toggle-switch";
        toggleSwitch.classList.add("toggle-switch");

        toggleSwitch.addEventListener('click', () => {
            toggleSwitch.classList.toggle('active');
        });

        const span = document.createElement("span");
        span.classList.add("label");
        span.textContent = text;

        this.htmlElement.appendChild(toggleSwitch);
        this.htmlElement.appendChild(span);

    }

    show(targetElement) {
        targetElement.appendChild(this.htmlElement);
    }
}