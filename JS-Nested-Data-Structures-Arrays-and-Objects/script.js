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