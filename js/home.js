//All these Javascript function fully generated by the help of AI

const mainMenu = document.querySelector('.main-menu');
let scrollInterval;

// Function to handle continuous scrolling
function startScrolling(direction) {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        mainMenu.scrollLeft += direction;
    }, 10); // Adjust interval time for smoothness
}

function stopScrolling() {
    clearInterval(scrollInterval);
}

document.querySelector('.left-button').addEventListener('mousedown', () => {
    startScrolling(-10); // Scroll left
});

document.querySelector('.right-button').addEventListener('mousedown', () => {
    startScrolling(10); // Scroll right
});

document.querySelector('.left-button').addEventListener('mouseup', stopScrolling);
document.querySelector('.right-button').addEventListener('mouseup', stopScrolling);
document.querySelector('.left-button').addEventListener('mouseleave', stopScrolling);
document.querySelector('.right-button').addEventListener('mouseleave', stopScrolling);

// Ensure touch events are also covered for mobile devices
document.querySelector('.left-button').addEventListener('touchstart', () => {
    startScrolling(-10);
});

document.querySelector('.right-button').addEventListener('touchstart', () => {
    startScrolling(10);
});

document.querySelector('.left-button').addEventListener('touchend', stopScrolling);
document.querySelector('.right-button').addEventListener('touchend', stopScrolling);


const slider = document.querySelector('.main-menu');
    let isDown = false;
    let startX;
    let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('activ');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('activ');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('activ');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});

document.querySelector('.left-button').addEventListener('click', () => {
    slider.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.querySelector('.right-button').addEventListener('click', () => {
    slider.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

// Get all tab buttons within the all-category class
const tabButtons = document.querySelectorAll('.all-category .tab-button');

// Add click event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from the currently active button within all-category
        document.querySelector('.all-category .tab-button.active').classList.remove('active');
        
        // Add 'active' class to the clicked button
        this.classList.add('active');
    });
});

document.getElementById('scroll-button').addEventListener('click', function() {
    document.getElementById('all-menu').scrollIntoView({ behavior: 'smooth' });
});