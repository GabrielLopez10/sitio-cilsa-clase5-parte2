document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    var form = document.querySelector('.needs-validation');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default submission
        
        if (!form.checkValidity()) {
            event.stopPropagation();  // Stop form submission if invalid
        } else {
            // If form is valid, show the modal
            var modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
            modal.show();
            
            // Optionally clear the form fields after showing the modal
            form.reset();
            
            // Remove validation feedback classes after reset
            form.classList.remove('was-validated');
        }

        // Add Bootstrap validation classes
        form.classList.add('was-validated');
    }, false);
});
