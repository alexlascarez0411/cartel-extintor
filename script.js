document.addEventListener('DOMContentLoaded', () => {
    const simboloFuego = document.querySelector('#simbolo-fuego');
    const sonidoFuego = document.querySelector('#sonido-fuego');

    simboloFuego.addEventListener('mouseover', () => {
        sonidoFuego.currentTime = 0; 
        
        sonidoFuego.play().catch(() => {
            // Mostramos el aviso solo en la consola para no interrumpir la pantalla
            console.log("El navegador bloqueó el audio. Haz clic en la página antes de pasar el mouse.");
        });
    });

    simboloFuego.addEventListener('mouseout', () => {
        sonidoFuego.pause();
    });
});