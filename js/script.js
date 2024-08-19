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


function generateList1() {
    const methods = [
        "Array[]", "Array()", "at()", "concat()", "constructor", "copyWithin()", "entries()", "every()",
        "fill()", "filter()", "find()", "findIndex()", "findLast()", "findLastIndex()", "flat()", "flatMap()",
        "forEach()", "from()", "includes()", "indexOf()", "isArray()", "join()", "keys()", "lastIndexOf()",
        "length", "map()", "of()", "pop()", "prototype", "push()", "reduce()", "reduceRight()", "reverse()",
        "shift()", "slice()", "some()", "sort()", "splice()", "toReversed()", "toSorted()", "toSpliced()",
        "toString()", "unshift()", "values()", "valueOf()", "with()"
    ];

    const ul = document.getElementById('fiveColumn1');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'fiveColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 98}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList2() {
    const methods = [
        "&lt;address&gt;", "&lt;article&gt;", "&lt;aside&gt;", "&lt;blockquote&gt;", "&lt;canvas&gt;", "&lt;dd&gt;", "&lt;div&gt;", "&lt;dl&gt;", "&lt;dt&gt;",
        "&lt;fieldset&gt;", "&lt;figcaption&gt;", "&lt;figure&gt;", "&lt;footer&gt;", "&lt;form&gt;", "&lt;h1&gt;-&lt;h6&gt;", "&lt;header&gt;", "&lt;hr&gt;",
        "&lt;li&gt;", "&lt;main&gt;", "&lt;nav&gt;", "&lt;noscript&gt;", "&lt;ol&gt;", "&lt;p&gt;", "&lt;pre&gt;", "&lt;section&gt;", "&lt;table&gt;", "&lt;tfoot&gt;",
        "&lt;ul&gt;", "&lt;video&gt;"
    ];    

    const ul = document.getElementById('threeColumn1');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example${index + 1}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList3() {
    const methods = [
        "&lt;a&gt;", "&lt;abbr&gt;", "&lt;acronym&gt;", "&lt;b&gt;", "&lt;bdo&gt;", "&lt;big&gt;", "&lt;br&gt;", "&lt;button&gt;", "&lt;cite&gt;",
        "&lt;code&gt;", "&lt;dfn&gt;", "&lt;em&gt;", "&lt;i&gt;", "&lt;img&gt;", "&lt;input&gt;", "&lt;kbd&gt;", "&lt;label&gt;", "&lt;map&gt;",
        "&lt;object&gt;", "&lt;output&gt;", "&lt;q&gt;", "&lt;samp&gt;", "&lt;script&gt;", "&lt;select&gt;", "&lt;small&gt;", "&lt;span&gt;",
        "&lt;strong&gt;", "&lt;sub&gt;", "&lt;sup&gt;", "&lt;textarea&gt;", "&lt;time&gt;", "&lt;tt&gt;", "&lt;var&gt;"
    ];

    const ul = document.getElementById('threeColumn2');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example${index + 30}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList4() {
    const methods = [
        "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "rel", "target"
    ];

    const ul = document.getElementById('threeColumn3');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example${index + 73}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList5() {
    const methods = [
        "&lt;input&gt;", "&lt;label&gt;", "&lt;select&gt;", "&lt;textarea&gt;", "&lt;button&gt;", "&lt;fieldset&gt;", "&lt;legend&gt;", "&lt;datalist&gt;",
        "&lt;output&gt;", "&lt;option&gt;", "&lt;optgroup&gt;"
    ];

    const ul = document.getElementById('threeColumn4');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example${index + 82}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList6() {
    const methods = [
        "value", "readonly", "disabled", "size", "maxlength", "min & max", "multiple", "pattern", "placeholder", "required", "step", "autofocus",
        "height & width", "list", "autocomplete"
    ];

    const ul = document.getElementById('threeColumn5');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example${index + 93}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList7() {
    const methods = [
        "Geolocation", "Drag and Drop", "Web Storage", "Web Workers", "Server-Sent Events"
    ];

    const ul = document.getElementById('threeColumn6');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example${index + 108}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList8() {
    const methods = [
        "at()", "charAt()", "charCodeAt()", "codePointAt()", "concat()", "constructor()", "endsWith()", "fromCharCode()",
        "includes()", "indexOf()", "lastIndexOf()", "length()", "localeCompare()", "match()", "padEnd()", "padStart()", "prototype()",
        "repeat()", "replace()", "replaceAll()", "search()", "slice()", "split()", "startsWith()", "substr()", "substring()",
        "toLocaleLowerCase()", "toLocaleUpperCase()", "toLowerCase()", "toString()", "toUpperCase()", "trim()", "trimEnd()", "trimStart()", "valueOf()"
    ];

    const ul = document.getElementById('threeColumn7');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 41}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList9() {
    const methods = [
        "constructor", "EPSILON", "isFinite()", "isInteger()", "isNaN()", "isSafeInteger()", "MAX_SAFE_INTEGER", "MIN_SAFE_INTEGER",
        "MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY", "parseFloat()", "parseInt()", "prototype",
        "toExponential()", "toFixed()", "toLocaleString()", "toPrecision()", "toString()", "valueOf()"
    ];

    const ul = document.getElementById('threeColumn8');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 76}')">${method}</a>`;
        ul.appendChild(li);
    });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    let i = 1;
    while (typeof window[`generateList${i}`] === 'function') {
        window[`generateList${i}`]();
        i++;
    }
});


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
                resultElement.querySelector('span').innerHTML = result;
                resultElement.style.display = 'block';
                resetButton.style.display = 'flex';
            });

            resetButton.querySelector('.reset-icon').addEventListener('click', () => {
                resultElement.querySelector('span').innerHTML = '';
                resultElement.style.display = 'none';
                resetButton.style.display = 'none';
            });
        } else {
            console.warn('Missing elements for block:', block);
        }
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
        let x = 'Iqbal ';
        let y = 'Dzakwan |';
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
        let y = {name: 'Iqbal', age: 23, city: 'Morowali'};
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
    const myFather = new person("John", "Doe");
    const myMother = new person("Sally", "Rally");
    return "My father is " + myFather.firstname + " " + myFather.lastname + ". My mother is " + myMother.firstname + " " + myMother.lastname;
}

function complex16() {
    function person(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    const myFather = new person("John", "Doe");
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
    const myFather = new Person('John', 'Doe', 50, 'blue');
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
    const myFather = new Person('John', 'Doe', 50, 'blue');
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
    const owners = ["Iqbal Dzakwan", "Fadoil Mun'im", "Gede Ardhi"];

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
    
}