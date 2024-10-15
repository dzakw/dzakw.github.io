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
var lastOpenedChildExampleId = null; // Track the last opened child example

function toggleExample(exampleId) {
    event.preventDefault();
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
        example.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    lastOpenedExampleId = example.style.display === "block" ? exampleId : null;

    // If the example has a child example, toggle its visibility too
    var childExampleId = exampleId + "Child";
    var childExample = document.getElementById(childExampleId);
    if (childExample) {
        toggleChildExample(childExampleId);
    }
}

function toggleChildExample(childExampleId) {
    event.preventDefault();
    var childExample = document.getElementById(childExampleId);

    // Close any currently open child example (if it's not the current one)
    if (lastOpenedChildExampleId !== null && lastOpenedChildExampleId !== childExampleId) {
        var lastOpenedChildExample = document.getElementById(lastOpenedChildExampleId);
        lastOpenedChildExample.style.display = "none";
    }

    // Toggle the current child example
    if (childExample.style.display !== "none") {
        childExample.style.display = "none";
    } else {
        childExample.style.display = "block";
        childExample.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    lastOpenedChildExampleId = childExample.style.display === "block" ? childExampleId : null;
}

function toggleBoth(sectionId, exampleId) {
    var sectionContent = document.getElementById(sectionId + "Content");
    var example = document.getElementById(exampleId);

    // Check current visibility states
    var sectionVisible = sectionContent.style.display === "block";
    var exampleVisible = example.style.display === "block";

    // Open both if either is visible, but the other is not
    if (sectionVisible && !exampleVisible) {
        example.style.display = "block";
        example.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (!sectionVisible && exampleVisible) {
        sectionContent.style.display = "block";
    } else {
        // Toggle normally if both are in the same state (both hidden or both visible)
        sectionContent.style.display = sectionVisible ? "none" : "block";
        example.style.display = exampleVisible ? "none" : "block";
        if (!exampleVisible) {
            example.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Update the last opened example tracking
    lastOpenedExampleId = example.style.display === "block" ? exampleId : null;
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
        const resultId = block.getAttribute('data-result-id');
        const resultValue = block.getAttribute('data-result-value');
        const resultFunction = block.getAttribute('data-result-function');

        const runButton = block.querySelector('.run-btn');
        const resetButton = block.querySelector('.reset-btn');
        const resultElement = document.getElementById(resultId);

        if (runButton && resetButton && resultElement) {
            runButton.addEventListener('click', () => {
                resultElement.querySelector('span').innerHTML = ''; // Clear previous result
                resultElement.style.display = 'block'; // Show result area

                if (resultFunction && typeof window[resultFunction] === 'function') {
                    // Call the function dynamically by name (e.g., complex1, complex296, etc.)
                    const result = window[resultFunction]();
                    if (typeof result !== 'undefined') {
                        resultElement.querySelector('span').innerHTML = result;
                    }
                } 
                // Evaluate the result value if no function is specified
                else if (resultValue) {
                    try {
                        const evaluatedResult = eval(resultValue);
                        resultElement.querySelector('span').innerHTML = evaluatedResult;
                    } catch (e) {
                        resultElement.querySelector('span').innerHTML = 'Error evaluating expression';
                    }
                }

                resetButton.style.display = 'flex'; // Show reset button
            });

            resetButton.querySelector('.reset-icon').addEventListener('click', () => {
                resultElement.querySelector('span').innerHTML = ''; // Clear result
                resultElement.style.display = 'none'; // Hide result
                resetButton.style.display = 'none'; // Hide reset button
            });
        } else {
            console.warn('Missing elements for block:', block);
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Find the block specifically meant for complex191
    document.querySelectorAll('.block-outer').forEach(block => {
        const resultFunction = block.getAttribute('data-result-function');
        
        // Only set up event listeners if the function matches 'complex191'
        if (resultFunction === 'complex191') {
            const resultId = block.getAttribute('data-result-id');
            const runButton = block.querySelector('.run-btn');
            const resetButton = block.querySelector('.reset-btn');
            const resultElement = document.getElementById(resultId);

            if (runButton && resetButton && resultElement) {
                console.log('Setting up complex191:', block);

                // Add event listener for the Run button to trigger complex191
                runButton.addEventListener('click', () => {
                    // Execute the specific function, complex191
                    if (typeof window[resultFunction] === 'function') {
                        window[resultFunction]();
                    }

                    resultElement.style.display = 'block'; // Show the result area
                    resetButton.style.display = 'flex';   // Show the reset button
                });

                // Add event listener for the Reset button
                resetButton.querySelector('.reset-icon').addEventListener('click', () => {
                    resultElement.innerHTML = '<span></span>'; // Clear generated content
                    resultElement.style.display = 'none';       // Hide the result area
                    resetButton.style.display = 'none';         // Hide the reset button
                    resultElement.classList.remove('generated'); // Allow regeneration if needed
                });
            } else {
                console.warn('Missing elements for complex191 block:', block);
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('customForm');
    const inputs = form.querySelectorAll('input[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            const errorMessage = input.nextElementSibling;
            if (!input.checkValidity()) {
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('customForm');
    const tableBody = document.getElementById('tableBody');

    // Function to fetch and display the latest 10 entries
    function loadLatestData() {
        fetch('php/fetch_latest.php') // Fetch latest 10 records from the server
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = ''; // Clear current table content
                data.forEach(row => {
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${row.name}</td>
                        <td>${row.email}</td>
                        <td>${row.car || '-'}</td>
                        <td>${row.nationality || '-'}</td>
                        <td>${row.isMarried === '1' ? 'Married' : 'Single'}</td>
                    `;
                    tableBody.appendChild(newRow);
                });
            })
            .catch(error => console.error('Error fetching latest data:', error));
    }

    // Load the latest data on page load
    loadLatestData();

    // Handle form submission with AJAX
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form); // Create a FormData object with the form data

        fetch('php/insert.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Reload the latest data
                    loadLatestData();

                    // Clear the form fields
                    form.reset();

                    // Scroll to the table
                    document.getElementById('dataDisplay').scrollIntoView({ behavior: 'smooth' });

                    // Display success alert
                    alert('Data successfully recorded.');
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    });
});

function complex0() {
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

function complex1() {
    let output = '';
    if (true) {
        let y = 20;
        output += "Inside if block: " + y;
    }
    output += "Outside if block: " + (typeof y); 
    return output;
}

function complex2() {
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

function complex3() {
    let output = '';
    function stringCompareAddition() {
        let x = 'Max ';
        let y = 'Verstappen |';
        output += "String addition: " + (x + y);
        output += " String comparison: " + (x != y);
    }
    stringCompareAddition();
    return output;
}

function complex4() {
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

function complex5() {
    let output = '';
    function ternaryOperators() {
        let x = 10;
        output += "x is " + (x > 10 ? 'Greater than 10' : 'Less than 10');
    }
    ternaryOperators();
    return output;
}

function complex6() {
    let output = '';
    function typeOperators() {
        let x = 10;
        output += "Type of x: " + typeof x + " | ";
        let y = {name: 'Max', age: 23, city: 'Morowali'};
        output += "Instance of y: " + (y instanceof Object);
    }
    typeOperators();
    return output;
}

function complex7() {
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

function complex8() {
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

function complex9() {
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

// function complex10() {
//     function squaresum(p1, p2) {
//         return p1 ** 2 + p2 ** 2 + 2 * p1 * p2;
//     }
//     let output = squaresum(3, 4);
//     return output;
// }

function complex10() {
    // Function is called, return value will end up in x
    let x = myFunction(4, 3);
    function myFunction(a, b) {
        return a + b;
    }
    return x;
}

function complex11() {
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
    complex11();
    complex41()
}

function complex12() {
    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }
    let valToCel = toCelsius();
    return valToCel;
}

function complex13() {
    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }
    let valToCel = toCelsius;
    return valToCel;
}

function complex14() {
    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }
    let text = "The temperature is " + toCelsius(77) + "°" + " Celsius";
    return text;
}

function complex15() {
    function person(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    const myFather = new person("Max", "Verstappen");
    const myMother = new person("Sally", "Rally");
    return "My father is " + myFather.firstname + " " + myFather.lastname + ". My mother is " + myMother.firstname + " " + myMother.lastname;
}

function complex16() {
    function person(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    const myFather = new person("Max", "Verstappen");
    const myMother = new person ("Sally", "Rally");
    return "My father is " + myFather["firstname"] + " " + myFather["lastname"] + ". My mother is " + myMother["firstname"] + " " + myMother["lastname"];
}

function complex17() {
    function person(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
        this.fullname = function() {
            return this.fname + " " + this.lname;
        }
    }
    const employee = new person("Andy", "Roe", 9969);
    return employee.fullname() + " " + "with ID number " + employee.id + " is the Employee of The year of 2023";
}

function complex18() {
    function person(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.fulldata = function() {
            return this.fname + " " + this.lname + ", age: " + this.age;
        }
    }
    const employee = new person("Parjo", "Kui", 36);
    const x = employee;
    x.age = 32;
    return employee.fulldata() + " is the prime suspect of this case."
}

function car(brand, type, price, disc) {
    this.brand = brand;
    this.type = type;
    this.price = price;
    this.disc = disc;
    this.dcprice = function() {
        return this.price - (this.price * this.disc);
    };
    this.dp = function() {
        return (0.2 * this.price) + 20000000;
    };
    this.installment = function() {
        const monthlyInterestRate = 0.04; // 4% monthly interest rate
        const numberOfMonths = 60; // 5 years in months
        const principal = this.dcprice() - this.dp();
        const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
        return monthlyPayment;
    };
}

function complex19() {
    const supra = new car("Toyota", "GR Supra", 2237600000, 0.12);
    let x = "brand";
    let y = "type";
    let z = "dcprice";
    let formattedPrice = supra[z]().toLocaleString('id-ID');
    return supra[x] + " " + supra[y] + " price after discount is Rp " + formattedPrice;
}

function complex20() {
    const supra = new car("Toyota", "GR Supra", 2237600000, 0.12);
    supra.topSpeed = 310;
    return supra.brand + " " + supra.type + " has the top speed of " + supra.topSpeed + "km/h.";
}

function complex21() {
    const supra = new car("Toyota", "GR Supra", 2237600000, 0.12);
    delete supra.disc;
    let formattedPrice = supra.dcprice().toLocaleString('id-ID');
    return supra.brand + " " + supra.type + " price after discount is Rp " + formattedPrice;
}

function complex22() {
    const supra = new car("Toyota", "Supra", 2237600000, 0.12);
    supra.model = {
        supra1: "Celica XX",
        supra2: "Celica Supra",
        supra3: "A70 Supra",
        supra4: "A80 Supra",
        supra5: "GR Supra"
    };
    return supra.brand + " " + supra.type + " has a long history. The first generation is the " + supra.brand + " " + supra.model.supra1 + ". The second generation, " + supra.brand + " " + supra.model.supra2 + ", is the last version that has the name 'Celica'. The latest one launched after years of hiatus from the market at 2019 as " + supra.brand + " " + supra.model.supra5 + ".";
}

function complex23() {
    const civic = new car("Honda", "Civic", 1427500000, 0.05);
    civic.model = "Type R";
    let formattedPrice = civic.dcprice().toLocaleString('id-ID');
    return "Unleash the thrill of the drive with the " + civic.brand + " " + civic.type + " " + civic.model + ", where performance meets precision in every mile, starting at Rp " + formattedPrice;
}

function complex24() {
    const supra = new car("Toyota", "Supra", 2237600000, 0.05);
    const civic = new car("Honda", "Civic", 1427500000, 0.05);
    const brz = new car("Subaru", "BRZ", 845000000, 0.05);
    const m3 = new car("BMW", "M3", 2612114000, 0.05);
    const mustang = new car("Ford", "Mustang GT", 2400000000, 0.05);

    const cars = [supra, civic, brz, m3, mustang];
    let text = "";
    for (let i in cars) {
        const downPayment = cars[i].dp().toLocaleString('id-ID');
        const monthlyPayment = cars[i].installment().toLocaleString('id-ID');
        text += `<li>
                    <span style="color: black; font-weight: bold;">${cars[i].brand} ${cars[i].type}</span> - 
                    <del style="color: #afafaf;">Price: Rp ${cars[i].price.toLocaleString('id-ID')}</del> - 
                    Discounted Price: Rp ${cars[i].dcprice().toLocaleString('id-ID')}<br>
                    &nbsp;&nbsp;Down Payment: Rp ${downPayment}<br>
                    &nbsp;&nbsp;Monthly Installments: Only Rp ${monthlyPayment} over a 5-year term
                 </li>`;
    }
    return "<h5 style='margin-top:0; margin-bottom:4px;'>Explore Our Premium Car Collection:</h5><ul>" + text + "</ul>";
}

function complex25() {
    //create an object
    const car = {
        brand: "Toyota",
        year: 2023,
        type: "Yaris"
    };

    //create an array
    const myCAr = Object.values(car);

    //display the array
    return myCAr;
}

function complex26(){
    const fruits = {bananas:300, oranges:200, apples:430};

    let text = "";
    for(let [fruit, value] of Object.entries(fruits)) {
        text += fruit + ": " + value + "<br>";
    }
    return text;
}

function complex27() {
    //create an object
    const car = {
        brand: "Toyota",
        year: 2023,
        type: "Yaris"
    };

    //Stringify Object
    let myString = JSON.stringify(car);

    //display string
    return myString;
}

function complex28() {
    function Person(firstName, lastName, age, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
        this.nationality = "Indonesian";
    }
    const myFather = new Person('Max', 'Verstappen', 50, 'blue');
    return "My father is " + myFather.nationality;
}

function complex29() {
    return Date();
}

function complex30() {
    let txt = "We are the so-called \"Vikings\" from the north.";
    let txt1 = 'He said "Hello"';
    
    return txt + "<br>" + txt1;
}

function complex31() {
    return `It's alright "okay"?`;
}

function complex32() {
    let text = "The light from the streetlamp was bright and eerie.";
    let at1 = text.at(1);
    let at2 = text.at(2);
    let at3 = text.at(5);
    let at4 = text.at(4);
    let at5 = text.at(3);
    let at6 = text.at(1);
    let at7 = text.at(2);
    let at8 = text.at(-10);
    let at9 = text.at(8);
    let at10 = text.at(2);
    let at11 = text.at(-4);
    let at12 = text.at(100);
    return at1 + at2 + at3 + at4 + at5 + at6 + at7 + at8 + at9 + at10 + at11;
}

function complex33() {
    let text = "The light from the streetlamp was bright and eerie.";
    let indexs = [1, 2, 5, 4, 3, 1, 2, -10, 8, 2, -4];
    let sentence = "";
    
    for (let i = 0; i < indexs.length; i++) {
        sentence += text.at(indexs[i]);
    }

    return sentence;
}

function complex34() {
    let text = "stay up, sport.";
    let indexs = [1, 11, 3, 11, 1, 2, 4, 0, 5, 6, 12, 2];
    let sentence = "";
    
    for (let i = 0; i < indexs.length; i++) {
        sentence += text.at(indexs[i]);
    }

    return sentence;
}

function complex35() {
    let text = "stay up, sport.";
    let indexs = [1, 11, 3, 11, 1, 2, 4, 0, 5, 6, 12, 2];
    let sentence = "";
    
    for (let i = 0; i < indexs.length; i++) {
        sentence += text.charCodeAt(indexs[i]) + " ";
    }

    return sentence;
}

function complex36() {
    let text = "stay up, sport.";
    let indexs = [1, 11, 3, 11, 1, 2, 4, 0, 5, 6, 12, 2];
    let sentence = "";
    
    for (let i = 0; i < indexs.length; i++) {
        sentence += text.codePointAt(indexs[i]) + " ";
    }

    return sentence;
}

function complex37() {
    let text1 = "Toyota";
    let text2 = "Supra";
    let result = text1.concat(" ", text2);
    return result;
}

function complex38() {
    let text = "Toyota Supra";
    let tcon = text.constructor;
    return tcon;
}

function complex39() {
    let text1 = ["Itachi Uchiha", "Sasuke Uchiha", "Naruto Uzumaki"];
    let text = "";
    
    for (let i = 0; i < text1.length; i++) {
        if (text1[i].endsWith("Uchiha")) {
            text += text1[i] + " is from Uchiha clan" + "<br>";
        }
        else {
            text+= text1[i] + " is not from Uchiha clan" + "<br>";
        }
    }

    return text;
}

function complex40() {
    let text = String.fromCharCode(116, 111, 121, 111, 116, 97, 32, 115, 117, 112, 114, 97);
    return text;
}

function complex41() {
    const hiddenWord = "supra";
    let displayedWord = document.getElementById("hidden-word").textContent.split(': ')[1];
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 1) {
      return;
    }

    let result = "";
    if (hiddenWord.includes(guess)) {
      result = `Good guess! The letter '${guess}' is in the word.`;
      displayedWord = updateDisplayedWord(hiddenWord, displayedWord, guess);
    } else {
      result = `Sorry, the letter '${guess}' is not in the word.`;
    }

    document.getElementById("result").textContent = result;
    document.getElementById("hidden-word").textContent = `Hidden Word: ${displayedWord}`;
    guessInput.value = "";

    function updateDisplayedWord(hiddenWord, displayedWord, guess) {
      let newDisplayedWord = "";
      for (let i = 0; i < hiddenWord.length; i++) {
        if (hiddenWord[i] === guess) {
          newDisplayedWord += guess + " ";
        } else {
          newDisplayedWord += displayedWord[i * 2] + " ";
        }
      }
      return newDisplayedWord.trim();
    }
}

function complex42() {
    let text = "Hello world, welcome to the hood.";
    let result = text.indexOf("welcome");
    return result;
}

function complex43() {
    let text = "Hello planet earth, you are a great planet.";
    let result = text.lastIndexOf("planet");
    return result;
}

function complex44() {
    let password = ["vgN]fCGZ^Q_!nRPw", ":kJ*K=P", "AvdGGah>]6", "Ru8@:", "Rc(aW", "Y*xk33H$_", "_oqF^b|kc", "zY{y@f$'", "zCnct{HhU", "l(HOgMXhFQEhr", "?}&\\('|v"];
    let result = "";
    for (let i = 0; i < password.length; i++) {
        let stars = "";
        for (let j = 0; j < password[i].length; j++) {
            stars += "*";                
        }
        if (password[i].length < 8) {
            result += stars + " is too short" + "<br>";
        } else {
            result += stars + " is a good password" + "<br>";
        }
    }
    return result;
}

function complex45() {
    let text1 = "aaad";
    let text2 = "aaac";
    let result = text1.localeCompare(text2);
    let prt = "";

    if (result === -1) {
        prt += "text1 is before text2";
    }
    else if (result === 0) {
        prt += "text1 equal to text2";
    }
    else {
        prt += "text1 is after text2";
    }
    return prt;
}

function complex46() {
    let text1 = "No problem! Here's the information about the Mercedes CLR GTR: The Mercedes CLR GTR is a remarkable racing car celebrated for its outstanding performance and sleek design. Powered by a potent 6.0-liter V12 engine, it delivers over 600 horsepower. Acceleration from 0 to 100 km/h takes approximately 3.7 seconds, with a remarkable top speed surprising 320 km/h.🥇Incorporating adventure aerodynamic features and cutting-edge stability technologies, the CLR GTR ensures exceptional stability and control, particularly during high-speed maneuvers. 💨Originally priced at around $1.5 million, the Mercedes CLR GTR is considered one of the most exclusive and prestigious racing cars ever produced. 💰Its limited production run of just five units adds to its rarity, making it highly sought after by racing enthusiasts and collectors worldwide. 🌎";
    let text2 = "No problem!";
    let result = text1.match(text2);
    let prt = "";
    
    if (result != null) {
        prt += "text1 is generated by AI";
    }
    else {
        prt += "text1 is written by hooman";
    }
    return prt;
}

function complex47() {
    let text1 = "69";
    let text2 = "420";
    let result = text1.padEnd(101, text2);
    return result;
}

function complex48() {
    let text1 = "9";
    let text2 = "2024";
    let result = text1.padStart(2024, text2);
    return result;
}

function complex49() {
    function Person(firstName, lastName, age, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
    }
    Person.prototype.nationality = "Indonesian";
    const myFather = new Person('Max', 'Verstappen', 50, 'blue');
    return "My father is " + myFather.nationality;
}

function complex50() {
    let text1 = "botol kecap marjan 5000 perak <br>";
    let result = text1.repeat(4);
    return result;
}

function complex51() {
    let text1 = "Happy new year!. This new year will be a good one";
    let result = text1.replace("new year", "new day");
    return result;
}

function complex52() {
    let text1 = "Happy new year!. This new year will be a good one";
    let result = text1.replaceAll("new year", "new day");
    return result;
}

function complex53() {
    let text1 = "lorem ipsum dolor sit amet consepcutor adispicing sit elit.";
    let result = text1.search("sit");
    return result;
}

function complex54() {
    let text1 = "The old heater, once a symbol of warmth, was now overshadowed by the cold, while the historian recounted tales of ancient symbols like 'Heil' in a lecture.";
    let result = text1.slice(136,140) + " " + text1.slice(8, 14);
    return result;
}

// function complex55() {
//     let text1 = "The old heater, once a symbol of warmth, was now overshadowed by the cold, while the historian recounted tales of ancient symbols like 'Heil' in a lecture.";
//     text1 = text1.replace(/[.,'";!?]/g, '');
//     let words = text1.split(" ");
    
//     function sortWord(word) {
//         let chars = word.split("");
//         for (let i = 0; i < chars.length - 1; i++) {
//             for (let j = 0; j < chars.length - i - 1; j++) {
//                 if (chars[j].localeCompare(chars[j + 1]) > 0) {
//                     [chars[j], chars[j + 1]] = [chars[j + 1], chars[j]];
//                 }
//             }
//         }
//         return chars.join("");
//     }

//     let sortedWords = words.map(word => sortWord(word));
//     let result = sortedWords.join(" ");
    
//     return result.toLocaleLowerCase();
// }

function complex55() {
    let text1 = "The old heater, once a symbol of warmth, was now overshadowed by the cold, while the historian recounted tales of ancient symbols like 'Heil' in a lecture.";
    let words = text1.split(" ");

    return words;
}

function complex56() {
    let text1 = "The old heater, once a symbol of warmth, was now overshadowed by the cold, while the historian recounted tales of ancient symbols like 'Heil' in a lecture.";
    let result = text1.startsWith("Heil", 136);
    return result;
}

function complex57() {
    let text1 = "The old heater, once a symbol of warmth, was now overshadowed by the cold, while the historian recounted tales of ancient symbols like 'Heil' in a lecture.";
    let result = text1.substring(20, 50);
    return result;
}

function complex58() {
    let text1 = "The old heater, once a symbol of warmth, was now overshadowed by the cold, while the historian recounted tales of ancient symbols like 'Heil' in a lecture.";
    let result = text1.substr(20, 50);
    return result;
}

function complex59() {
    let text1 = "İstanbul'da güzel bir şehir.";
    let result = text1.toLocaleLowerCase('tr-TR');
    return result;
}

function complex60() {
    let text1 = "The Greek word for 'sigma' is 'σ'.";
    let text2 = text1.substring(30, 32);
    let text3 = text2.toLocaleUpperCase('el-GR');
    let text4 = text1.replace(text2, text3);
    return text4;
}

function complex61() {
    let text1 = "No problem! Here's the information about the Mercedes CLR GTR:";
    let result = text1.toLowerCase();
    return result;
}

function complex62() {
    function car(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    const supra = new car("Toyota Supra", 2020);
    let x = Object.values(supra).toString();
    let y = typeof(x);
    return x + "<br>data type is: " + y;
}

function complex63() {
    let text1 = "The German term for 'sharp s' is 'ß'";
    let result = text1.toUpperCase();
    return result;
}

function complex64() {
    let text = "            Toyota Supra            ";
    let trimmedText = text.trim();
    return `Original Length: ${text.length}<br>
            Trimmed Length: ${trimmedText.length}<br>
            Original String: '${text}'<br>
            Trimmed String: '${trimmedText}'<br>
            Lengths are equal: ${text.length === trimmedText.length}`;
}

function complex65() {
    let text = "            Toyota Supra            ";
    let trimmedText = text.trimEnd();
    return `Original Length: ${text.length}<br>
            Trimmed Length: ${trimmedText.length}<br>
            Original String: '${text}'<br>
            Trimmed String: '${trimmedText}'<br>
            Lengths are equal: ${text.length === trimmedText.length}`;
}

function complex66() {
    let text = "            Toyota Supra            ";
    let trimmedText = text.trimStart();
    return `Original Length: ${text.length}<br>
            Trimmed Length: ${trimmedText.length}<br>
            Original String: '${text}'<br>
            Trimmed String: '${trimmedText}'<br>
            Lengths are equal: ${text.length === trimmedText.length}`;
}

function complex67() {
    let strObj = new String("Hello");
    return strObj.valueOf();
}

function complex68() {
    let brand = "Toyota";
    let type = "Supra";
    let car = `No problem, here is information about ${brand} ${type}.`;
    return car;
}

function complex69() {
    let price = 2237600000;
    let dpCicil = `With Down Payment of Rp ${(0.2 * price).toLocaleString('id-ID')} and payment only at Rp ${(((0.8 * price) * 0.02 * (1 + 0.02) ** 180) / ((1 + 0.02) ** 180 - 1)).toLocaleString('id-ID')} per month for 15 years`;
    return dpCicil;
}

function complex70() {
    let header = "Template Strings";
    let tags = ["template strings", "javascript", "es6"];
    let html = `<h2 style="margin: 0;">${header}</h2><ul>`;
    
    for (const x of tags) {
        html += `<li>${x}</li>`;
    }
    html += `</ul>`;
    return html;
}

function complex71() {
    let myNumber = 2;

    while (myNumber != Infinity) {
        myNumber *= myNumber;
    }
    return myNumber;
}

// let myNumber = 2025;
// let myType = typeOf(myBigInt);
// let addition = myBigInt + BigInt(myNumber);
function complex72() {
    let myBigInt = 2024202420242024202420242024202420242024202420242024n;
    let myType = typeof myBigInt;
    let myNumber = 2025;

    //arithmetic operations need to be the same data types
    let addition = myBigInt + BigInt(myNumber);
    return "typeof: " + myType + "<br>" + "addition: " + addition;
}

// function complex73() {
//     let x = Number.MAX_SAFE_INTEGER;
//     let y = Number.MIN_SAFE_INTEGER;
//     return "<code>MAX_SAFE_INTEGER</code> is: " + x + "<br>" + "<code>MIN_SAFE_INTEGER</code> is: " + y;
// }

function complex73() {
    let x = Number.isFinite("123");
    let y = isFinite("123");

    return "<code>Number.isFinite('123')</code> will return: " + x + "<br>" + "<code>isFinite('123')</code> will return: " + y;
}

function complex74() {
    let x = 123;
    let y = -456;
    let z = "123";
    let variables = { x, y, z };
    let result = "";

    for (let key in variables) {
        if (Number.isInteger(variables[key])) {
            result += "Variable " + key + " is an integer.<br>";
        } else {
            result += "Variable " + key + " is not an integer.<br>";
        }
    }

    return result;
}

function complex75() {
    let x = Number.isNaN('Toyota Supra');
    let y = isNaN('Toyota Supra');

    return "<code>Number.isNaN('Toyota Supra')</code> will return: " + x + "<br>" + "<code>isNaN('Toyota Supra')</code> will return: " + y;
}

function complex76() {
    let x = 123;
    let y = -456;
    let z = 123456789012345678901234567890n;
    let variables = { x, y, z };
    let result = "";

    for (let key in variables) {
        if (Number.isSafeInteger(variables[key])) {
            result += "Variable " + key + " is a safe integer.<br>";
        } else {
            result += "Variable " + key + " is not a safe integer.<br>";
        }
    }

    return result;
}

function complex77() {
    var x = 9007199254740992;
    var y = 123456789;
    var z = -9007199254740991;

    var maxSafe = Number.MAX_SAFE_INTEGER;
    var minSafe = Number.MIN_SAFE_INTEGER;

    function describeNumber(num, name) {
        if (num > maxSafe || num < minSafe) {
            return name + " variable is not a safe integer and is converted to BigInt: " + num + "n";
        }
        return name + " variable is a safe integer: " + num;
    }

    var resultX = describeNumber(x, "x");
    var resultY = describeNumber(y, "y");
    var resultZ = describeNumber(z, "z");

    return resultX + "<br>" + resultY + "<br>" + resultZ;
}

function complex78() {
    return Number.parseFloat("40.00") + "<br>" +
    Number.parseFloat("   40   ") + "<br>" +
    Number.parseFloat("40 years") + "<br>" +
    Number.parseFloat("40H") + "<br>" +
    Number.parseFloat("H40");
}

function complex79() {
    return Number.parseInt("10", 10)+ "<br>" +
    Number.parseInt("H010")+ "<br>" +
    Number.parseInt("10", 8)+ "<br>" +
    Number.parseInt("0x10")+ "<br>" +
    Number.parseInt("10", 16);
}

function complex80() {
    Number.prototype.printHeilHeater = function() {
        let result = '';
        for (let i = 0; i < this; i++) {
            result += "heil Heater<br>";
        }
        return result;
    };

    let numb = 10;
    return numb.printHeilHeater();
}

function complex81() {
    let num = 5.56789;
    let n = num.toExponential();

    return n;
}

function complex82() {
    let num = 5.56789;
    let n = num.toFixed(2);
    return n + "<br>typeof n is: " + typeof n;
}

function complex83() {
    let num = 100000000;
    let text = num.toLocaleString("id-ID", {style:"currency", currency:"IDR"});
    return text;
}

function complex84() {
    let num = 0.001658853;
    let num1 = num.toPrecision(2);
    let num2 = num.toPrecision(3);
    let num3 = num.toPrecision(10);

    return "num: " + num + "<br>" + "num1: " + num1 + "<br>" + "num2: " + num2 + "<br>" + "num3: " + num3;
}

function complex85() {
    let num = 15;
    let text1 = num.toString(8);
    let text2 = num.toString(16);
    let text3 = num.toString();

    return "num: " + num + "; data type: " + typeof num + "<br>" +
    "text1: " + text1 + "; data type: " + typeof text1 + "<br>" +
    "text2: " + text2 + "; data type: " + typeof text2 + "<br>" +
    "text3: " + text3 + "; data type: " + typeof text3 + "<br>";
}

function complex86() {
    let num = 15;
    let num1 = new Number(10);
    let num2 = new Number('Toyota Supra');

    return "valueOf(num): " + num.valueOf() + "<br>" +
    "valueOf(num1): " + num1.valueOf() + "<br>" +
    "valueOf(num2): " + num2.valueOf() + "<br>";
}

function complex87() {
    const cars = ["Toyota Supra", "Honda Civic", "Subaru BRZ", "BMW M3", "Ford Mustang GT", "Chevrolet Camaro", "Porsche 911", "Audi R8", "Nissan GT-R", "Lamborghini Huracan", "Ferrari 488", "McLaren 720S", "Bugatti Chiron"];
    let result = "";

    function getOrdinal(n) {
        const suffixes = ["th", "st", "nd", "rd"];
        const value = n % 100;
        return n + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
    }

    for (let i = 0; i < cars.length; i++) {
        result += `${getOrdinal(i + 1)} car: ${cars[i]} <br>`;
    }

    return result;
}

function complex88() {
    const cars = ["Toyota Supra", "Honda Civic", "Subaru BRZ", "BMW M3"];
    cars[1] = "Nissan Skyline GT-R";
    let result = "";

    for (let i = 0; i < cars.length; i++) {
        result += cars[i] + "<br>";
    }

    return result;
}

function complex89() {
    const cars = ["Toyota Supra", "Honda Civic", "Subaru BRZ", "BMW M3"];
    let result = cars.toString().replaceAll(",", "<br>");
    return result + "<br> typeof result: " + typeof result;
}

function complex90() {
    const cars = ["Toyota Supra", "Honda Civic", "Subaru BRZ", "BMW M3"];
    return cars + "<br> typeof cars: " + typeof cars;
}

function complex91() {
    // Object
    const car = {
        brand: "Toyota",
        model: "Supra",
        year: 2024,
        features: ["Turbocharged engine", "Sport suspension", "Leather interior"]
    };

    // Function
    function calculateCarAge(year) {
        const currentYear = new Date().getFullYear();
        return currentYear - year;
    }

    // Inner Array
    const owners = ["Max Verstappen", "Fadoil Mun'im", "Gede Ardhi"];

    // Outer Array
    const carDetails = [car, calculateCarAge, owners];

    let result = "";

    result += `carDetails[0]: {<br>&nbsp;&nbsp;&nbsp;&nbsp;"brand": "${car.brand}",<br>&nbsp;&nbsp;&nbsp;&nbsp;"model": "${car.model}",<br>&nbsp;&nbsp;&nbsp;&nbsp;"year": ${car.year},<br>&nbsp;&nbsp;&nbsp;&nbsp;"features": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${car.features.map(feature => `"${feature}"`).join('<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')}]<br>}<br><br>`;
    result += `carDetails[1]: ${calculateCarAge.toString().replace(/\n/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;')}<br><br>`;
    result += `carDetails[2]: [<br>&nbsp;&nbsp;&nbsp;&nbsp;${owners.map(owner => `"${owner}"`).join('<br>&nbsp;&nbsp;&nbsp;&nbsp;')}<br>] <br><br>`;

    return result;
}

function complex92() {
    const fruits = ["Banana", "Orange", "Apple"];
    fruits[5] = "Lemon";
    let fLen = fruits.length;
    let text = "";

    for (let i = 0; i < fLen; i++) {
        if (fruits[i] === undefined) {
            text += "<code>undefined</code><br>";
        } else {
            text += fruits[i] + "<br>";
        }
    }

    return text;
}

function complex93() {
    const fruits = ["Banana", "Orange", "Apple"];

    return "Array<span class='jsoperatorcolor'>.</span><span class='jspropertycolor'>isArray(<span class='jsvariablecolor' style='color: #6a6a6a'>array name</span>)</span>: " + Array.isArray(fruits) + "<br>" +
    "<span class='jsbracketcolor'>(</span><span class='jsvariablecolor' style='color: #6a6a6a'>array name</span> <span class='jskeywordcolor'>instanceof</span> Array<span class='jsbracketcolor'>)</span>: " + (fruits instanceof Array);
}

function complex94() {
    const cars = ["Toyota Supra", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    return "cars<i>.at</i>(2): " + cars.at(2) + "<br>"
    + "cars<i>.at</i>(-1): " + cars.at(-1) + "<br>"
    + "cars[2]: " + cars[2] + "<br>"
    + "cars[-1]: " + cars[-1];
}

function complex95() {
    const cars = ["Toyota Supra", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    const cars1 = ["Honda Civic", "Subaru BRZ", "BMW M3"];
    return cars.concat(cars1);
}

function complex96() {
    const cars = ["Toyota Supra", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    return cars.constructor;
}

function complex97() {
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya", 'Rambutan', 'Durian'];
    return "fruits.copyWithin(2,0): " + fruits.copyWithin(2,0) + "<br>" +
    "fruits.copyWithin(2,0,3): " + fruits.copyWithin(2,0,3);
}

function complex98() {
    const cars = ["Toyota Supra", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let text = "";

    for (let i of cars.entries()) {
        text += i + "<br>";
    }

    return text;
}

function complex99() {
    const cars = [
        "Toyota Supra",
        "Toyota Camry",
        "Toyota Corolla",
        "Toyota RAV4",
        "Toyota Highlander",
        "Toyota Land Cruiser",
        "Honda Civic"
    ];    
    const allToyotas = cars.every(car => car.startsWith("Toyota"));
    return allToyotas;
}

function complex100() {
    const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya", 'Rambutan', 'Durian'];
    const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya", 'Rambutan', 'Durian'];
    return "<span class='commentcolor'>//fruits.fill('lemon')</span><br>" + fruits1.fill("Lemon") + "<br>" +
    "<span class='commentcolor'>//fruits.fill('lemon', 2, 4)</span><br>" + fruits2.fill("Lemon", 2, 4);
}

function complex101() {
    const cars = [
        {car: "Toyota Supra", topSpeed: 155 },
        {car: "Nissan Skyline", topSpeed: 180 },
        {car: "Mazda RX-7", topSpeed: 155 },
        {car: "Honda NSX", topSpeed: 170 },
        {car: "Mitsubishi Lancer Evolution", topSpeed: 155 },
        {car: "Subaru BRZ", topSpeed: 155 },
    ];

    const result = cars.filter(topSpeed).map(car => car.car);
    function topSpeed(car) {
        return car.topSpeed >= 160;
    }
    return result.join(', ');
}

function complex102() {
    const test = [
        {name: "Aska", score: 74 },
        {name: "Budi", score: 85 },
        {name: "Citra", score: 90 },
        {name: "Dika", score: 65 },
        {name: "Eka", score: 80 },
        {name: "Fajar", score: 50 },
    ];

    const result = test.find(student => student.score <= 65);
    return result.name;
}

function complex103() {
    const test = [
        {name: "Aska", score: 74 },
        {name: "Budi", score: 85 },
        {name: "Citra", score: 90 },
        {name: "Dika", score: 65 },
        {name: "Eka", score: 80 },
        {name: "Fajar", score: 50 },
    ];

    const index = test.findIndex(student => student.score <= 65);
    return index;
}

function complex104() {
    const test = [
        {name: "Aska", score: 74 },
        {name: "Budi", score: 85 },
        {name: "Citra", score: 90 },
        {name: "Dika", score: 65 },
        {name: "Eka", score: 80 },
        {name: "Fajar", score: 50 },
    ];

    const result = test.findLast(student => student.score <= 65);
    return result.name;
}

function complex105() {
    const test = [
        {name: "Aska", score: 74 },
        {name: "Budi", score: 85 },
        {name: "Citra", score: 90 },
        {name: "Dika", score: 65 },
        {name: "Eka", score: 80 },
        {name: "Fajar", score: 50 },
    ];

    const index = test.findLastIndex(student => student.score <= 65);
    return index;
}

function complex106() {
    const myArr = [
        [1, 2],
        [3, [4, 5, 6]],
        [7, [8, [9, [10]]]]
    ];
    const newArr = myArr.flat();
    const newArr2 = myArr.flat(2);
    const newArrInf = myArr.flat(Infinity);
    return "<span class='jsvariablecolor'>myArr</span>.<span class='jspropertycolor'>flat()</span>: " + JSON.stringify(newArr) + "<br>" +
    "<span class='jsvariablecolor'>myArr</span>.<span class='jspropertycolor'>flat(2)</span>: " + JSON.stringify(newArr2) + "<br>" +
    "<span class='jsvariablecolor'>myArr</span>.<span class='jspropertycolor'>flat(Infinity)</span>: " + JSON.stringify(newArrInf);
}

function complex107() {
    const myArr = [
        [1, 2],
        [3, [4, 5, 6]],
        [7, [8, [9, [10]]]]
    ];

    const result = myArr.flat(Infinity).map(x => [x, x * x]);
    return JSON.stringify(result);
}

function complex108() {
    const myCar = [
        {car: "Toyota Supra", topSpeed: 155 },
        {car: "Nissan Skyline", topSpeed: 180 },
        {car: "Mazda RX-7", topSpeed: 155 },
        {car: "Honda NSX", topSpeed: 170 },
        {car: "Mitsubishi Lancer Evolution", topSpeed: 155 },
        {car: "Subaru BRZ", topSpeed: 155 },
    ];
    let carDetails = "";
    myCar.forEach(function(car) {
        carDetails += car.car + ", Top Speed: " + car.topSpeed + " mph<br>";
    });

    return carDetails;
}

function complex109() {
    const myCar = ["Toyota Supra", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution", "Subaru BRZ"];
    return myCar.includes("Subaru BRZ");
}

function complex110() {
    const myCar = ["Toyota Supra", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution", "Subaru BRZ"];
    return myCar.indexOf("Subaru BRZ");
}

function complex111() {
    const myCar = ["Toyota Supra", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution", "Subaru BRZ"];
    return myCar.join("<br>");
}

function complex112() {
    //Create an Array
    const myCar = ["Toyota Supra", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution", "Subaru BRZ"];

    //Create an Iterable
    const list = myCar.keys();

    //List the Keys
    let text = "";
    for (let x of list) {
        text += x + "<br>";
    }
    return text;
}

function complex113() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution", "Subaru BRZ"];
    return myCar.lastIndexOf("Subaru BRZ");
}

function complex114() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution", "Subaru BRZ"];
    let res = "";
    myCar.map(myfunc);

    function myfunc(carModel) {
        res += "Car model: " + carModel + "<br>";
    }
    return res;
}

function complex115() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution", "Subaru BRZ"];
    removed = myCar.pop();
    return "myCar: " + JSON.stringify(myCar) + "<br>" +
    "removed: " + removed;
}

function complex116() {
    Array.prototype.myUcase = function() {
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] === 'string') {
                this[i] = this[i].toUpperCase();
            }
        }
        return this;
    };

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    return fruits.myUcase();
}

function complex117() {
    const myCar1 = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution", "Subaru BRZ"];
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution", "Subaru BRZ"];
    myCar.push("Lamborghini Gallardo", "Bugatti Chiron");
    const newCar = myCar;

    return "Original array: " + JSON.stringify(myCar1) + "<br>" +
    "Original array length: " + myCar1.length + "<br><br>" +
    "Updated array: " + JSON.stringify(newCar) + "<br>" +
    "Updated array length: " + newCar.length + "<br>";
}

function complex118() {
    const numbers = [15.5, 2.3, 1.1, 4.7];
    function getSum(total, num) {
        return total + Math.round(num);
    }
    return numbers.reduce(getSum, 0);
}

function complex119() {
    const numbers = [199, 51, 23];
    function myFunc(total, num) {
        return Math.cos((total / num));
    }
    return numbers.reduceRight(myFunc);
}

function complex120() {
    const text1 = ["Itachi Uchiha", "Sasuke Uchiha", "Naruto Uzumaki"];
    return "text1.shift(): "+ JSON.stringify(text1.shift()) + "<br>" +
    "text1: " + JSON.stringify(text1);
}

function complex121() {
    const myCar1 = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    return "[" + myCar1.slice(0, 1) + ", " + myCar1.slice(-1) + "]";
}

function complex122() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];

    function checkCar(type) {
        return type.includes("Toyota");
    }
    return myCar.some(checkCar);
}

function complex123() {
    const myCar = [
        {car: "Toyota Supra", topSpeed: 155 },
        {car: "Nissan Skyline", topSpeed: 180 },
        {car: "Mazda RX-7", topSpeed: 155 },
        {car: "Honda NSX", topSpeed: 170 },
        {car: "Mitsubishi Lancer Evolution", topSpeed: 155 },
        {car: "Subaru BRZ", topSpeed: 155 },
    ];
    myCar.sort(function(a, b) { return b.topSpeed - a.topSpeed; });
    var result = myCar.map(function(car) {
        return "Car: " + car.car + "<br>Top Speed: " + car.topSpeed;
    }).join("<br><br>");

    return result;
}

function complex124() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    myCar.splice(2, 4, "Toyota 86", "Honda S2000");
    return JSON.stringify(myCar);
}

function complex125() {
    const numb = [1,2,3,4,5,6];
    return numb.toReversed();
}

function complex126() {
    const numb = [3,2,4,1,5,2,3,3,8,9];
    return numb.toSorted(function(a, b){return a-b});
}

function complex127() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    //at position 2, add "Lemon" and "Kiwi":
    return fruits.toSpliced(2,0, "Lemon", "Kiwi");
}

function complex128() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    return fruits.toString();
}

function complex129() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon", "Pineapple");
    return fruits;
}

function complex130() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    let text = "";
    for (let x of fruits.values()) {
        text += x + "<br>";
    }

    return text;
}

function complex131() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    return fruits.valueOf();
}

function complex132() {
    const cars = ["Toyota", "Subaru", "Nissan", "Mazda", "Honda", "Mitsubishi"];
    const myCar = cars.with(0, "Toyota Supra").with(1, "Subaru BRZ").with(2, "Nissan Skyline GTR");

    let text = "";
    for (let i of myCar.values()) {
        text += i + "<br>";
    }
    return text;
}

document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const d = new Date();

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dayNames = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];
        document.getElementById('dateContainer1').textContent = d;
        document.getElementById('dateContainer').textContent = d;
        document.getElementById('yearContainer').textContent = d.getFullYear().toString();
        document.getElementById('monthContainer').textContent = monthNames[d.getMonth()];
        document.getElementById('dayContainer').textContent = dayNames[d.getDay()];
        document.getElementById('dateDayContainer').textContent = d.getDate().toString();
        document.getElementById('hourContainer').textContent = d.getHours().toString().padStart(2, '0');
        document.getElementById('minuteContainer').textContent = d.getMinutes().toString().padStart(2, '0');
        document.getElementById('secondContainer').textContent = d.getSeconds().toString().padStart(2, '0');
        document.getElementById('millisecondContainer').textContent = d.getMilliseconds().toString().padStart(4, '0');
    }

    setInterval(updateDateTime, 1);
    updateDateTime();
});

function complex133() {
    const d = new Date();
    d.setFullYear(1999);
    return d;
}

function complex134() {
    let age = 20;
    let voteable = (age < 18) ? 'Too young' : 'Old enough';
    return voteable;
}

function complex135() {
    const car = {type:"Fiat", model:"500", color:"white"};
    let name = car?.name;
    return name;
}

function complex136() {
    let age = 20;
    if (age > 18) {
        return "Old enough";
    }
}

function complex137() {
    let age = 14;
    if (age > 18) {
        return "Old enough";
    }
    else {
        return "Too young";
    }
}

function complex138() {
    let age = 8;
    if (age < 2) {
        return "Ticket Price: Rp 25.000";
    }
    else if (age >= 2 && age < 14) {
        return "Ticket Price: Rp 35.000";
    }
    else {
        return "Ticket Price: Rp 60.000";
    }
}

function complex139() {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Minggu";
            break;
        case 1:
            day = "Senin";
            break;
        case 2:
            day = "Selasa";
            break;
        case 3:
            day = "Rabu";
            break;
        case 4:
            day = "Kamis";
            break;
        case 5:
            day = "Jumat";
            break;
        case 6:
            day = "Sabtu";
    }
    return day;
}

function complex140() {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "It's weekend. yaaayy!!";
            break;
        case 5:
        case 6:
            day = "Weekend soon";
            break;
        default:
            day = "go to work go to work go to work";
    }
    return day;
}

function complex141() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let text = "";
    for (let i = 0; i < myCar.length; i++) {
        text += myCar[i] + "<br>";
    }
    return text;
}

function complex142() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let i, len, text;
    
    for (i = 0, len = myCar.length, text = ""; i < len; i++) {
        text += myCar[i] + "<br>";
    }
    
    return text;
}

function complex143() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let i = 0;
    let text = "";
    
    for (; i < myCar.length; i++) {
        text += myCar[i] + "<br>";
    }
    
    return text;
}

function complex144() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let text = '';
    for (let i = 0; ; i++) {
        if (i >= myCar.length) break;
        text += myCar[i] + '<br>';
    }
    return text;
}

function complex145() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let text = "";
    
    let i = 0;
    for (;;) {
        if (i >= myCar.length) {
            break;
        }
        text += myCar[i] + "<br>";
        i++;
    }
    return text;
}

function complex146() {
    const myCar = [
        {car: "Toyota Supra", topSpeed: 155 },
        {car: "Nissan Skyline", topSpeed: 180 },
        {car: "Mazda RX-7", topSpeed: 155 },
        {car: "Honda NSX", topSpeed: 170 },
        {car: "Mitsubishi Lancer Evolution", topSpeed: 155 },
        {car: "Subaru BRZ", topSpeed: 155 },
    ];

    let text = "";
    for (let i in myCar) {
        let number = parseInt(i) + 1;
        text += number + ". " + myCar[i].car + " with a top speed of " + myCar[i].topSpeed + " mph<br>";
    }
    return text;
}

function complex147() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let txt = "";

    myCar.forEach(myFunc);
    function myFunc(value, index, array) {
        txt += value + "<br>";
    }
    return txt;
}

function complex148() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let txt = "";
    
    for (let x of myCar) {
        txt += x + "<br>";
    }
    return txt;
}

function complex149() {
    let myCar = "Toyota Supra";
    const numb = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];
    let txt = "";
    let index = 0;

    for (let x of myCar) {
        if (x === " ") continue;
        txt += numb[index] + " letter is: " + x + "<br>";
        index++;
    }
    return txt;
}

function complex150() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let i = 0;
    let txt = "";

    while (i < myCar.length) {
        txt += myCar[i] + "<br>";
        i++;
    }
    return txt;
}

function complex151() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let i = 0;
    let txt = "";

    do {
        txt += myCar[i] + "<br>";
        i++;
    } while (i < myCar.length);
    return txt;
}

function complex152() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let txt = "";
    for (let i = 0; i < myCar.length; i++) {
        if (i === 3) { break; }
        txt += myCar[i] + "<br>";
    }
    return txt;
}

function complex153() {
    const myCar = ["Toyota Supra", "Subaru BRZ", "Nissan Skyline", "Mazda RX-7", "Honda NSX", "Mitsubishi Lancer Evolution"];
    let txt = "";
    for (let i = 0; i < myCar.length; i++) {
        if (i === 3) { continue; }
        txt += myCar[i] + "<br>";
    }
    return txt;
}

function complex154() {
    let myCar = "Toyota Supra";
    const numb = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];
    let txt = "";
    let index = 0;

    for (let x of myCar) {
        if (x === " ") continue;
        txt += numb[index] + " letter is: " + x + "<br>";
        index++;
    }
    return txt;
}

function complex155() {
    const myCar = ["T", "o", "y", "o", "t", "a", " ", "S", "u", "p", "r", "a"];
    let txt = "";
    for (let x of myCar) {
        txt += x;
    }
    return txt;
}

function complex156() {
    const myCar = new Set(["T", "o", "y", "o", "t", "a", " ", "S", "u", "p", "r", "a"]);
    let txt = "";
    for (let x of myCar) {
        txt += x;
    }
    return txt;
}

function complex157() {
    const myCar = new Map([
        ["Toyota Supra", 155],
        ["Nissan Skyline", 180],
        ["Mazda RX-7", 155],
        ["Honda NSX", 170],
        ["Mitsubishi Lancer Evolution", 155],
        ["Subaru BRZ", 155],
    ]);

    let txt = "";
    for (const [car, topSpeed] of myCar) {
        txt += car + ": " + topSpeed + " mph<br>";
    }
    return txt;
}

function complex158() {
    let n = 0;
    return {
        next: function() {
          n += 10;
          return {value:n, done:false};
        }
    };
}

function complex159() {
    const n = complex158();
    return n.next().value + ", " + n.next().value + ", " + n.next().value + ", " + n.next().value + ", " + n.next().value + ", " + n.next().value;
}

function complex160() {
    const myNumbers = {
        [Symbol.iterator]: function() {
            let n = 0;
            let done = false;
            return {
                next() {
                    n += 10;
                    if (n == 100) { done = true; }
                    return { value: n, done: done };
                }
            };
        }
    };

    let text = "";
    for (const num of myNumbers) {
        text += num + "<br>";
    }

    return text;
}

function complex161() {
    const myNumbers = {
        [Symbol.iterator]: function() {
            let n = 0;
            let done = false;
            return {
                next() {
                    n += 10;
                    if (n == 100) { done = true; }
                    return { value: n, done: done };
                }
            };
        }
    };

    let iterator = myNumbers[Symbol.iterator]();
    let text = "";
    while (true) {
        const result = iterator.next();
        if (result.done) break;
        text += result.value + "<br>";
    }
    return text;
}

function complex162() {
    // Create a Set
    const letters = new Set(["a","b","c"]);

    // List all Elements
    let text = "";
    for (const x of letters) {
        text += x;
    };
    return text;
}

function complex163() {
    const letters = new Set(["a", "b", "c"]);
    const myIterator = letters.entries();

    let text = "";
    for (const entry of myIterator) {
        text += entry + "<br>";
    }
    return text
}

function complex164() {
    const letters = new Set(["t", "o", "y", "o", "t", "a", " ", "s", "u", "p", "r", "a"]);

    let text = "";
    letters.forEach(function(value) {
        text += value.toUpperCase();
    });
    return text;
}

function complex165() {
    const letters = new Set(["t", "o", "y", "o", "t", "a", " ", "s", "u", "p", "r", "a"]);

    let text = "";
    letters.forEach(function(keys) {
        text += keys.toUpperCase();
    });
    return text;
}

function complex166() {
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    let text = "";
    for (const x of fruits.entries()) {
        text += x + "<br>";
    }
    return text;
}

function complex167() {
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    let text = "";
    fruits.forEach (function(value, key) {
        text += key + " = " + value + "<br>";
    });
    return text;
}

function complex168() {
    const fruits = [
        {name:"apples", quantity:300},
        {name:"bananas", quantity:500},
        {name:"oranges", quantity:200},
        {name:"kiwi", quantity:150}
    ];

    function myCallback({quantity}) {
        return quantity > 200 ? "ok" : "low";
    };

    const result = Map.groupBy(fruits, myCallback);

    let text = "These fruits are Ok: <br>";
    for (let x of result.get("ok")) {
        text += x.name + " " + x.quantity + "<br>";
    }
    text += "<br>These fruits are low: <br>";
    for (let x of result.get("low")) {
        text += x.name + " " + x.quantity + "<br>";
    }
    
    return text;
}

function complex169() {
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    let text = "";
    for (const x of fruits.keys()) {
        text += x + "<br>";
    };
    return text;
}

function complex170() {
    const fruits = new Map();
    fruits.set('apples', 500);
    fruits.set('bananas', 300);
    fruits.set('oranges', 200);

    let text= "";
    for (const x of fruits.keys()) {
        text += x + "<br>";
    };
    return text;
}

function complex171() {
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);
    
    let tot = 0;
    for (const x of fruits.values()) {
        tot += x;
    }
    return "There are " + tot + " fruits in the basket";
}

function complex172() {
    let x;
    return "<code>typeof</code> <span class='jsstringcolor'>'Max'</span>: " + typeof "Max" + "<br>" +
           "<code>typeof</code> <span class='jsnumbercolor'>3.14</span>: " + typeof 3.14 + "<br>" +
           "<code>typeof</code> <span class='jsbooleancolor'>false</span>: " + typeof false + "<br>" +
           "<code>typeof</code> <span class='jsnumbercolor'>90909238912389489812398n</span>: " + typeof 90909238912389489812398n + "<br>" +
           "<code>typeof</code> <span class='jsvariablecolor'>Symbol()</span>: " + typeof Symbol() + "<br>" +
           "<code>typeof</code> <span class='jsvariablecolor'>null</span>: object (historically considered as <span class='jsnullcolor'>null</span>)<br>" +
           "<code>typeof</code> <span class='jsvariablecolor'>x</span>: " + typeof x + "<br>";
}

function complex173() {
    return  "<code>typeof</code> <span class='jsbracketcolor'>{<span class='jsvariablecolor'>name:</span> <span class='jsstringcolor'>'Max'</span>, <span class='jsvariablecolor'>age:</span> <span class='jsnumbercolor'>30</span>}</span>: " + typeof {name: 'Max', age: 30} + "<br>" +
            "<code>typeof</code> <span class='jsbracketcolor'>[<span class='jsstringcolor'>'Max'</span>, <span class='jsnumbercolor'>30</span>]</span>: " + typeof ['Max', 30] + "<br>" +
            "<code>typeof</code> <span class='jsvariablecolor'>new Map()</span>: " + typeof new Map() + "<br>" +
            "<code>typeof</code> <span class='jsvariablecolor'>new Set()</span>: " + typeof new Set() + "<br>" +
            "<code>typeof</code> <span class='jsfunctioncolor'>function myFunc() {}</span>: " + typeof function myFunc() {} + "<br>";
}

function complex174() {
    const fruits = ["apples", "bananas", "oranges"];
    const myCar = {car: "Toyota Supra", topSpeed: 155 };

    return "Array.isArray(fruits): " + Array.isArray(fruits) + "<br>" +
    "(fruits instanceof Array): " + (fruits instanceof Array) + "<br><br>" +
    "Array.isArray(myCar): " + Array.isArray(myCar) + "<br>" +
    "(myCar instanceof Array): " + (myCar instanceof Array);
}

function complex175() {
    const time = new Date();
    const fruits = ["apples", "bananas", "oranges"];
    const myCar = new Map([
        ["Toyota Supra", 155],
        ["Nissan Skyline", 180],
        ["Mazda RX-7", 155],
        ["Honda NSX", 170],
        ["Mitsubishi Lancer Evolution", 155],
        ["Subaru BRZ", 155],
    ]);
    const letters = new Set(["a","b","c"]);

    return "(time instanceof Date): " + (time instanceof Date) + "<br>" +
    "(fruits instanceof Array): " + (fruits instanceof Array) + "<br>" +
    "(myCar instanceof Map): " + (myCar instanceof Map) + "<br>" +
    "(letters instanceof Set): " + (letters instanceof Set);
}

function complex176() {
    return "Number('3.14'): " + Number('3.14') + "<br>" +
    "Number(' '): " + Number(' ') + "<br>" +
    "Number(''): " + Number('') + "<br>" +
    "Number('99 88'): " + Number('99 88') + "<br>" +
    "Number('Max'): " + Number('Max') + "<br>";
}

function complex177() {
    let x = 123;
    return "String(x): " + String(x) + "<br>" +
    "String(123): " + String(123) + "<br>" +
    "String(100 + 23): " + String(100 + 23) + "<br>";
}

function complex178() {
    return "5 + null: " + (5 + null) + "<span class='commentcolor'> //null is converted to 0</span><br>" +
    "'5' + null: " + ('5' + null) + "<span class='commentcolor'> //null is converted to 'null'</span><br>" +
    "'5' + 2: " + ('5' + 2) + "<span class='commentcolor'> //2 is converted to '2'</span><br>" +
    "'5' + '2': " + ('5' + '2') + "<span class='commentcolor'> //Both are strings</span><br>" +
    "'5' * '2': " + ('5' * '2') + "<span class='commentcolor'> //Both are converted to numbers</span><br>";
}

function complex179() {
    const car = {
        brand: "Toyota",
        model: "Supra",
        year: 2024,
        features: ["Turbocharged engine", "Sport suspension", "Leather interior"]
    };

    // Destructuring
    let {brand, model} = car;

    //Display Primitive Values
    return brand + " " + model;
}

function complex180() {
    const myCar = [
        {car: "Toyota Supra", topSpeed: 155 },
        {car: "Nissan Skyline", topSpeed: 180 },
        {car: "Mazda RX-7", topSpeed: 155 },
        {car: "Honda NSX", topSpeed: 170 },
        {car: "Mitsubishi Lancer Evolution", topSpeed: 155 },
        {car: "Subaru BRZ", topSpeed: 155 },
    ];

    let [car1,,,car2] = myCar;

    return "car1.car: " + car1.car + "<br>" + "car2.car: " + car2.car;
}

function complex181() {
    const myCar = [
        {car: "Toyota Supra", topSpeed: 155 },
        {car: "Nissan Skyline", topSpeed: 180 },
        {car: "Mazda RX-7", topSpeed: 155 },
        {car: "Honda NSX", topSpeed: 170 },
        {car: "Mitsubishi Lancer Evolution", topSpeed: 155 },
        {car: "Subaru BRZ", topSpeed: 155 },
    ];

    let {[0]: car1, [5]:car2} = myCar;

    return "The " + car1.car + " has the same engine as " + car2.car + ". This mean that under the hood, they have a very simillar specs too.";
}

function complex182() {
    const myCar = [
        {car: "Toyota Supra", topSpeed: 155 },
        {car: "Nissan Skyline", topSpeed: 180 },
        {car: "Mazda RX-7", topSpeed: 155 },
        {car: "Honda NSX", topSpeed: 170 },
        {car: "Mitsubishi Lancer Evolution", topSpeed: 155 },
        {car: "Subaru BRZ", topSpeed: 155 },
    ];

    let [car1, , car2, ...rest] = myCar;
    
    return "car1.car: " + car1.car + "<br>" + "car2.car: " + car2.car + "<br>" + "rest: " + JSON.stringify(rest);
}

function complex183() {
    const myCar = new Map([
        ["Toyota Supra", 155],
        ["Nissan Skyline", 180],
        ["Mazda RX-7", 155],
        ["Honda NSX", 170],
        ["Mitsubishi Lancer Evolution", 155],
        ["Subaru BRZ", 155],
    ]);

    let text = "";
    for (const [key, value] of myCar) {
        text += key + " top speed is " + value + "mph.<br>";
    }
    return text;
}

function complex184() {
    let firstName = "Max";
    let lastName = "Imaduddin";
    
    [firstName, lastName] = [lastName, firstName];
    return firstName + ", " + lastName;
}

function complex185() {
    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }
    return dec2bin(-21);
}

function complex186() {
    function bin2dec(bin) {
        return parseInt(bin, 2).toString(10);
    }
    return bin2dec(1000101);
}

function complex187() {
    let supra = "Experience the thrill of driving with the legendary Toyota Supra. Known for its sleek design and powerful performance, the Toyota Supra is more than just a car; it's an icon of speed and style. Whether you're on the open road or navigating city streets, the Toyota Supra delivers an exhilarating ride that turns heads wherever it goes. Discover what it means to truly drive with the Toyota Supra, where every journey becomes an unforgettable adventure.";
    return supra.search(/Toyota Supra/i);
}

function complex188() {
    let supra = "Experience the thrill of driving with the legendary Toyota Supra. Known for its sleek design and powerful performance, the Toyota Supra is more than just a car; it's an icon of speed and style. Whether you're on the open road or navigating city streets, the Toyota Supra delivers an exhilarating ride that turns heads wherever it goes. Discover what it means to truly drive with the Toyota Supra, where every journey becomes an unforgettable adventure.";
    const pattern = /Toyota Supra/i;
    return pattern.test(supra);
}

function complex189() {
    let obj = /Toyota Supra/i.exec("Experience the thrill of driving with the legendary Toyota Supra. Known for its sleek design and powerful performance, the Toyota Supra is more than just a car; it's an icon of speed and style. Whether you're on the open road or navigating city streets, the Toyota Supra delivers an exhilarating ride that turns heads wherever it goes. Discover what it means to truly drive with the Toyota Supra, where every journey becomes an unforgettable adventure.");

    return "Found " + obj[0] + " in position " + obj.index + " in the text";
}

function complex190() {
    try {
        adddlert("Welcome guest!");
    }
    catch(err) {
        return err.message;
    }
}

function complex191() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("desho").value;

    message.classList.remove('message-success', 'message-error');

    try { 
        if (x.trim() === "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";

        message.innerHTML = "Input is valid.";
        message.classList.add('message-success');
    } catch (err) {
        message.innerHTML = "Input is " + err;
        message.classList.add('message-error');
    }
}

function complex192() {
    const message = document.getElementById("p02");
    message.innerHTML = "";
    let x = document.getElementById("desho1").value;

    message.classList.remove('message-success', 'message-error');

    try { 
        if (x.trim() === "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";

        message.innerHTML = "Input is valid.";
        message.classList.add('message-success');
    } catch (err) {
        message.innerHTML = "Input is " + err;
        message.classList.add('message-error');
    } finally {
        document.getElementById("desho1").value = "";
    }
}

function complex193() {
    let num = 1;
    
    try {
        num.toPrecision(500); // A number cannot have 500 significant digits
        return "No error";
    } catch (err) {
        return err.name;
    }
}

function complex194() {
    let x = 5;
    try {
        x = y + 1; // y cannot be used (referenced)
    }
    catch(err) {
        return err.name;
    }
}

function complex195() {
    try {
        eval("alert('Hello)");   // Missing ' will produce an error
    }
    catch(err) {
        return err.name;
    }
}

function complex196() {
    let num = 1;
    try {
        num.toUpperCase();   // You cannot convert a number to upper case
    } catch (err) {
        return err.name;     // Return the error name if an error occurs
    }
}

function complex197() {
    try {
        decodeURI("%%%");   // You cannot URI decode percent signs
    }
    catch(err) {
        return err.name;
    }
}

function complex198() {
    try {
        carName = "Saab";
        let carName = "Volvo";
    }
    catch(err) {
        return err;
    }
}

function complex199() {
    const code = `
    carName = "Volvo";
    const carName;
    return carName;
    `;

    try {
        eval(`(function() { ${code} })()`);
    } catch (error) {
        console.error('Caught SyntaxError:', error.message); // This will log the syntax error
        return 'Syntax error occurred: const must be initialized when declared.';
    }
}

function complex200() {
    var x = 5; // Initialize x
    var y = 7; // Initialize y
    // Return the concatenated values of x and y
    return x + " " + y;
}

function complex201() {
    var x = 5; // Initialize x
    var result = x + " " + y;
    var y = 7; // Initialize y
    return result;
}

function complex202() {
    var x = 5; // Initialize x
    var y;
    var result = x + " " + y;
    var y = 7; // Initialize y
    return result;
}

function complex203() {
    try {
        x = 3.14;
        return x;
    } catch (error) {
        return error.message;
    }
}

function complex204() {
    let x = 3.14;

    function myFunc() {
        "use strict";
        try {
            y = 9.8;
            return y;
        } catch (error) {
            return error.message;
        }
    }
    return "x: " + x + "<br>" + "y: " + myFunc();
}

function complex205() {
    try {
        x = 3.14;
        return x;
    } catch (error) {
        return error.message;
    }
}

function complex206() {
    try {
        x = {p1:10, p2:20};
        return x;
    } catch (error) {
        return error.message;
    }
}

function complex207() {
    "use strict";
    try {
        eval(`
            function x(p1, p1) {};
        `);
        return "Function created successfully";
    } catch (error) {
        return error.message;
    }
}

function complex208() {
    "use strict";
    try{
        eval(`
            let x = 010; 
        `);
        return "x declared successfully";
    } catch (error) {
        return error.message;
    }
}

function complex209() {
    "use strict";
    try {
        eval(`
            let x = '\\010';
        `);
        return "x declared successfully";
    } catch (error) {
        return error.message;
    }
}

function complex210() {
    "use strict";
    const obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});

    try {
        obj.x = 3.14;
        return "obj.x successfuly written.";
    } catch (error) {
        return error.message;
    }
}

function complex211() {
    "use strict";
    const obj = {get x() {return 0} };

    try {
        obj.x = 3.14;
        return "obj.x successfully written.";
    } catch (error) {
        return error.message;
    }
}

function complex212() {
    "use strict";
    try {
        delete Object.prototype;
        return "Object.prototype has been deleted.";
    } catch (error) {
        return error.message;
    }
}

function complex213() {
    "use strict";
    try {
        eval ("x = 2");
        alert (x);
    } catch (error) {
        return error.message;
    }
}

function complex214() {
    "use strict";
    function myFunction() {
        alert(this); // will alert "undefined"
    }
    myFunction();
}

function complex215() {
    function myFunction() {
        alert(this); // will alert "undefined"
    }
    myFunction();
}

function complex216() {
    const person = {
        firstName: "Max",
        lastName : "Verstappen",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };
    return person.fullName();
}

function complex217() {
    let x = this;
    return x;
}

function complex218() {
    "use strict";
    let x = this;
    return x;
}

function complex219() {
    return this;
}

function complex220() {
    "use strict";
    function myFunc() {
        return this;
    }
    return myFunc();
}

function complex221(elem) {
    elem.classList.add("running");

    // Remove the "running" class after the animation is complete
    setTimeout(function() {
        elem.classList.remove("running");
    }, 2000); // Matches the duration of the animation
}

function complex222() {
    const myObject = {
        firstName: "Max",
        lastName : "Verstappen",
        id : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    };
    
    return myObject.fullName();
}

function complex223() {
    const person1 = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const person2 = {
        firstName:"Max",
        lastName: "Verstappen",
      }
      
      return person1.fullName.call(person2);
}

function complex224() {
    const person = {
        firstName: "Max",
        lastName : "Verstappen",
        id : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    };
    
    const member = {
        firstName:"Lewis",
        lastName:"Hamilton",
    };
    
    return "person.fullName(): " + person.fullName() + "<br>" +
    "person.fullName.bind(member)(): " + person.fullName.bind(member)();
}

function complex225() {
    let myFunction = (a, b) => (a*a) + (2 * a * b) + (b*b);
    return myFunction(4,7);
}

function complex226() {
    // Regular Function:
    hello = function() {
        document.getElementById("demoa301").innerHTML += this;
    }
    
    // The window object calls the function:
    window.addEventListener("load", hello);
    
    // A button object calls the function:
    document.getElementById("btns1").addEventListener("click", hello);
}

function complex227() {
    // Arrow Function:
    hello = () => {
        document.getElementById("demoa302").innerHTML += this;
    }
    
    // The window object calls the function:
    window.addEventListener("load", hello);
    
    // A button object calls the function:
    document.getElementById("btns2").addEventListener("click", hello);
}

function complex228() {
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
      }
    const myCar1 = new Car("Ford", 2014);
    const myCar2 = new Car("Audi", 2019);

    return myCar1.name + " " + myCar2.name;
}

function complex229() {
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
        age() {
          const date = new Date();
          return date.getFullYear() - this.year;
        }
    }
    
    const myCar = new Car("Toyota Supra", 2022);
    return"My car "+ myCar.name + " is " + myCar.age() + " years old.";
}

function complex230() {
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
        age(x) {
          return x - this.year;
        }
    }
      
    const date = new Date();
    let year = date.getFullYear();

    const myCar = new Car("Nissan Skyline GTR R34", 2002);
    return"My car "+ myCar.name + " is " + myCar.age(year) + " years old.";
}

function complex231() {
    const person = {
        name: "Max",
        age: 26
    };
    return person.name;
}

function complex232() {
    const person = {
        name: "Max",
        age: 26
    };
    return person["name"];
}

function complex233() {
    const person = {
        name: "Max",
        age: 26
    };
    person.name = "Max Verstappen";
    return person.name;
}

function complex234() {
    const person = {
        name: "Max",
        age: 26
    };
    person["name"] = "Max Verstappen";
    return person["name"];
}

function complex235() {
    const obj = JSON.parse('{ "name":"Max", "age":26, "nationality":"Dutch" }');
    return obj.name;
}

function complex236() {
    const name = '[ "Max", "John", "Jane" ]';
    const obj = JSON.parse(name);
    return obj[0];
}

function complex237() {
    const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    const obj = JSON.parse(text);
    obj.birth = new Date(obj.birth);
    return obj.name + ", " + obj.birth;
}

function complex238() {
    const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
    const obj = JSON.parse(text);
    obj.age = eval("(" + obj.age + ")");
    return obj.name + ", " + obj.age();
}

function complex239() {
    const obj = {"name":"John", "age":30, "city":"New York"};
    const myJSON = JSON.stringify(obj);
    return myJSON;
}

function complex240() {
    const cars = ["Saab", "Volvo", "BMW"];
    const myJSON = JSON.stringify(cars);
    return myJSON;
}

function complex241() {
    const myObj = { name: "John", age: 31, city: "New York" };
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);

    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);
    return obj.name;
}

function complex242() {
    const obj = {"name":"John", "today": new Date()};
    const myJSON = JSON.stringify(obj);
    return myJSON;
}

function complex243() {
    const obj = {"name":"John", "age": "function () {return 30;}"};
    const myJSON = JSON.stringify(obj);
    return myJSON;
}

function complex244() {
    const myJSON = '{"name":"Max", "age":26, "nationality":"Dutch-Belgian", "car":null, "isMarried":false}';
    const myobj = JSON.parse(myJSON);

    return "myobj.name: " + myobj.name + "<br>myJSON.name: " + myJSON.name;
}

function complex245() {
    const myJSON = '[ "Max", "John", "Jane" ]';
    const myArray = JSON.parse(myJSON);

    return "myArray[0]: " + myArray[0] + "<br>myJSON.[0]: " + myJSON[0];
}

function complex246() {
    // Create an object with the provided data
    const userData = {
        name: "Kobe Bryant",
        email: "kobe.bryant@example.com",
        car: "Maserati GranTurismo",
        nationality: "American",
        isMarried: 1
    };

    // Convert the object into a JSON string
    const jsonData = JSON.stringify(userData);

    // Send the JSON string to the PHP script
    fetch('php/insert_json.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            console.log('Data successfully inserted into users_json.');
        } else {
            console.error('Insertion Error:', result.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    return jsonData; // Optionally return the JSON string
}

function complex247() {
    const str = "dudududu Max Verstappen";
    let currentString = "";

    for (let i = 0; i < str.length; i++) {
        currentString += str[i];
        console.log(currentString);
    }
    alert("click 'F12' to see the console log!")
}

function complex248() {
    let x = 15 * 5;
    debugger;
    return x;
}

function complex249() {
    let carName = "Volvo";
    function myFunc() {
        let carOwner = "Max";
        return carName + " Owned by " + carOwner;
    }
    return myFunc();
}

function complex250() {
    let x1 = "";
    let x2 = 0;
    let x3 = false;
    const x4 = {};
    const x5 = [];
    const x6 = /()/;
    const x7 = function(){};

    return "x1: " + typeof x1 + "<br>" +
    "x2: " + typeof x2 + "<br>" +
    "x3: " + typeof x3 + "<br>" +
    "x4: " + typeof x4 + "<br>" +
    "x5: " + typeof x5 + "<br>" +
    "x6: " + typeof x6 + "<br>" +
    "x7: " + typeof x7 + "<br>";
}

function complex251() {
    let x = "Hello";
    x = 5;

    return "<code>typeof</code> x: " + typeof x;
}

function complex252() {
    let x1 = (0 == "");    // true
    let x2 = (1 == "1");   // true
    let x3 = (1 == true);  // true

    let y1 = (0 === "");   // false
    let y2 = (1 === "1");  // false
    let y3 = (1 === true); // false

    return "(0 == ''): " + x1 + "<br>" +
    "(1 == '1'): " + x2 + "<br>" +
    "(1 == true): " + x3 + "<br><br>" +
    "(0 === ''): " + y1 + "<br>" +
    "(1 === '1'): " + y2 + "<br>" +
    "(1 === true): " + y3;
}

function complex253() {
    function myFunction(x, y) {
        if (y === undefined) {
          y = 0;
        }  
        return x * y;
    }
    return myFunction(4);
}

function complex254() {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Unknown";
    }
    return "Today is " + day;
}

function complex255() {
    let x = new String("John");
    let y = "John";

    return x === y;
}

function complex256() {
    let x = new String("John");
    let y = new String("John");

    return x == y;
}

function complex257() {
    function myFunction(a) {
        let power = 10 
        return a * power
    }
    return myFunction(12)
}

function complex258() {
    function myFunction(a) {
        let power = 10 
        return a * power;
    }
    return myFunction(12);
}

function complex259() {
    const person = [];
    person[0] = "Max";
    person[1] = "Verstappen";
    person[2] = 33;

    return "person.length: " + person.length + "<br>person[0]: " + person[0];
}

function complex260() {
    const person = [];
    person["firstName"] = "Max";
    person["lastName"] = "Verstappen";
    person["age"] = 33;
    
    return "person.length: " + person.length + "<br>person[0]: " + person[0];
}

function complex261() {
    // Create Target Object
    const person1 = {
        firstName: "Max",
        lastName: "Verstappen",
        age: 26,
        eyeColor: "blue"
    };
    
    // Create Source Object
    const person2 = {firstName: "Sally"};
    
    // Assign Source to Target
    Object.assign(person1, person2);

    return "person1.name: " + person1.firstName + " " + person1.lastName + "<br>person1.age: " + person1.age + "<br>person1.eyeColor: " + person1.eyeColor;
}

function complex262() {
    // Create an Object:
    const person = {
        firstName: "Max",
        lastName: "Verstappen"
    };
    
    // Create new Object
    const man = Object.create(person);
    man.firstName = "Peter";

    return "man.name: " + man.firstName + " " + man.lastName;
}

function complex263() {
    // Create an Array:
    const arr = [['firstName', 'Max'], ['lastName', 'Verstappen']];

    // Create an Object:
    const person = Object.fromEntries(arr);

    return "person.name: " + person.firstName + " " + person.lastName;
}

function complex264() {
    const person = {
        firstName: 'Max',
        lastName: 'Verstappen',
        language: 'de',
        get lang() {
            return this.language;
        }
    };
    return person.lang;
}

function complex265() {
    const person = {
        firstName: 'Max',
        lastName: 'Verstappen',
        language: '',
        set lang(lang) {
            this.language = lang;
        }
    };

    person.lang = 'de';
    return person.language;
}

function complex266() {
    const person = {
        firstName: 'Max',
        lastName: 'Verstappen',
        language: 'de',
        get lang() {
            return this.language.toUpperCase();
        }
    };

    return person.lang;
}

function complex267() {
    const person = {
        firstName: 'Max',
        lastName: 'Verstappen',
        language: '',
        set lang(lang) {
            this.language = lang.toUpperCase();
        }
    };

    person.lang = 'de';
    return person.language;
}

function complex268() {
    const person = {
        firstName: 'Max',
        lastName: 'Verstappen'
    };
    
    Object.preventExtensions(person);

    try {
        person.age = 26;

        if (!person.hasOwnProperty('age')) {
            return "Error: Failed to add 'age' property: object is not extensible.";
        }
    } catch (error) {
        return `Error: ${error.message}`;
    }

    return person.age;
}

function complex269() {
    const person = {
        firstName: 'Max',
        lastName: 'Verstappen'
    };

    Object.preventExtensions(person);
    let x = Object.isExtensible(person);
    return x;
}

function complex270() {
    "use strict"
    // Create Object
    const person = {
        firstName: "Max",
        lastName: "Verstappen",
        age: 26,
        eyeColor: "blue"
    };

    // Seal Object
    Object.seal(person)

    let text = "";
    try {
      delete person.age;
      text = Object.values(person);
    }
    catch (err) {
      text = err;
    }

    return text;
}

function complex271() {
    "use strict"
    // Create Object
    const person = {
        firstName: "Max",
        lastName: "Verstappen",
        age: 26,
        eyeColor: "blue"
    };

    // Seal Object
    Object.seal(person);

    let text = Object.isSealed(person);
    return text;
}

function complex272() {
    'use strict'
    const person = {
        firstName: 'Max',
        lastName: 'Verstappen',
        age: 26,
        eyeColor: 'blue'
    };

    Object.freeze(person)
    let text = "";
    try {
      person.age = 27;
      text = Object.values(person);
    }
    catch (err) {
      text = err;
    }

    return text;
}

function complex273() {
    'use strict'
    const person = {
        firstName: 'Max',
        lastName: 'Verstappen',
        age: 26,
        eyeColor: 'blue'
    };

    Object.freeze(person);
    let x = Object.isFrozen(person);
    return x;
}

function complex274() {
    const x = function (a, b) {return a * b};
    let z = x(4, 3);
    return z;
}

function complex275() {
    function myFunction(a, b) {
        return arguments.length;
    }
    return myFunction(4, 3);
}

function complex276() {
    function myFunction(a, b) {
        return a * b;
    }
      
    let text = myFunction.toString();
    return text;
}

function complex277() {
    function myFunction(x, y) {
        if (y === undefined) {
          y = 2;
        }
        return x * y;
    }
    return myFunction(4);
}

function complex278() {
    function myFunction(x, y = 10) {
        return x + y;
    }
    return myFunction(5);
}

function complex279() {
    function sum(...args) {
        let sum = 0;
        for (let arg of args) sum += arg;
        return sum;
      }
      
      let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
      return x;
}

function complex280() {
    function findMax() {
        let max = -Infinity;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    }

    let x = findMax(1, 123, 500, 115, 44, 88);
    return x;
}

function complex281() {
    function sumAll() {
        let sum = 0;
        for(let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    
    let x = sumAll(1, 123, 500, 115, 44, 88);
    return x;
}

function complex282() {
    const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      const person2 = {
        firstName:"Mary",
        lastName: "Doe"
      }
      
      // This will return "John Doe":
      return "person1: " + person.fullName.call(person1) +"<br>person2: " + person.fullName.call(person2);;
}

function complex283() {
    const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
      }
      
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
      return person.fullName.call(person1, "Oslo", "Norway");
}

function complex284() {
    const person = {
        fullName: function(city, country) {
            return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
        }
    }
    const person1 = {
        firstName:"John",
        lastName:"Doe"
    }
    return person.fullName.apply(person1, ["Oslo", "Norway"]);
}

function complex285() {
    const person = {
        firstName:"John",
        lastName: "Doe",
        fullName: function () {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const member = {
        firstName:"Nate",
        lastName: "Higgers",
      }
      
      let fullName = person.fullName.bind(member);
      return fullName();
}

function complex286() {
    const person = {
        firstName: "John",
        lastName: "Doe",
        display: function () {
            let x = document.getElementById("demo");
            x.innerHTML = this.firstName + " " + this.lastName;
            return x.innerHTML;
        }
    }
    
    return person.display();
}

function complex287() {
    function add(a) {
        return function(b) {
            return a + b;
        };
    }
    
    let add5 = add(5);
    let add10 = add(10);
    
    return "add5(2): " + add5(2) + "<br>add10(2): " + add10(2);
}

function complex288() {
    class Car {
        constructor(brand) {
          this.carname = brand;
        }
        present() {
          return 'I have a ' + this.carname;
        }
      }
      
      class Model extends Car {
        constructor(brand, mod) {
          super(brand);
          this.model = mod;
        }
        show() {
          return this.present() + ', it is a ' + this.model;
        }
      }
      
      let myCar = new Model("Ford", "Mustang");
      return myCar.show();      
}

function complex289() {
    class Car {
        constructor(brand) {
          this.carname = brand;
        }
        get cnam() {
          return this.carname;
        }
        set cnam(x) {
          this.carname = x;
        }
      }
      
      const myCar = new Car("Ford");
      
      return myCar.cnam;
}

function complex290() {
    class Car {
        constructor(name) {
          this.name = name;
        }
        static hello() {
          return "Hello!!";
        }
      }
      
      const myCar = new Car("Ford");
      
      // You can call 'hello()' on the Car Class:
      return Car.hello();
      
      // But NOT on a Car Object:
      // document.getElementById("demo").innerHTML = myCar.hello();
      // this will raise an error.
}

function complex291() {
    function myDisplayer(message) {
        return message; // Return the message
    }

    function myFirst() {
        return myDisplayer("Hello"); // Return the message
    }
    
    function mySecond() {
        return myDisplayer("Goodbye"); // Return the message
    }

    // Call myFirst() first, but only use the result of mySecond()
    myFirst(); // This will run, but its output will be ignored
    return mySecond(); // This will be the final output
}

function complex292() {
    function myDisplayer(message) {
        return message; // Return the message
    }

    function myFirst() {
        return myDisplayer("Hello"); // Return the message
    }
    
    function mySecond() {
        return myDisplayer("Goodbye"); // Return the message
    }

    // Call myFirst() first, but only use the result of mySecond()
    mySecond(); // This will run, but its output will be ignored
    return myFirst(); // This will be the final output  
}

function complex293() {
    function myDisplayer(some) {
        return some;
      }
      
      function myCalculator(num1, num2) {
        let sum = num1 + num2;
        return sum;
      }
      
      let result = myCalculator(5, 5);
      return myDisplayer(result);
}

function complex294() {
    function myDisplayer(some) {
        return some;
    }
    
    function myCalculator(num1, num2) {
        let sum = num1 + num2;
        return myDisplayer(sum);
    }
    
    return myCalculator(5, 5);
}

function complex295() {
    function myDisplayer(some) {
        return some;
      }
      
      function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        return myCallback(sum);
      }
      
      return myCalculator(5, 5, myDisplayer);
}

function complex296() {
    setTimeout(() => {
        document.getElementById('demoa386').querySelector('span').innerHTML = "I love You !!";
    }, 3000); // Delay of 3 seconds
}

function complex297() {
    function myDisplayer(some) {
        document.getElementById("demoa387").innerHTML = some;
    }
    async function myFunction() {
        return "Max Verstappen";
    }
    
    myFunction().then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
    );
}

function complex298() {
    async function myDisplay() {
        let myPromise = new Promise(function(resolve, reject) {
          resolve("I love You !!");
        });
        document.getElementById("demoa388").innerHTML = await myPromise;
      }
      
      myDisplay();
}

function complex299() {
    async function myDisplay() {
        let myPromise = new Promise(function(resolve) {
          setTimeout(function() {resolve("I love You !!");}, 3000);
        });
        document.getElementById("demoa389").innerHTML = await myPromise;
      }
      
      myDisplay();
}

function complex300() {
    let elements = document.querySelectorAll('h2.section');
    let combinedContent = '';
    elements.forEach(function(element) {
        combinedContent += element.innerHTML + '<br>'; // Append each element's innerHTML
    });
    document.getElementById('demoa393').innerHTML = combinedContent;
}

function complex301() {
    document.getElementById("demoa394").innerHTML = "Date : " + new Date(); // Show date immediately
    setInterval(() => {
        document.getElementById("demoa394").innerHTML = "Date : " + new Date();
    }, 1000); // Update every second (1000 ms)
}

function validateCharacter(event) {
    const char = String.fromCharCode(event.which); // Get the character from the event
    // Allow only letters and spaces
    if (!/^[a-zA-Z\s]$/.test(char)) {
        event.preventDefault(); // Prevent the input
    }
}

function validateIdCardCharacter(event) {
    const char = String.fromCharCode(event.which); // Get the character from the event
    // Allow only numbers
    if (!/^[0-9]$/.test(char)) {
        event.preventDefault(); // Prevent the input
    }
}

function complex302() {
    // Add the form dynamically to the container
    document.getElementById("demoa395").innerHTML = `
        Name: <input type="text" name="fname" id="fname" required onkeypress="return validateCharacter(event)" required><br>
        ID Card: <input type="text" name="idcard" id="idcard" required onkeypress="return validateIdCardCharacter(event)" required><br>
        Team: <input type="text" name="team" id="team" placeholder="Optional"><br>
        <input type="submit" value="Submit">
    `;
}

function startBouncing() {
    const container = document.querySelector('.bounce-container');
    let dvdCount = 1; // Start with 1 DVD
    let posX = [], posY = [], velX = [], velY = [];
    const dvdWidth = 20;
    const dvdHeight = 20;
    const maxDvds = 8000; // Limit to 8000 DVDs
    let lastDuplicateTime = 0; // Track last duplication time
    const duplicationCooldown = 1; // Cooldown period in milliseconds
    let animationId;
    const rectangleCounter = document.getElementById('rectangleCount'); // Counter element
    let isPlaying = false; // Track play state

    // Create the initial DVD element
    function createDVD() {
        const dvd = document.createElement('div');
        dvd.classList.add('bounce-rectangle');
        container.appendChild(dvd);
        return dvd;
    }

    let dvds = []; // Array to store DVD elements

    // Initialize starting conditions (used in both start and reset)
    function initStartConditions() {
        posX = [Math.random() * (container.offsetWidth - dvdWidth)]; // Random starting X position
        posY = [Math.random() * (container.offsetHeight - dvdHeight)]; // Random starting Y position
        velX = [(Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 4)]; // Random velocity for X
        velY = [(Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 4)]; // Random velocity for Y

        // Clear existing DVDs and create the initial one
        dvds.forEach(dvd => container.removeChild(dvd));
        dvds = [createDVD()];
        dvdCount = 1; // Reset count
        updateRectangleCount(); // Update the count in the UI
    }

    function moveDVD() {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const now = Date.now(); // Get current time

        for (let i = 0; i < dvdCount; i++) {
            posX[i] += velX[i];
            posY[i] += velY[i];

            // Check for collision with container walls
            let hitWall = false;
            if (posX[i] + dvdWidth >= containerWidth || posX[i] <= 0) {
                velX[i] = -velX[i]; // Reverse X direction
                hitWall = true;
            }
            if (posY[i] + dvdHeight >= containerHeight || posY[i] <= 0) {
                velY[i] = -velY[i]; // Reverse Y direction
                hitWall = true;
            }

            // Duplicate DVD only if enough time has passed since the last duplication
            if (hitWall && dvdCount < maxDvds && now - lastDuplicateTime > duplicationCooldown) {
                duplicateDVD(containerWidth, containerHeight);
                lastDuplicateTime = now; // Update last duplication time
            }

            // Update each DVD position
            dvds[i].style.left = `${posX[i]}px`;
            dvds[i].style.top = `${posY[i]}px`;
        }

        // Reset if the number of DVDs reaches 8000
        if (dvdCount >= maxDvds) {
            resetDvds();
        }

        animationId = requestAnimationFrame(moveDVD);
    }

    // Duplicate DVD on bounce
    function duplicateDVD(containerWidth, containerHeight) {
        if (dvdCount < maxDvds) {
            dvdCount++;
            posX.push(Math.random() * (containerWidth - dvdWidth)); // Random new position for the new DVD
            posY.push(Math.random() * (containerHeight - dvdHeight));
            velX.push((Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 4)); // Random velocity
            velY.push((Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 4));
            dvds.push(createDVD()); // Add new DVD
            updateRectangleCount(); // Update the counter
        }
    }

    // Reset the DVDs
    function resetDvds() {
        initStartConditions(); // Use same initial conditions for reset
        if (isPlaying) {
            moveDVD(); // Restart animation
        }
    }

    // Update the rectangle counter
    function updateRectangleCount() {
        rectangleCounter.textContent = dvdCount; // Update the counter text
    }

    // Pause and Play functionality
    document.getElementById('pauseBtn').addEventListener('click', function () {
        cancelAnimationFrame(animationId);
        isPlaying = false; // Update play state
        document.getElementById('pauseBtn').style.display = 'none';
        document.getElementById('playBtn').style.display = 'inline';
    });

    document.getElementById('playBtn').addEventListener('click', function () {
        if (!isPlaying) {
            moveDVD(); // Start animation on play
            isPlaying = true; // Update play state
        }
        document.getElementById('playBtn').style.display = 'none';
        document.getElementById('pauseBtn').style.display = 'inline';
    });

    // Reset functionality
    document.getElementById('resetBtn').addEventListener('click', function () {
        cancelAnimationFrame(animationId); // Stop animation
        resetDvds(); // Reset to the initial state
    });

    // Start the animation with initialized values
    initStartConditions(); // Prepare the initial state, but don't start moving yet
}

document.addEventListener("DOMContentLoaded", function () {
    startBouncing();
});

function complex303() {
    var x = document.getElementById("myBtn");
    x.addEventListener("mouseover", myFunction);
    x.addEventListener("click", mySecondFunction);
    x.addEventListener("mouseout", myThirdFunction);
    
    function myFunction() {
      document.getElementById("demoa397").innerHTML += "Moused over!<br>";
    }
    
    function mySecondFunction() {
      document.getElementById("demoa397").innerHTML += "Clicked!<br>";
    }
    
    function myThirdFunction() {
      document.getElementById("demoa397").innerHTML += "Moused out!<br>";
    }
}

function myFunctionas() {
    document.getElementById("demoa398").innerHTML = Math.random();
    }

function complex304() {
    document.getElementById("myDIV").addEventListener("mousemove", myFunctionas);
}

function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myFunctionas);
}

function complex304() {
    document.getElementById("demoa399").innerHTML = "This is a paragraph.";
}

function complex305() {
    const myCollection = document.getElementsByTagName("p");
    document.getElementById("demoa399").innerHTML = "The innerHTML of the 666th paragraph is: " + myCollection[666].innerHTML;
}

function complex306() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    return "Browser inner window width: " + w + "<br>Browser inner window height: " + h;
}

let wza;

function startWorker() {
    if (typeof(wza) == "undefined") {
        wza = new Worker("js/demo_workers2.js");
    }
    wza.onmessage = function(event) {
        document.getElementById("resultza").innerHTML = event.data;
    };
}

function stopWorker() {
    wza.terminate();
    wza = undefined;
}

function complex307() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demoa428").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "demo_AJAX.txt");
    xhttp.send();
}

function complex308() {
    // Restore the default HTML content
    document.getElementById("demoa428").innerHTML = '<h2>Let AJAX Change this text</h2><button type="button" onclick="complex307()">Change Content</button>';
}

// Function to load ID card options dynamically when the page loads
function loadIdcardOptions() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("idcardDropdown").innerHTML += this.responseText;
    }
    xhttp.open("GET", "php/karyawan_options.php", true);
    xhttp.send();
}
  
// Function to fetch employee data based on selected ID card
function complex309(idcard) {
    if (idcard == "") {
    document.getElementById("employeeDetails").innerHTML = "";
    return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("employeeDetails").innerHTML = this.responseText;
    }
    xhttp.open("GET", "php/karyawan_fetch.php?idcard=" + idcard);
    xhttp.send();
}
  
  // Load ID card options on page load
  document.addEventListener("DOMContentLoaded", loadIdcardOptions);

function complex310() {
    var trace1 = {
        x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y: [219, 146, 112, 127, 124, 180, 236, 207, 236, 263, 350, 430, 474, 526, 488, 537, 500, 439],
        name: 'Rest of world',
        marker: {color: 'rgb(55, 83, 109)'},
        type: 'bar'
    };
      
    var trace2 = {
        x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y: [16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270, 299, 340, 403, 549, 499],
        name: 'China',
        marker: {color: 'rgb(26, 118, 255)'},
        type: 'bar'
    };
      
    var data = [trace1, trace2];
      
    var layout = {
        title: 'US Export of Plastic Scrap',
        margin: {l: 50, r: 50, t: 50, b: 50},
        height: 275,
        xaxis: {tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
        }},
        yaxis: {
          title: 'USD (millions)',
          titlefont: {
            size: 16,
            color: 'rgb(107, 107, 107)'
        },
          tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
        }
        },
        legend: {
          x: 0,
          y: 1.0,
          bgcolor: 'rgba(255, 255, 255, 0)',
          bordercolor: 'rgba(255, 255, 255, 0)'
        },
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1
    };

    var config = {
        responsive: true
    };
      
    Plotly.newPlot('demoa429', data, layout, config);
}

function complex311() {
    var xData = [
        [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
        [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
        [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
        [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013]
      ];
      
      var yData = [
        [74, 82, 80, 74, 73, 72, 74, 70, 70, 66, 66, 69],
        [45, 42, 50, 46, 36, 36, 34, 35, 32, 31, 31, 28],
        [13, 14, 20, 24, 20, 24, 24, 40, 35, 41, 43, 50],
        [18, 21, 18, 21, 16, 14, 13, 18, 17, 16, 19, 23]
      ];
      
      var colors = ['rgba(67,67,67,1)', 'rgba(115,115,115,1)', 'rgba(49,130,189, 1)',
        'rgba(189,189,189,1)'
      ];
      
      var lineSize = [2, 2, 4, 2];
      
      var labels = ['Television', 'Newspaper', 'Internet', 'Radio'];
      
      var data = [];
      
      for ( var i = 0 ; i < xData.length ; i++ ) {
        var result = {
          x: xData[i],
          y: yData[i],
          type: 'scatter',
          mode: 'lines',
          line: {
            color: colors[i],
            width: lineSize[i]
          }
        };
        var result2 = {
          x: [xData[i][0], xData[i][11]],
          y: [yData[i][0], yData[i][11]],
          type: 'scatter',
          mode: 'markers',
          marker: {
            color: colors[i],
            size: 12
          }
        };
        data.push(result, result2);
      }
      
      var layout = {
        showlegend: false,
        height: 600,
        width: 600,
        xaxis: {
          showline: true,
          showgrid: false,
          showticklabels: true,
          linecolor: 'rgb(204,204,204)',
          linewidth: 2,
          autotick: false,
          ticks: 'outside',
          tickcolor: 'rgb(204,204,204)',
          tickwidth: 2,
          ticklen: 5,
          tickfont: {
            family: 'Arial',
            size: 12,
            color: 'rgb(82, 82, 82)'
          }
        },
        yaxis: {
          showgrid: false,
          zeroline: false,
          showline: false,
          showticklabels: false
        },
        autosize: false,
        margin: {
          autoexpand: false,
          l: 100,
          r: 20,
          t: 100
        },
        annotations: [
          {
            xref: 'paper',
            yref: 'paper',
            x: 0.0,
            y: 1.05,
            xanchor: 'left',
            yanchor: 'bottom',
            text: 'Main Source for News',
            font:{
              family: 'Arial',
              size: 30,
              color: 'rgb(37,37,37)'
            },
            showarrow: false
          },
          {
            xref: 'paper',
            yref: 'paper',
            x: 0.5,
            y: -0.1,
            xanchor: 'center',
            yanchor: 'top',
            text: 'Source: Pew Research Center & Storytelling with data',
            showarrow: false,
            font: {
              family: 'Arial',
              size: 12,
              color: 'rgb(150,150,150)'
            }
          }
        ]
      };
      
      for( var i = 0 ; i < xData.length ; i++ ) {
        var result = {
          xref: 'paper',
          x: 0.05,
          y: yData[i][0],
          xanchor: 'right',
          yanchor: 'middle',
          text: labels[i] + ' ' + yData[i][0] +'%',
          showarrow: false,
          font: {
            family: 'Arial',
            size: 16,
            color: 'black'
          }
        };
        var result2 = {
          xref: 'paper',
          x: 0.95,
          y: yData[i][11],
          xanchor: 'left',
          yanchor: 'middle',
          text: yData[i][11] +'%',
          font: {
            family: 'Arial',
            size: 16,
            color: 'black'
          },
          showarrow: false
        };
      
        layout.annotations.push(result, result2);
      }
      
      Plotly.newPlot('demoa430', data, layout);      
}

function complex312() {
    var heroDamage = [];
    var winRate = [];

    for (let i = 0; i < 75; i++) {
        let damage = 2000 + i * 120; 
        let baseWinRate = 30 + (i / 3); 

        let noise = Math.random() * 5 - 2.5; 
        let rate = Math.min(62, Math.max(30, baseWinRate + noise)); 

        heroDamage.push(damage);
        winRate.push(rate);
    }

    let outliers = [
        { damage: 3000, rate: 56 }, { damage: 2500, rate: 52 }, { damage: 2200, rate: 50 }, 
        { damage: 2000, rate: 48 }, { damage: 2800, rate: 58 }, { damage: 2400, rate: 54 },
        { damage: 2600, rate: 53 }, { damage: 2300, rate: 51 }, { damage: 2100, rate: 50 },
        { damage: 1900, rate: 49 }, { damage: 1700, rate: 48 }, { damage: 1500, rate: 47 },
        { damage: 1300, rate: 46 }, { damage: 1100, rate: 45 }, { damage: 8000, rate: 39 },
        { damage: 8500, rate: 41 }, { damage: 8800, rate: 43 }, { damage: 10000, rate: 45 },
        { damage: 10500, rate: 50 }, { damage: 11000, rate: 55 }, { damage: 1000, rate: 48 }, 
        { damage: 1100, rate: 54 }, { damage: 1200, rate: 58 }, { damage: 5000, rate: 30 },
        { damage: 5500, rate: 31 }, { damage: 6000, rate: 32 }, { damage: 9500, rate: 37 },
        { damage: 10000, rate: 39 }, { damage: 10500, rate: 42 }, { damage: 4000, rate: 55 }, 
        { damage: 6000, rate: 40 }, { damage: 7000, rate: 45 }, { damage: 11000, rate: 50 }, 
        { damage: 9000, rate: 58 }, { damage: 8500, rate: 59 }, { damage: 8000, rate: 60 },
        { damage: 9500, rate: 35 }, { damage: 9000, rate: 38 }, { damage: 8500, rate: 40 },
        { damage: 11000, rate: 30 }, { damage: 10500, rate: 33 }, { damage: 10000, rate: 36 },
        { damage: 7500, rate: 60 }, { damage: 7100, rate: 58 }, { damage: 6700, rate: 56 },
        { damage: 4700, rate: 32 }, { damage: 4500, rate: 34 }, { damage: 4300, rate: 36 },
        { damage: 6000, rate: 52 }, { damage: 5800, rate: 49 }, { damage: 5600, rate: 47 },
    ];

    outliers.forEach((o) => {
        heroDamage.push(o.damage);
        winRate.push(o.rate);
    });

    var data = [
        {
            x: heroDamage,
            y: winRate,
            mode: 'markers',
            marker: {
                size: 10,
                color: heroDamage, 
                colorscale: 'Turbo',
                showscale: true, 
            },
            type: 'scatter',
        },
    ];

    var layout = {
        title: 'Relationship between Hero Damage and Win Rate in Dota 2',
        xaxis: {
            title: 'Hero Damage',
            range: [0, 12000], 
        },
        yaxis: {
            title: 'Win Rate (%)',
            range: [0, 70], 
        },
    };

    Plotly.newPlot('demoa431', data, layout);
}

function complex313() {
    var data = [
        {
            values: [413219, 158729, 81982, 39182],
            labels: ['SE Asia', 'China', 'Europe', 'America'],
            type: 'pie'
        }
    ];

    var layout = {
        title: 'Distribution of Dota 2 Players',
        height: 300,
        width: 500,
        margin: {
            l: 20,
            r: 20,
            t: 40,
            b: 10,
            pad: 4
        }
    };

    Plotly.newPlot('demoa432', data, layout);
}

const heroes = [
    { name: "Abaddon", winRate: 55.59, pickRate: 8.57, kda: 3.36 },
    { name: "Alchemist", winRate: 50.25, pickRate: 8.16, kda: 3.20 },
    { name: "Ancient Apparition", winRate: 52.04, pickRate: 7.29, kda: 2.83 },
    { name: "Anti-Mage", winRate: 48.09, pickRate: 11.10, kda: 2.89 },
    { name: "Arc Warden", winRate: 50.93, pickRate: 4.03, kda: 2.96 },
    { name: "Axe", winRate: 52.94, pickRate: 18.14, kda: 2.57 },
    { name: "Bane", winRate: 50.21, pickRate: 2.51, kda: 2.62 },
    { name: "Batrider", winRate: 43.76, pickRate: 1.21, kda: 2.42 },
    { name: "Beastmaster", winRate: 48.36, pickRate: 3.24, kda: 2.75 },
    { name: "Bloodseeker", winRate: 51.50, pickRate: 3.78, kda: 2.84 },
    { name: "Bounty Hunter", winRate: 51.86, pickRate: 8.25, kda: 2.75 },
    { name: "Brewmaster", winRate: 49.09, pickRate: 0.88, kda: 3.00 },
    { name: "Bristleback", winRate: 48.40, pickRate: 10.56, kda: 2.53 },
    { name: "Broodmother", winRate: 51.15, pickRate: 3.42, kda: 3.20 },
    { name: "Centaur Warrunner", winRate: 51.65, pickRate: 8.52, kda: 2.94 },
    { name: "Chaos Knight", winRate: 49.46, pickRate: 4.18, kda: 2.54 },
    { name: "Chen", winRate: 43.95, pickRate: 0.50, kda: 2.49 },
    { name: "Clinkz", winRate: 50.07, pickRate: 4.59, kda: 2.81 },
    { name: "Clockwerk", winRate: 52.69, pickRate: 8.37, kda: 2.77 },
    { name: "Crystal Maiden", winRate: 50.68, pickRate: 12.51, kda: 2.36 },
    { name: "Dark Seer", winRate: 50.41, pickRate: 1.78, kda: 2.91 },
    { name: "Dawnbreaker", winRate: 51.38, pickRate: 4.17, kda: 3.03 },
    { name: "Dazzle", winRate: 47.88, pickRate: 8.86, kda: 2.30 },
    { name: "Death Prophet", winRate: 49.77, pickRate: 2.95, kda: 3.03 },
    { name: "Disruptor", winRate: 50.03, pickRate: 6.38, kda: 2.99 },
    { name: "Doom", winRate: 45.57, pickRate: 4.83, kda: 2.48 },
    { name: "Dragon Knight", winRate: 48.74, pickRate: 9.28, kda: 2.91 },
    { name: "Drow Ranger", winRate: 50.99, pickRate: 12.77, kda: 3.00 },
    { name: "Earth Spirit", winRate: 49.19, pickRate: 3.89, kda: 2.84 },
    { name: "Earthshaker", winRate: 49.30, pickRate: 16.36, kda: 2.85 },
    { name: "Elder Titan", winRate: 50.93, pickRate: 1.63, kda: 2.53 },
    { name: "Ember Spirit", winRate: 47.31, pickRate: 4.61, kda: 3.43 },
    { name: "Enchantress", winRate: 47.15, pickRate: 3.60, kda: 2.65 },
    { name: "Enigma", winRate: 50.17, pickRate: 3.71, kda: 2.35 },
    { name: "Faceless Void", winRate: 45.73, pickRate: 7.23, kda: 2.91 },
    { name: "Grimstroke", winRate: 48.28, pickRate: 4.54, kda: 2.72 },
    { name: "Gyrocopter", winRate: 47.73, pickRate: 4.72, kda: 2.62 },
    { name: "Hoodwink", winRate: 46.04, pickRate: 10.60, kda: 2.83 },
    { name: "Huskar", winRate: 48.10, pickRate: 6.09, kda: 1.96 },
    { name: "Invoker", winRate: 47.60, pickRate: 20.16, kda: 3.16 },
    { name: "Io", winRate: 50.24, pickRate: 3.76, kda: 2.76 },
    { name: "Jakiro", winRate: 50.40, pickRate: 12.59, kda: 2.43 },
    { name: "Juggernaut", winRate: 52.01, pickRate: 16.01, kda: 3.02 },
    { name: "Keeper of the Light", winRate: 47.90, pickRate: 2.00, kda: 3.07 },
    { name: "Kunkka", winRate: 49.30, pickRate: 6.11, kda: 3.15 },
    { name: "Legion Commander", winRate: 53.07, pickRate: 16.97, kda: 2.76 },
    { name: "Leshrac", winRate: 49.16, pickRate: 2.65, kda: 2.47 },
    { name: "Lich", winRate: 54.75, pickRate: 12.95, kda: 2.68 },
    { name: "Lifestealer", winRate: 52.55, pickRate: 8.60, kda: 3.74 },
    { name: "Lina", winRate: 46.32, pickRate: 11.84, kda: 2.60 },
    { name: "Lion", winRate: 49.81, pickRate: 23.59, kda: 2.24 },
    { name: "Lone Druid", winRate: 49.27, pickRate: 2.31, kda: 2.78 },
    { name: "Luna", winRate: 51.58, pickRate: 18.14, kda: 3.04 },
    { name: "Lycan", winRate: 50.60, pickRate: 2.27, kda: 3.36 },
    { name: "Magnus", winRate: 48.79, pickRate: 8.17, kda: 2.87 },
    { name: "Marci", winRate: 49.70, pickRate: 7.13, kda: 2.49 },
    { name: "Mars", winRate: 47.75, pickRate: 8.06, kda: 2.94 },
    { name: "Medusa", winRate: 54.22, pickRate: 9.97, kda: 4.49 },
    { name: "Meepo", winRate: 48.30, pickRate: 1.65, kda: 2.53 },
    { name: "Mirana", winRate: 44.79, pickRate: 6.36, kda: 2.81 },
    { name: "Monkey King", winRate: 44.54, pickRate: 7.94, kda: 2.59 },
    { name: "Morphling", winRate: 45.80, pickRate: 7.74, kda: 2.96 },
    { name: "Muerta", winRate: 47.01, pickRate: 3.16, kda: 2.55 },
    { name: "Naga Siren", winRate: 47.26, pickRate: 1.55, kda: 2.68 },
    { name: "Nature's Prophet", winRate: 45.64, pickRate: 9.52, kda: 2.46 },
    { name: "Necrophos", winRate: 52.87, pickRate: 11.20, kda: 3.11 },
    { name: "Night Stalker", winRate: 52.36, pickRate: 7.34, kda: 3.27 },
    { name: "Nyx Assassin", winRate: 51.02, pickRate: 9.84, kda: 2.62 },
    { name: "Ogre Magi", winRate: 51.40, pickRate: 14.97, kda: 2.69 },
    { name: "Omniknight", winRate: 50.98, pickRate: 3.31, kda: 2.40 },
    { name: "Oracle", winRate: 52.68, pickRate: 4.28, kda: 2.99 },
    { name: "Outworld Destroyer", winRate: 50.78, pickRate: 5.83, kda: 2.92 },
    { name: "Pangolier", winRate: 48.73, pickRate: 4.17, kda: 3.17 },
    { name: "Phantom Assassin", winRate: 50.61, pickRate: 20.22, kda: 3.00 },
    { name: "Phantom Lancer", winRate: 47.71, pickRate: 3.94, kda: 2.96 },
    { name: "Phoenix", winRate: 50.45, pickRate: 5.47, kda: 2.93 },
    { name: "Primal Beast", winRate: 48.54, pickRate: 4.06, kda: 3.04 },
    { name: "Puck", winRate: 48.93, pickRate: 9.19, kda: 3.43 },
    { name: "Pudge", winRate: 50.83, pickRate: 24.79, kda: 2.54 },
    { name: "Pugna", winRate: 48.14, pickRate: 4.03, kda: 2.53 },
    { name: "Queen of Pain", winRate: 50.26, pickRate: 14.69, kda: 3.80 },
    { name: "Razor", winRate: 50.11, pickRate: 6.68, kda: 2.88 },
    { name: "Riki", winRate: 51.39, pickRate: 5.88, kda: 3.29 },
    { name: "Ringmaster", winRate: 47.42, pickRate: 7.90, kda: 2.73 },
    { name: "Rubick", winRate: 47.23, pickRate: 19.89, kda: 2.81 },
    { name: "Sand King", winRate: 49.50, pickRate: 9.48, kda: 2.57 },
    { name: "Shadow Demon", winRate: 49.53, pickRate: 4.35, kda: 2.67 },
    { name: "Shadow Fiend", winRate: 51.03, pickRate: 21.54, kda: 2.88 },
    { name: "Shadow Shaman", winRate: 53.01, pickRate: 12.38, kda: 2.56 },
    { name: "Silencer", winRate: 52.75, pickRate: 9.51, kda: 2.67 },
    { name: "Skywrath Mage", winRate: 50.47, pickRate: 7.53, kda: 2.89 },
    { name: "Slardar", winRate: 49.35, pickRate: 6.47, kda: 2.47 },
    { name: "Slark", winRate: 49.35, pickRate: 10.69, kda: 2.77 },
    { name: "Snapfire", winRate: 46.83, pickRate: 6.04, kda: 2.90 },
    { name: "Sniper", winRate: 48.24, pickRate: 22.11, kda: 3.27 },
    { name: "Spectre", winRate: 51.37, pickRate: 10.79, kda: 4.26 },
    { name: "Spirit Breaker", winRate: 51.21, pickRate: 12.55, kda: 3.03 },
    { name: "Storm Spirit", winRate: 50.32, pickRate: 8.47, kda: 3.30 },
    { name: "Sven", winRate: 45.33, pickRate: 3.18, kda: 2.48 },
    { name: "Techies", winRate: 46.98, pickRate: 8.46, kda: 2.18 },
    { name: "Templar Assassin", winRate: 44.75, pickRate: 4.50, kda: 3.03 },
    { name: "Terrorblade", winRate: 46.06, pickRate: 2.49, kda: 2.38 },
    { name: "Tidehunter", winRate: 49.82, pickRate: 4.69, kda: 3.06 },
    { name: "Timbersaw", winRate: 48.87, pickRate: 9.13, kda: 3.01 },
    { name: "Tinker", winRate: 49.45, pickRate: 3.58, kda: 3.07 },
    { name: "Tiny", winRate: 48.12, pickRate: 7.17, kda: 3.06 },
    { name: "Treant Protector", winRate: 49.70, pickRate: 4.85, kda: 2.75 },
    { name: "Troll Warlord", winRate: 50.17, pickRate: 3.58, kda: 2.39 },
    { name: "Tusk", winRate: 45.98, pickRate: 6.60, kda: 2.45 },
    { name: "Underlord", winRate: 51.92, pickRate: 5.55, kda: 2.98 },
    { name: "Undying", winRate: 51.29, pickRate: 7.92, kda: 2.63 },
    { name: "Ursa", winRate: 49.29, pickRate: 8.42, kda: 2.98 },
    { name: "Vengeful Spirit", winRate: 51.54, pickRate: 8.87, kda: 2.21 },
    { name: "Venomancer", winRate: 50.13, pickRate: 6.88, kda: 2.58 },
    { name: "Viper", winRate: 49.85, pickRate: 8.28, kda: 2.73 },
    { name: "Visage", winRate: 52.36, pickRate: 3.35, kda: 3.10 },
    { name: "Void Spirit", winRate: 51.97, pickRate: 5.26, kda: 3.75 },
    { name: "Warlock", winRate: 54.13, pickRate: 9.48, kda: 3.01 },
    { name: "Weaver", winRate: 48.14, pickRate: 7.54, kda: 3.35 },
    { name: "Windranger", winRate: 43.49, pickRate: 7.98, kda: 2.82 },
    { name: "Winter Wyvern", winRate: 50.76, pickRate: 3.41, kda: 2.51 },
    { name: "Witch Doctor", winRate: 52.28, pickRate: 17.49, kda: 2.47 },
    { name: "Wraith King", winRate: 55.51, pickRate: 12.96, kda: 3.55 },
    { name: "Zeus", winRate: 51.11, pickRate: 13.61, kda: 3.90 }
];

const invoker = [
    { date: new Date(2024, 8, 14), pickRate: 16.27, winRate: 46.99},
    { date: new Date(2024, 8, 15), pickRate: 15.64, winRate: 47.22},
    { date: new Date(2024, 8, 16), pickRate: 15.31, winRate: 47.41},
    { date: new Date(2024, 8, 17), pickRate: 15.67, winRate: 47.78},
    { date: new Date(2024, 8, 18), pickRate: 15.99, winRate: 47.84},
    { date: new Date(2024, 8, 19), pickRate: 16.21, winRate: 47.56},
    { date: new Date(2024, 8, 20), pickRate: 16.13, winRate: 47.98},
    { date: new Date(2024, 8, 21), pickRate: 15.77, winRate: 47.58},
    { date: new Date(2024, 8, 22), pickRate: 15.83, winRate: 47.84},
    { date: new Date(2024, 8, 23), pickRate: 16.34, winRate: 48.22},
    { date: new Date(2024, 8, 24), pickRate: 16.91, winRate: 48.34},
    { date: new Date(2024, 8, 25), pickRate: 16.83, winRate: 48.28},
    { date: new Date(2024, 8, 26), pickRate: 17.06, winRate: 48.39},
    { date: new Date(2024, 8, 27), pickRate: 16.95, winRate: 48.31},
    { date: new Date(2024, 8, 28), pickRate: 16.72, winRate: 47.96},
    { date: new Date(2024, 8, 29), pickRate: 16.94, winRate: 48.09},
    { date: new Date(2024, 8, 30), pickRate: 16.89, winRate: 48.57},
    { date: new Date(2024, 9, 1), pickRate: 17.03, winRate: 48.46},
    { date: new Date(2024, 9, 2), pickRate: 19.43, winRate: 47.03},
    { date: new Date(2024, 9, 3), pickRate: 19.43, winRate: 47.21},
    { date: new Date(2024, 9, 4), pickRate: 19.92, winRate: 46.75},
    { date: new Date(2024, 9, 5), pickRate: 19.74, winRate: 46.95},
    { date: new Date(2024, 9, 6), pickRate: 19.57, winRate: 47.28},
    { date: new Date(2024, 9, 7), pickRate: 19.20, winRate: 47.51},
    { date: new Date(2024, 9, 8), pickRate: 19.32, winRate: 47.74},
    { date: new Date(2024, 9, 9), pickRate: 19.24, winRate: 47.65},
    { date: new Date(2024, 9, 10), pickRate: 19.39, winRate: 47.76},
    { date: new Date(2024, 9, 11), pickRate: 19.29, winRate: 47.63},
    { date: new Date(2024, 9, 12), pickRate: 18.93, winRate: 47.77},
    { date: new Date(2024, 9, 13), pickRate: 18.66, winRate: 47.36},
    { date: new Date(2024, 9, 14), pickRate: 16.34, winRate: 48.40},
];

const ti2024 = [
    { hero: "Abaddon", played: 1, win: 0, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 0 },
    { hero: "Alchemist", played: 16, win: 7, lose: 9, radiantPlay: 5, radiantWin: 3, radiantLose: 2, direPlay: 11, direWin: 4, direLose: 7, bans: 32 },
    { hero: "Ancient Apparition", played: 1, win: 0, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 0 },
    { hero: "Anti-Mage", played: 0, win: 0, lose: 0, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 0, direWin: 0, direLose: 0, bans: 2 },
    { hero: "Axe", played: 0, win: 0, lose: 0, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 0, direWin: 0, direLose: 0, bans: 1 },
    { hero: "Bane", played: 6, win: 3, lose: 3, radiantPlay: 6, radiantWin: 3, radiantLose: 3, direPlay: 0, direWin: 0, direLose: 0, bans: 1 },
    { hero: "Batrider", played: 34, win: 14, lose: 20, radiantPlay: 18, radiantWin: 8, radiantLose: 10, direPlay: 16, direWin: 6, direLose: 10, bans: 22 },
    { hero: "Beastmaster", played: 13, win: 6, lose: 7, radiantPlay: 5, radiantWin: 2, radiantLose: 3, direPlay: 8, direWin: 4, direLose: 4, bans: 17 },
    { hero: "Brewmaster", played: 1, win: 1, lose: 0, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 1, direWin: 1, direLose: 0, bans: 1 },
    { hero: "Bristleback", played: 9, win: 4, lose: 5, radiantPlay: 6, radiantWin: 4, radiantLose: 2, direPlay: 3, direWin: 0, direLose: 3, bans: 6 },
    { hero: "Broodmother", played: 6, win: 4, lose: 2, radiantPlay: 3, radiantWin: 2, radiantLose: 1, direPlay: 3, direWin: 2, direLose: 1, bans: 16 },
    { hero: "Centaur Warrunner", played: 22, win: 11, lose: 11, radiantPlay: 14, radiantWin: 9, radiantLose: 5, direPlay: 8, direWin: 2, direLose: 6, bans: 40 },
    { hero: "Chaos Knight", played: 3, win: 0, lose: 3, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 2, direWin: 0, direLose: 2, bans: 0 },
    { hero: "Chen", played: 9, win: 4, lose: 5, radiantPlay: 6, radiantWin: 2, radiantLose: 4, direPlay: 3, direWin: 2, direLose: 1, bans: 9 },
    { hero: "Clinkz", played: 2, win: 0, lose: 2, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 1, direWin: 0, direLose: 1, bans: 1 },
    { hero: "Clockwerk", played: 28, win: 14, lose: 14, radiantPlay: 12, radiantWin: 5, radiantLose: 7, direPlay: 16, direWin: 9, direLose: 7, bans: 18 },
    { hero: "Crystal Maiden", played: 4, win: 0, lose: 4, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 3, direWin: 0, direLose: 3, bans: 1 },
    { hero: "Dark Seer", played: 2, win: 2, lose: 0, radiantPlay: 1, radiantWin: 1, radiantLose: 0, direPlay: 1, direWin: 1, direLose: 0, bans: 5 },
    { hero: "Dark Willow", played: 14, win: 8, lose: 6, radiantPlay: 8, radiantWin: 4, radiantLose: 4, direPlay: 6, direWin: 4, direLose: 2, bans: 3 },
    { hero: "Dazzle", played: 3, win: 0, lose: 3, radiantPlay: 2, radiantWin: 0, radiantLose: 2, direPlay: 1, direWin: 0, direLose: 1, bans: 4 },
    { hero: "Death Prophet", played: 0, win: 0, lose: 0, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 0, direWin: 0, direLose: 0, bans: 1 },
    { hero: "Disruptor", played: 2, win: 1, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 2, direWin: 1, direLose: 1, bans: 0 },
    { hero: "Doom", played: 32, win: 13, lose: 19, radiantPlay: 13, radiantWin: 5, radiantLose: 8, direPlay: 19, direWin: 8, direLose: 11, bans: 64 },
    { hero: "Dragon Knight", played: 40, win: 17, lose: 23, radiantPlay: 23, radiantWin: 12, radiantLose: 11, direPlay: 17, direWin: 5, direLose: 12, bans: 36 },
    { hero: "Drow Ranger", played: 5, win: 4, lose: 1, radiantPlay: 4, radiantWin: 3, radiantLose: 1, direPlay: 1, direWin: 1, direLose: 0, bans: 1 },
    { hero: "Earth Spirit", played: 12, win: 7, lose: 5, radiantPlay: 7, radiantWin: 5, radiantLose: 2, direPlay: 5, direWin: 2, direLose: 3, bans: 11 },
    { hero: "Earthshaker", played: 8, win: 3, lose: 5, radiantPlay: 5, radiantWin: 2, radiantLose: 3, direPlay: 3, direWin: 1, direLose: 2, bans: 6 },
    { hero: "Elder Titan", played: 7, win: 3, lose: 4, radiantPlay: 3, radiantWin: 2, radiantLose: 1, direPlay: 4, direWin: 1, direLose: 3, bans: 2 },
    { hero: "Ember Spirit", played: 1, win: 1, lose: 0, radiantPlay: 1, radiantWin: 1, radiantLose: 0, direPlay: 0, direWin: 0, direLose: 0, bans: 11 },
    { hero: "Enchantress", played: 31, win: 16, lose: 15, radiantPlay: 14, radiantWin: 7, radiantLose: 7, direPlay: 17, direWin: 9, direLose: 8, bans: 55 },
    { hero: "Enigma", played: 10, win: 6, lose: 4, radiantPlay: 2, radiantWin: 2, radiantLose: 0, direPlay: 8, direWin: 4, direLose: 4, bans: 27 },
    { hero: "Faceless Void", played: 4, win: 3, lose: 1, radiantPlay: 2, radiantWin: 2, radiantLose: 0, direPlay: 2, direWin: 1, direLose: 1, bans: 9 },
    { hero: "Grimstroke", played: 2, win: 0, lose: 2, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 2, direWin: 0, direLose: 2, bans: 2 },
    { hero: "Gyrocopter", played: 2, win: 1, lose: 1, radiantPlay: 1, radiantWin: 1, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 6 },
    { hero: "Hoodwink", played: 12, win: 6, lose: 6, radiantPlay: 3, radiantWin: 3, radiantLose: 0, direPlay: 9, direWin: 3, direLose: 6, bans: 1 },
    { hero: "Huskar", played: 1, win: 0, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 10 },
    { hero: "Invoker", played: 15, win: 10, lose: 5, radiantPlay: 4, radiantWin: 3, radiantLose: 1, direPlay: 11, direWin: 7, direLose: 4, bans: 41 },
    { hero: "Io", played: 4, win: 0, lose: 4, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 3, direWin: 0, direLose: 3, bans: 0 },
    { hero: "Jakiro", played: 9, win: 3, lose: 6, radiantPlay: 4, radiantWin: 2, radiantLose: 2, direPlay: 5, direWin: 1, direLose: 4, bans: 0 },
    { hero: "Keeper of the Light", played: 4, win: 3, lose: 1, radiantPlay: 2, radiantWin: 1, radiantLose: 1, direPlay: 2, direWin: 2, direLose: 0, bans: 4 },
    { hero: "Kunkka", played: 39, win: 21, lose: 18, radiantPlay: 25, radiantWin: 14, radiantLose: 11, direPlay: 14, direWin: 7, direLose: 7, bans: 29 },
    { hero: "Leshrac", played: 7, win: 2, lose: 5, radiantPlay: 3, radiantWin: 1, radiantLose: 2, direPlay: 4, direWin: 1, direLose: 3, bans: 7 },
    { hero: "Lina", played: 14, win: 5, lose: 9, radiantPlay: 6, radiantWin: 0, radiantLose: 6, direPlay: 8, direWin: 5, direLose: 3, bans: 20 },
    { hero: "Lone Druid", played: 2, win: 0, lose: 2, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 2, direWin: 0, direLose: 2, bans: 0 },
    { hero: "Magnus", played: 17, win: 4, lose: 13, radiantPlay: 8, radiantWin: 2, radiantLose: 6, direPlay: 9, direWin: 2, direLose: 7, bans: 20 },
    { hero: "Marci", played: 28, win: 13, lose: 15, radiantPlay: 13, radiantWin: 6, radiantLose: 7, direPlay: 15, direWin: 7, direLose: 8, bans: 35 },
    { hero: "Mars", played: 10, win: 6, lose: 4, radiantPlay: 5, radiantWin: 3, radiantLose: 2, direPlay: 5, direWin: 3, direLose: 2, bans: 3 },
    { hero: "Medusa", played: 8, win: 5, lose: 3, radiantPlay: 3, radiantWin: 3, radiantLose: 0, direPlay: 5, direWin: 2, direLose: 3, bans: 29 },
    { hero: "Mirana", played: 33, win: 13, lose: 20, radiantPlay: 13, radiantWin: 6, radiantLose: 7, direPlay: 20, direWin: 7, direLose: 13, bans: 0 },
    { hero: "Morphling", played: 4, win: 3, lose: 1, radiantPlay: 3, radiantWin: 2, radiantLose: 1, direPlay: 1, direWin: 1, direLose: 0, bans: 10 },
    { hero: "Nature's Prophet", played: 6, win: 3, lose: 3, radiantPlay: 2, radiantWin: 1, radiantLose: 1, direPlay: 4, direWin: 2, direLose: 2, bans: 4 },
    { hero: "Necrophos", played: 2, win: 0, lose: 2, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 2, direWin: 0, direLose: 2, bans: 0 },
    { hero: "Night Stalker", played: 2, win: 0, lose: 2, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 1, direWin: 0, direLose: 1, bans: 9 },
    { hero: "Nyx Assassin", played: 3, win: 1, lose: 2, radiantPlay: 2, radiantWin: 0, radiantLose: 2, direPlay: 1, direWin: 1, direLose: 0, bans: 0 },
    { hero: "Ogre Magi", played: 5, win: 2, lose: 3, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 4, direWin: 2, direLose: 2, bans: 0 },
    { hero: "Omniknight", played: 3, win: 0, lose: 3, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 3, direWin: 0, direLose: 3, bans: 1 },
    { hero: "Oracle", played: 1, win: 1, lose: 0, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 1, direWin: 1, direLose: 0, bans: 3 },
    { hero: "Outworld Destroyer", played: 1, win: 0, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 0 },
    { hero: "Pangolier", played: 21, win: 7, lose: 14, radiantPlay: 8, radiantWin: 3, radiantLose: 5, direPlay: 13, direWin: 4, direLose: 9, bans: 13 },
    { hero: "Phantom Assassin", played: 3, win: 2, lose: 1, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 2, direWin: 2, direLose: 0, bans: 1 },
    { hero: "Phantom Lancer", played: 2, win: 1, lose: 1, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 1, direWin: 1, direLose: 0, bans: 0 },
    { hero: "Phoenix", played: 6, win: 2, lose: 4, radiantPlay: 2, radiantWin: 1, radiantLose: 1, direPlay: 4, direWin: 1, direLose: 3, bans: 0 },
    { hero: "Puck", played: 6, win: 2, lose: 4, radiantPlay: 3, radiantWin: 2, radiantLose: 1, direPlay: 3, direWin: 0, direLose: 3, bans: 5 },
    { hero: "Pugna", played: 1, win: 0, lose: 1, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 0, direWin: 0, direLose: 0, bans: 0 },
    { hero: "Queen of Pain", played: 2, win: 0, lose: 2, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 1, direWin: 0, direLose: 1, bans: 0 },
    { hero: "Riki", played: 6, win: 3, lose: 3, radiantPlay: 3, radiantWin: 1, radiantLose: 2, direPlay: 3, direWin: 2, direLose: 1, bans: 5 },
    { hero: "Rubick", played: 25, win: 9, lose: 16, radiantPlay: 11, radiantWin: 5, radiantLose: 6, direPlay: 14, direWin: 4, direLose: 10, bans: 7 },
    { hero: "Sand King", played: 1, win: 0, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 0 },
    { hero: "Shadow Demon", played: 5, win: 2, lose: 3, radiantPlay: 3, radiantWin: 2, radiantLose: 1, direPlay: 2, direWin: 0, direLose: 2, bans: 0 },
    { hero: "Shadow Fiend", played: 3, win: 1, lose: 2, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 3, direWin: 1, direLose: 2, bans: 2 },
    { hero: "Shadow Shaman", played: 3, win: 1, lose: 2, radiantPlay: 2, radiantWin: 1, radiantLose: 1, direPlay: 1, direWin: 0, direLose: 1, bans: 0 },
    { hero: "Silencer", played: 6, win: 2, lose: 4, radiantPlay: 2, radiantWin: 0, radiantLose: 2, direPlay: 4, direWin: 2, direLose: 2, bans: 1 },
    { hero: "Skywrath Mage", played: 2, win: 1, lose: 1, radiantPlay: 1, radiantWin: 1, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 0 },
    { hero: "Slardar", played: 3, win: 2, lose: 1, radiantPlay: 1, radiantWin: 1, radiantLose: 0, direPlay: 2, direWin: 1, direLose: 1, bans: 0 },
    { hero: "Slark", played: 9, win: 5, lose: 4, radiantPlay: 4, radiantWin: 3, radiantLose: 1, direPlay: 5, direWin: 2, direLose: 3, bans: 4 },
    { hero: "Snapfire", played: 9, win: 4, lose: 5, radiantPlay: 2, radiantWin: 0, radiantLose: 2, direPlay: 7, direWin: 4, direLose: 3, bans: 1 },
    { hero: "Spectre", played: 3, win: 2, lose: 1, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 2, direWin: 2, direLose: 0, bans: 1 },
    { hero: "Spirit Breaker", played: 1, win: 1, lose: 0, radiantPlay: 1, radiantWin: 1, radiantLose: 0, direPlay: 0, direWin: 0, direLose: 0, bans: 0 },
    { hero: "Storm Spirit", played: 2, win: 1, lose: 1, radiantPlay: 2, radiantWin: 1, radiantLose: 1, direPlay: 0, direWin: 0, direLose: 0, bans: 0 },
    { hero: "Sven", played: 2, win: 1, lose: 1, radiantPlay: 1, radiantWin: 1, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 1 },
    { hero: "Techies", played: 13, win: 8, lose: 5, radiantPlay: 6, radiantWin: 3, radiantLose: 3, direPlay: 7, direWin: 5, direLose: 2, bans: 5 },
    { hero: "Templar Assassin", played: 3, win: 2, lose: 1, radiantPlay: 2, radiantWin: 2, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 0 },
    { hero: "Terrorblade", played: 5, win: 1, lose: 4, radiantPlay: 3, radiantWin: 1, radiantLose: 2, direPlay: 2, direWin: 0, direLose: 2, bans: 2 },
    { hero: "Tidehunter", played: 3, win: 2, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 3, direWin: 2, direLose: 1, bans: 0 },
    { hero: "Timbersaw", played: 3, win: 1, lose: 2, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 2, direWin: 1, direLose: 1, bans: 0 },
    { hero: "Tinker", played: 2, win: 1, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 2, direWin: 1, direLose: 1, bans: 0 },
    { hero: "Tiny", played: 22, win: 8, lose: 14, radiantPlay: 10, radiantWin: 3, radiantLose: 7, direPlay: 12, direWin: 5, direLose: 7, bans: 2 },
    { hero: "Treant Protector", played: 4, win: 2, lose: 2, radiantPlay: 2, radiantWin: 1, radiantLose: 1, direPlay: 2, direWin: 1, direLose: 1, bans: 0 },
    { hero: "Tusk", played: 6, win: 3, lose: 3, radiantPlay: 1, radiantWin: 1, radiantLose: 0, direPlay: 5, direWin: 2, direLose: 3, bans: 3 },
    { hero: "Underlord", played: 6, win: 3, lose: 3, radiantPlay: 4, radiantWin: 2, radiantLose: 2, direPlay: 2, direWin: 1, direLose: 1, bans: 4 },
    { hero: "Undying", played: 22, win: 11, lose: 11, radiantPlay: 8, radiantWin: 3, radiantLose: 5, direPlay: 14, direWin: 8, direLose: 6, bans: 22 },
    { hero: "Ursa", played: 11, win: 3, lose: 8, radiantPlay: 5, radiantWin: 1, radiantLose: 4, direPlay: 6, direWin: 2, direLose: 4, bans: 18 },
    { hero: "Vengeful Spirit", played: 3, win: 0, lose: 3, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 2, direWin: 0, direLose: 2, bans: 0 },
    { hero: "Venomancer", played: 3, win: 1, lose: 2, radiantPlay: 2, radiantWin: 0, radiantLose: 2, direPlay: 1, direWin: 1, direLose: 0, bans: 1 },
    { hero: "Viper", played: 1, win: 0, lose: 1, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 0, direWin: 0, direLose: 0, bans: 0 },
    { hero: "Visage", played: 1, win: 0, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 1, direWin: 0, direLose: 1, bans: 0 },
    { hero: "Void Spirit", played: 16, win: 8, lose: 8, radiantPlay: 5, radiantWin: 2, radiantLose: 3, direPlay: 11, direWin: 6, direLose: 5, bans: 5 },
    { hero: "Warlock", played: 4, win: 1, lose: 3, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 3, direWin: 1, direLose: 2, bans: 0 },
    { hero: "Weaver", played: 2, win: 0, lose: 2, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 2, direWin: 0, direLose: 2, bans: 0 },
    { hero: "Windranger", played: 2, win: 1, lose: 1, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 2, direWin: 1, direLose: 1, bans: 2 },
    { hero: "Winter Wyvern", played: 1, win: 1, lose: 0, radiantPlay: 0, radiantWin: 0, radiantLose: 0, direPlay: 1, direWin: 1, direLose: 0, bans: 0 },
    { hero: "Witch Doctor", played: 5, win: 4, lose: 1, radiantPlay: 1, radiantWin: 1, radiantLose: 0, direPlay: 4, direWin: 3, direLose: 1, bans: 0 },
    { hero: "Wraith King", played: 3, win: 0, lose: 3, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 2, direWin: 0, direLose: 2, bans: 0 },
    { hero: "Zeus", played: 1, win: 0, lose: 1, radiantPlay: 1, radiantWin: 0, radiantLose: 1, direPlay: 0, direWin: 0, direLose: 0, bans: 0 }
];


function complex314() {
    var x = [], y = [], size = [], text = [];
    heroes.forEach((hero) => {
        x.push(hero.winRate);
        y.push(hero.kda);
        size.push(hero.pickRate * 25); // Increase the multiplier for larger bubbles
        text.push(hero.name);
    });

    var data = [
        {
            x: x,
            y: y,
            mode: 'markers',
            marker: {
                size: size,
                sizemode: 'area',
                sizeref: 1, // Adjust the reference value to control bubble scaling
                color: y,
                colorscale: 'YlGnBu',
                showscale: false,
            },
            text: text,
            textfont: {
                size: 12,
            },
            type: 'scatter',
        }
    ];

    var layout = {
        title: {
            text: 'Hero Win Rate vs Hero KDA vs Hero Pick Rate',
            font: {
                size: 24,
            },
        },
        xaxis: {
            title: {
                text: 'Hero Win Rate (%)',
                font: {
                    size: 18,
                },
            },
            range: [43, 56], 
        },
        yaxis: {
            title: {
                text: 'Hero KDA',
                font: {
                    size: 18,
                },
            },
            range: [1.8, 4], 
        },
    };

    Plotly.newPlot('demoa433', data, layout);
}

function complex315() {
    var x = [], y = [], text = []; // Added text array for formatted hero info
    heroes.forEach((hero) => {
        x.push(hero.kda);
        y.push(hero.winRate);
        // Format the text for hover info
        text.push(`${hero.name}<br>KDA: ${hero.kda}<br>Win Rate: ${hero.winRate}%`);
    });

    // Calculate linear regression
    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
    const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    // Create data for the trend line
    var trendLineX = [Math.min(...x), Math.max(...x)];
    var trendLineY = trendLineX.map(xi => slope * xi + intercept);

    var data = [
        {
            x: x,
            y: y,
            mode: 'markers',
            type: 'scatter',
            marker: {
                size: 10,
                color: 'rgba(255, 0, 0, 1)',
                line: {
                    color: 'rgba(255, 0, 0, 1)',
                    width: 0.5,
                },
            },
            name: 'Data Points', // Optional: name for the legend
            text: text, // Assign formatted hero info to the text attribute
            hoverinfo: 'text', // Show formatted info on hover
        },
        {
            x: trendLineX,
            y: trendLineY,
            mode: 'lines',
            type: 'scatter',
            line: {
                color: 'rgba(0, 0, 255, 1)',
                width: 2,
            },
            name: 'Trend Line' // Optional: name for the legend
        }
    ];

    var layout = {
        title: {
            text: 'Correlation between Hero KDA and Win Rate',
            font: {
                size: 24,
            },
        },
        xaxis: {
            title: {
                text: 'Hero KDA',
                font: {
                    size: 18,
                },
            },
            range: [1.7, 4.7], // Adjust the range based on your data
        },
        yaxis: {
            title: {
                text: 'Hero Win Rate (%)',
                font: {
                    size: 18,
                },
            },
            range: [42, 57], // Set a suitable range for win rate
        },
        width: 800, // Adjust width as needed
        height: 600 // Optional: adjust the height if needed
    };

    Plotly.newPlot('demoa434', data, layout);
}


function complex316() {
    var dates = [];
    var pickRates = [];
    var winRates = [];

    for (let i = 0; i < invoker.length; i++) {
        dates.push(invoker[i].date);
        pickRates.push(invoker[i].pickRate);
        winRates.push(invoker[i].winRate);
    }

    var data = [{
        x: dates,
        y: pickRates,
        type: 'scatter',
        mode: 'none',
        fill: 'tozeroy',
        name: 'Pick Rate',
        line: {
            color: 'rgba(0, 0, 255, 1)',
            width: 2,
        },
        hovertemplate: ' %{y:.2f}%',
        meta: winRates,
    }, {
        x: dates,
        y: winRates,
        type: 'scatter',
        mode: 'none',
        fill: 'tonexty',
        name: 'Win Rate',
        line: {
            color: 'rgba(255, 165, 0, 1)',
            width: 2,
        },
        hovertemplate: ' %{y:.2f}%',
        meta: pickRates,
    }];

    var layout = {
        title: {
            text: 'Invoker Pick Rate vs Win Rate Over Time',
            font: {
                size: 24,
            },
        },
        xaxis: {
            title: {
                text: 'Date',
                font: {
                    size: 18,
                },
            },
        },
        yaxis: {
            title: {
                text: 'Pick Rate and Win Rate (%)',
                font: {
                    size: 18,
                },
            },
            range: [10, 50],
        },
        hovermode: 'x unified',
        width: 800,
        height: 600,
    };

    Plotly.newPlot('demoa435', data, layout);
}

function complex317() {
    const sortedData = [...ti2024].sort((a, b) => b.played - a.played).slice(0, 20);

    const heroesDota = sortedData.map(item => item.hero);
    const wins = sortedData.map(item => item.win);
    const losses = sortedData.map(item => item.lose);

    heroesDota.reverse();
    wins.reverse();
    losses.reverse();

    const traceWin = {
        x: wins,
        y: heroesDota,
        name: 'Win',
        type: 'bar',
        orientation: 'h',
        hovertemplate: 'Win: %{x}<extra></extra>',
        marker: {
            color: 'rgba(255, 140, 0, 1)'
        }
    };

    const traceLose = {
        x: losses,
        y: heroesDota,
        name: 'Lose',
        type: 'bar',
        orientation: 'h',
        hovertemplate: 'Lose: %{x}<extra></extra>',
        marker: {
            color: 'rgba(255, 140, 0, 0.3)'
        }
    };

    const layout = {
        title: 'Top 20 Most Played Heroes in The International 2024',
        barmode: 'stack',
        xaxis: {
            title: 'Number of Matches'
        },
        yaxis: {
            title: 'Heroes',
            automargin: true
        },
        height: 600
    };

    const data = [traceWin, traceLose];

    Plotly.newPlot('demoa436', data, layout);
}

function complex318() {
    var data = [{
        type: "sunburst",
        ids: [
          "North America", "Europe", "Australia", "North America - Football", "Soccer",
          "North America - Rugby", "Europe - Football", "Rugby",
          "Europe - American Football","Australia - Football", "Association",
          "Australian Rules", "Autstralia - American Football", "Australia - Rugby",
          "Rugby League", "Rugby Union"
        ],
        labels: [
          "North<br>America", "Europe", "Australia", "Football", "Soccer", "Rugby",
          "Football", "Rugby", "American<br>Football", "Football", "Association",
          "Australian<br>Rules", "American<br>Football", "Rugby", "Rugby<br>League",
          "Rugby<br>Union"
        ],
        parents: [
          "", "", "", "North America", "North America", "North America", "Europe",
          "Europe", "Europe","Australia", "Australia - Football", "Australia - Football",
          "Australia - Football", "Australia - Football", "Australia - Rugby",
          "Australia - Rugby"
        ],
        outsidetextfont: {size: 20, color: "#377eb8"},
        // leaf: {opacity: 0.4},
        marker: {line: {width: 2}},
      }];
      
      var layout = {
        margin: {l: 0, r: 0, b: 0, t:0},
        sunburstcolorway:["#636efa","#ef553b","#00cc96"],
      };
      
      
      Plotly.newPlot('demoa437', data, layout);      
}

function complex319() {
    const data = {
        type: "sankey",
        orientation: "h",
        node: {
            pad: 15,
            thickness: 20,
            line: {
                color: "black",
                width: 0.5
            },
            label: [
                "Invoker", "Phantom Assassin", "Magnus", "Witch Doctor", "Monkey King",
                "Shadow Fiend", "Wind Ranger", "Dragon Knight", "Rubick", "Warlock"
            ],
            color: [
                "#A3E4D7", "#F1948A", "#AED6F1", "#D7BDE2", "#A9DFBF",
                "#76D7C4", "#85C1E9", "#F5B7B1", "#F7DC6F", "#F0B27A"
            ]
        },
        link: {
            source: [
                0, 0, 0, 0, 0, // Invoker to each Radiant hero
                1, 1, 1, 1, 1, // Phantom Assassin to each Radiant hero
                2, 2, 2, 2, 2, // Magnus to each Radiant hero
                3, 3, 3, 3, 3, // Witch Doctor to each Radiant hero
                4, 4, 4, 4, 4  // Monkey King to each Radiant hero
            ],
            target: [
                5, 6, 7, 8, 9, // Targets for Invoker
                5, 6, 7, 8, 9, // Targets for Phantom Assassin
                5, 6, 7, 8, 9, // Targets for Magnus
                5, 6, 7, 8, 9, // Targets for Witch Doctor
                5, 6, 7, 8, 9  // Targets for Monkey King
            ],
            value: [
                4891, 3092, 7892, 2391, 1832, // Damage from Invoker (total ~12k)
                4821, 1323, 6321, 3532, 2742, // Damage from Phantom Assassin (total ~18k)
                983, 231, 1402, 2421, 3201, // Damage from Magnus (total ~8k)
                6542, 2132, 5671, 2382, 4980, // Damage from Witch Doctor (total ~3.7k)
                787, 109, 320, 902, 1302  // Damage from Monkey King (total ~11.7k)
            ],
            color: "rgba(100, 100, 100, 0.5)" // Link color
        }
    };

    const layout = {
        title: "Dota 2 Damage Distribution (Dire to Radiant)",
        font: {
            size: 12
        }
    };

    Plotly.newPlot('demoa438', [data], layout);
}

function complex320() {
    // Sample data for the point cloud chart
    var data = [{
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // X-axis data
        y: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], // Y-axis data
        z: [1, 3, 2, 5, 4, 6, 8, 7, 9, 10], // Z-axis data
        mode: 'markers', // Display as points
        marker: {
            size: 10, // Size of the points
            color: 'rgba(0, 176, 246, 0.8)', // Color of the points
            opacity: 0.8,
            line: {
                width: 0.5,
                color: 'white'
            }
        }
    }];

    // Layout settings
    var layout = {
        title: 'Simple Point Cloud Chart',
        scene: {
            xaxis: { title: 'X Axis' },
            yaxis: { title: 'Y Axis' },
            zaxis: { title: 'Z Axis' }
        }
    };

    // Plot the chart
    Plotly.newPlot('demoa439', data, layout);
}

function complex321() {
    const data = [{
        type: "treemap",
        labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
        parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve"],
        textinfo: "label+value", // Display label and value
        marker: {
            line: {
                width: 2 // Set border width for the rectangles
            }
        }
    }];

    // Layout settings
    const layout = {
        height: 190, // Set the height of the treemap to 200 pixels
        margin: {
            t: 4, // Top margin
            b: 4, // Bottom margin
            l: 10, // Left margin
            r: 10  // Right margin
        }
    };

    Plotly.newPlot('demoa440', data, layout);
}

function complex322() {
    // Sort the data by 'played' in descending order
    ti2024.sort((a, b) => b.played - a.played);

    // Prepare table data
    const header = ['Hero', 'Played', 'Win', 'Lose', 'Bans'];
    const values = ti2024.map(hero => [hero.hero, hero.played, hero.win, hero.lose, hero.bans]);

    // Create the table data structure
    const data = [{
        type: 'table',
        header: {
            values: header.map(h => `<b>${h}</b>`), // Bold headers
            align: 'center',
            line: { width: 1, color: 'black' },
            fill: { color: 'lightgrey' },
            font: { family: 'Arial', size: 12, color: 'black' }
        },
        cells: {
            values: values[0].map((_, colIndex) => values.map(row => row[colIndex])),
            align: 'center',
            line: { color: 'black', width: 1 },
            fill: { color: ['white', 'lightblue'] }, // Alternate row colors
            font: { family: 'Arial', size: 11, color: 'black' }
        }
    }];

    // Layout settings
    const layout = {
        title: 'TI 2024 Hero Statistics',
        height: 400,
        margin: { l: 10, r: 10, t: 30, b: 10 }
    };

    // Plot the table
    Plotly.newPlot('demoa441', data, layout);
}