document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'Te amo' && password === 'feliz aniversario') {
        document.getElementById('message').textContent = '¡Inicio de sesión exitoso!';
        window.location.href = 'principal.html';
    } else {
        document.getElementById('message').textContent = 'Nombre de usuario o contraseña incorrectos.';
    }
});