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
    
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuCheckbox.checked = false;
            }
        });
    });
    
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
    contenedor.innerHTML = '';
    
    datosPortafolio.habilidades.forEach(habilidad => {
        const card = crearCardHabilidad(habilidad);
        contenedor.appendChild(card);
    });
    
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
            <img src="img/${proyecto.imagen}.jpg" alt="${proyecto.titulo}" onerror="this.innerHTML='<i class=bi-laptop></i>'">
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
            botonesFiltro.forEach(btn => btn.classList.remove('activo'));
            boton.classList.add('activo');
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
    if(!formulario) return;

    formulario.addEventListener('submit', function(e) {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        if (!nombre || !email || !mensaje) {
            e.preventDefault();
            mostrarAlerta('Por favor, completa todos los campos', 'error');
            return;
        }
        
        if (!validarEmail(email)) {
            e.preventDefault();
            mostrarAlerta('Por favor, ingresa un email válido', 'error');
            return;
        }
        
        mostrarAlerta('Enviando mensaje...', 'exito');
    });
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mostrarAlerta(mensaje, tipo) {
    const alertaAnterior = document.querySelector('.alerta');
    if (alertaAnterior) alertaAnterior.remove();
    
    const alerta = document.createElement('div');
    alerta.className = `alerta alerta-${tipo === 'error' ? 'error' : ''}`;
    alerta.innerHTML = `
        <div class="alerta-contenido">
            <i class="bi ${tipo === 'error' ? 'bi-exclamation-circle' : 'bi-check-circle'}"></i>
            <span>${mensaje}</span>
        </div>
        <button class="alerta-cerrar"><i class="bi bi-x"></i></button>
    `;
    
    alerta.querySelector('.alerta-cerrar').addEventListener('click', () => {
        alerta.remove();
    });
    
    setTimeout(() => { if (alerta.parentNode) alerta.remove(); }, 5000);
    document.body.appendChild(alerta);
}

// ===== MODAL PARA DESCARGAR CV (ACTUALIZADO) =====
function inicializarModalCV() {
    const botonDescargar = document.getElementById('btn-descargar-cv');
    const modal = document.getElementById('modal-cv');
    if(!modal || !botonDescargar) return;

    const botonCerrar = modal.querySelector('.modal-cerrar');
    
    botonDescargar.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('mostrar'), 10);
    });
    
    botonCerrar.addEventListener('click', cerrarModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) cerrarModal(); });

    // ENLACES REALES AL CV
    const enlacesDescarga = modal.querySelectorAll('.btn');
    enlacesDescarga.forEach(enlace => {
        enlace.addEventListener('click', () => {
            window.open('img/cv_orlando.pdf', '_blank'); 
            mostrarAlerta('Abriendo currículum...', 'exito');
            cerrarModal();
        });
    });
    
    function cerrarModal() {
        modal.classList.remove('mostrar');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

// ===== ANIMACIONES Y OTROS =====
function inicializarAnimacionesScroll() {
    const elementos = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    
    elementos.forEach(el => observer.observe(el));
}

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
    contadores.forEach(c => observer.observe(c));
}

function animarContador(el) {
    const valorFinal = parseInt(el.getAttribute('data-count'));
    let valorActual = 0;
    const timer = setInterval(() => {
        valorActual += valorFinal / 100;
        if (valorActual >= valorFinal) {
            el.textContent = valorFinal + '+';
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(valorActual) + '+';
        }
    }, 20);
}

console.log("%c🚀 PORTAFOLIO UNIFICADO", "color: #2563eb; font-weight: bold; font-size: 1.2rem;");