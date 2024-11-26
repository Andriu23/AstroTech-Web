const componentPlants = async (name, percent, diametro, img) => {
    const listItem = document.createElement('li'); // planet_location
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const loadBar = document.createElement('div'); // loading_bar
    const bar = document.createElement('div'); // load_bar
    const diametroKm = document.createElement('p'); // Diametro_km
    const spanName = document.createElement('span'); // location_planet-name

    const textNode = document.createTextNode(name.toUpperCase()); // nombre del planeta
    const percentNode = document.createTextNode(`${percent}%`); // porcentaje
    const metroNode = document.createTextNode(`${diametro} km Ø`); // diamtro km


    listItem.setAttribute('class', 'planet_location');
    imageContainer.setAttribute('class', 'image_container'); 
    image.setAttribute('src', img); 
    image.setAttribute('alt', `${name} image`);
    loadBar.setAttribute('class', 'loading_bar');
    
    bar.setAttribute('class', 'load_bar');
    bar.setAttribute('style', `width:${percent}%`)
    diametroKm.setAttribute('class', 'Diametro_km', diametro);
    
    imageContainer.appendChild(image);
    bar.appendChild(percentNode);
    diametroKm.appendChild(metroNode);
    loadBar.appendChild(bar);
    spanName.appendChild(textNode);
    listItem.appendChild(imageContainer);
    listItem.appendChild(loadBar);
    listItem.appendChild(diametroKm);
    listItem.appendChild(spanName);

    const listOfPlants = document.getElementById('planetas_box');
    listOfPlants.appendChild(listItem);
};

/**
 * Carga de data y componentes
 * @param {*} plantDataPayload 
 */
export const fetchPlantsData = async (plantDataPayload) => {
    if (plantDataPayload.length > 0) {
        plantDataPayload.forEach(plant => {
            componentPlants(plant.plantName, plant.plantPercent, plant.plantDiametro, plant.plantImg);
        });
    }
};

export const getDataPlants = async () => {
    try {
        let response = await fetch('http://localhost:3000/api/plants');
        return await response.json();
    } catch (error) {
        console.error('Hubo un error');
    }
}