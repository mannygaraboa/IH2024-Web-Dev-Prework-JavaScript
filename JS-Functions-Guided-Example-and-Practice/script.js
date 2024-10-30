// ********************** //
// *** Guided Example *** //
// ********************** //

function calculator(num1, num2, operator) {
    // Make sure user always passes 3 arguments:
    if (!num1 || !num2 || !operator) {
        console.log("Please provide both numbers and operator!");
        return;
    }

    // Make sure user passes numeric values:
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log("Please add a numeric value only!");
        return;
    }

    // Make sure user passes one of the valid operators (+ - * /):
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        console.log("Please provide valid operator.");
        return;
    }


    // Initialize a variable that will hold the result:
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    let response = `${num1} ${operator} ${num2} = ${result}`;
    console.log(response);
    return response;
}

calculator(6, 7, "+");
calculator(20, 4, "-");
calculator(3, 55, "*");
calculator(20, 4, "/");

calculator(7, "+");
calculator(6, 7, '');
calculator('a', 7, '-');
calculator(6, 7, "=");
calculator(6, 7, "blah");

// ********************** //
// *** EXTRA PRACTICE *** //
// ********************** //

    // ** Define function welcome() that will receive one argument, your name, and greet you with your name. ** //
    function welcome(name) {
        let greeting = `Hello and welcome, ${name}!`;
        console.log(greeting);
        return greeting;
    }

    welcome("Manuel");

    // ** Define a function printToTwenty() to print numbers from 0 to 20.** //

    function printToTwenty() {
        for (let i = 0; i <= 20; i++) {
            console.log(i);
        }
    }

    printToTwenty();

    // ** Define a function printNumbers() that receives one argument and prints numbers 0 to that number ** //

    function printNumbers(num) {
        for (let i = 0; i <= num; i++) {
            console.log(i);
        }
    }

    printNumbers(30);

    // ** Define a function printArrElements(someArr) ** //

    let ironCities = [
        'Amsterdam',
        'Barcelona',
        'Berlin',
        'Lisbon',
        'Madrid',
        'Mexico City',
        'Miami',
        'Paris',
        'Sao Paulo'
    ]

    function printArrElements(someArr) {
        for (let i = 0; i < someArr.length; i++) {
            console.log(someArr[i]);
        }
    }

    printArrElements(ironCities);

        // Define an array of favorite cities and favorite foods to pass it in printArrElemments()
        let favCities = [
            'Miami',
            'Austin',
            'Panama'
        ]

        let favFoods = [
            'sushi',
            'pasta',
            'rice',
            'eggplant'
        ]

        printArrElements(favCities);
        printArrElements(favFoods);

    // ** Define function printEvens(someArr) & use the "ironCities" array to print only even numbers ** //

    function printEvens(someArr) {
        for (let i = 0; i <= someArr.length; i++) {
            if (i % 2 === 0) {
                console.log(someArr[i]);
            }
        }
    }

    printEvens(ironCities);

    // ** Write a function to calculate a sum of all arguments of an array ** //

    const price = [5, 7.99, 9.99, 0.99, 21];

    function sumArr(someArr) {
        let sum = 0;
        for (let i = 0; i < someArr.length; i++) {
            sum += someArr[i];
        }
        console.log(`$${sum}`);
        return `$${sum}`;
    }

    sumArr(price);