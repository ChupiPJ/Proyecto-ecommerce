document.addEventListener("DOMContentLoaded", function () {
    // Cargar navbar antes de ejecutar cualquier otro script
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            inicializarModoOscuro(); 
            inicializarNavegacionActiva();
        })
        .catch(error => console.error("Error al cargar el navbar:", error));

    inicializarFormulario();
    inicializarScrollToTop();
    inicializarBusqueda();
});

function inicializarModoOscuro() {
    let body = document.body;

    // Aplica el modo oscuro si está activado en localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Espera a que el navbar termine de cargarse antes de buscar el botón
    let interval = setInterval(() => {
        let toggle = document.getElementById("dark-mode-toggle");
        if (toggle) {
            clearInterval(interval); // Detiene el chequeo cuando encuentra el botón

            toggle.addEventListener("click", function () {
                body.classList.toggle("dark-mode");
                localStorage.setItem("dark-mode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
            });
        }
    }, 100);
}


// ✅ MARCAR LINK ACTIVO EN EL NAVBAR
function inicializarNavegacionActiva() {
    let links = document.querySelectorAll(".nav-link");
    let currentUrl = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        }
    });
}

// ✅ FORMULARIO DE CONTACTO
function inicializarFormulario() {
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.");
            form.reset();
        });
    }
}

// ✅ BOTÓN DE SUBIR ARRIBA
function inicializarScrollToTop() {
    let scrollToTopBtn = document.getElementById("scrollToTop");

    if (scrollToTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });

        scrollToTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

// ✅ BÚSQUEDA EN LA SECCIÓN DE PRODUCTOS
function inicializarBusqueda() {
    let searchInput = document.getElementById("search");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            let filter = searchInput.value.toLowerCase();
            let cards = document.querySelectorAll(".card");

            cards.forEach(card => {
                let title = card.querySelector(".card-title").textContent.toLowerCase();
                card.style.display = title.includes(filter) ? "block" : "none";
            });
        });
    }
}
