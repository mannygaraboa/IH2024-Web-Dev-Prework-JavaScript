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

    // ** Deing a function printToTwenty() ** //

    function printToTwenty() {
        for (let i = 0; i <= 20; i++) {
            console.log(i);
        }
    }

    printToTwenty();