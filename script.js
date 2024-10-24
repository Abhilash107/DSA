// Function to handle card tilt effect
function setupCardTiltEffect(cards) {
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
            card.style.transform = `translateZ(55px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.4s ease';
            card.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
        });
    });
}

// Function for smooth scrolling
function setupSmoothScrolling(links) {
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Function to handle layout change on window resize
function setupResponsiveLayout() {
    const projectSection = document.getElementById('projects');
    const updateLayout = () => {
        projectSection.style.display = window.innerWidth < 770 ? 'block' : 'flex';
        projectSection.style.flexDirection = window.innerWidth < 770 ? 'column' : 'row';
        projectSection.style.justifyContent = 'center';
    };
    window.addEventListener('resize', updateLayout);
    updateLayout(); // Call once to set initial layout
}

// Function to setup theme toggler
function setupThemeToggler() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Theme';
    Object.assign(toggleButton.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 15px',
        backgroundColor: '#61dafb',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
    });
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Initialize all functionalities
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('#projects div');
    const navLinks = document.querySelectorAll('nav ul li a');

    setupCardTiltEffect(projectCards);
    setupSmoothScrolling(navLinks);
    setupResponsiveLayout();
    setupThemeToggler();
});