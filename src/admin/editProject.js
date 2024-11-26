const URL_API = 'https://astro-tech-server.vercel.app'

window.addEventListener('load', async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectId = urlParams.get('projectId');
    const data = await getDataProjectsById(projectId);
    const id_input = document.getElementById('id_project');
    const nombre_input = document.getElementById('nombre_project');
    const icono_imput = document.getElementById('icono');

    id_input.value = data._id;
    nombre_input.value = data.projectName;
    icono_imput.value = data.projectImage;
    
    const formUpdateProject = document.getElementById('formEditProject');

    formUpdateProject.addEventListener("submit", async (event) => {
        event.preventDefault();
        await UpdateProjectData(nombre_input.value, icono_imput.value);
        alert('Los datos de projecto han sido actualizados correctamente');
        location.href = 'indexProject.html';
    });

});

const getDataProjectsById = async (id) => {
    try {
        let response = await fetch(`${URL_API}/api/projects/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Hubo un error');
    }
}

const UpdateProjectData = async (name, img) => {
    try {
        let response = await fetch(`${URL_API}/api/projects?projectName=${name}`, 
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    projectImage: img,
            }),
        });
        return response;
    } catch (error) {
        console.error('Hubo un error');
    }
};
