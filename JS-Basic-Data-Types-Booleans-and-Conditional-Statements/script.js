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

    let age = 18;
    let companyName = 'Ironhack';
    
    if (age = 18) {
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
    let isUnderEighteen = age < 18;

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