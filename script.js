const num1Value = document.getElementById("num1");
const num2Value = document.getElementById("num2");

const addBtn = document.getElementById("addBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const largestBtn = document.getElementById("largestBtn");
const isEvenBtn = document.getElementById("isEvenBtn");

const result = document.getElementById("results");

// Add
addBtn.addEventListener("click", function() {
    const sum = Number(num1Value.value) + Number(num2Value.value);
    result.textContent = "Sum: " + sum;
});

// Multiply
multiplyBtn.addEventListener("click", function() {
    const product = Number(num1Value.value) * Number(num2Value.value);
    result.textContent = "Product: " + product;
});

// Largest
largestBtn.addEventListener("click", function() {
    if(Number(num1Value.value) > Number(num2Value.value)) { 
        result.textContent = "Largest: " + Number(num1Value.value); }
    else {
         result.textContent = "Largest: " + Number(num2Value.value);
    }
});

// Even/Odd
isEvenBtn.addEventListener("click", function() {
    const num = Number(num1Value.value);
    if (num % 2 != 0) {
        result.textContent = num + "is Odd"
    } else {
         result.textContent = num + "is even"
        
    }
});
