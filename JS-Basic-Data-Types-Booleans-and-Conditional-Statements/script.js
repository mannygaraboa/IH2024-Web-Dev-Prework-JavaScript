// const prompt = require("prompt-sync")({sigint: true});

// **************** //
// *** Booleans *** //
// **************** //

let powerOn = true;         // ==> boolean
let isRaining = false;      // ==> boolean

// ************************* //
// *** Logical Operators *** //
// ************************* //

    // ** AND(&&) ** //
        
    // ** OR(||) ** //

    // ** NOT(!) ** //

2 == '2';                   // ==> true
2 === '2';                  // ==> false
2 === 2;                    // ==> true

// ******************************* //
// *** Conditional Statementes *** //
// ******************************* //

    // ** IF Statement ** //
    /*
        if (condition) {
            statements
        }
    */

    let age1 = 18;
    let companyName = 'Ironhack';
    
    if (age1 = 18) {
        // Somthing happens here
    }

    if (companyName === 'Ironhack') {
        // Something happens here
    }

    // These 2 are the same:
        let isIronhackStudent = true;
        if (isIronhackStudent === true) {
            // Something happens here
        }

        if(isIronhackStudent) {
            // Something happens here
        }

        // Opposite case: meaning if the condition is false
        if (!isIronhackStudent) {
            // Something happens here
        }

    let isIronHackStudent2 = true;
    let hardWork = 9;

    if (isIronHackStudent2) {
        console.log("Welcome to Ironhack :)");
    }
        if (hardWork > 8) {
            console.log("You will be a great developer!");
        }

    // NOT
    let doesCode = true;
    if (!doesCode) {
        console.log("Ironhack is the right place to be!");
    }

    // AND
    let lovesParty = true;
    if (doesCode && lovesParty) {
        console.log("You seem to be an Ironhacker!");
    }

    // OR
    let framework = "Express";
    if (doesCode && (framework === "Express" || framework === "React")) {
        console.log("You are a smart developer!");
    }

    // ** ELSE Statement ** //
    /*
        if (condition) {
            statement1
        } else {
            statement2
        }
    */

    let age2 = 25;
    let isUnderEighteen = age2 < 18;

    if (isUnderEighteen) {
        console.log("Sorry! You can't enter :(");
    }
    else {
        console.log("Welcome to the night club!");
    }

    let isIronhackStudent3 = true;
    let hardWork2 = 9;

    if (isIronhackStudent) {
        console.log("Welcome to Ironhack :)");

        if (hardWork2 > 8) {
            console.log("You will be a great developer!");
        } else {
            console.log("You need to work harder... ");
        }
    }

    // ** ELSE IF Statement ** //
    /*
        if (condition1) {
            statement1
        } else if (condition2) {
            statement2
        } else if (condition3) {
            statement3
        } else {
            if all above turn to be false,
            this block of code will be executed
        }
    */

    let hardWork3 = 7;
    if (hardWork3 > 8) {
        console.log("You will be a great developer!");
    }   else if (hardWork3 > 6) {
        console.log("You're getting better, but you could be working harder!");
    }   else {
        console.log("You're slacking. I saw you fall asleep on the desk.");
    }

    // If more than one condition is true:
    // The first condition that is true will be executed
        let hardWork4 = 9;
        if (hardWork4 > 8) {
            console.log("You will be a great developer!");
        } else if (hardWork4 > 6) {
            console.log("You're getting better, but you could be working harder!");
        } else if (hardWork4 >= 5) {
            console.log("You need to work harder... ");
        } else {
            console.log("You're slacking. I saw you fall asleep on the desk.");
        }

    // Several true blocks:
        let hardWork5 = 9;
        if (hardWork5 > 8) {
            console.log("You will be a great developer!");
        }
        if (hardWork5 > 6) {
            console.log("You're getting better, but you could be working harder!");
        }

        let hungry = false;
        let isBreakfastTime = false;
        let isLunchTime = false;
        let isDinnerTime = true;

        // If you're hungry and it's breakfast time:
        if (hungry && isBreakfastTime) {
            console.log("Let's have breakfast!");
        }
        // If you're hungry and it's lunch time:
        else if (hungry && isLunchTime) {
            console.log("Time to go to lunch!");
        }
        // If it is dinner time and you're not hungry:
        else if (!hungry && isDinnerTime) {
            console.log("Let's go for drinks, I'm not very hungry!");
        }
        // If it's breakfast time, or I'm in the mood for breakfast:
        else {
            console.log("Guess I'll have a coffee break");
        }

// ************************ //
// *** Switch Statement *** //
// ************************ //
/*
    switch (expression) {
        case value1:
            statements executed when the result of expression matches value1
            [break;]
        case value2:
            statements executed when the result of expression matches values2
            [break;]
        ...
        case valueN:
            statements executed when the result of expression matches valueN
            [break;]
        default:
            statements executed when none of the values match the value of the expression
            [break;]
    }
*/

// Fruit Example:
    // Non-Switch Statement:
    const fruit1 = "peach"     // prompt("Enter the fruit1 name:", "coconut");
    let type1 = "";

    if (fruit1 === "pear" || fruit1 === "apple") {
        type1 = "pome";
    } else if (fruit1 === "peach" || fruit1 === "coconut") {
        type1 = "drupe";
    } else if (fruit1 === "strawberry" || fruit1 === "blueberry" || fruit1 === "blackberry") {
        type1 = "berry";
    } else if (fruit1 === "beans" || fruit1 === "peas") {
        type1 = "legume";
    } else {
        type1 = "other";
    }
    console.log("Fruit #1: " + fruit1 + " - " + type1); 

    // Switch Statement:
    const fruit2 = "blueberry";
    let type2 = "";
    switch (fruit2) {
        case "pear":
        case "apple":
            type2 = "pome";
            break;
        case "peach":
        case "coconut":
            type2 = "drupe";
            break;
        case "strawberry":
        case "blueberry":
        case "blackberry":
            type2 = "berry";
            break;
        case "beans":
        case "peas":
            type2 = "legume";
            break;
        default:
            type2 = "other";
            break;
    }
    console.log("Fruit #2: " + fruit2 + " - " + type2); 

// Pet Example:
    let pet = "dog";

    switch (pet) {
        case "cat":
            console.log("I will break a lot of things but hey, I'm adorable ... ");
            break;
        case "dog":
            console.log("I will be a bit annoying but I'm your brest friend ... ");
            break;
        case "hamster":
            console.log("I will be impossible to find but I'm reeeeaaaally cute ... ");
            break;
        default:
            console.log("I'm a special pet");
            break;
    }

// ********************** //    
// *** Truthy & Falsy *** //
// ********************** //

if (2) {
    console.log("truthy");
}
var name = "Ironhack";
if ("Hi!" && name) {
    console.log("truthy");
}
var age3;
if (age3 && "Bye") {
    console.log("falsy")
}
if (0) {
    console.log("falsy");
}

// ********************** //
// *** EXTRA PRACTICE *** //
// ********************** //

    // ** String Character Comparison ** //
    let string1 = "web";
    let string2 = "flower";

    if (string1.length > string2.length) {
        console.log(string1 + " is longer than " + string2);
    }
    else if (string1.length < string2.length) {
        console.log(string2 + " is longer than " + string1);
    }
    else {
        console.log(string1 + " and " + string2 + " are the same length");
    }

    // ** Check if word is in Sentence ** //
    let word1 = "ray";
    let sentence1 = "I went swimming in the bay today.";

    if (sentence1.includes(word1)) {
        console.log("The word " + "'" + word1 + "'" + " is in " + "'" + sentence1 + "'");
    } 
    else {
        console.log("The word " + "'" + word1 + "'" + " is NOT in " + "'" + sentence1 + "'");
    }

    // ** Odd or Even Number ** //
    let num = 0;
    
    if (num % 2 === 0) {
        console.log(num + " is an EVEN number");
    }
    else if (num % 2 === 1){
        console.log(num + " is an ODD number");
    }

    // ** Print the Century ** //
    let year = 1456;

    console.log("Year: " + year + " - Century: " + Math.ceil(year / 100));