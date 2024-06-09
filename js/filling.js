// Get all tab buttons within the all-category class
const tabButtons = document.querySelectorAll('.filling-category .tab-button');

// Add click event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from the currently active button within all-category
        document.querySelector('.filling-category .tab-button.active').classList.remove('active');
        
        // Add 'active' class to the clicked button
        this.classList.add('active');
    });
});