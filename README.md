[![](https://data.jsdelivr.com/v1/package/gh/gartenkralle/simple-components/badge?style=rounded)](https://www.jsdelivr.com/package/gh/gartenkralle/simple-components)

# simple-components

## Button

![Class diagram](images/button.png)

```javascript
import { Button } from "/components/js/button.js";

const button = new Button("Button example");

const targetElement = document.querySelector("#button-example");

targetElement.appendChild(button);
```

## SoftButton

![Class diagram](images/softbutton.png)

```javascript
import { SoftButton } from "/components/js/softbutton.js";

const button = new SoftButton("Softbutton example");

const targetElement = document.querySelector("#softbutton-example");

targetElement.appendChild(button);
```

## Table

![Class diagram](images/table.png)

```javascript
import { Table } from "/components/js/table.js";

const headerData = ["Name", "Email", "Salary"];

const response = await fetch("/data/customers.json");
const bodyData = await response.json();

const targetElement = document.querySelector("#table-example");

const table = new Table(headerData, bodyData);

targetElement.appendChild(table);
```

## Modal

![Class diagram](images/modal.png)

```javascript
import { Button } from "/components/js/button.js";
import { Table } from "/components/js/table.js";
import { Modal } from "/components/js/modal.js";

const headerData = ["Name", "Email", "Salary"];

const response = await fetch("/data/customers.json");
const bodyData = await response.json();

const button = new Button("Show Modal");
const targetElement = document.querySelector("#modal-example");

targetElement.appendChild(button);

const table = new Table(headerData, bodyData);
const modal = new Modal();

const otherButton = new Button("Button inside modal");

modal.add(table);
modal.add(otherButton);

button.addEventListener("click", () => {
    modal.show();
});

document.body.appendChild(modal);
```

## Tab

![Class diagram](images/tab.png)

```javascript
import { Table } from "/components/js/table.js";
import { Tab } from "/components/js/tab.js";

const orderHeaderData = ["Id", "Customer Id", "Order Date", "Shipping Date", "State", "Total Amount", "Payment Method"];
const customerHeaderData = ["Name", "Email", "Salary"];
const addressHeaderData = ["Id", "Customer Id", "Name", "Street", "City", "State", "Postal Code", "Country", "Type"];

const orderResponse = await fetch("/data/orders.json");
const orderBodyData = await orderResponse.json();

const customerResponse = await fetch("/data/customers.json");
const customerBodyData = await customerResponse.json();

const addressResponse = await fetch("/data/address.json");
const addressBodyData = await addressResponse.json();

const orderTable = new Table(orderHeaderData, orderBodyData);
const customerTable = new Table(customerHeaderData, customerBodyData);
const addressTable = new Table(addressHeaderData, addressBodyData);

const targetElement = document.querySelector("#tab-example");

const tab = new Tab();

tab.add("Orders", orderTable);
tab.add("Customers", customerTable);
tab.add("Addresses", addressTable);

targetElement.appendChild(tab);
```

## Dropdown

![Class diagram](images/dropdown.png)

```javascript
import { Dropdown } from "/components/js/dropdown.js";

const dropdown = new Dropdown(["Option 1", "Option 2", "Option 3"]);
dropdown.setPlaceholder("Select an option");

const targetElement = document.querySelector("#dropdown-example");

targetElement.appendChild(dropdown);

dropdown.addEventListener("change", (e) => {
    console.log(e.target.text);
});

dropdown.set("Option 2");  
```

## Textarea

![Class diagram](images/textarea.png)

```javascript
import { Textarea } from "/components/js/textarea.js";

const textarea = new Textarea();
textarea.setPlaceholder("This is a placeholder");
textarea.setRows(10);

const targetElement = document.querySelector("#textarea-example");

targetElement.appendChild(textarea);
```

## Radiogroup

![Class diagram](images/radiogroup.png)

```javascript
import { Radiogroup } from "/components/js/radiogroup.js";
import { Button } from "/components/js/button.js";

const radiogroup = new Radiogroup("Which option do you want to choose?");

radiogroup.add("Option 1");
radiogroup.add("Option 2");
radiogroup.add("Option 3");

const targetElement = document.querySelector("#radiogroup-example");

const button = new Button("Save");

targetElement.appendChild(radiogroup);
targetElement.appendChild(button);

button.addEventListener("click", () => {
    console.log(radiogroup.get());
});
```

## Textbox

![Class diagram](images/textbox.png)

```javascript
import { Textbox } from "/components/js/textbox.js";

const textbox = new Textbox();

const targetElement = document.querySelector("#textbox-example");

targetElement.appendChild(textbox);
```

## Slider

![Class diagram](images/slider.png)

```javascript
import { Slider } from "/components/js/slider.js";

const slider = new Slider("Slider label");

const targetElement = document.querySelector("#slider-example");

targetElement.appendChild(slider);
```

## Label

![Class diagram](images/label.png)

```javascript
import { Label } from "/components/js/label.js";

const label = new Label("This is a label text");

document.body.appendChild(label);
```
## CDN

### JS

[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/button.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/button.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/softbutton.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/softbutton.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/dropdown.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/dropdown.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/table.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/table.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/modal.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/modal.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/tab.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/tab.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/textarea.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/textarea.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/radiogroup.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/radiogroup.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/textbox.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/textbox.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/slider.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/slider.js)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/label.js](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/js/label.js)

### CSS

[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/button.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/button.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/softbutton.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/softbutton.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/dropdown.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/dropdown.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/table.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/table.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/modal.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/modal.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/tab.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/tab.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/textarea.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/textarea.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/radiogroup.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/radiogroup.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/textbox.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/textbox.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/slider.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/slider.css)
[https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/label.css](https://cdn.jsdelivr.net/gh/gartenkralle/simple-components@2.0.1/components/css/label.css)
