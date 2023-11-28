document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('submitButton').addEventListener('click', function () {
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        const emailErrorMessage = document.getElementById('email-error-message');

        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValue || !emailRegex.test(emailValue)) {
            // Invalid email
            emailInput.classList.add('error');
            emailErrorMessage.innerText = 'Valid email required';
        } else {
            // Valid email
            emailInput.classList.remove('error');
            emailErrorMessage.innerText = '';
            alert('Redirecting to thank.html');
            window.location.href = 'thank.html';
        }
    });

});
