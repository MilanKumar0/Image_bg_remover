document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        alert("Form submitted!");

        // Clear the form fields after submission
        form.reset();
    });
});