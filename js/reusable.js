document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const dropdown = document.querySelector(".dropdown .dropbtn");

    hamburger.addEventListener("click", function(event) {
        navbarCollapse.classList.toggle("show");
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        if (!navbarCollapse.contains(event.target) && !hamburger.contains(event.target)) {
            navbarCollapse.classList.remove("show");
        }
    });

    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(dropdownToggle => {
        dropdownToggle.addEventListener("click", function(event) {
            const dropdown = this.closest(".dropdown");
            dropdown.classList.toggle("show");
            event.stopPropagation();
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        dropdownToggles.forEach(dropdownToggle => {
            const dropdown = dropdownToggle.closest(".dropdown");
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("show");
            }
        });
    });
});
