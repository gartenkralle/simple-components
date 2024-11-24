import { loadJson } from './common.js';
import { loadTable } from './customers.js';

let jsonData = await loadJson('test.json');

loadTable(document.getElementById('customers'), jsonData);
loadTable(document.getElementById('customers-2'), jsonData);