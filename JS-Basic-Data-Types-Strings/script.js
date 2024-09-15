const country = "USA";
console.log("The Country: " + country);

const otherCountry = 'Spain';
console.log("The otherCountry: " + otherCountry);

let name = "Ironhacker";
console.log("The name: " + name);

let username = 'ironhack123';
console.log("The username: " + username);

let superSecretPassword = "pa$$w0rd_";
console.log("Shhh: " + superSecretPassword);

// ***************** //
// *** backticks *** //
// ***************** //

    const price = 12.99;
    const statement = `The price of this amazing product is ${price}.`;
    console.log(`The example of interpolation: ${statement}`);

    const campuses = `
    - Madrid 
    - Barcelona
    - Miami
    - Mexico City
    - Paris
    - Berlin
    - Sao Paulo
    - Lisbon`;

    console.log(`Multiline string and interpolation: ${campuses}`);


// ********************* //
// *** Concatenation *** //
// ********************* //

    let emptyContainer = "";
    emptyContainer += "Hello there, student!";
    console.log(emptyContainer);

    emptyContainer += " How are you?";
    console.log(emptyContainer);


// ********************* //
// *** string.length *** //
// ********************* //

    const fact = "I love web dev!";
    console.log(`"${fact}" is a string and its length is ${fact.length}.`);


// ********************* //
// *** toUpperCase() *** //
// ********************* //

    let name2 = "sandra";
    let uppercased = name2.toUpperCase();
    console.log(uppercased);                                            // ==> SANDRA

    let upperCasedFirstLetter = name2[0].toUpperCase()
    let upperCasedName = upperCasedFirstLetter + name2.slice(1);
    console.log(upperCasedName);                                        // ==> Sandra


// ******************************************** //
// *** Accessing single character in string *** //
// ******************************************** //

    const greeting = "Hello";
    console.log(greeting[0]);                                           // ==> H
    console.log(greeting[4]);                                           // ==> o
    console.log(greeting[9]);                                           // ==> undefined
    console.log(greeting[-2]);                                          // ==> undefined


    const username2 = "ironMia";
    console.log(username2.charAt(0));                                   // ==> i
    console.log(username2.charAt(1));                                   // ==> r
    console.log(username2.charAt(6));                                   // ==> a
    console.log(username2.charAt(7));                                   // ==> ""

// ***************************** //
// *** Accessing a substring *** //
// ***************************** //

    // ** .indexOf(substring) ** //

        const favoritePhrase = "Don't be evil";
        console.log(favoritePhrase.indexOf("Don't"));                       // ==> 0
        console.log(favoritePhrase.indexOf("e"));                           // ==> 7 because indexOf prints the FIRST occurrence
        console.log(favoritePhrase.indexOf("z"));                           // ==> -1 since it's not found

    // ** .includes() ** //

        console.log("dog".includes("og"));                                  // ==> true
        console.log("Dog".includes("do"));                                  // ==> false
        
        console.log("Hippopotamus".includes("pop"));                        // ==> true

        // We can pass an optional second argument to tell the method where to start.
        console.log("Hippopotamus".includes("Hip", 1));                     // ==> false

    // ** .substring(start, end) ** //

        let str = "ironhack";

        let substr1 = str.substring(1, 4);
        console.log(substr1);                                              // ==> ron

        let substr2 = str.substring(4, 8);
        console.log(substr2);                                              // ==> hack

        let substr3 = str.substring(5);
        console.log(substr3);                                              // ==> ack

        let substr4 = str.substring(11);
        console.log(substr4);                                              // ==> ""

    // ** .slice(start, end) ** //
    
        let newStatement = "I am the Ironhacker and I can't wait for this course to start!!!";

        let test1 = newStatement.slice(0, 19);                             // ==> I am the Ironhacker
        console.log(test1);

        // If the second parameter is not passed, it will capture 
        // from the character found oh the position 
        // that corelates with passed number to the end of the string
        let test2 = newStatement.slice(24);                                // ==> I can't wait for this course to start!!!
        console.log(test2);

        // If negative number is passed, 
        // it will start from the end of the string
        let test3 = newStatement.slice(-8);                                // ==> to start!!!
        console.log(test3);


// ********************** //
// *** Extra Practice *** //
// ********************** //

    // ** Find out if there is a specific word in a string: ** //

        const extraPratice = `
        *******************
        EXTRA PRACTICE !!!
        *******************`;
        console.log(extraPratice);

        const str1 = "Web Dev is amazing!";
        // ==> Look for each of these separately:
        console.log(str1.includes("development"));
        console.log(str1.includes("Development"));
        console.log(str1.includes("web"));
        console.log(str1.includes("ing"));
        console.log(str1.includes("Web"));

    // ** Concatenate the following strings: ** //

        let str2 = "Hey!";
        let str3 = "How are you?";
        str2 += " " + str3;
        console.log(str2);

        let str4 = 10;
        let str5 = 99;
        str4 += "" + str5;
        console.log(str4);

    // ** Take out half of the sentence ** //

        let sentence2 = "This is one meaningless sentence that needs to be cut in half.";
        let sentence2Length = sentence2.length;
        console.log(sentence2Length);

        let newSentence2 = sentence2.slice(0, (sentence2Length / 2) + 1);
        console.log(newSentence2);

    // ** Capitalize ** //

        // 1.) The whole name of the city where you are now
        // 2.) The first letter of the city
        // 3.) Capitlize the middle letter if the city has an odd number of letters 
        //     or two middle letters if the city has even number of letters.
        //     HINT: You can use .charAt() and .slice()

        let city1 = "miami";

        // 1.)
        console.log(city1.toUpperCase());

        // 2.)
        let upperCity1Letter = city1.charAt(0).toUpperCase();

        let upperCaseCity1 = upperCity1Letter + city1.slice(1);
        console.log(upperCaseCity1);

        // 3.)
        if (city1.length % 2 === 1) {
            let upperMiddleLetter = city1.charAt(city1.length / 2).toUpperCase();
            console.log(upperMiddleLetter);
            let upperMiddleLetterCity1 = city1.substring(0, city1.length / 2) + upperMiddleLetter + city1.slice(city1.length / 2 + 1);
            console.log(upperMiddleLetterCity1);
        }
        else if(city1.length % 2 === 0) {
            let upperMiddleLetters = city1.charAt(city1.length / 2 - 1).toUpperCase() + city1.charAt(city1.length / 2).toUpperCase();
            console.log(upperMiddleLetters);
            let upperMiddleLettersCity1 = city1.substring(0, city1.length / 2 - 1) + upperMiddleLetters + city1.slice(city1.length / 2 + 1);
            console.log(upperMiddleLettersCity1);
        }