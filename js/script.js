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

function calculate(formNumber) {
    const num1 = parseInt(document.getElementById('num1_' + formNumber).value);
    const num2 = parseInt(document.getElementById('num2_' + formNumber).value);
    document.getElementById('result_' + formNumber).textContent = num1 * num2; 
}

const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

// //Javascript learning start here
// function showAnswer1() {
//     document.getElementById('demog').innerHTML = (5 + 10) * 2 - (12 / 3);
//     document.getElementById('demoh').style.display = 'block';
//     document.getElementById('reset1').style.display = 'flex';
// }

// function reset1() {
//     document.getElementById('demog').innerHTML = '';
//     document.getElementById('demoh').style.display = 'none';
//     document.getElementById('reset1').style.display = 'none';
// }

// function showAnswer2() {
//     document.getElementById('demoi').innerHTML = 5 * 10;
//     document.getElementById('demoj').style.display = 'block';
//     document.getElementById('reset2').style.display = 'flex';
// }

// function reset2() {
//     document.getElementById('demoi').innerHTML = '';
//     document.getElementById('demoj').style.display = 'none';
//     document.getElementById('reset2').style.display = 'none';
// }

// function showAnswer3() {
//     document.getElementById('demok').innerHTML = 5 + 10 + " " + "Hello" + " " + "World";
//     document.getElementById('demol').style.display = 'block';
//     document.getElementById('reset3').style.display = 'flex';
// }

// function reset3() {
//     document.getElementById('demok').innerHTML = '';
//     document.getElementById('demol').style.display = 'none';
//     document.getElementById('reset3').style.display = 'none';
// }

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.block-outer').forEach(block => {
        console.log('Block found:', block);

        const resultId = block.getAttribute('data-result-id');
        const resultValue = block.getAttribute('data-result-value');
        const resultFunction = block.getAttribute('data-result-function');

        const runButton = block.querySelector('.run-btn');
        const resetButton = block.querySelector('.reset-btn');
        const resultElement = document.getElementById(resultId);

        if (runButton && resetButton && resultElement) {
            console.log('Adding event listeners for:', block);

            runButton.addEventListener('click', () => {
                let result;
                if (resultFunction) {
                    result = window[resultFunction]();
                } else if (resultValue) {
                    try {
                        result = eval(resultValue);
                    } catch (e) {
                        result = 'Error evaluating expression';
                    }
                }
                resultElement.querySelector('span').textContent = result;
                resultElement.style.display = 'block';
                resetButton.style.display = 'flex';
            });

            resetButton.querySelector('.reset-icon').addEventListener('click', () => {
                resultElement.querySelector('span').textContent = '';
                resultElement.style.display = 'none';
                resetButton.style.display = 'none';
            });
        } else {
            console.warn('Missing elements for block:', block);
        }
    });
});

function complexExpression0() {
    let output = '';
    function testImplicitGlobal() {
        if (true) {
            xx = 10;
            output += "Inside if block: " + xx;
        }
        output += "Outside if block: " + xx;
    }

    testImplicitGlobal();
    function anotherFunction() {
        xx = 20;
    }
    
    anotherFunction();
    output += 'After calling anotherFunction, xx is: ' + xx;
    return output;
}

function complexExpression1() {
    let output = '';
    if (true) {
        let y = 20;
        output += "Inside if block: " + y;
    }
    output += "Outside if block: " + (typeof y); 
    return output;
}

function complexExpression2() {
    let output = '';
    function testFunctionScope() {
        if (true) {
            var x = 10;
            output += "Inside if block: " + x;
        }
        output += "Outside if block: " + x;
    }
    testFunctionScope();
    return output;
}

function complexExpression3() {
    let output = '';
    function stringCompareAddition() {
        let x = 'Iqbal ';
        let y = 'Dzakwan |';
        output += "String addition: " + (x + y);
        output += " String comparison: " + (x != y);
    }
    stringCompareAddition();
    return output;
}

function complexExpression4() {
    let output = '';
    function logicalOperators() {
        let x = 10;
        let y = 5;
        output += "Logical AND: " + (x && y);
        output += " Logical OR: " + (x || y);
        output += " Logical NOT: " + (!x);
    }
    logicalOperators();
    return output;
}

function complexExpression5() {
    let output = '';
    function ternaryOperators() {
        let x = 10;
        output += "x is " + (x > 10 ? 'Greater than 10' : 'Less than 10');
    }
    ternaryOperators();
    return output;
}

function complexExpression6() {
    let output = '';
    function typeOperators() {
        let x = 10;
        output += "Type of x: " + typeof x + " | ";
        let y = {name: 'Iqbal', age: 23, city: 'Morowali'};
        output += "Instance of y: " + (y instanceof Object);
    }
    typeOperators();
    return output;
}

function complexExpression7() {
    let output = '';
    function arithmeticOperations() {
        let a = 10;
        let b = 20;
        let x = 100 + 50;
        output += "Literal Number Addition: 100 + 50 = " + x + " | ";
        let y = x + a + b;
        output += "Variable Addition: x + a + b = " + y + " | ";
        let z = (y ** 2 + b) % (a * 2);
        output += "Expression: (y ** 2 + b) % (a * 2) = " + z;
    }
    arithmeticOperations();
    return output;
}

function complexExpression8() {
    let output = '';
    function booleanOperations() {
        let x = 5;
        let y = 5;
        let z = 6;
        output += "x == y: " + (x == y) + " | ";
        output += "x == z: " + (x == z) + " | ";
    }
    booleanOperations();
    return output;
}

function complexExpression9() {
    let output = '';
    function undefinedVariable() {
        let x = ['apple', 'banana', 'cherry'];
        output += "original x: " + x + " | ";
        output += "type of x: " + typeof x + " | ";
        x = undefined;
        output += "x now: " + x + " | ";
        output += "type of x now: " + typeof x;
    }
    undefinedVariable();
    return output;
}

// function complexExpression10() {
//     function squaresum(p1, p2) {
//         return p1 ** 2 + p2 ** 2 + 2 * p1 * p2;
//     }
//     let output = squaresum(3, 4);
//     return output;
// }

function complexExpression10() {
    // Function is called, return value will end up in x
    let x = myFunction(4, 3);
    function myFunction(a, b) {
        return a + b;
    }
    return x;
}

function complexExpression11() {
    const fahrInput = document.getElementById('fahr');
    const userInput = fahrInput.value;
    const resultElement = document.getElementById('demow');

    function toCelcius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }

    if (userInput === '') {
        resultElement.style.display = 'none';
    } else {
        const output = toCelcius(userInput);
        resultElement.innerText = `${userInput}°F equals ${output}°C`;
        resultElement.style.display = 'block';
    }
}
window.onload = function() {
    complexExpression11();
}

function complexExpression12() {
    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }
    let valToCel = toCelsius();
    return valToCel;
}

function complexExpression13() {
    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }
    let valToCel = toCelsius;
    return valToCel;
}