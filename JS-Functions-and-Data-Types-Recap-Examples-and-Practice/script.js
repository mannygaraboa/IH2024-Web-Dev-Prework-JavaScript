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