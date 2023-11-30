document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.clear();
    window.location.href = 'index.html';
});