import { Table } from "/components/table.js";
import { Tab } from "/components/tab.js";

const orderHeaderData = ["Id", "Customer Id", "Order Date", "Shipping Date", "State", "Total Amount", "Payment Method"];
const customerHeaderData = ["Name", "Email", "Salary"];
const addressHeaderData = ["Id", "Customer Id", "Name", "Street", "City", "State", "Postal Code", "Country", "Phone", "Type"];

const orderResponse = await fetch("../data/orders.json");
const orderBodyData = await orderResponse.json();

const customerResponse = await fetch("../data/customers.json");
const customerBodyData = await customerResponse.json();

const addressResponse = await fetch("../data/address.json");
const addressBodyData = await addressResponse.json();

const orderTable = new Table(orderHeaderData, orderBodyData);
const customerTable = new Table(customerHeaderData, customerBodyData);
const addressTable = new Table(addressHeaderData, addressBodyData);

const targetElement = document.querySelector("#tab-example");

const tab = new Tab();

tab.add("Orders", orderTable.htmlElement);
tab.add("Customers", customerTable.htmlElement);
tab.add("Addresses", addressTable.htmlElement);

tab.show(targetElement);
