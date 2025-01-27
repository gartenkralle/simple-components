export class Table extends HTMLElement {
    constructor(headerData, bodyData) {
        super();

        this.bodyData = bodyData;
        this.headerData = headerData;
        this.table = document.createElement("table");
        this.table.classList.add("sc-table")

        const header = document.createElement("thead");
        header.classList.add("sc-thead");

        const body = document.createElement("tbody");
        body.classList.add("sc-tbody");

        this.table.appendChild(header);
        this.table.appendChild(body);

        this.populateHeaders(this.headerData);
        this.populateBody(this.bodyData);

        this.appendChild(this.table);
    }

    populateHeaders(headerData) {
        const tableHead = this.table.querySelector("thead");

        const headerRow = document.createElement("tr");

        headerData.forEach((headerText) => {
            const headerCell = document.createElement("th");
            headerCell.classList.add("sc-th");
            headerCell.textContent = headerText;

            headerRow.appendChild(headerCell);
        });

        tableHead.appendChild(headerRow);
    }

    populateBody(jsonData) {
        const tableBody = this.table.querySelector("tbody");

        jsonData.forEach((rowData) => {
            const row = document.createElement("tr");

            Object.values(rowData).forEach((cellValue) => {
                const cell = document.createElement("td");
                cell.classList.add("sc-td");
                cell.textContent = String(cellValue);

                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    }
}

customElements.define("simple-table", Table);

