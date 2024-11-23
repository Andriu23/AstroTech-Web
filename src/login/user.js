window.addEventListener('load', () => {
    const formularioLogin = document.getElementById('Formulario_Login');

    formularioLogin.addEventListener("submit", async (event) => {
        event.preventDefault();
        const userName = document.getElementById('email_login').value;
        const password = document.getElementById('password_login').value;
        const response = await getDataUser(userName, password);
        const userData = await response.json();
        if (userData.length > 0) {
            location.href='./admin/indexAdmin.html';
        } else {
            alert("Datos de acceso invalidos");
            location.href='./login.html';
        }
    });
});

export const getDataUser = async (userName, password) => {
    try {
        let response = await fetch('http://localhost:3000/api/getUsers', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userName,
                    password: password,
            }),
        });
        return response;
    } catch (error) {
        console.error('Hubo un error');
    }
}