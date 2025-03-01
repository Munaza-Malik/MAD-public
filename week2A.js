function addNumbers(value1, value2) {
    if (value1 === null || value2 === null) {
        console.log("One or both values are null.");
        return;
    }

    if (typeof value1 === "string") {
        value1 = Number(value1);
    }

    if (typeof value2 === "string") {
        value2 = Number(value2);
    }

    let sum = value1 + value2;
    console.log("Sum:", sum);
}

// Example calls
addNumbers("5", 10);  // Output: Sum: 15
addNumbers(null, 10);  // Output: One or both values are null.
addNumbers("3", "7");  // Output: Sum: 10
addNumbers(4, 6);      // Output: Sum: 10
