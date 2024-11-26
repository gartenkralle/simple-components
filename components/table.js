export class Table {
  constructor() {
    this.table = null;
  }

  async load(jsonData, headerData, targetElement) {
    const template = document.createElement("div");

    template.innerHTML =
      /*html*/
      `<table>
        <thead></thead>
        <tbody></tbody>
      </table>`;

    this.table = template.firstChild;

    this.#populateHeaders(headerData);
    this.#populateBody(jsonData);

    targetElement.appendChild(this.table);
  }

  #populateHeaders(headerData) {
    const tableHead = this.table.querySelector("thead");
    const headerRow = document.createElement("tr");

    headerData.forEach((headerText) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });

    tableHead.appendChild(headerRow);
  }

  #populateBody(jsonData) {
    const tableBody = this.table.querySelector("tbody");

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
