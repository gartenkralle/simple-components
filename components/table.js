export class Table {
  constructor(jsonData, headerData) {
    this.jsonData = jsonData;
    this.headerData = headerData;

    this.htmlElement = document.createElement("div");

    this.htmlElement.innerHTML =
      /*html*/
      `<table>
           <thead></thead>
           <tbody></tbody>
       </table>`;

    this.htmlElement = this.htmlElement.firstChild;

    this.#populateHeaders(this.headerData);
    this.#populateBody(this.jsonData);
  }

  async show(targetElement) {
    targetElement.appendChild(this.htmlElement);
  }

  #populateHeaders(headerData) {
    const tableHead = this.htmlElement.querySelector("thead");
    const headerRow = document.createElement("tr");

    headerData.forEach((headerText) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });

    tableHead.appendChild(headerRow);
  }

  #populateBody(jsonData) {
    const tableBody = this.htmlElement.querySelector("tbody");

    jsonData.forEach((rowData) => {
      const row = document.createElement("tr");

      Object.values(rowData).forEach((cellValue) => {
        const cell = document.createElement("td");
        cell.textContent = cellValue;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });
  }
}
