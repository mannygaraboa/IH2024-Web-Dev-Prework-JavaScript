// *********************** //
// *** Function Syntax *** //
// *********************** //

    // function <name> ([<argument_list>]) {
    //     <instructions>

    //     [return <expression>;]
    // }

// ****************************** //
// *** Arguments & Parameters *** //
// ****************************** //
    function sayHello() {
    console.log('Hello!');
}

sayHello()

function sayHello2(language) {
    switch (language) {
        case 'fr':
            console.log("Bonjour!");
            break;
        case 'ger':
            console.log("Hallo!");
            break;
        case 'esp':
            console.log("Hola!");
            break;
        default:
            console.log("Hello!");
    }
}

sayHello2('fr');
sayHello2('ger');
sayHello2('esp');
sayHello2();
sayHello2(null);

function printInput(theInput) {
    console.log(`Passed input is: ${theInput}`);
}

printInput(2);
printInput("Ironhack is the best!");

function printInput2(theInput, numberOfTimes) {
    for (let i = 0; i < numberOfTimes; i++) {
        console.log(`Inputted: ${theInput}`);
    }
}

printInput2(2, 3);

function printElements(someArray) {
    for (let i = 0; i < someArray.length; i++) {
        console.log(`Element: ${someArray[i]}`);
    }
}

    const funnyArray = ["dog", 4, "miami", true];

printElements(["hello", "kitty", "pizza", 3, 78, false]);
printElements(funnyArray);

// ************************ //
// *** Returning Values *** //
// ************************ //

function calculateSum(num1, num2) {
    console.log(num1, num2);
    return num1 + num2;
}

function printResult() {
    const result = calculateSum(3, 6);
    console.log(`The result is ${result}`);
}

calculateSum(4, 5);
calculateSum(11.4, 11.4);
printResult();

function multiplyNumbers(a, b) {
    console.log(a * b);
    return a * b;
}

multiplyNumbers(4, 7);