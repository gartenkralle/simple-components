export class UIElement {    
    hide() {
        this.htmlElement.hidden = true;
    }

    show() {
        this.htmlElement.hidden = false;
    }

    attach(targetElement){
        targetElement.appendChild(this.htmlElement);
    }

    addEventListener(name, action) {
        this.htmlElement.addEventListener(name, (e) => action(e));
    }
}