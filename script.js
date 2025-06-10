// Email form handling (Resources page)
const emailForm = document.getElementById('email-form');
if (emailForm) {
    emailForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('form-message');

        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            message.textContent = 'Thank you for signing up! Check your email for confirmation.';
            message.style.color = '#28a745';
            // Integrate with email service (e.g., Mailchimp) here
            emailForm.reset();
        } else {
            message.textContent = 'Please enter a valid email address.';
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
            message.textContent = 'Thank you for your message! We’ll get back to you soon.';
            message.style.color = '#28a745';
            // Send form data to backend or email service here
            contactForm.reset();
        } else {
            message.textContent = 'Please fill out all fields correctly.';
            message.style.color = '#dc3545';
        }
    });
}
