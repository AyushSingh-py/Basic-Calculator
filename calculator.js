let currentExpression = ''; // Stores the entire mathematical expression

// Function to append numbers, operators, or parentheses to the expression
function appendValue(value) {
    currentExpression += value;
    updateScreen(currentExpression);
}

// Function to calculate the result of the entire expression
function calculate() {
    try {
        // Evaluate the mathematical expression
        const result = eval(currentExpression); // Uses JavaScript's eval function for evaluation
        updateScreen(result);
        currentExpression = result.toString(); // Save result for further calculations
    } catch (error) {
        updateScreen('Error'); // Handle invalid expressions
        currentExpression = '';
    }
}

// Function to clear the screen and reset the expression
function clearScreen() {
    currentExpression = '';
    updateScreen('');
}

// Function to delete the last character in the expression
function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    updateScreen(currentExpression);
}

// Function to update the display screen
function updateScreen(value) {
    document.getElementById('screen').value = value;
}
