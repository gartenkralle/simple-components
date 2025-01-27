export class Slider extends HTMLElement {
    constructor(text) {
        super();

        this.slider = document.createElement("div");
        this.slider.classList.add("sc-toggle-container");

        this.toggleSwitch = document.createElement("div");
        this.toggleSwitch.id = "toggle-switch";
        this.toggleSwitch.classList.add("sc-toggle-switch");

        this.toggleSwitch.addEventListener('click', () => {
            this.toggleSwitch.classList.toggle('sc-active');
        });

        this.span = document.createElement("span");
        this.span.classList.add("sc-label");
        this.span.textContent = text;

        this.slider.appendChild(this.toggleSwitch);
        this.slider.appendChild(this.span);

        this.appendChild(this.slider);
    }
}

customElements.define("simple-slider", Slider);