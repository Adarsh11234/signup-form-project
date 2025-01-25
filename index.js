const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const emailSuccess = document.getElementById('emailSuccess');
const passwordError = document.getElementById('passwordError');
const passwordSuccess = document.getElementById('passwordSuccess');
const form = document.getElementById('signupForm');

emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailError.style.display = 'none';
        emailSuccess.style.display = 'block';
    } else {
        emailError.style.display = 'block';
        emailSuccess.style.display = 'none';
    }
});

passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value;
    if (passwordValue.length >= 8) {
        passwordError.style.display = 'none';
        passwordSuccess.style.display = 'block';
    } else {
        passwordError.style.display = 'block';
        passwordSuccess.style.display = 'none';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailSuccess.style.display === 'block' && passwordSuccess.style.display === 'block') {
        const confirmation = confirm('Do you want to sign up?');
        if (confirmation) {
            alert('Successful Signup!');
            form.reset();
            emailSuccess.style.display = 'none';
            passwordSuccess.style.display = 'none';
        } else {
            location.reload();
        }
    }
});
