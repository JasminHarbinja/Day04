function main() {
    firstNum = 6;
    secondNum = 25;
    thirdNum = 5.2;
    // Only change code below this line 
    firstNum = firstNum *= 9;
    secondNum = secondNum /= 5;
    thirdNum = thirdNum *= 10;
    // Only change code above this line
    return {
        firstNum,
        secondNum,
        thirdNum
    };
}
console.log(main());
module.exports = main;