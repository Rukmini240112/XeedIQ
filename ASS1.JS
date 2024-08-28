// Variables

// 1. Declare variables and assign values
let name = "RUKMINI";              
let age = 21;                      
let city = "ELURU";             
let isStudent = true;              
let nullValue = null;
let undefinedValue;                 

// 2. Create a variable pi and assign it the value of pi (3.14159)
let pi = 3.14159;

// 3. Create a variable greeting and assign it a string that says "Hello, world!"
let greeting = "Hello, world!";

// 4. Create a variable isSunny and assign it a boolean value indicating whether it's sunny outside
let isSunny = false;                 

// 5. Create a variable favoriteNumber and assign it your favorite number
let favoriteNumber = 3;             

// Data Types

// 1. Print the data type of each variable using the typeof operator
console.log(typeof name);           // string
console.log(typeof age);            // number
console.log(typeof city);           // string
console.log(typeof isStudent);      // boolean
console.log(typeof nullValue);      // object (this is a quirk in JavaScript)
console.log(typeof undefinedValue); // undefined
console.log(typeof pi);             // number
console.log(typeof greeting);       // string
console.log(typeof isSunny);        // boolean
console.log(typeof favoriteNumber); // number

// 2. Create a variable mixedValue with multiple data types
let mixedValue = "age: " + age + ", isStudent: " + isStudent; // A string that includes a number and a boolean

// 3. Print the data type of mixedValue
console.log(typeof mixedValue);     // string

// Operators

// 1. Arithmetic operations
let a = 10;
let b = 3;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;
let exponentiation = a ** b;

console.log("Addition:", addition);               // 13
console.log("Subtraction:", subtraction);         // 7
console.log("Multiplication:", multiplication);   // 30
console.log("Division:", division);               // 3.3333...
console.log("Modulus:", modulus);                 // 1
console.log("Exponentiation:", exponentiation);   // 1000

// 2. Comparison operators
console.log(a == b);            // false
console.log(a != b);            // true
console.log(a > b);             // true
console.log(a < b);             // false
console.log(a >= b);            // true
console.log(a <= b);            // false

// 3. Logical operators
console.log(isSunny && isStudent); // false (only true if both are true)
console.log(isSunny || isStudent); // true (true if either is true)
console.log(!isSunny);             // false (negation of true)

// 4. Ternary operator
let isAdult = age >= 18 ? "Adult" : "Not an Adult";
console.log(isAdult);              // Adult (because age is 28)

// Additional Tasks

// 1. Create a variable temperature in Fahrenheit
let temperatureF = 68;             // Replace with the actual temperature in Fahrenheit

// 2. Convert the temperature to Celsius
let temperatureC = (temperatureF - 32) * 5 / 9;
console.log("Temperature in Celsius:", temperatureC); // Print the converted temperature

// 3. Determine if the person is a minor, adult, or senior citizen
if (age < 18) {
    console.log("Minor");
} else if (age >= 18 && age < 65) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}