async function loadTable(element, jsonData){    
    const tempDiv = document.createElement('div');
        
    tempDiv.innerHTML = /*html*/
       `<table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>`;

    const htmlElement = tempDiv.firstChild;

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

    element.appendChild(htmlElement);
}
