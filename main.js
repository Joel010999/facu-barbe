document.addEventListener('DOMContentLoaded', () => {
    // Subtle loading animation for hero text
    const heroTexts = document.querySelectorAll('.hero-text-pane > *');
    heroTexts.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 150));
    });

    // Form submission mock
    const form = document.getElementById('bookingForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.textContent = 'Processing...';
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';

            setTimeout(() => {
                btn.textContent = 'Confirmed ✓';
                btn.style.background = 'transparent';
                btn.style.color = 'var(--primary)';
                btn.style.border = '1px solid var(--primary)';
                form.reset();
            }, 1500);
        });
    }

    // Scroll reveal for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('section').forEach(sec => {
        if(!sec.classList.contains('hero') && !sec.classList.contains('perfumes-banner')) {
            sec.style.opacity = '0';
            sec.style.transform = 'translateY(40px)';
            sec.style.transition = 'opacity 1s ease, transform 1s ease';
            observer.observe(sec);
        }
    });

    const bannerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-banner');
            } else {
                entry.target.classList.remove('active-banner');
            }
        });
    }, { 
        rootMargin: '-35% 0px -35% 0px', 
        threshold: 0
    });

    document.querySelectorAll('.perfumes-banner').forEach(banner => {
        bannerObserver.observe(banner);
    });
});
