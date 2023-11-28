document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'Juli' && password === 'Teamo') {
        document.getElementById('message').textContent = '¡Inicio de sesión exitoso!';
        window.location.href = 'index.html';
    } else {
        document.getElementById('message').textContent = 'Nombre de usuario o contraseña incorrectos.';
    }
});