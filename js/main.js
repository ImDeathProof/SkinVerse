// CODIGO JS DEL PROYECTO SKINVERSE DESARROLLADO POR ELIAS GARCIA PARA EL CURSO FRONT END JS DE TALENTO TECH



// =============================
// Control del menú hamburguesa en mobile
// =============================

const toggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

// Cerrar menú al hacer click en un link (mobile)
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
    });
});

