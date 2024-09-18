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