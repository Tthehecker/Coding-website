// JavaScript Example Project
// This file demonstrates various JavaScript concepts and features

console.log("🚀 JavaScript Example Project Loaded!");

// 1. Variables and Data Types
const projectName = "JavaScript Examples";
let currentYear = 2025;
var isActive = true;

// 2. Functions
function greetUser(name = "Developer") {
    return `Hello, ${name}! Welcome to ${projectName}`;
}

// Arrow function
const calculateArea = (width, height) => width * height;

// 3. Objects
const project = {
    name: "JavaScript Demo",
    version: "1.0.0",
    features: ["ES6+", "Functions", "Objects", "Arrays"],
    
    displayInfo() {
        console.log(`Project: ${this.name} v${this.version}`);
        console.log("Features:", this.features.join(", "));
    }
};

// 4. Arrays and Array Methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const doubledNumbers = numbers.map(num => num * 2);
const sum = numbers.reduce((acc, num) => acc + num, 0);

// 5. Classes
class Calculator {
    constructor() {
        this.history = [];
    }
    
    add(a, b) {
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }
    
    subtract(a, b) {
        const result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }
    
    getHistory() {
        return this.history;
    }
}

// 6. Async/Await and Promises
async function fetchData() {
    try {
        // Simulating an API call
        const data = await new Promise(resolve => {
            setTimeout(() => {
                resolve({ message: "Data fetched successfully!", timestamp: new Date() });
            }, 1000);
        });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// 7. Main Demo Function
async function runDemo() {
    console.log("\n=== JavaScript Demo Started ===");
    
    // Basic operations
    console.log(greetUser("Coder"));
    console.log(`Area of 5x3 rectangle: ${calculateArea(5, 3)}`);
    
    // Object methods
    project.displayInfo();
    
    // Array operations
    console.log("Original numbers:", numbers);
    console.log("Even numbers:", evenNumbers);
    console.log("Doubled numbers:", doubledNumbers);
    console.log("Sum of all numbers:", sum);
    
    // Class usage
    const calc = new Calculator();
    console.log("Calculator results:");
    console.log("10 + 5 =", calc.add(10, 5));
    console.log("20 - 8 =", calc.subtract(20, 8));
    console.log("History:", calc.getHistory());
    
    // Async operation
    console.log("Fetching data...");
    const data = await fetchData();
    console.log("Fetched:", data);
    
    // Update DOM
    const output = document.getElementById('output');
    if (output) {
        output.innerHTML = `
            <h4>Demo Results:</h4>
            <p><strong>Greeting:</strong> ${greetUser("Coder")}</p>
            <p><strong>Area calculation:</strong> ${calculateArea(5, 3)}</p>
            <p><strong>Even numbers:</strong> ${evenNumbers.join(', ')}</p>
            <p><strong>Sum of all numbers:</strong> ${sum}</p>
            <p><strong>Calculator history:</strong> ${calc.getHistory().join(', ')}</p>
            <p><strong>Async data:</strong> ${data.message}</p>
        `;
    }
    
    console.log("=== Demo Complete ===\n");
}

// 8. DOM Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const runButton = document.getElementById('run-demo');
    if (runButton) {
        runButton.addEventListener('click', runDemo);
    }
    
    console.log('JavaScript Example page loaded successfully!');
});