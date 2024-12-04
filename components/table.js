export class Table {
    constructor(headerData, bodyData) {
        this.bodyData = bodyData;
        this.headerData = headerData;
        this.htmlElement = document.createElement("table");
        
        const header = document.createElement("thead");
        const body = document.createElement("tbody");
        
        this.htmlElement.appendChild(header);
        this.htmlElement.appendChild(body);
        
        this.populateHeaders(this.headerData);
        this.populateBody(this.bodyData);
    }

    async show(targetElement) {
        targetElement.appendChild(this.htmlElement);
    }

    populateHeaders(headerData) {
        const tableHead = this.htmlElement.querySelector("thead");

        const headerRow = document.createElement("tr");
        
        headerData.forEach((headerText) => {
            const headerCell = document.createElement("th");
            headerCell.textContent = headerText;

            headerRow.appendChild(headerCell);
        });

        tableHead.appendChild(headerRow);
    }

    populateBody(jsonData) {
        const tableBody = this.htmlElement.querySelector("tbody");

        jsonData.forEach((rowData) => {
            const row = document.createElement("tr");
            
            Object.values(rowData).forEach((cellValue) => {
                const cell = document.createElement("td");
                cell.textContent = String(cellValue);

                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    }
}
