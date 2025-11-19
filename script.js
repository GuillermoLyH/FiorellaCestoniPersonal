document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // 1. LÓGICA DEL MENÚ HAMBURGUESA (Móvil)
  // =========================================
  const hamburger = document.querySelector(".hamburger-menu");
  const menu = document.querySelector(".menu-links");
  const menuLinks = document.querySelectorAll('.menu-links a[href*="#"]');

  const closeMenu = () => {
    if (menu.classList.contains("is-open")) {
      menu.classList.remove("is-open");
      hamburger.classList.remove("is-active");
    }
  };

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("is-open");
      hamburger.classList.toggle("is-active");
    });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // =========================================
  // 2. LÓGICA DEL CARRUSEL (Desktop)
  // =========================================
  const track = document.querySelector(".carousel-track");

  // Solo ejecutamos esto si existe un carrusel en la página
  if (track) {
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector(".carousel-btn.next");
    const prevBtn = document.querySelector(".carousel-btn.prev");

    let currentIndex = 0; // Empezamos en la primera imagen

    // Función para actualizar posiciones y clases
    const updateCarousel = () => {
      const centerPosition = 0; // Centro del contenedor
      const spacing = 220; // Espacio entre imágenes (ajustar según gusto)

      slides.forEach((slide, index) => {
        // Distancia relativa al índice actual
        const distance = index - currentIndex;

        // Calcular posición X
        const translateX = distance * spacing;

        // Aplicar transformación base
        slide.style.transform = `translateX(${translateX}px) scale(0.7)`;
        slide.classList.remove("active");
        slide.style.zIndex = "1";
        slide.style.opacity = "0.5";

        // Si es la imagen central
        if (index === currentIndex) {
          slide.classList.add("active");
          slide.style.transform = `translateX(0px) scale(1.1)`; // Sin desplazamiento X, con Zoom
          slide.style.zIndex = "10";
          slide.style.opacity = "1";
        }
        // Imágenes adyacentes (opcional: ajuste fino)
        else if (Math.abs(distance) === 1) {
          slide.style.zIndex = "5";
          slide.style.opacity = "0.8";
        }
      });
    };

    // Inicializar
    updateCarousel();

    // Evento Botón Siguiente
    nextBtn.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop infinito: volver al inicio
      }
      updateCarousel();
    });

    // Evento Botón Anterior
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1; // Loop infinito: ir al final
      }
      updateCarousel();
    });
  }
});
