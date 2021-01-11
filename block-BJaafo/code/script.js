//  Get full name

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

//Test 1
let resultTest1 = getFullName('Anjali', 'Lal');
let expectedTest1 = 'Anjali La';

if(resultTest1 != expectedTest1) {
    throw new Error(`${resultTest1} is not equal to ${expectedTest1}`);
}

//Test 2
let resultTest2 = getFullName('John', 'Doe');
let expectedTest2 = 'John Doe';

if(resultTest2 != expectedTest2) {
    throw new Error(`${resultTest2} is not equal to ${expectedTest2}`);
}

//After making the first test fail do you see the output of the second test?
//No.

// Calculate total amount

function calculateTotalAmount(amount, taxRate) {
    return amount + (amount * taxRate);
}

//Test 1
let result = calculateTotalAmount(100, 0.1)
let expected = 100;

if(result != expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}

//Test 2
result = calculateTotalAmount(343, 1)
expected = 686;

if(result != expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}

//After making the first test fail do you see the output of the second test?
//No.