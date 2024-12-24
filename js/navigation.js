// Handle smooth scrolling for navigation
export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href').length > 1) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
}

// Handle navbar scroll effects
export function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const updateNavbarStyle = () => {
        navbar.style.background = window.scrollY > 50 
            ? 'rgba(255, 255, 255, 0.95)' 
            : '#fff';
    };

    window.addEventListener('scroll', updateNavbarStyle);
    updateNavbarStyle();
}