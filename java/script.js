document.addEventListener('DOMContentLoaded', function() {
    const viewCodeButton = document.getElementById('view-code');
    const fullCodeDiv = document.getElementById('full-code');
    const javaCodePre = document.getElementById('java-code');
    
    // Java code content to display
    const javaCode = `import java.util.*;
import java.io.*;

/**
 * Java Example Project
 * This file demonstrates various Java concepts and features
 */
public class JavaExample {
    private String projectName;
    private int currentYear;
    private boolean isActive;
    
    // Constructor
    public JavaExample() {
        this.projectName = "Java Examples";
        this.currentYear = 2025;
        this.isActive = true;
        System.out.println("☕ Java Example Project Loaded!");
    }
    
    // Basic method
    public String greetUser(String name) {
        if (name == null || name.isEmpty()) {
            name = "Developer";
        }
        return "Hello, " + name + "! Welcome to " + projectName;
    }
    
    // Method with multiple parameters
    public int calculateArea(int width, int height) {
        return width * height;
    }
    
    // Working with arrays and collections
    public void demonstrateCollections() {
        System.out.println("\\n=== Collections Demo ===");
        
        // Arrays
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        
        // Lists
        List<Integer> evenNumbers = new ArrayList<>();
        List<Integer> doubledNumbers = new ArrayList<>();
        
        for (int num : numbers) {
            if (num % 2 == 0) {
                evenNumbers.add(num);
            }
            doubledNumbers.add(num * 2);
        }
        
        int sum = Arrays.stream(numbers).sum();
        
        System.out.println("Original numbers: " + Arrays.toString(numbers));
        System.out.println("Even numbers: " + evenNumbers);
        System.out.println("Doubled numbers: " + doubledNumbers);
        System.out.println("Sum of all numbers: " + sum);
    }
    
    // Inner class example
    public static class Calculator {
        private List<String> history;
        
        public Calculator() {
            this.history = new ArrayList<>();
        }
        
        public int add(int a, int b) {
            int result = a + b;
            history.add(a + " + " + b + " = " + result);
            return result;
        }
        
        public int subtract(int a, int b) {
            int result = a - b;
            history.add(a + " - " + b + " = " + result);
            return result;
        }
        
        public List<String> getHistory() {
            return new ArrayList<>(history);
        }
    }
    
    // Exception handling example
    public String safeDivide(int a, int b) {
        try {
            if (b == 0) {
                throw new ArithmeticException("Division by zero");
            }
            double result = (double) a / b;
            return a + " / " + b + " = " + result;
        } catch (ArithmeticException e) {
            return "Error: Cannot divide by zero!";
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
    
    // File operations example
    public String writeExampleFile() {
        try {
            FileWriter writer = new FileWriter("example_output.txt");
            writer.write("This is an example file created by Java!\\n");
            writer.write("Project: " + projectName + "\\n");
            writer.write("Year: " + currentYear + "\\n");
            writer.close();
            return "File written successfully!";
        } catch (IOException e) {
            return "Error writing file: " + e.getMessage();
        }
    }
    
    // Main demo method
    public void runDemo() {
        System.out.println("\\n=== Java Demo Started ===");
        
        // Basic operations
        System.out.println(greetUser("Coder"));
        System.out.println("Area of 5x3 rectangle: " + calculateArea(5, 3));
        
        // Collections demo
        demonstrateCollections();
        
        // Calculator usage
        System.out.println("\\n=== Calculator Demo ===");
        Calculator calc = new Calculator();
        System.out.println("10 + 5 = " + calc.add(10, 5));
        System.out.println("20 - 8 = " + calc.subtract(20, 8));
        System.out.println("History: " + calc.getHistory());
        
        // Exception handling
        System.out.println("\\n=== Exception Handling Demo ===");
        System.out.println(safeDivide(10, 2));
        System.out.println(safeDivide(10, 0));
        
        // File operations
        System.out.println("\\n=== File Operations Demo ===");
        System.out.println(writeExampleFile());
        
        System.out.println("\\n=== Demo Complete ===");
    }
    
    // Main method
    public static void main(String[] args) {
        JavaExample example = new JavaExample();
        example.runDemo();
        
        // Additional examples
        System.out.println("\\nAdditional Examples:");
        
        // HashMap example
        Map<String, Integer> grades = new HashMap<>();
        grades.put("Math", 95);
        grades.put("Science", 87);
        grades.put("English", 92);
        
        System.out.println("Student grades: " + grades);
        
        // Stream API example (Java 8+)
        List<String> subjects = Arrays.asList("Math", "Science", "English", "History");
        List<String> longSubjects = subjects.stream()
            .filter(subject -> subject.length() > 4)
            .collect(ArrayList::new, ArrayList::add, ArrayList::addAll);
        
        System.out.println("Subjects with more than 4 characters: " + longSubjects);
    }
}`;
    
    let isCodeVisible = false;
    
    viewCodeButton.addEventListener('click', function() {
        if (!isCodeVisible) {
            javaCodePre.textContent = javaCode;
            fullCodeDiv.style.display = 'block';
            viewCodeButton.textContent = 'Hide Java Code';
            isCodeVisible = true;
        } else {
            fullCodeDiv.style.display = 'none';
            viewCodeButton.textContent = 'View Full Java Code';
            isCodeVisible = false;
        }
    });
    
    console.log('Java Example page loaded successfully!');
});