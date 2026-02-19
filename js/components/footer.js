const footerHTML = `
<div class="container footer-grid">
    <div class="footer-brand">
        <h2 class="mono-text">System Status: Online</h2>
        <p>Engenharia da Computação & Inovação</p>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/miqu%C3%A9ias-pereira-coelho-8a0071218/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/miqueiaspcoelho" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://instagram.com/mi.queias" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
    </div>
    <div class="footer-form">
        <p class="copyright">© <span id="current-year"></span> Miquéias Pereira Coelho</p>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
        
        // Atualiza o ano automaticamente após inserir o HTML
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    } 
});