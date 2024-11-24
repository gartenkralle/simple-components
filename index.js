import { loadJson } from './common.js';
import { loadTable } from './customers.js';

let jsonData = await loadJson('test.json');

loadTable('customers.html', 'customers', jsonData);
loadTable('customers.html', 'customers-2', jsonData);