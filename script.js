// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('success-message').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('success-message').classList.add('hidden');
    }, 3000);
});
