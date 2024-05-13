//This one toggle the section, used for the content
function toggleSection(sectionId) {
    var sectionContent = document.getElementById(sectionId + "Content");
    if (sectionContent.style.display === "none") {
        sectionContent.style.display = "block";
    } else {
        sectionContent.style.display = "none";
    }
}

//this one toggle the section, but it's for flex display
function toggleSectionFl(sectionId) {
    var sectionContent = document.getElementById(sectionId + "Content");
    if (sectionContent.style.display === "none") {
        sectionContent.style.display = "flex";
    } else {
        sectionContent.style.display = "none";
    }
}

//this one only open the section, used for table of content
function openSection(sectionId) {
    var sectionContent = document.getElementById(sectionId + "Content");
    sectionContent.style.display = "block";
}

//this one toggle all sections
function toggleAllSections(...sectionIds) {
    var allOpen = true;
    var allClosed = true;

    // Check the current state of all sections
    sectionIds.forEach(function(sectionId) {
        var sectionContent = document.getElementById(sectionId + "Content");
        if (sectionContent.style.display === "none") {
            allOpen = false; // If any section is closed, not all sections are open
        } else {
            allClosed = false; // If any section is open, not all sections are closed
        }
    });

    // Toggle the state of all sections based on the current state
    if (allOpen || allClosed) {
        // If all sections are open or all sections are closed, toggle them all
        sectionIds.forEach(function(sectionId) {
            var sectionContent = document.getElementById(sectionId + "Content");
            sectionContent.style.display = allOpen ? "none" : "block"; // Toggle the display
        });
    } else {
        // If some sections are open and some are closed, open them all
        sectionIds.forEach(function(sectionId) {
            var sectionContent = document.getElementById(sectionId + "Content");
            sectionContent.style.display = "block"; // Open all sections
        });
    }
}

var lastOpenedExampleId = null; // Track the last opened example

function toggleExample(exampleId) {
    event.preventDefault(); // Assuming you still want to prevent default behavior
    var example = document.getElementById(exampleId);

    // Close any currently open example (if it's not the current one)
    if (lastOpenedExampleId !== null && lastOpenedExampleId !== exampleId) {
        var lastOpenedExample = document.getElementById(lastOpenedExampleId);
        lastOpenedExample.style.display = "none";
    }

    // Toggle the current example 
    if (example.style.display !== "none") {
        example.style.display = "none";
    } else {
        example.style.display = "block";
    }

    lastOpenedExampleId = example.style.display === "block" ? exampleId : null; // Update tracker
}

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top];
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        const currentX = event.clientX - canvas.getBoundingClientRect().left;
        const currentY = event.clientY - canvas.getBoundingClientRect().top;
        draw(lastX, lastY, currentX, currentY);
        [lastX, lastY] = [currentX, currentY];
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

function draw(startX, startY, endX, endY) {
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').value = num1 * num2; 
}