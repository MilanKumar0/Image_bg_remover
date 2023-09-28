document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

    
        // Example: Check if the fields are not empty
        if (!username || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Example: Redirect to a success page
        window.location.href = 'success.html';
    });
});
