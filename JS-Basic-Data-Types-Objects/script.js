// ************** //
// *** Syntax *** //
// ************** //

let someCoolName = {
    // key1: value1,
    // key2: value2,
    // key3: value3
};

// Key values are always strings:

    {
        // name1: 'value1';
    }

    // Above equals:
    // {
    //     "name1": 'value1';
    // }

const student = {
    firstName: 'Bob',
    lastNam: 'Hill',
    couuse: 'Web Dev',
    city: 'Miami',
    age: 29,
    hasPriorExp: false,
    goals: ['career change', 'new skills'],
    step: {
        application: 'approved',
        techTest: 'passed',
        prework: 'submitted',
        course: 'ongoing',
        foundJob: '',
        activeAlumus: ''
    }
};

let olympicRecords ={
    athletics100Men: 'Justin Gatlin',
    athleticsLongJumpMen: 'Mike Powel',
    swimming200Men: 'Michael Phelps'
};

// ************************ //
// *** Accessing Values *** //
// ************************ //

    console.log(olympicRecords);

    // dot notation:
    console.log(olympicRecords.athletics100Men);

    // brackets notation:
    console.log(olympicRecords['athleticsLongJumpMen']);

// ************************* //
// *** Adding Properties *** //
// ************************* //

    var olympicRecords2 = {
        athletics100Men2: 'Justin Gatlin',
        athleticsLongJumpMen2: 'Mike Powel',
    }

    olympicRecords2.swimming200Men2 = 'Michael Phelps';
    olympicRecords2.swimming400Women = 'Katie Ledecky';
    olympicRecords2.doubleOllie = 'Chris Chann';

    console.log(olympicRecords2);

// *************************** //
// *** Updating Properties *** //
// *************************** //

    olympicRecords2.athletics100Men2 = 'Usain Bolt';

    // Removing a property;
    delete olympicRecords2.doubleOllie;
    console.log(olympicRecords2);

// *********************** //
// *** List Properties *** //
// *********************** //

    Object.keys(olympicRecords2);
    console.log(Object.keys(olympicRecords2));

    // ** Listing Values: ** //
    // Placeholder - can be any word (key, record, blah, etc.)
    for (let key in olympicRecords2) {
        console.log(key + ': ' + olympicRecords2[key]);
    }

    for (let key in olympicRecords2) {
        console.log(`Property/Key: ${key} <==> value: ${olympicRecords2[key]}`);
    }

    // ** in Operator: ** //
    // Does property exist in object?
    let user = {
        name: 'Ana',
        age: 27
    };

    console.log('name' in user);         // ==> true
    console.log('age' in user);          // ==> true
    console.log('course' in user);       // ==> false

// ********************** //
// *** EXTRA PRACTICE *** //
// ********************** //

    // ** Print the Values: ** //
    let student2 = {
        name: "Max",
        age: 27
    };

    for (let key in student2) {
        console.log(student2[key]);
    }

    // ** Find the value of the Price property: ** //
        // Greater than 100: Discount by 10%
        // If not, Discount by 7%
        // Update onject with new property & new price

    let product = {
        name: 'headphones',
        price: 100
    };

    if (product.price > 100) {
        product.discount = Math.round(product.price * 0.1);
        product.price = product.price - product.discount;
    } else {
        product.discount = Math.round(product.price * 0.07);
        product.price = product.price - product.discount;
    }

    console.log('Updated Product: ', product);

    // ** Use given Object and loop through properties: ** //