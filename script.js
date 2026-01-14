// ===== DATOS DEL PORTAFOLIO =====
const datosPortafolio = {
    habilidades: [
        { nombre: "JavaScript", icono: "bi-filetype-js", nivel: 85 },
        { nombre: "HTML5", icono: "bi-filetype-html", nivel: 90 },
        { nombre: "CSS3", icono: "bi-filetype-css", nivel: 88 },
        { nombre: "React", icono: "bi-react", nivel: 75 },
        { nombre: "Node.js", icono: "bi-filetype-jsx", nivel: 70 },
        { nombre: "Git", icono: "bi-git", nivel: 80 },
        { nombre: "Python", icono: "bi-filetype-py", nivel: 65 },
        { nombre: "MySQL", icono: "bi-database", nivel: 75 }
    ],
    
    proyectos: [
        {
            id: 1,
            titulo: "E-commerce Moderno",
            descripcion: "Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel de administración.",
            tecnologias: ["React", "Node.js", "MongoDB", "Stripe"],
            categoria: "fullstack",
            demo: "#",
            github: "#",
            imagen: "ecommerce"
        },
        {
            id: 2,
            titulo: "App de Tareas",
            descripcion: "Aplicación web para gestión de tareas con recordatorios, categorías y estadísticas de productividad.",
            tecnologias: ["JavaScript", "CSS3", "LocalStorage"],
            categoria: "web",
            demo: "#",
            github: "#",
            imagen: "todo"
        },
        {
            id: 3,
            titulo: "Clima App",
            descripcion: "Aplicación móvil para consultar el clima en tiempo real con pronóstico semanal y ubicación automática.",
            tecnologias: ["React Native", "API Rest", "Geolocation"],
            categoria: "movil",
            demo: "#",
            github: "#",
            imagen: "weather"
        },
        {
            id: 4,
            titulo: "Portafolio Personal",
            descripcion: "Diseño y desarrollo de portafolio web responsive con animaciones y formulario de contacto.",
            tecnologias: ["HTML5", "CSS3", "JavaScript"],
            categoria: "web",
            demo: "#",
            github: "#",
            imagen: "portfolio"
        },
        {
            id: 5,
            titulo: "Sistema de Gestión",
            descripcion: "Sistema CRUD completo para gestión de inventarios con autenticación de usuarios y reportes.",
            tecnologias: ["Python", "Django", "PostgreSQL"],
            categoria: "fullstack",
            demo: "#",
            github: "#",
            imagen: "management"
        },
        {
            id: 6,
            titulo: "Red Social",
            descripcion: "Red social minimalista con funcionalidades de publicaciones, comentarios y sistema de amigos.",
            tecnologias: ["React", "Firebase", "Tailwind CSS"],
            categoria: "fullstack",
            demo: "#",
            github: "#",
            imagen: "social"
        }
    ]
};

// ===== VARIABLES GLOBALES =====
let proyectosFiltrados = [...datosPortafolio.proyectos];

// ===== FUNCIONES DE INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    inicializarMenuHamburguesa();
    inicializarHabilidades();
    inicializarProyectos();
    inicializarFiltros();
    inicializarFormularioContacto();
    inicializarModalCV();
    inicializarAnimacionesScroll();
    inicializarContadores();
    
    console.log('✅ Portafolio de Orlando Ramón cargado correctamente');
});

// ===== MENÚ HAMBURGUESA =====
function inicializarMenuHamburguesa() {
    const menuCheckbox = document.getElementById('menu-hamburguesa');
    const enlacesMenu = document.querySelectorAll('.menu a');
    
    // Cerrar menú al hacer clic en un enlace (mobile)
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuCheckbox.checked = false;
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera (mobile)
    document.addEventListener('click', (e) => {
        const menu = document.querySelector('.navegacion');
        const hamburger = document.querySelector('.menu-hamburguesa');
        
        if (window.innerWidth <= 768 && 
            menuCheckbox.checked && 
            !menu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            menuCheckbox.checked = false;
        }
    });
}

// ===== HABILIDADES =====
function inicializarHabilidades() {
    const contenedor = document.querySelector('.habilidades-grid');
    
    datosPortafolio.habilidades.forEach(habilidad => {
        const card = crearCardHabilidad(habilidad);
        contenedor.appendChild(card);
    });
    
    // Animar barras de progreso
    setTimeout(() => {
        animarBarrasHabilidad();
    }, 500);
}

function crearCardHabilidad(habilidad) {
    const card = document.createElement('div');
    card.className = 'habilidad-card fade-in';
    card.innerHTML = `
        <div class="habilidad-icono">
            <i class="bi ${habilidad.icono}"></i>
        </div>
        <h3 class="habilidad-nombre">${habilidad.nombre}</h3>
        <div class="habilidad-nivel">
            <div class="nivel-progreso" data-nivel="${habilidad.nivel}"></div>
        </div>
        <div class="habilidad-porcentaje">${habilidad.nivel}%</div>
    `;
    return card;
}

function animarBarrasHabilidad() {
    const barras = document.querySelectorAll('.nivel-progreso');
    barras.forEach(barra => {
        const nivel = barra.getAttribute('data-nivel');
        barra.style.width = `${nivel}%`;
    });
}

// ===== PROYECTOS =====
function inicializarProyectos() {
    const contenedor = document.querySelector('.proyectos-grid');
    contenedor.innerHTML = '';
    
    proyectosFiltrados.forEach(proyecto => {
        const card = crearCardProyecto(proyecto);
        contenedor.appendChild(card);
    });
    
    // Ver más en GitHub
    document.getElementById('btn-ver-mas').addEventListener('click', () => {
        window.open('https://github.com/Orlando-Guerra', '_blank');
    });
}

function crearCardProyecto(proyecto) {
    const card = document.createElement('div');
    card.className = 'proyecto-card fade-in';
    card.setAttribute('data-categoria', proyecto.categoria);
    
    card.innerHTML = `
        <div class="proyecto-imagen">
            <i class="bi bi-laptop"></i>
        </div>
        <div class="proyecto-contenido">
            <span class="proyecto-categoria">${proyecto.categoria.toUpperCase()}</span>
            <h3 class="proyecto-titulo">${proyecto.titulo}</h3>
            <p class="proyecto-descripcion">${proyecto.descripcion}</p>
            <div class="proyecto-tecnologias">
                ${proyecto.tecnologias.map(tech => 
                    `<span class="tecnologia-tag">${tech}</span>`
                ).join('')}
            </div>
            <div class="proyecto-links">
                <a href="${proyecto.demo}" class="proyecto-link" target="_blank">
                    <i class="bi bi-eye"></i> Demo
                </a>
                <a href="${proyecto.github}" class="proyecto-link" target="_blank">
                    <i class="bi bi-github"></i> Código
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// ===== FILTROS DE PROYECTOS =====
function inicializarFiltros() {
    const botonesFiltro = document.querySelectorAll('.filtro-btn');
    
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // Quitar clase activa de todos los botones
            botonesFiltro.forEach(btn => btn.classList.remove('activo'));
            
            // Agregar clase activa al botón clickeado
            boton.classList.add('activo');
            
            // Filtrar proyectos
            const filtro = boton.getAttribute('data-filtro');
            filtrarProyectos(filtro);
        });
    });
}

function filtrarProyectos(categoria) {
    if (categoria === 'todos') {
        proyectosFiltrados = [...datosPortafolio.proyectos];
    } else {
        proyectosFiltrados = datosPortafolio.proyectos.filter(
            proyecto => proyecto.categoria === categoria
        );
    }
    
    inicializarProyectos();
}

// ===== FORMULARIO DE CONTACTO =====
function inicializarFormularioContacto() {
    const formulario = document.getElementById('form-contacto');
    
    formulario.addEventListener('submit', function(e) {
        // Validación básica antes de enviar a Formspree
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        if (!nombre || !email || !mensaje) {
            e.preventDefault();
            mostrarAlerta('Por favor, completa todos los campos obligatorios', 'error');
            return;
        }
        
        if (!validarEmail(email)) {
            e.preventDefault();
            mostrarAlerta('Por favor, ingresa un email válido', 'error');
            return;
        }
        
        // Si pasa la validación, Formspree se encargará del envío
        // Podemos mostrar un mensaje de "Enviando..." opcionalmente
        mostrarAlerta('Enviando mensaje...', 'exito');
    });
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function mostrarAlerta(mensaje, tipo) {
    // Remover alerta anterior si existe
    const alertaAnterior = document.querySelector('.alerta');
    if (alertaAnterior) {
        alertaAnterior.remove();
    }
    
    // Crear nueva alerta
    const alerta = document.createElement('div');
    alerta.className = `alerta alerta-${tipo === 'error' ? 'error' : ''}`;
    alerta.innerHTML = `
        <div class="alerta-contenido">
            <i class="bi ${tipo === 'error' ? 'bi-exclamation-circle' : 'bi-check-circle'}"></i>
            <span>${mensaje}</span>
        </div>
        <button class="alerta-cerrar">
            <i class="bi bi-x"></i>
        </button>
    `;
    
    const botonCerrar = alerta.querySelector('.alerta-cerrar');
    botonCerrar.addEventListener('click', () => {
        alerta.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alerta.remove(), 300);
    });
    
    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        if (alerta.parentNode) {
            alerta.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => alerta.remove(), 300);
        }
    }, 5000);
    
    document.body.appendChild(alerta);
}

// ===== MODAL PARA DESCARGAR CV =====
function inicializarModalCV() {
    const botonDescargar = document.getElementById('btn-descargar-cv');
    const modal = document.getElementById('modal-cv');
    const botonCerrar = modal.querySelector('.modal-cerrar');
    
    // Abrir modal
    botonDescargar.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('mostrar');
        }, 10);
    });
    
    // Cerrar modal con el botón X
    botonCerrar.addEventListener('click', () => {
        cerrarModal();
    });
    
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('mostrar')) {
            cerrarModal();
        }
    });
    
    // Enlaces de descarga (simulados)
    const enlacesDescarga = modal.querySelectorAll('.btn');
    enlacesDescarga.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarAlerta('Descarga iniciada (simulación)', 'exito');
            cerrarModal();
            
            // Para una implementación real, descomenta y actualiza estos enlaces:
            // window.open('ruta/a/tu-cv.pdf', '_blank'); // Para PDF
            // window.open('ruta/a/tu-cv.docx', '_blank'); // Para Word
        });
    });
    
    function cerrarModal() {
        modal.classList.remove('mostrar');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// ===== ANIMACIONES AL SCROLL =====
function inicializarAnimacionesScroll() {
    const elementos = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
    
    // Actualizar clase activa en navegación al hacer scroll
    const secciones = document.querySelectorAll('section[id]');
    const enlacesNav = document.querySelectorAll('.menu a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        secciones.forEach(seccion => {
            const seccionTop = seccion.offsetTop;
            const seccionHeight = seccion.clientHeight;
            
            if (scrollY >= (seccionTop - 200)) {
                current = seccion.getAttribute('id');
            }
        });
        
        enlacesNav.forEach(enlace => {
            enlace.classList.remove('active');
            if (enlace.getAttribute('href') === `#${current}`) {
                enlace.classList.add('active');
            }
        });
    });
}

// ===== CONTADORES ANIMADOS =====
function inicializarContadores() {
    const contadores = document.querySelectorAll('.estadistica-numero');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarContador(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    contadores.forEach(contador => {
        observer.observe(contador);
    });
}

function animarContador(elemento) {
    const valorFinal = parseInt(elemento.getAttribute('data-count'));
    const duracion = 2000; // 2 segundos
    const incremento = valorFinal / (duracion / 16); // 60fps
    
    let valorActual = 0;
    
    const timer = setInterval(() => {
        valorActual += incremento;
        
        if (valorActual >= valorFinal) {
            valorActual = valorFinal;
            clearInterval(timer);
        }
        
        elemento.textContent = Math.floor(valorActual) + '+';
    }, 16);
}

// ===== CONSOLA PERSONALIZADA =====
console.log(`
%c🚀 PORTAFOLIO DE ORLANDO RAMÓN %c
%c
¡Hola! 👋 Este es mi portafolio profesional.
Teléfono: +58 412 115 6605
Email: orlandoramon96@gmail.com

Si estás interesado en trabajar conmigo,
¡no dudes en contactarme! 💼
`, 
'background: #2563eb; color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;',
'',
'color: #64748b; line-height: 1.6;'
);