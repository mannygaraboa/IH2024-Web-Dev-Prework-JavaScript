let name;
const meter = 100;

let age = 30;

let isStudent = true;
let hasDegree = false;

let phone = {
    brand: 'apple',
    type: 'iPhone',
    model: 'X',
    characteristics: {
        capacity: '256 GB',
        size: {
            height: '5.65 inches',
            width: '2.79 inches',
            depth: '0.3 inches'
        }
    },
    chip: ['bionic', 'neural engine', 'embedded motion processor']
};

function getPhoneDetails(thePhone) {
    console.log(`${thePhone.type} ${
        thePhone.model
    } by ${thePhone.brand.toUpperCase()} has the following characteristics:
    1. capacity: ${thePhone.characteristics.capacity},
    2. dimensions: ${thePhone.characteristics.size.height} x ${thePhone.characteristics.size.width} x ${thePhone.characteristics.size.depth}, 
    as well as the chip specs:`);

    for (let i = 0; i < thePhone.chip.length; i++) {
        console.log(`${i + 1} - ${thePhone.chip[i]}`);
    }
}

getPhoneDetails(phone);

const someArr = [
    'max',
    34,
    true,
    { name: 'sandra', student: true},
    ['javascript', 'mongodb', 'react']
];

console.log(someArr);

someArr.forEach(elem => {
    let theType = typeof elem;
    console.log(`The variable ${elem} is type of ${theType}`);
});

// ********************** //
// *** EXTRA PRACTICE *** //
// ********************** //

// ** Deing a function to loop through an array and print the type of each element ** //

let array1 = [
    'Manuel',
    29,
    true,
    { origin1: 'Panama', origin2: 'Cuba'},
    ['Swimmer', 'Runner', 'Cyclist']
];
function printTypeOf(someArr) {
    for (let i = 0; i < someArr.length; i++) {
        console.log(someArr[i] + " is a type of: " + typeof(someArr[i]));
    }
}

printTypeOf(array1);

// ** Define a function getCredentials() ** //
// Print the output of the passed object as an argument

let property = {
    owner: {
        firstName: 'John',
        lastName: 'Doe',
        age: 44
    },
    isForSale: true,
    sqrm: 120,
    address: {
        street: 'Happy St',
        number: 123,
        city: 'Miami',
        state: 'FL',
        country: 'US'
    },
    amenities: ['pool', 'tennis court', 'private parking', 'yard']
};

function getCredentials() {
    
}