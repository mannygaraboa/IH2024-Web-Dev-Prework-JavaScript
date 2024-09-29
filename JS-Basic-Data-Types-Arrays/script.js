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

