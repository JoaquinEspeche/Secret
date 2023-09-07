var toggleButton = document.getElementById('toggleFullScreen');

toggleButton.addEventListener('click', function() {
    var element = document.documentElement; // Elemento raíz de la página (el body o el html)
    
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Para navegadores Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Para navegadores WebKit (Chrome, Safari)
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Para Internet Explorer
        element.msRequestFullscreen();
    }
});