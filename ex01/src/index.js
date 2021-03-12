function main(numOne, numTwo) {
    var qoutient;
    if (numTwo == 0) {
        qoutient = 'Divide by 0! Cannot divide by zero!';
    } else {
        // Only change code below this line 
        qoutient = numOne / numTwo;
        // Only change code above this line
    }
    return qoutient;

}

console.log(main(15, 3));
console.log(main(25, 5));
console.log(main(420, 10));
console.log(main(55, 0)); // change this line
module.exports = main;