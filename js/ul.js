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

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    let i = 1;
    while (typeof window[`generateList${i}`] === 'function') {
        window[`generateList${i}`]();
        i++;
    }
});