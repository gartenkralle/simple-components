# simple-table

![Class diagram](table.png)

## Usage
```
import { loadTable } from "/table.js";

const headerData = ['Name', 'Email', 'Salary'];
const jsonData = await (await fetch('customers.json')).json();
const targetElement = document.getElementById('customers');

await loadTable(jsonData, headerData, targetElement);
```
