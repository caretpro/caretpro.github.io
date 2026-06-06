document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // MENÚ DESPLEGABLE
    // ==========================================
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    if (menuIcon && navUl) {
        menuIcon.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    // ==========================================
    // (INDEX LATERAL)
    // ==========================================
    const navLinks = document.querySelectorAll(".sidebar-link");
    const sections = document.querySelectorAll(".feature-section");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            // Evitamos que la página recargue o salte
            event.preventDefault(); 

            // 1. Limpiamos la clase 'active' de TODOS los enlaces (del menú y del contenido)
            navLinks.forEach((nav) => nav.classList.remove("active"));
            
            // 2. Limpiamos la clase 'active' de todas las secciones de contenido
            sections.forEach((section) => section.classList.remove("active"));

            // 3. Obtenemos el ID de la sección objetivo
            const targetId = link.getAttribute("data-target");

            // 4. CORRECCIÓN: Buscamos el enlace correspondiente en el menú izquierdo y lo activamos
            const sidebarLink = document.querySelector(`.features-sidebar .sidebar-link[data-target="${targetId}"]`);
            if (sidebarLink) {
                sidebarLink.classList.add("active");
            } else {
                // Si el enlace clickeado no está en el menú (por si acaso), activamos el que se pulsó
                link.classList.add("active");
            }

            // 5. Mostramos la sección de contenido correspondiente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });

});