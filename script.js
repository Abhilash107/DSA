// 3D Hover Effect for Project Cards
const projectCards = document.querySelectorAll('#projects div');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
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

// Smooth Scrolling for Navigation
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Layout Change on Window Resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const projectSection = document.getElementById('projects');

    if (width < 770) {
        projectSection.style.display = 'block';
    } else {
        projectSection.style.display = 'flex';
        projectSection.style.flexDirection = 'row';
        projectSection.style.justifyContent = 'center';
    }
});

// Theme Toggler (Light/Dark Mode)
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 15px';
toggleButton.style.backgroundColor = '#61dafb';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
