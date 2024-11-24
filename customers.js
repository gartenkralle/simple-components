import { loadHtml } from './common.js';

export async function loadTable(element, jsonData){
    let htmlElement = await loadHtml(/*html*/
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
        </table>`
    );

    const tableBody = htmlElement.querySelector("tbody");
        
    tableBody.innerHTML = '';

    jsonData.forEach(item => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.Name;
        row.appendChild(nameCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = item.Email;
        row.appendChild(emailCell);

        const actionsCell = document.createElement("td");
        item.Actions.forEach(action => {
            const button = document.createElement("button");
            button.textContent = action;
            button.classList.add(action.toLowerCase());
            actionsCell.appendChild(button);
        });
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });

    element.appendChild(htmlElement);
}
