let age1;                       // <== This is a variable declaration.
let name1, email1, course1;     // <== Declaring multiple variables with same let keyword.

let company;
company = "Ironhack";

let name2 = 'Ironhacker';
let age;
age = 45;
console.log(name2);
console.log(age);

let favoriteFood;
console.log(favoriteFood);      // <== This will return undefined.

// const name3 = 'Ana';
// name3 = 'Marina';               // <== This will throw an error. "name3" is read-only.

// *** Changing Variables Values *** //

    let favoriteFood2;

    favoriteFood2 = "Steak";
    console.log(favoriteFood2);

    favoriteFood2 = "Pizza";
    console.log(favoriteFood2);

// *** Changing Variables Types *** //

    let favoriteFood3;

    favoriteFood3 = "Steak";
    console.log('Value: ', favoriteFood3, ' Type: ', typeof favoriteFood3);

    favoriteFood3 = 20;
    console.log('Value: ', favoriteFood3, ' Type: ', typeof favoriteFood3);



// *** Important Naming Rules *** //

    var firstNum, secondNum, average, message;

    firstNum = 1;
    secondNum = 2;
    average = (firstNum + secondNum) / 2;
    message = "The average of the two numbers is " + average;
    console.log(message);