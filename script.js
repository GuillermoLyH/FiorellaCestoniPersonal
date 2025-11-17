document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu-links');

    // 2. Escuchar el evento click en el botón
    hamburger.addEventListener('click', () => {
        // 3. Alternar la clase 'is-open' en el menú
        menu.classList.toggle('is-open');

        // Opcional: Alternar la apariencia del botón (Ej. X) si añades más CSS de transición
        hamburger.classList.toggle('is-active'); 
    });
});
