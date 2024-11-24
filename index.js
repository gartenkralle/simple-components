import { loadJson } from './common.js';
import { loadTable } from './customers.js';

let jsonData = await loadJson('test.json');

loadTable('customers.html', document.getElementById('customers'), jsonData);
loadTable('customers.html', document.getElementById('customers-2'), jsonData);