const URL_API = 'https://astro-tech-server.vercel.app'

const componentProjects = async (projectName, imageBack) => {
    const portafolioCaja = document.createElement('div');
    const portafolioName = document.createElement('h3');

    portafolioCaja.setAttribute('class', 'portafolio_project');
    portafolioCaja.style.backgroundImage = `url(${imageBack})`;
    portafolioName.setAttribute('class', 'portafolio_project_name');
    portafolioName.textContent = projectName;

    portafolioCaja.appendChild(portafolioName);

    const listProjects = document.getElementById('project_container');
    listProjects.appendChild(portafolioCaja);

};

/**
 * Carga de data y componentes
 * @param {*} projectDataPayload 
 */
export const fetchProjectsData = async (projectDataPayload) => {
    if (projectDataPayload.length > 0) {
        projectDataPayload.forEach(project => {
            componentProjects(project.projectName, project.projectImage);
        });
    }
};

export const getDataProject = async () => {
    try {
        let response = await fetch(`${URL_API}/api/projects`);
        return await response.json();
    } catch (error) {
        console.error('Hubo un error');
    }
}