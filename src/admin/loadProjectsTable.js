import { getDataProject } from "../Componentes/projects.js";

window.addEventListener('load', async () => {
    await createTableProject();
});

const createTableProject = async () => {
    const data = await getDataProject();
    const container = document.getElementById('project_container');
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');
    const tableHeadId = document.createElement('th');
    const tableHeadName = document.createElement('th');
    const tableImage = document.createElement('th');
    const tableHeadEdit = document.createElement('th');
    const tableHeadDelete = document.createElement('th');
    
    tableHeadId.appendChild(document.createTextNode('Id'));
    tableHeadName.appendChild(document.createTextNode('Nombre Proyecto'));
    tableImage.appendChild(document.createTextNode('Imagen'))
    tableHeadEdit.appendChild(document.createTextNode('Editar'));
    tableHeadDelete.appendChild(document.createTextNode('Eliminar'));
    
    tableHeadRow.appendChild(tableHeadId);
    tableHeadRow.appendChild(tableHeadName);
    tableHeadRow.appendChild(tableImage);
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
 * @param {*} data Data About gallery Info
 * @returns 
 */
const createRows = (data) => {
    const tableBody = document.createElement("tbody");
    data.forEach(element => {
        const tableRow = document.createElement("tr");
        const tableDataId = document.createElement("td");
        const tableDataName = document.createElement("td");
        const tableDataImage = document.createElement("td");
        const tableDataEdit = document.createElement("td");
        const tableDataDelete = document.createElement("td");

        tableDataId.appendChild(document.createTextNode(element._id));
        tableDataName.append(document.createTextNode(element.projectName));

        const img = document.createElement("img");
        img.src = element.projectImage;
        img.alt = "Project Image";
        img.style.width = "150px";
        img.style.height = "80px";
        img.style.borderRadius = "20px";
        img.style.objectFit = 'cover';
        img.style.overflow = 'hidden';
        tableDataImage.appendChild(img);

        tableDataEdit.appendChild(buttonComponent('Editar'));
        tableDataDelete.appendChild(buttonComponent('Eliminar'));

        tableRow.appendChild(tableDataId);
        tableRow.appendChild(tableDataName);
        tableRow.appendChild(tableDataImage);
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