import { getDataContact } from "../Componentes/formulario.js";

window.addEventListener('load', async () => {
    await createTableContact();
});
/**
 * Create dynamic plants Table
 */
const createTableContact = async () => {
    const data = await getDataContact();
    const container = document.getElementById('contact_container');
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');
    const tableHeadId = document.createElement('th');
    const tableHeadName = document.createElement('th');
    const tableHeadEmail = document.createElement('th');
    const tableHeadPhone = document.createElement('th');
    const tableHeadEdit = document.createElement('th');
    const tableHeadDelete = document.createElement('th');
    tableHeadId.appendChild(document.createTextNode('Id'));
    tableHeadName.appendChild(document.createTextNode('Nombre'));
    tableHeadEmail.appendChild(document.createTextNode('Email'));
    tableHeadPhone.appendChild(document.createTextNode('Teléfono'));
    tableHeadEdit.appendChild(document.createTextNode('Editar'));
    tableHeadDelete.appendChild(document.createTextNode('Eliminar'));
    tableHeadRow.appendChild(tableHeadId);
    tableHeadRow.appendChild(tableHeadName);
    tableHeadRow.appendChild(tableHeadEmail);
    tableHeadRow.appendChild(tableHeadPhone);
    tableHeadRow.appendChild(tableHeadEdit);
    tableHeadRow.appendChild(tableHeadDelete);
    tableHead.appendChild(tableHeadRow);
    table.appendChild(tableHead);
    table.appendChild(createRows(data));
    table.setAttribute('class', 'table');
    container.appendChild(table);
};

/**
 * 
 * @param {*} data Data About plants Info
 * @returns 
 */

const createRows = (data) => {
    const tableBody = document.createElement("tbody");
    data.forEach(element => {
        const tableRow = document.createElement("tr");
        const tableDataId = document.createElement("td");
        const tableDataName = document.createElement("td");
        const tableDataEmail = document.createElement("td");
        const tableDataPhone = document.createElement('td');
        const tableDataEdit = document.createElement("td");
        const tableDataDelete = document.createElement("td");

        tableDataId.appendChild(document.createTextNode(element._id));
        tableDataName.appendChild(document.createTextNode(element.name));
        tableDataEmail.appendChild(document.createTextNode(element.email));
        tableDataPhone.appendChild(document.createTextNode(element.phone));
        tableDataEdit.appendChild(buttonComponent('Editar'));
        tableDataDelete.appendChild(buttonComponent('Eliminar'));

        tableRow.appendChild(tableDataId);
        tableRow.appendChild(tableDataName);
        tableRow.appendChild(tableDataEmail);
        tableRow.appendChild(tableDataPhone);
        tableRow.appendChild(tableDataEdit);
        tableRow.appendChild(tableDataDelete);
        tableBody.appendChild(tableRow);
    });

    return tableBody;
};



        /**
 * 
 * @param {*} buttonLabel 
 * @returns 
 */
const buttonComponent = (buttonLabel) => {
    const button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.style.padding = "10px";
    button.appendChild(document.createTextNode(buttonLabel));
    return button;
}; 