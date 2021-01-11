function test(message, callback) {
     try {
         callback();
         console.log(message, '- PASSED 🆗');
     } catch(error) {
         console.log(message, '- FAILED ❌');
         console.log(error);
     }
}

function expect(result) {
     return {
         toEqual: function(expected) {
             if( result !== expected) {
                 throw new Error(`${expected} is not equal to ${result}`);
             }
         }
     };
}

// Add two numbers

function addNumbers(numA, numB) {
    return numA + numB;
}

test('Add 10 + 10 to be equal 20', () => {
    expect(addNumbers(10,11)).toEqual(20);
});

test('Add 2 + 3 to be equal 5', () => {
    expect(addNumbers(2,3)).toEqual(5);
});

test('Add 3423 + 3434 to be equal 6857', () => {
    expect(addNumbers(3423,3434)).toEqual(6857);
});

test('Add 10 + 0 to be equal 10', () => {
    expect(addNumbers(10,0)).toEqual(10);
});

test('Add 10 + "hey" to be equal 10', () => {
    expect(addNumbers(10,"hey")).toEqual(10);
});

// Multiply two numbers

function multiplyNumbers(numA, numB) {
    return numA * numB;
}

test('Multiply 10 and 10 to be equal 20', () => {
    expect(multiplyNumbers(10,11)).toEqual(20);
});

test('Multiply 2 and 3 to be equal 6', () => {
    expect(multiplyNumbers(2,3)).toEqual(6);
});

test('Multiply 3423 and 3434 to be equal 11754582', () => {
    expect(multiplyNumbers(3423,3434)).toEqual(11754582);
});

test('Multiply 10 and 0 to be equal 0', () => {
    expect(multiplyNumbers(10,0)).toEqual(0);
});

test('Multiply 10 and "hey" to be equal 10', () => {
    expect(multiplyNumbers(10,"hey")).toEqual(10);
});