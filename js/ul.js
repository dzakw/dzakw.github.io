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

function generateList10() {
    const methods = [
        "getFullYear()", "getMonth()", "getDate()", "getDay()", "getHours()", "getMinutes()", "getSeconds()", "getMilliseconds()",
        "getTime()", "getTimezoneOffset()", "Date.now()"
    ];

    const ul = document.getElementById('threeColumn9');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 144}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList11() {
    const methods = [
        "setFullYear()", "setMonth()", "setDate()", "setHours()", "setMinutes()", "setSeconds()", "setMilliseconds()",
        "setTime()"
    ];

    const ul = document.getElementById('threeColumn10');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 155}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList12() {
    const methods = [
        "Math.round()", "Math.ceil()", "Math.floor()", "Math.trunc()", "Math.sign()", "Math.pow()", 
        "Math.sqrt()", "Math.abs()", "Math.sin()", "Math.cos()", "Math.tan()", "Math.min()", "Math.max()",
        "Math.random()", "Math.log()", "Math.log2()", "Math.log10()", "Math.exp()"
    ];

    const ul = document.getElementById('threeColumn11');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 163}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList13() {
    const methods = [
        "Loop For", "Loop For In", "Loop For Of", "Loop While", "Break", "Iterables"
    ];

    const ul = document.getElementById('threeColumn12');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 181}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList14() {
    const methods = [
        "new Set", "add()", "clear()", "delete()", "entries()", "forEach()", "has()", "keys()", "size", "values()"
    ];

    const ul = document.getElementById('threeColumn13');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 187}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList15() {
    const methods = [
        "new Maps", "clear()", "delete()", "entries()", "forEach()", "get()", "groupBy()", "has()", "keys()", "set()", "size", "values()"
    ];

    const ul = document.getElementById('threeColumn14');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 197}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList16() {
    const methods = [
        "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"
    ];

    const ul = document.getElementById('threeColumn15');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 209}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList17() {
    const methods = [
        "Using variable without declaring", "Using object without declaring", "Deleting a variable", "Deleting a function", "Duplicating parameter name",
        "Octal numeric literals", "Octal escape characters", "Writing to a read-only properties", "Writing to a get-only properties", "Deleting undeletable properties",
        "Using word <code>eval</code> as variable name", "Using word <code>arguments</code> as variable name", "<code>with</code> statement", "Create <code>eval</code> variables in the scope from which it called", 
        "<code>eval</code> declare a variable using <code>var</code>", "<code>eval</code> declare a variable using <code>let</code>"
    ];

    const ul = document.getElementById('threeColumn16');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 215}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList18() {
    const methods = [
        "<code>this</code> behavior", "Future Proof"
    ];

    const ul = document.getElementById('threeColumn17');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 231}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList19() {
    const methods = [
        "<code>this</code> in a Method", "<code>this</code> Alone", "<code>this</code> in a Function (Default)", "<code>this</code> in a Function (Strict Mode)",
        "<code>this</code> in Event Handlers", "Object Method Binding", "Explicit Function Binding", "Function Borrowing", "<code>this</code> Precedence"
    ];

    const ul = document.getElementById('threeColumn18');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 233}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList20() {
    const methods = [
        "JSON String", "JSON Number", "JSON Object", "JSON Array", "JSON Boolean", "<i>null</i>"
    ];

    const ul = document.getElementById('threeColumn19');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 242}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList21() {
    const methods = [
        "Avoid Global Variables", "Always Declare Local Variables", "Declarations on Top", "Initialize Variables",
        "Declare Objects with <code>const</code>", "Declare Arrays with <code>const</code>", "Don't Use <code>new Object()</code>",
        "Beware of Automatic Type Conversions", "Use === Comparison", "Use Parameter Defaults", "End Your Switches with Defaults",
        "Avoid Number, String, and Boolean as Objects", "Avoid Using eval()"
    ];

    const ul = document.getElementById('threeColumn20');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 248}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList22() {
    const methods = [
        "Variable Names", "Spaces Around Operators", "Code Indentation", "Statement Rules", "Object Rules", "Line Length"
    ];

    const ul = document.getElementById('threeColumn21');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 261}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList23() {
    const methods = [
        "Accidentally Using the Assignment Operator", "Expecting Loose Comparison", "Confusing Addition & Concatenation", "Misunderstanding Floats",
        "Breaking a JavaScript String", "Misplacing Semicolon", "Breaking a Return Statement", "Accessing Arrays with Named Indexes",
        "Ending Definitions with a Comma", "Undefined is Not Null"
    ];

    const ul = document.getElementById('threeColumn22');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 267}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList24() {
    const methods = [
        "Reduce Activity in Loops", "Reduce DOM Access", "Reduce DOM Size", "Avoid Unnecessary Variables",
        "Delay JavaScript Loading", "Avoid Using <code>with</code>"
    ];

    const ul = document.getElementById('threeColumn23');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 277}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList25() {
    const methods = [
        "Object Literal", "<code>new</code> Keyword", "Object Constructor", "<code>Object.assign()</code>",
        "<code>Object.create()</code>", "<code>Object.fromEntries()</code>"
    ];

    const ul = document.getElementById('threeColumn24');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 283}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList26() {
    const methods = [
        "Using const", "JavaScript <code>Object.preventExtensions()</code>", "JavaScript <code>Object.isExtensible()</code>", "JavaScript <code>Object.seal()</code>",
        "JavaScript <code>Object.isSealed()</code>", "JavaScript <code>Object.freeze()</code>", "JavaScript <code>Object.isFrozen()</code>"
    ];

    const ul = document.getElementById('threeColumn25');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 289}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList27() {
    const methods = [
        "<code>screen.width</code>", "<code>screen.height</code>", "<code>screen.availWidth</code>", "<code>screen.availHeight</code>", "<code>screen.colorDepth</code>", 
        "<code>screen.pixelDepth</code>" 
    ];

    const ul = document.getElementById('threeColumn26');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 296}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList28() {
    const methods = [
        "<code>window.location.href</code>", "<code>window.location.hostname</code>", "<code>window.location.pathname</code>", "<code>window.location.protocol</code>",
        "<code>window.location.assign()</code>"
    ];

    const ul = document.getElementById('threeColumn27');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 302}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList28() {
    const methods = [
        "Cookie Enabled", "App Version", "Platform", "Language", "OnLine", "Java Enabled"
    ];

    const ul = document.getElementById('threeColumn28');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 307}')">${method}</a>`;
        ul.appendChild(li);
    });
}

function generateList29() {
    const methods = [
        "Plotly", "Google Charts", "D3.js"
    ];

    const ul = document.getElementById('threeColumn29');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleExample('example4${index + 313}')">${method}</a>`;
        ul.appendChild(li);
    });
}
// Basic Charts
function generateList30() {
    const methods = [
        "Bar Charts", "Line Charts", "Scatter Plots", "Pie Charts", "Bubble Charts", "Dot Plots", "Filled Area Plots",
        "Horizontal Bar Charts", "Sunburst Charts", "Sankey Diagrams", "Point Cloud", "Treemaps", "Tables"
    ];

    const ul = document.getElementById('threeColumn30');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleChildExample('childExample${index + 0}')">${method}</a>`;
        ul.appendChild(li);
    });
}

// Statistical Charts
function generateList31() {
    const methods = [
        "Error Bars", "Box Plots", "Histograms", "2D Density Plots", "Violin Plot"
    ];

    const ul = document.getElementById('threeColumn31');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleChildExample('childExample${index + 13}')">${method}</a>`;
        ul.appendChild(li);
    });
}

// Scientific Charts
function generateList32() {
    const methods = [
        "Contour Plots", "Heatmaps", "Ternary Plots", "Wind Rose Charts", "Radar Charts", "Polar Charts"
    ];

    const ul = document.getElementById('threeColumn32');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleChildExample('childExample${index + 18}')">${method}</a>`;
        ul.appendChild(li);
    });
}

// Financial Charts
function generateList33() {
    const methods = [
        "Waterfall Charts", "Indicators", "Candlestick Charts", "Time Series", "Bullet Charts"
    ];

    const ul = document.getElementById('threeColumn33');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleChildExample('childExample${index + 24}')">${method}</a>`;
        ul.appendChild(li);
    });
}

// Maps
function generateList34() {
    const methods = [
        "Tile Map Layers", "Tile Density Heatmap", "Line on Maps", "Bubble Maps", "Choropleth Maps"
    ];

    const ul = document.getElementById('threeColumn34');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleChildExample('childExample${index + 29}')">${method}</a>`;
        ul.appendChild(li);
    });
}

// 3D Charts
function generateList35() {
    const methods = [
        "3D Scatter Plots", "Ribbon Plots", "3D Surface Plots"
    ];

    const ul = document.getElementById('threeColumn35');
    methods.forEach((method, index) => {
        const li = document.createElement('li');
        li.className = 'threeColumn';
        li.innerHTML = `<a href="#" onclick="toggleChildExample('childExample${index + 34}')">${method}</a>`;
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