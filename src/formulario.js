export const formSubmit = async (event) => {
    event.preventDefault();
    try {
        const name = document.getElementById('nombre').value;
        const email = document.getElementById('Email').value;
        const phone = document.getElementById('telefono').value;
        const address = document.getElementById('direccion').value;
        const message = document.getElementById('texto').value;
        
        if (name === '' || email === '' || phone === '' || address === '' || message === '') {
            alert('Todos los campos deben ser completados');
        } else {
            const mensajeComplete = {
                name,
                email,
                phone,
                address,
                message
            };
            console.log(mensajeComplete);
            await fetch('http://localhost:3000/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mensajeComplete),
            });
            alert('La información ha sido enviada exitosamente');
        }

    } catch (error) {
        console.error(error);
    }
};