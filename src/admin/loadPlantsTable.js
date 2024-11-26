import { getDataPlants } from "../Componentes/plants.js";

window.addEventListener('load', async () => {
    await createTablePlants();
    document.querySelectorAll(".button-Editar").forEach(button => {
        button.addEventListener('click', (event) => {
        const planetId = event.target.id;
        location.href = `editPlant.html?planetId=${planetId}`;
       }); 
    });

    document.querySelectorAll(".button-Eliminar").forEach(button => {
        button.addEventListener('click', async (event) => {
        const planetId = event.target.id;
        const userResponse = confirm('Esta seguro en eliminar el Planeta');
            if (userResponse) {
                await deletePlant(planetId);
                alert('El planeta ha sido eliminado correctamente.');
                location.href = 'indexAdmin.html';
            }
        }); 
     });
});

/**
 * Create dynamic plants Table
 */
const createTablePlants = async () => {
    const data = await getDataPlants();
    const container = document.getElementById('table_container');
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');
    const tableHeadId = document.createElement('th');
    const tableHeadImg = document.createElement('th');
    const tableHeadName = document.createElement('th');
    const tableHeadPercent = document.createElement('th');
    const tableHeadDiameterKm = document.createElement('th');
    const tableHeadEdit = document.createElement('th');
    const tableHeadDelete = document.createElement('th');
    tableHeadId.appendChild(document.createTextNode('Id'));
    tableHeadImg.appendChild(document.createTextNode('Icono Planetario'));
    tableHeadName.appendChild(document.createTextNode('Planeta'));
    tableHeadPercent.appendChild(document.createTextNode('Porcentaje'));
    tableHeadDiameterKm.appendChild(document.createTextNode('Diametro Km'));
    tableHeadEdit.appendChild(document.createTextNode('Editar'));
    tableHeadDelete.appendChild(document.createTextNode('Eliminar'));
    tableHeadRow.appendChild(tableHeadId);
    tableHeadRow.appendChild(tableHeadImg);
    tableHeadRow.appendChild(tableHeadName);
    tableHeadRow.appendChild(tableHeadPercent);
    tableHeadRow.appendChild(tableHeadDiameterKm);
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
        const tableDataImg = document.createElement("td");
        const tableDataName = document.createElement("td");
        const tableDataPercent = document.createElement("td");
        const tableDataDiameterKm = document.createElement('td');
        const tableDataEdit = document.createElement("td");
        const tableDataDelete = document.createElement("td");
        tableDataId.appendChild(document.createTextNode(element._id));
        tableDataName.appendChild(document.createTextNode(element.plantName));
        tableDataPercent.appendChild(document.createTextNode(`${element.plantPercent}%`));
        tableDataDiameterKm.appendChild(document.createTextNode(`${element.plantDiametro} kmØ`));

        const img = document.createElement("img");
        img.src = element.plantImg;
        img.alt = "Plant Image";
        img.style.width = "150px";
        img.style.height = "80px";
        img.style.borderRadius = "20px";
        img.style.objectFit = 'contain';
        img.style.overflow = 'hidden';
        tableDataImg.appendChild(img);

        tableDataEdit.appendChild(buttonComponent('Editar', element._id));
        tableDataDelete.appendChild(buttonComponent('Eliminar', element._id));
        tableRow.appendChild(tableDataId);
        tableRow.appendChild(tableDataImg);
        tableRow.appendChild(tableDataName);
        tableRow.appendChild(tableDataPercent);
        tableRow.appendChild(tableDataDiameterKm);
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
const buttonComponent = (buttonLabel, id) => {
    const button = document.createElement('button');
    button.setAttribute('class', `button button-${buttonLabel}`);
    button.setAttribute('id', id);
    button.style.padding = "10px";
    button.appendChild(document.createTextNode(buttonLabel));
    return button;
}; 

const deletePlant = async (id) => {
    try {
        let response = await fetch(`http://localhost:3000/api/plants/${id}`, 
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
        });
        return response;
    } catch (error) {
        console.error('Hubo un error');
    }
};