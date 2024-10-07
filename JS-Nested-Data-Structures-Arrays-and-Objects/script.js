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
