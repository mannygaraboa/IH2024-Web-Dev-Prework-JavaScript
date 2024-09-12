let age = 44;
const price = 12.99;

console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);

// *** Exponentiation *** //

    console.log( 2 ** 3);               // ==> 8

// *** Modulo *** //

    // 4 / 2 = 2
    console.log(4 / 2);
    // With a remainder of 0
    console.log(4 % 2);

    // 7 / 2 = 3.5
    console.log(7 / 2);
    // With a remainder of 1
    console.log(7 % 2);

    // If a number modulus other number is equal to 0 it is a multiple of "other number"

    // 8 is indeed a multiple of 2
    console.log(8 % 2 === 0);           // ==> true
    // 9 is NOT a multiple of 2
    console.log(9 % 2 === 0);           // ==> false

// *** Assignment Operators *** //

    // =
    let ironhackAlumni = 3000;
    ironhackAlumni = ironhackAlumni + 1;
    console.log(ironhackAlumni);

    let totalMoney = 1000;
    let salary = 1000;
    let schoolPayment = 550;

    totalMoney = totalMoney + salary - schoolPayment;
    console.log(totalMoney);

    // +=
    let myAge = 25;
    myAge += 1;
    console.log(myAge);


// *** Expressions *** //

    let result = (7 + 5) / 3 - 8; 
    console.log(result);                            // ==> -4

    const i = 10 + (5 * 2 ** 3) / 4 - 6;            // ==> 14
    console.log(i);

    const expressionOne = ((2 * 2) + 5) * 6;        // ==> 54;
    const expressionTwo = ((2 * 2) + (5 * 3)) - 5;  // ==> 14;
    const expressionThree = (5 * 5) / (5 * 5);      // ==> 1;
    const expressionFour = 5 * 5 - 5 * 4;           // ==> 5;

    console.log(expressionOne);
    console.log(expressionTwo);
    console.log(expressionThree);
    console.log(expressionFour);
    