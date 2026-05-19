// CODIGO JS DEL PROYECTO SKINVERSE DESARROLLADO POR ELIAS GARCIA PARA EL CURSO FRONT END JS DE TALENTO TECH



// =============================
// Control del menú hamburguesa en mobile
// =============================

const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".header-bottom");

toggle.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const isOpen = navbar.classList.contains("open");

    toggle.setAttribute("aria-expanded", isOpen);

});

// Todos los links del nav
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
    });
});

