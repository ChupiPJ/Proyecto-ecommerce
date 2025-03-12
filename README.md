# 📌 Proyecto: Mi Ecommerce

## 📂 Estructura del Proyecto
```
MiEcommerce/
│── index.html         # Página principal
│── src/
│   ├── navbar.html    # Barra de navegación (cargada dinámicamente)
│   ├── productos.html # Página de productos
│   ├── servicios.html # Página de servicios
│   ├── contactos.html # Página de contacto
│── resources/
│   ├── css/
│   │   ├── styles.css # Hoja de estilos
│   ├── js/
│   │   ├── scripts.js # Archivo de scripts
│   ├── images/        # Carpeta de imágenes
│── README.md          # Documentación
```

---

## 🚀 Descripción del Proyecto
Este es un proyecto de una tienda en línea simple, construida con **HTML, CSS y JavaScript**. Utiliza Bootstrap para estilos y carga dinámica de la barra de navegación.

---

## 🌟 Funcionalidades Principales
- 📌 **Carga dinámica del Navbar** en todas las páginas usando `fetch()`.
- 🎨 **Modo oscuro** configurable con `localStorage`.
- 🔎 **Búsqueda de productos** en la sección de productos.
- 📜 **Formulario de contacto** con validaciones básicas.
- 🔼 **Botón de scroll hacia arriba**.

---

## 🔧 Configuración y Uso
### 1️⃣ Clonar el Repositorio
```sh
git clone https://github.com/tuusuario/mi-ecommerce.git
cd mi-ecommerce
```

### 2️⃣ Ejecutar un Servidor Local
Debido a las restricciones de `fetch()`, necesitas un servidor local para cargar `navbar.html`. Si tienes Python instalado:
```sh
python -m http.server 8000
```
Luego, abre `http://localhost:8000/index.html` en tu navegador.

---

## 🛠️ Archivos Clave
### 📜 `index.html`
- Página principal del ecommerce.
- Carga `navbar.html` dinámicamente:
```html
<script>
document.addEventListener("DOMContentLoaded", function () {
    fetch("src/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el navbar:", error));
});
</script>
```

### 📜 `src/navbar.html`
- Contiene los enlaces de navegación:
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="index.html">Mi Ecommerce</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="../index.html">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="servicios.html">Servicios</a></li>
                <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
                <li class="nav-item"><a class="nav-link" href="contactos.html">Contáctenos</a></li>
            </ul>
        </div>
    </div>
</nav>
```

### 📜 `resources/js/scripts.js`
- Se encarga de funcionalidades como modo oscuro, búsqueda de productos y scroll arriba.

### 📜 `resources/css/styles.css`
- Estilos personalizados para mejorar la apariencia del ecommerce.

---

## ❓ Posibles Errores y Soluciones
### ⚠️ `navbar.html` no se carga en `index.html`
✅ **Solución:** Asegúrate de que `index.html` llama a la ruta correcta:
```js
fetch("src/navbar.html")
```
Si sigue sin funcionar, usa un servidor local.

### ⚠️ `fetch()` bloqueado al abrir `index.html` directamente
✅ **Solución:** No uses `file://`, usa un servidor local:
```sh
python -m http.server 8000
```

### ⚠️ `scripts.js` no carga o da error
✅ **Solución:** Asegúrate de que el archivo está correctamente referenciado en todas las páginas:
```html
<script src="../resources/js/scripts.js"></script>
```

---

## 📌 Contribuciones
Si deseas contribuir, haz un `fork`, crea una rama y envía un `pull request`.

---

## 📜 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT.

