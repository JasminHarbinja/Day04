function main() {
    myX = 12;
    myY = 19;
    myZ = 24;
    // Only change code below this line 
    myX = myX += 3;
    myY = myY += 17;
    myZ = myZ -= 20;
    // Only change code above this line
    return {
        myX,
        myY,
        myZ
    };
}
console.log(main());
module.exports = main;