document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('form-message');

    // Basic email validation
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = 'Thank you for signing up! Check your email for confirmation.';
        message.style.color = '#28a745';
        // Here you would typically send the email to your backend or email service (e.g., Mailchimp API)
        document.getElementById('email-form').reset();
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = '#dc3545';
    }
});
