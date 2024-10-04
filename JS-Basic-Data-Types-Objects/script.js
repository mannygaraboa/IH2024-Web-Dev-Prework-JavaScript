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

    console.log(olympicRecords2);