// Simple script for interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Add a simple reveal animation on scroll for glass cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Handle form submission prevent default
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sent Successfully!';
            btn.style.background = '#00c853';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                form.reset();
            }, 3000);
        });
    }
});
