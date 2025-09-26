document.addEventListener('DOMContentLoaded', function() {
    const viewCodeButton = document.getElementById('view-code');
    const fullCodeDiv = document.getElementById('full-code');
    const pythonCodePre = document.getElementById('python-code');
    
    // Python code content to display
    const pythonCode = `# Python Example Project
# This file demonstrates various Python concepts and features

print("🐍 Python Example Project Loaded!")

# 1. Variables and Data Types
project_name = "Python Examples"
current_year = 2025
is_active = True

# 2. Functions
def greet_user(name="Developer"):
    return f"Hello, {name}! Welcome to {project_name}!"

# Lambda function
calculate_area = lambda width, height: width * height

# 3. Lists and List Operations
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# List comprehensions
even_numbers = [n for n in numbers if n % 2 == 0]
doubled_numbers = [n * 2 for n in numbers]
sum_of_numbers = sum(numbers)

# 4. Dictionaries
project_info = {
    "name": "Python Demo",
    "version": "1.0.0",
    "features": ["List Comprehensions", "Classes", "Functions", "Dictionaries"]
}

# 5. Classes
class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def subtract(self, a, b):
        result = a - b
        self.history.append(f"{a} - {b} = {result}")
        return result
    
    def get_history(self):
        return self.history

# 6. File Operations (example)
def write_example_file():
    try:
        with open("example_output.txt", "w") as file:
            file.write("This is an example file created by Python!\\n")
            file.write(f"Project: {project_info['name']}\\n")
            file.write(f"Features: {', '.join(project_info['features'])}\\n")
        return "File written successfully!"
    except Exception as e:
        return f"Error writing file: {e}"

# 7. Main demo function
def run_demo():
    print("\\n=== Python Demo Started ===")
    
    # Basic operations
    print(greet_user("Coder"))
    print(f"Area of 5x3 rectangle: {calculate_area(5, 3)}")
    
    # List operations
    print(f"Original numbers: {numbers}")
    print(f"Even numbers: {even_numbers}")
    print(f"Doubled numbers: {doubled_numbers}")
    print(f"Sum of all numbers: {sum_of_numbers}")
    
    # Dictionary operations
    print(f"Project info: {project_info}")
    
    # Class usage
    calc = Calculator()
    print("Calculator results:")
    print(f"10 + 5 = {calc.add(10, 5)}")
    print(f"20 - 8 = {calc.subtract(20, 8)}")
    print(f"History: {calc.get_history()}")
    
    # File operations
    file_result = write_example_file()
    print(f"File operation: {file_result}")
    
    print("=== Demo Complete ===\\n")

# 8. Exception handling example
def safe_divide(a, b):
    try:
        result = a / b
        return f"{a} / {b} = {result}"
    except ZeroDivisionError:
        return "Error: Cannot divide by zero!"
    except Exception as e:
        return f"Error: {e}"

# Run the demo if this script is executed directly
if __name__ == "__main__":
    run_demo()
    
    # Additional examples
    print("\\nAdditional Examples:")
    print(safe_divide(10, 2))
    print(safe_divide(10, 0))
    
    # Generator example
    def fibonacci_generator(n):
        a, b = 0, 1
        for _ in range(n):
            yield a
            a, b = b, a + b
    
    fib_numbers = list(fibonacci_generator(10))
    print(f"First 10 Fibonacci numbers: {fib_numbers}")`;
    
    let isCodeVisible = false;
    
    viewCodeButton.addEventListener('click', function() {
        if (!isCodeVisible) {
            pythonCodePre.textContent = pythonCode;
            fullCodeDiv.style.display = 'block';
            viewCodeButton.textContent = 'Hide Python Code';
            isCodeVisible = true;
        } else {
            fullCodeDiv.style.display = 'none';
            viewCodeButton.textContent = 'View Full Python Code';
            isCodeVisible = false;
        }
    });
    
    console.log('Python Example page loaded successfully!');
});