import { getDataGallery } from "../Componentes/galeria.js";

window.addEventListener('load', async () => {
    await createTableGallery();
});

const createTableGallery = async () => {
    const data = await getDataGallery();
    const cajaGaleria = document.getElementById('gallery_container');
    const tabla = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');
    const tableHeadId = document.createElement('th');
    const tableImage = document.createElement('th');
    const tableHeadEdit = document.createElement('th');
    const tableHeadDelete = document.createElement('th');

    tableHeadId.appendChild(document.createTextNode('Id'));
    tableImage.appendChild(document.createTextNode('Imagen'));
    tableHeadEdit.appendChild(document.createTextNode('Editar'));
    tableHeadDelete.appendChild(document.createTextNode('Eliminar'));

    tableHeadRow.appendChild(tableHeadId);
    tableHeadRow.appendChild(tableImage);
    tableHeadRow.appendChild(tableHeadEdit);
    tableHeadRow.appendChild(tableHeadDelete);

    tableHead.appendChild(tableHeadRow);
    tabla.appendChild(tableHead);
    tabla.appendChild(createRows(data));
    tabla.setAttribute('class', 'table');
    cajaGaleria.appendChild(tabla);
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
        const tableDataImage = document.createElement("td");
        const tableDataEdit = document.createElement("td");
        const tableDataDelete = document.createElement("td");

        tableDataId.appendChild(document.createTextNode(element._id));

        const img = document.createElement("img");
        img.src = element.galleryImage;
        img.alt = "Gallery Image";
        img.style.width = "70px";
        img.style.height = "70px";
        img.style.borderRadius = "20px";
        img.style.objectFit = 'cover';
        img.style.overflow = 'hidden';
        tableDataImage.appendChild(img);

        tableDataEdit.appendChild(buttonComponent('Editar'));
        tableDataDelete.appendChild(buttonComponent('Eliminar'));

        tableRow.appendChild(tableDataId);
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
