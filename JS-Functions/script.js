// ** Syntax ** //
    // function <name> ([<argument_list>]) {
    //     <instructions>

    //     [return <expression>;]
    // }

function sayHello() {
    console.log('Hello!');
}

sayHello()

function sayHello2(language) {
    switch (language) {
        case 'fr':
            console.log("Bonjour!");
            break;
        case 'ger':
            console.log("Hallo!");
            break;
        case 'esp':
            console.log("Hola!");
            break;
        default:
            console.log("Hello!");
    }
}

sayHello2('fr');
sayHello2('ger');
sayHello2('esp');
sayHello2();
sayHello2(null);

function printInput(theInput) {
    console.log(`Passed input is: ${theInput}`);
}

printInput(2);
printInput("Ironhack is the best!");

function printInput2(theInput, numberOfTimes) {
    for (let i = 0; i < numberOfTimes; i++) {
        console.log(`Inputted: ${theInput}`);
    }
}

printInput2(2, 3);

function printElements(someArray) {
    for (let i = 0; i < someArray.length; i++) {
        console.log(`Element: ${someArray[i]}`);
    }
}

    const funnyArray = ["dog", 4, "miami", true];

printElements(["hello", "kitty", "pizza", 3, 78, false]);
printElements(funnyArray);