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
}