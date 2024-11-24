export async function loadTable(jsonData, headerData, targetElement){
    const tempDiv = document.createElement('div');
        
    tempDiv.innerHTML = /*html*/
       `<table>
            <thead>
            </thead>
            <tbody>
            </tbody>
        </table>`;

    const htmlElement = tempDiv.firstChild;

    const tableHead = htmlElement.querySelector("thead");
    const row = document.createElement("tr");

    headerData.forEach(item => {
        const headerCell = document.createElement("th");
        headerCell.textContent = item;
        row.appendChild(headerCell);

        tableHead.appendChild(row);
    });

    const tableBody = htmlElement.querySelector("tbody");

    jsonData.forEach(item => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.Name;
        row.appendChild(nameCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = item.Email;
        row.appendChild(emailCell);

        const actionsCell = document.createElement("td");
        actionsCell.textContent = item.Actions
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });

    targetElement.appendChild(htmlElement);
}
