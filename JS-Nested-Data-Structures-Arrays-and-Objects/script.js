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