import { loadHtml } from './common.js';

export async function loadTable(element, jsonData){
    let htmlElement = await loadHtml(/*html*/
       `<div>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>

            <style>
                td,
                th {
                padding: 0.4rem;
                }

                th {
                text-align: left;
                }

                button {
                margin: 0.2rem;
                padding: 0.4rem;
                }
            </style>

        </div>`
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
        actionsCell.textContent = item.Actions
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });

    element.appendChild(htmlElement);
}
