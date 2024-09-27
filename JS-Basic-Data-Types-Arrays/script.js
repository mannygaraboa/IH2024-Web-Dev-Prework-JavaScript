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
console.log(lastElement);

    // ** Adding and Removing Elements ** //

    const animalsArray4 = ["dog", "cat", "fish"];
    console.log(`Before: ${animalsArray4}`);

    animalsArray4.push("lizard");
    console.log(`After: ${animalsArray4}`);