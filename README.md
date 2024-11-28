# simple-components

## Table

![Class diagram](images/table.png)

```javascript
import { Table } from "/components/table.js";

const headerData = ["Name", "Email", "Salary"];

const response = await fetch("data/customers.json");
const bodyData = await response.json();

const targetElement = document.getElementById("customer-table");

const table = new Table(bodyData, headerData);
table.show(targetElement);
```

## Modal

![Class diagram](images/modal-2.png)

```javascript
import { Table } from "/components/table.js";
import { Modal } from "/components/modal.js";

const headerData = ["Name", "Email", "Salary"];

const response = await fetch("data/customers.json");
const bodyData = await response.json();

const sourceElement = document.getElementById("modal-button");

const table = new Table(headerData, bodyData);
const modal = new Modal();

const button = document.createElement("button");
button.innerText = "Button inside modal";

modal.add(table.htmlElement);
modal.add(button);

modal.connect(sourceElement);
```

## CDN

### JS

[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/table.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/table.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/modal.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/modal.js)

### CSS

[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/table.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/table.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/modal.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/modal.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/button.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@1.0.6/components/button.css)
