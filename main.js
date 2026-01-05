const translations = {
    es: {
        "nav-home": "Inicio",
        "nav-projects": "Proyectos",
        "nav-about": "Sobre mí",
        "hero-title": "Creando mundos, <span class=\"highlight\">un pixel a la vez.</span>",
        "hero-subtitle": "Desarrollador de minivideojuegos independiente enfocado en experiencias rápidas y divertidas.",
        "hero-cta": "Explorar Juegos",
        "projects-title": "Mis Minijuegos",
        "project-action": "Jugar ahora",
        "about-text": "<p>Soy un desarrollador de videojuegos en formación. Actualmente estoy comenzando con proyectos sencillos utilizando HTML, CSS y JavaScript, como un 3 en raya, con el objetivo de comprender bien las bases de la programación y la lógica de los juegos.</p><p>Me interesa crear juegos simples pero funcionales, como el 3 en raya o Snake, centrándome en las mecánicas básicas, la lógica interna y la claridad del código. Cada proyecto representa una oportunidad para aprender y mejorar, tanto a nivel técnico como de diseño.</p><p>Mi objetivo profesional es desarrollar en el futuro un juego más avanzado y llegar a publicarlo, utilizando motores como Unity o tecnologías similares. Janiito Studio es mi portafolio personal, donde muestro este proceso de aprendizaje y la evolución de mis proyectos.</p>",
        "nav-contact": "Contacto",
        "contact-title": "Contacto",
        "contact-text": "<blockquote>Si quieres contactar conmigo para comentarios, feedback o posibles colaboraciones, puedes hacerlo a través del correo electrónico.</blockquote><div class='contact-links'><p><strong>Email:</strong> <a href='mailto:janiitostudio@gmail.com'>janiitostudio@gmail.com</a></p><p><strong>GitHub:</strong> <a href='https://github.com/Janiito-Studio' target='_blank'>github.com/Janiito-Studio</a></p><p><strong>Itch.io:</strong> <a href='https://janiito-studio.itch.io/' target='_blank'>janiito-studio.itch.io</a></p></div>"
    },
    ca: {
        "nav-home": "Inici",
        "nav-projects": "Projectes",
        "nav-about": "Sobre mi",
        "hero-title": "Creant mons, <span class=\"highlight\">un píxel a la vegada.</span>",
        "hero-subtitle": "Desenvolupador de minivideojocs independent enfocat en experiències ràpides i divertides.",
        "hero-cta": "Explorar Jocs",
        "projects-title": "Els meus Minijocs",
        "project-action": "Jugar ara",
        "about-text": "<p>Sóc un desenvolupador de videojocs en formació. Actualment estic començant amb projectes senzills utilitzant HTML, CSS i JavaScript, com ara un 3 en ratlla, amb l’objectiu d’entendre bé les bases de la programació i la lògica dels jocs.</p><p>M’interessa crear jocs simples però funcionals, com el 3 en ratlla o el Snake, centrant-me en les mecàniques bàsiques, el funcionament intern del codi i la claredat de la implementació. Cada projecte és una oportunitat per aprendre i millorar, tant a nivell tècnic com de disseny.</p><p>El meu objectiu professional és desenvolupar, en el futur, un joc més avançat i arribar a publicar-lo, utilitzant motors com Unity o tecnologies similars. Janiito Studio és el meu portafoli personal, on documento aquest procés d’aprenentatge i l’evolució dels meus projectes.</p>",
        "nav-contact": "Contacte",
        "contact-title": "Contacte",
        "contact-text": "<blockquote>Si vols contactar amb mi per comentaris, feedback o possibles col·laboracions, pots fer-ho a través del correu electrònic.</blockquote><div class='contact-links'><p><strong>Email:</strong> <a href='mailto:janiitostudio@gmail.com'>janiitostudio@gmail.com</a></p><p><strong>GitHub:</strong> <a href='https://github.com/Janiito-Studio' target='_blank'>github.com/Janiito-Studio</a></p><p><strong>Itch.io:</strong> <a href='https://janiito-studio.itch.io/' target='_blank'>janiito-studio.itch.io</a></p></div>"
    },
    en: {
        "nav-home": "Home",
        "nav-projects": "Projects",
        "nav-about": "About me",
        "hero-title": "Creating worlds, <span class=\"highlight\">one pixel at a time.</span>",
        "hero-subtitle": "Independent minigame developer focused on fast and fun experiences.",
        "hero-cta": "Explore Games",
        "projects-title": "My Minigames",
        "project-action": "Play now",
        "about-text": "<p>I am a game developer in training. I am currently starting with simple projects using HTML, CSS, and JavaScript, such as a Tic-Tac-Toe game, with the goal of building a solid understanding of programming fundamentals and game logic.</p><p>I am interested in creating simple but functional games, like Tic-Tac-Toe or Snake, focusing on basic mechanics, internal logic, and clean code structure. Each project is an opportunity to learn and improve, both technically and in terms of design.</p><p>My professional goal is to develop a more advanced game in the future and eventually publish it, using engines such as Unity or similar tools. Janiito Studio serves as my personal portfolio, documenting my learning process and project progression.</p>",
        "nav-contact": "Contact",
        "contact-title": "Contact",
        "contact-text": "<blockquote>If you would like to contact me for comments, feedback, or possible collaborations, you can do so via email.</blockquote><div class='contact-links'><p><strong>Email:</strong> <a href='mailto:janiitostudio@gmail.com'>janiitostudio@gmail.com</a></p><p><strong>GitHub:</strong> <a href='https://github.com/Janiito-Studio' target='_blank'>github.com/Janiito-Studio</a></p><p><strong>Itch.io:</strong> <a href='https://janiito-studio.itch.io/' target='_blank'>janiito-studio.itch.io</a></p></div>"
    }
};

const projects = [
    {
        id: 1,
        title: "Tres en Ratlla Online",
        url: "https://janiito-studio.github.io/tres-en-raya-online/",
        descriptions: {
            es: "Un juego de 3 en raya moderno con modo online y estética minimalista.",
            ca: "Un joc de 3 en ratlla modern amb mode online i estètica minimalista.",
            en: "A modern Tic-Tac-Toe game with online mode and minimalist aesthetic."
        },
        image: "Tres En Ratlla Portada.png",
        tags: {
            es: ["Estrategia", "Multijugador", "Web"],
            ca: ["Estratègia", "Multijugador", "Web"],
            en: ["Strategy", "Multiplayer", "Web"]
        }
    }
];

let currentLang = localStorage.getItem('language') || 'es';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = translations[lang][key];
    });

    const projectsTitle = document.querySelector('.projects-section h2');
    if (projectsTitle) {
        projectsTitle.textContent = translations[lang]["projects-title"];
    }

    renderProjects();
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = '';

    projects.forEach((project, index) => {
        const card = document.createElement('a');
        card.href = project.url;
        card.target = "_blank";
        card.className = 'project-card stagger-in';
        card.style.transitionDelay = `${index * 0.12}s`;

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.descriptions[currentLang]}</p>
                <div class="project-tags">
                    ${project.tags[currentLang].map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    // Re-trigger observer for new elements
    observeElements();
}

// Intersection Observer for animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .stagger-in, section').forEach(el => {
        if (!el.classList.contains('fade-in') && !el.classList.contains('stagger-in')) {
            el.classList.add('fade-in');
        }
        observer.observe(el);
    });
}

// Theme Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    // Set initial language
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = currentLang;
        updateLanguage(currentLang);
    }

    // Initial Observation
    observeElements();

    // Event Listeners
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (langSelect) {
        langSelect.addEventListener('change', (e) => updateLanguage(e.target.value));
    }
});
