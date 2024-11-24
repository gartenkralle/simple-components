async function initialize(){
    const jsonData = await (await fetch('test.json')).json();

    loadTable(document.getElementById('customers'), jsonData);
    loadTable(document.getElementById('customers-2'), jsonData);
}

initialize();