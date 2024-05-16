document.addEventListener("DOMContentLoaded", function() {
    const formElements = document.querySelectorAll('.form');

    formElements.forEach(form => {
        form.addEventListener('focus', function() {
            const icon = this.nextElementSibling;
            this.style.borderColor = '#50B148';
            if (icon && icon.classList.contains('icon')) {
                icon.style.borderColor = '#50B148';
            }
        });

        form.addEventListener('blur', function() {
            const icon = this.nextElementSibling;
            this.style.borderColor = '#D9D9D9';
            if (icon && icon.classList.contains('icon')) {
                icon.style.borderColor = '#D9D9D9';
            }
        });
    });
});