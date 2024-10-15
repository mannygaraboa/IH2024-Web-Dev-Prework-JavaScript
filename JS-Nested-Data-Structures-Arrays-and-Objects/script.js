// ************** //
// *** Arrays *** //
// ************** //

let books = ['Eloquent JavaScript', 'Secrets of the JavaScript Ninja'];
console.log(books[0]);
console.log(books[1]);
console.log(books[6]);      // ==> Undefined

// *************** //
// *** Objects *** //
// *************** //

let eloquentJS = {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke'
};
console.log(eloquentJS.title);

let secretsJSninja = {
    title: 'Secrets of the JavaScript Ninja',
    author1: 'John Resig',
    author2: 'Bear Bibeault'        // Two authors... interesting...
};
console.log(secretsJSninja.author2);

// ****************************** //
// *** Nested Data Structures *** //
// ****************************** //

    // ** Array of Objects ** //

    const books2 = [
        {
            title: 'Eloquent JavaScript',
            author: 'Marijn Haverbeke'
        },
        {
            title: 'Secrets of the JavaScript Ninja',
            author1: 'John Resig',
            author2: 'Bear Bibeault'
        }
    ];
    console.log(books2[0]);
    console.log(books2[0].title);

    // ** Adding & Removing Data ** //

    let jsDesignPatterns = {
        title: 'Learning JavaScript Design Patterns',
        author1: 'Addy Osmani'
    };

    books2.push(jsDesignPatterns);
    console.log(books2);

    // ** Arrays in Objects ** //

    const books3 = [
        {
            title: 'Eloquent JavaScript',
            author: 'Marijn Haverbeke'
        },
        {
            title: 'Secrets of the JavaScript Ninja',
            authors: ['John Resig', 'Bear Bibeault']
        }
    ];

    console.log(books3[1].authors);
    console.log(books3[1].authors[0]);
    console.log(books3[1].authors[1]);

// ************************** //
// *** Objects in Objects *** //
// ************************** //

let currentGroup = {
    course: 'Web Development',
    type: 'Full Time',
    squadName: 'squad-307',
    city: 'Miami',
    teacher: {
        name: 'Nick',
        age: 27
    },
    classroom: {
        floor: 3,
        seats: 30,
        available: true
    }
};

console.log(currentGroup.teacher);
console.log(currentGroup.teacher.name);
console.log(currentGroup.classroom.available);

// *********************** //
// *** Array of Arrays *** //
// *********************** //

const books4 = [
    ['Eloquent JavaScript', 'Secrets of the JavaScript Ninja'],
    ['Learn Python the Hard Way', 'Real Python Course'],
    ['Effective Java', 'Java Generics and Collections']
];

console.log(books4[1]);
console.log(books4[1][0]);
console.log(books4[4]);         // ==> Undefined

// ************************************* //
// *** 2D Arrays with Nested Objects *** //
// ************************************* //

let basic = {
    language: 'JavaScript',
    frameworks: [
        {
            end: 'back',
            list: [
                {
                    name: 'ExpressJS',
                    released: 2010
                },
                {
                    name: 'MeteorJS',
                    released: 2012
                }
            ]
        },
        {
            end: 'front',
            list: [
                {
                    name: 'ReactJS',
                    released: '2013'
                },
                {
                    name: 'VueJS',
                    released: 2014
                }
            ]
        }
    ]
}

console.log(basic.frameworks);
console.log(basic.frameworks[1]);
console.log(basic.frameworks[1].list[0]);

// ********************** //
// *** EXTRA PRACTICE *** //
// ********************** //

    // ** Using given array of objects: ** //

    let products = [
        {
            name: 'iPhone',
            price: 799.99
        },
        {
            name: 'Samsung Galaxy S10',
            price: 900.00
        }
    ];

    // display price of iPhone
    console.log(products[0].price);

    // display both phones' names
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].name);
    }

    // add a new phone at the beginning of the array
    products.unshift(
        {
            name: 'Google Pixel',
            price: 500.00
        }
    );
    console.log(products)

    // remove the last element of the array
    products.pop();
    console.log(products);

    // ** Given the array, print: ** //

    let course2 = {
        name: 'Web Development',
        type: ['full-time', 'part-time'],
        topics: ['HTML/CSS Responsive Design', 'JavaScript', 'MongoDB', 'Node', 'Express', 'React']
    }
    // Your course type (Full-Time or Part-Time)
    console.log(course2.type[0]);

    // The most familiar topic
    console.log(course2.topics[1]);

    // The least familiar topic
    console.log(course2.topics[4]);

    // ** Given the object with nested objects in it, print: ** //

    let student = {
        firstName: 'Ana',
        lastName: 'Blair',
        course: {
            name: 'Web Development',
            type: 'part-time'
        },
        attendedIn: 'Madrid',
        address: {
            street: 'Happy Street',
            number: 123,
            city: 'Barcelona',
            zip: '08015',
            country: 'Spain'
        }
    }
    // console.log(???) ==> Web Development
    console.log(student.course.name);

    // console.log(???) ==> Happy Street
    console.log(student.address.street);

    // console.log(???) ==> Ana moved from Barcelona to Madrid to take part-time Web Development course.
    console.log(`${student.firstName} moved from ${student.address.city} to ${student.attendedIn} to take ${student.course.type} ${student.course.name} course.`);

    // ** Given a 2D array, print the following: ** //
    
    const ironCampuses = [
        ["Mexico City", "Miami", "Sao Paulo"],
        ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
    ];

    console.log(ironCampuses[0][1]);           // ==> Miami
    console.log(ironCampuses[1][0]);           // ==> Amsterdam
    console.log(ironCampuses[1][5]);           // ==> Paris