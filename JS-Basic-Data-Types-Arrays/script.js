// ****************************** //
// *** Basic Array Operations *** //
// ****************************** //

let animalsArray1 = [];

const animalsArray2 = ['dog', 'cat', 'snake'];

const animalsArray3 = ["dog", "cat", "fish"];

const myDog = animalsArray3[0];
console.log(myDog);

const myFish = animalsArray3[2];
console.log(myFish);

// Returns undefined when there's no element with that index:
const myUndefinedElement = animalsArray3[3];
console.log(myUndefinedElement);

console.log(`The length of the animalsArray3 is: ${animalsArray3.length}`);

const lastIndex = animalsArray3.length - 1;
const lastElement = animalsArray3[lastIndex];
console.log(lastElement + "\n");

    // ** Adding and Removing Elements ** //

    // Adding an element (End of Array):
    console.log("Adding an element (End of Array):");
    const animalsArray4 = ["dog", "cat", "fish"];
    console.log(`Before: ${animalsArray4}`);

    animalsArray4.push("lizard");
    console.log(`After: ${animalsArray4}\n`);


    // Adding an element (Beginning of Array):
    console.log("Adding an element (Beginning of Array):");
    const animalsArray5 = ["dog", "cat", "fish"];
    console.log(`Before: ${animalsArray5}`);

    animalsArray5.unshift("whale");
    console.log(`After: ${animalsArray5}\n`);


    // Removing an element (End of Array):
    console.log("Removing an element (End of Array):");
    const animalsArray6 = ["dog", "cat", "fish"];
    console.log(`Before: ${animalsArray6}`);

    animalsArray6.pop();
    console.log(`After: ${animalsArray6}\n`);


    // Removing an element (Beginning of Array):
    console.log("Removing an element (Beginning of Array):");
    const animalsArray7 = ["dog", "cat", "fish"];
    console.log(`Before: ${animalsArray7}`);

    animalsArray7.shift();
    console.log(`After: ${animalsArray7}\n`);


    // Deleting an element
    console.log("Deleting an element:");
    const animalsArray8 = ["dog", "cat", "fish"];
    console.log(`Before: ${animalsArray8}`);

    delete animalsArray8[0];lastElement;
    console.log(`After: ${animalsArray8}\n`);                   // ==> [undefined, "cat", "fish"]


    // Splicing an element
        console.log("Splicing an elemenet:");
        const animalsArray9 = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];
        console.log(`Original: ${animalsArray9}`);
        console.log("------");

        // From the first element, remove one going forward:
        animalsArray9.splice(0, 1);
        console.log(`From the first element, remove one going forward: ${animalsArray9}`);

        // From the third element, remove two going forward:
        animalsArray9.splice(2, 2);
        console.log(`From the third element, remove two going forward: ${animalsArray9}`);

        // Inserting a third arguement:
        animalsArray9.splice(0, 1, "Something else");
        console.log(`If we pass a third arguement: ${animalsArray9}\n`);



// *********************** //
// *** Array and Loops *** //
// *********************** //

    // ** For Loop ** //
    const animalsArray10 = ["dog", "cat", "fish"];

    for (let i = 0; i < animalsArray10.length; i++) {
        console.log(`Index: ${i} - element: ${animalsArray10[i]}`);
    }

    // ** While Loop ** //
    let counter = 0;
    const animalsArray11 = ["dog", "cat", "fish"];

    while (counter < animalsArray11.length) {
        console.log(`Counter (===index): ${counter} - element: ${animalsArray11[counter]}`);
        counter++;
    }

    // ** forEach Loop ** //
    const animalsArray12 = ["dog", "cat", "fish"];

    // Option 1: ES5 (Still in use so good to know):
    // "animal" is just a placeholder, can be any word:
    animalsArray12.forEach(function(animal){
        console.log(`option 1: ${animal}`);
    })

    // Option 2: ES6 (new and cool way that uses arrow function [=>])
    // "arrayElement" is just a placeholder, can be any word:
    animalsArray12.forEach(arrayElement => {
        console.log(`option 2: ${arrayElement}`);
    });


// ********************** //
// *** EXTRA PRACTICE *** //
// ********************** //

    // ** Perform a few operations: ** //

        // Add two of your favorite animals to the end of the array:
        // Remove the first two elements of the array:
        // Replace the last element in the array wih the word "last":

        const animalsArray13 = ["dog", "cat", "fish"];

        animalsArray13.push("frog", "hedgehog");
        console.log(animalsArray13);

        animalsArray13.splice(0, 2);
        console.log(animalsArray13);

        animalsArray13.splice(animalsArray13.length - 1, 1, "last");
        console.log(animalsArray13);

    // ** Create an array with 6 of your favorite foods: ** //
    // ** With your loop of choice, iterate through the array but only print out the foods with an even index: ** //

    const favFoods = ["sushi", "rice", "salmon", "spinach", "soup", "salad"];

    for (let i = 0; i < favFoods.length; i++) {
        if(i % 2 === 0) {
            console.log(favFoods[i]);
        }
    }

    // ** Check if the word appears in given array and print it out it it does or doesn't: ** //

    let word = "miami";
    let arr = ["bcn", "mia", "sao", "mex", "par", "miami", "ams", "ber", "paris", "lis", "mad"];

    for (let i = 0; i < arr.length; i++) {
        if (word === arr[i]) {
            console.log(`${word} DOES match with ${arr[i]}`);
        } else {
            console.log(`${word} DOES NOT match with ${arr[i]}`);
        }
    }

    // ** Given an array of numbers, calculate the sum: ** //
    
    const prices = [10.99, 44.56, 112.79, 3, 5];
    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }

    let sumRounded = Math.round(sum * 10) / 10;
    console.log(`Sum: ${sum}`);
    console.log(`Sum rounded: ${sumRounded}`);