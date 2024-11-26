export async function loadTable(jsonData, headerData, targetElement) {
  const template = document.createElement("div");

  template.innerHTML =
    /*html*/
    `<table>
            <thead>
            </thead>
            <tbody>
            </tbody>
     </table>`;

  const htmlElement = template.firstChild;

  const tableHead = htmlElement.querySelector("thead");
  const row = document.createElement("tr");

  headerData.forEach((item) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = item;
    row.appendChild(headerCell);

    tableHead.appendChild(row);
  });

  const tableBody = htmlElement.querySelector("tbody");

  jsonData.forEach((item) => {
    const row = document.createElement("tr");

    Object.keys(item).forEach((column) => {
      const cellData = document.createElement("td");
      cellData.textContent = item[column];
      row.appendChild(cellData);
    });

    tableBody.appendChild(row);
  });

  targetElement.appendChild(htmlElement);
}
