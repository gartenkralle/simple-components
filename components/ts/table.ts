export class Table {
    public htmlElement: HTMLTableElement;

    private bodyData: Record<string, any>[];
    private headerData: string[];

    constructor(headerData: string[], bodyData: Record<string, any>[]) {
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

    async show(targetElement: HTMLElement): Promise<void> {
        targetElement.appendChild(this.htmlElement);
    }

    private populateHeaders(headerData: string[]): void {
        const tableHead = this.htmlElement.querySelector("thead");
        if (!tableHead) return;

        const headerRow = document.createElement("tr");

        headerData.forEach((headerText) => {
            const headerCell = document.createElement("th");
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });

        tableHead.appendChild(headerRow);
    }

    private populateBody(jsonData: Record<string, any>[]): void {
        const tableBody = this.htmlElement.querySelector("tbody");
        if (!tableBody) return;

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
