// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Contact Form Submission =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Simulate form submission
        console.log('Form submitted with email:', email);
        alert(`Welcome! We've sent a confirmation email to ${email}`);
        
        // Reset form
        this.reset();
    });
}

// ===== Button Click Handlers =====
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function (e) {
        const buttonText = this.textContent.toLowerCase();
        
        if (buttonText.includes('start trading') || buttonText.includes('get started')) {
            console.log('Starting trading flow...');
            // Add your trading flow logic here
        } else if (buttonText.includes('watch demo')) {
            console.log('Opening demo video...');
            // Add demo video logic here
        } else if (buttonText.includes('choose plan')) {
            console.log('Plan selected');
            // Add plan selection logic here
        }
    });
});

// ===== Navbar Active Link on Scroll =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// ===== Add Active Link Styling =====
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-color) !important;
        border-bottom: 2px solid var(--primary-color);
        padding-bottom: 2px;
    }
`;
document.head.appendChild(style);

// ===== Scroll Animation for Cards =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .pricing-card, .stat').forEach(card => {
    observer.observe(card);
});

// Add animation keyframes
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// ===== Mobile Menu Toggle (if needed) =====
function initMobileMenu() {
    // Add mobile menu functionality here if needed
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth <= 768) {
        console.log('Mobile menu can be implemented here');
    }
}

document.addEventListener('DOMContentLoaded', initMobileMenu);
window.addEventListener('resize', initMobileMenu);

// ===== Bitcoin Price Ticker Simulation =====
function updatePriceTicker() {
    // This is a placeholder - connect to a real API in production
    const basePrice = 45000;
    const variation = (Math.random() - 0.5) * 1000;
    const currentPrice = basePrice + variation;
    
    console.log(`Bitcoin Price: $${currentPrice.toFixed(2)}`);
    return currentPrice;
}

// Update price every 30 seconds
setInterval(updatePriceTicker, 30000);

// Initial price update
updatePriceTicker();
