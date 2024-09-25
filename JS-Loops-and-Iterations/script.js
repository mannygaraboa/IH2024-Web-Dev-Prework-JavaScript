// ****************** //
// *** While Loop *** //
// ****************** //

/*
    while (condition) {
        code to be executed while the condition is true
    }
*/

let counter = 1;

while (counter <= 10) {
    console.log(counter);
    counter += 1;
}

// **************** //
// *** For Loop *** //
// **************** //

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log("Countdown: " + i);
    if (i == 1){   
        i--;
        console.log("Countdown: " + i);
        console.log("BOOM!");
    }
}

// ******************** //
// *** Nested Loops *** //
// ******************** //

const statement = "We are in Ironhack";

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        let x = 0;

        while (x < statement.length) {
            let letter = statement[x];
            if (letter === "a") {
                console.log(i + " Cheers!");
            }
            x++;
        }
    }
}

// ************* //
// *** Break *** //
// ************* //

for (let i = 1; i <= 30; i++) {
    if (i == 21) {
        console.log("TWENTY ONE! Black Jack, dale!");
        break;
    } else {
        console.log(i);
    }
}

// **************** //
// *** Continue *** //
// **************** //

for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
        console.log("Skipping number: " + i);
        continue;
    } else {
        console.log(i);
    }
}

// ********************** //
// *** EXTRA PRACTICE *** //
// ********************** //

    // ** Print numbers 1 through 50 ** //
    for (let i = 1; i <= 50; i++) {
        console.log("Printing number: " + i);
    }

    // ** Skip numbers divisible by 5 ** //
    for (let i = 1; i <= 50; i++) {
        if (i % 5 == 0) {
            console.log("Skipping number: " + i);
            continue;
        } else {
            console.log(i);
        }
    }

    // *** Print "Donkey" if number is divisble by 10 or 15 *** //
    for (let i = 1; i <= 50; i++) {
        if (i % 10 == 0 || i % 15 == 0) {
            console.log("Donkey");
        } else {
            console.log(i);
        }
    }

    // ** Print "Monkey" if number is NOT divisible by 2 AND the previous number is divisible by 10 ** //
    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0 && (i - 1) % 10 == 0) {
            console.log("Monkey");
        } else {
            console.log(i);
        }
    }