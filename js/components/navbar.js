const navLinksData = [
    { name: "Início", path: "index.html", folder: null }, // Null porque está na raiz
    { name: "Sobre", path: "index.html#about", folder: "about" },
    { name: "Portfólio", path: "pages/portfolio/index.html", folder: "portfolio" },
    { name: "Formação", path: "pages/formacao/index.html", folder: "formacao" }
];

function loadComponents() {
    const fullPath = window.location.pathname;
    const isInSubfolder = fullPath.includes('/pages/');
    const prefix = isInSubfolder ? "../../" : "";

    const navbarHTML = `
        <nav class="container nav-container">
            <div class="logo">
                <span class="code-bracket">&lt;</span>Micas<span class="code-bracket">/&gt;</span>
            </div>
            <ul class="nav-links">
                ${navLinksData.map(link => {
                    let isActive = false;

                    if (link.folder === null) {
                        // É Início se NÃO houver "/pages/" na URL
                        isActive = !isInSubfolder && !fullPath.includes('#');
                    } else {
                        // É outra página se o nome da pasta estiver na URL
                        isActive = fullPath.includes(link.folder);
                    }

                    const activeClass = isActive ? 'style="color: var(--accent); border-bottom: 2px solid var(--accent);"' : '';

                    return `<li><a href="${prefix}${link.path}" ${activeClass}>${link.name}</a></li>`;
                }).join('')}
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    `;

    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = navbarHTML;
        header.classList.add('header');
    } 
}

document.addEventListener("DOMContentLoaded", loadComponents);