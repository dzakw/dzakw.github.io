document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    hamburger.addEventListener("click", function(event) {
        navbarCollapse.classList.toggle("show");
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        if (!navbarCollapse.contains(event.target) && !hamburger.contains(event.target)) {
            navbarCollapse.classList.remove("show");
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const accordionInner = document.querySelector(".accordion-inner");
    const dropdownContent = document.querySelector(".navbar-collapse .dropdown-content");

    accordionInner.addEventListener("click", function(event) {
        dropdownContent.classList.toggle("show");
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        if (!dropdownContent.contains(event.target) && !accordionInner.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

