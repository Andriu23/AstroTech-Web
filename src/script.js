import { fetchPlantsData, getDataPlants } from './Componentes/plants.js'
import { fetchProjectsData , getDataProject } from './Componentes/projects.js';
import { fetchGallerysData,  getDataGallery } from './Componentes/galeria.js'
import { formSubmit } from './Componentes/formulario.js';

/*'[{"plantName":"Mercurio", "plantPercent":"3.49", "plantDiametro":"4.880"},{"plantName":"Venus", "plantPercent":"8.66", "plantDiametro":"12.104"},{"plantName":"Tierra", "plantPercent":"9.11", "plantDiametro":"12.742"},{"plantName":"Marte", "plantPercent":"4.85", "plantDiametro":"6.779"},{"plantName":"Jupiter", "plantPercent":"100", "plantDiametro":"139.820"},{"plantName":"Saturno", "plantPercent":"83.38", "plantDiametro":"116.460"},{"plantName":"Urano", "plantPercent":"36.25", "plantDiametro":"50.724"},{"plantName":"Neptuno", "plantPercent":"35.23", "plantDiametro":"49.244"}]';*/

/*'[{"projectName":"Perseverance Rover", "projectImage":"../emb/project/Perseverance_Rover.jfif"}, {"projectName":"Estudio de Júpiter", "projectImage":"../emb/project/Estudio_de_Júpiter.jfif"}, {"projectName":"Estudio de Saturno", "projectImage":"../emb/project/Estudio_de_Saturno.jfif"}, {"projectName":"Exploración de Plutón y el Cinturón de Kuiper", "projectImage":"../emb/project/Exploración_de_Plutón_y_el_Cinturón_de_Kuiper.jfif"}, {"projectName":"Parker Solar Probe", "projectImage":"../emb/project/Parker_Solar_Probe.jfif"}, {"projectName":"Exploración de los Límites del Sistema Solar", "projectImage":"../emb/project/Exploración_de_los_Límites_del_Sistema_Solar.jfif"}, {"projectName":"Exploración de Mercurio", "projectImage":"../emb/project/Exploración_de_Mercurio.jfif"}, {"projectName":"Estudio de Ceres y Vesta", "projectImage":"../emb/project/Estudio_de_Ceres_y_Vesta.jfif"}, {"projectName":"Venus Climate Orbiter", "projectImage":"../emb/project/Venus_Climate_Orbiter.jfif"}, {"projectName":"ESA y Roscosmos", "projectImage":"../emb/project/ESA_y_Roscosmos.jfif"}]';*/

/*[ {"galleryImage":"../emb/galeria/benjamin-voros-VffJIyDE1j0-unsplash.jpg"}, {"galleryImage":"../emb/galeria/conner-baker-BcchVu7wTrk-unsplash.jpg"}, {"galleryImage":"../emb/galeria/diego-casiano-diCyxdtPb9s-unsplash.jpg"}, {"galleryImage":"../emb/galeria/javier-miranda-6Pou6SeJ6cY-unsplash.jpg"}, {"galleryImage":"../emb/galeria/luke-stackpoole-5Qqkjn4PFPA-unsplash.jpg"}, {"galleryImage":"../emb/galeria/nasa-Ed2AELHKYBw-unsplash.jpg"}, {"galleryImage":"../emb/galeria/nasa-n463SoeSiVY-unsplash.jpg"}, {"galleryImage":"../emb/galeria/icono.avif"}, {"galleryImage":"../emb/galeria/spacex-pnPS3Ox_2vE-unsplash.jpg"}, {"galleryImage":"../emb/galeria/spacex-VBNb52J8Trk-unsplash.jpg"}, {"galleryImage":"../emb/galeria/tasos-mansour-JreKK_t1Ycc-unsplash.jpg"}, {"galleryImage":"../emb/galeria/tyler-van-der-hoeven-_ok8uVzL2gI-unsplash.jpg"} ]';*/


window.addEventListener('load', async () => {
    const galleryData = await getDataGallery();
    const plantData = await getDataPlants();
    const projectsData = await getDataProject();
    const form = document.getElementById('Formulario');
    form.addEventListener('submit', formSubmit);
    await fetchGallerysData(galleryData);
    await fetchPlantsData(plantData);
    await fetchProjectsData(projectsData);
    
});