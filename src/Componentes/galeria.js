const URL_API = 'https://astro-tech-server.vercel.app'

const componentGallery = async (imageGallery) => {
    const gallery = document.createElement('div');
    gallery.setAttribute('class', 'astronomía');
    gallery.style.backgroundImage = `url(${imageGallery})`;

    const listGallery = document.getElementById('Galeria');
        listGallery.appendChild(gallery);
        
};

/**
 * Carga de data y componentes
 * @param {*} projectDataPayload 
 */
export const fetchGallerysData = async (GalleryDataPayload) => {
    if (GalleryDataPayload.length > 0) {
        GalleryDataPayload.forEach(gallery => {
            componentGallery(gallery.galleryImage);
        });
    }
};

export const getDataGallery = async () => {
    try {
        let response = await fetch(`${URL_API}/api/gallery`);
        return await response.json();
    } catch (error) {
        console.error('Hubo un error');
    }
}
