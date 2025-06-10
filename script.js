// Email form handling (Resources page)
const emailForm = document.getElementById('email-form');
if (emailForm) {
    emailForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('form-message');

        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            message.textContent = 'Haha, you’re in! Check your email for jokes & tips!';
            message.style.color = '#28a745';
            // Integrate with email service (e.g., Mailchimp) here
            emailForm.reset();
        } else {
            message.textContent = 'Oops, that email’s as off as your last punchline!';
            message.style.color = '#dc3545';
        }
    });
}

// Contact form handling (Contact page)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('contact-email').value;
        const messageText = document.getElementById('message').value;
        const message = document.getElementById('contact-form-message');

        if (name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && messageText) {
            message.textContent = 'Message sent! Your joke’s under review, but your pain’s my priority!';
            message.style.color = '#28a745';
            // Send form data to backend or email service here
            contactForm.reset();
        } else {
            message.textContent = 'Fill it right, or I’ll prescribe 10 push-ups for bad form!';
            message.style.color = '#dc3545';
        }
    });
}
