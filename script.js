document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = navLinks.querySelectorAll('a');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 2. Sticky Header
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Highlight Active Nav Link based on URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });

    // 4. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                formStatus.style.color = '#ff0000';
                formStatus.textContent = 'Please fill out all required fields.';
                return;
            }

            // Simple email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.style.color = '#ff0000';
                formStatus.textContent = 'Please enter a valid email address.';
                return;
            }

            // Simulate successful submission
            formStatus.style.color = '#00ff00';
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';
            contactForm.reset();
            
            // Clear status after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }
});
