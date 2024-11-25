window.addEventListener('load', async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const plantId = urlParams.get('planetId');
    const data = await getDataPlantsById(plantId);
    const id_input = document.getElementById('id_plant');
    const icono_imput = document.getElementById('icono');
    const nombre_input = document.getElementById('nombre_plant');
    const porcentaje_input = document.getElementById('porcentaje');
    const diametroKm_input = document.getElementById('diametroKm');

    id_input.value = data._id;
    icono_imput.value = data.plantImg;
    nombre_input.value = data.plantName;
    porcentaje_input.value = data.plantPercent;
    diametroKm_input.value = data.plantDiametro;

    const formUpdatePlant = document.getElementById('formEditPlant');

    formUpdatePlant.addEventListener("submit", async (event) => {
        event.preventDefault();
        await UpdatePlantData(nombre_input.value, porcentaje_input.value, diametroKm_input.value);
        alert('Los datos del planeta han sido actualizados correctamente');
        location.href = 'indexAdmin.html';
    });
});

const getDataPlantsById = async (id) => {
    try {
        let response = await fetch(`http://localhost:3000/api/plants/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Hubo un error');
    }
}

const UpdatePlantData = async (name, percent, diametro) => {
    try {
        let response = await fetch(`http://localhost:3000/api/plants?plantName=${name}`, 
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    plantName: name,
                    plantPercent: percent,
                    plantDiametro: diametro,
            }),
        });
        return response;
    } catch (error) {
        console.error('Hubo un error');
    }
};