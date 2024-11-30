import { Textarea } from "/components/textarea.js";

const placeholder = "This is a placeholder";

const textarea = new Textarea(placeholder);

const targetElement = document.querySelector("#textarea-example");

textarea.show(targetElement);
