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
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
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