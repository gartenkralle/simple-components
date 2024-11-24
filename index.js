import { loadTable } from "./table.js";

const jsonData = await (await fetch('test.json')).json();

await loadTable(document.getElementById('customers'), jsonData);
await loadTable(document.getElementById('customers-2'), jsonData);
