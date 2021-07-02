let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

   // JavaScript Notes!

        // This is my first JavaScript code!

        let a = 10;
        console.log(a);

        console.log (9*a); 

        let b = 7 * a; 
        console.log(b);

        //CONSTANTS
        let interestRate = 0.3;
        interestRate = 1;
        console.log(interestRate);
    

        // VARIABLES
        // Variables use to store data temporarily
        // Cannot be a reserved keyword
        // Should be meaningful 
        // cannot start with a number
        // Cannot contain a space or hyphen
        // Are case-sensitive eg. firstName;
        var max = 57
        var actual = max - 13
        var percentage = actual / max
        console.log(percentage) //= 0.77192982



        
        console.log("Andre!");
        console.log("Hello, World!");
        console.log(23 + 97);
        console.log(4+6+9 / 77 );

        //Primitives/Value Types//

        //String 
        let name = 'Andre';

        // Number
        let age = 35;

        //Boolean
        let isApproved = true;

        //Undefined
        let firstName = undefined;

        //Null
        let lastName = null

    //REFERENCE TYPES//
     // Object, Array, Function
    
    //Object eg
    let person = {
    name: 'Andre',
    age: 35
    };
    // Dot Notation
    person.name = 'Lawrence';
    console.log(person.name);

    // Bracket Notation eg
    person['name'] = 'Stacey'
    console.log(person.name);


    //Arrays

    //Array eg
    let selectedColors =['red', 'black'];
    selectedColors[2] = 1; 
    console.log(selectedColors);

    //Function

    //Function eg

    function greet(name, lastName) {
        console.log('Hello ' + name + ' ' + lastName);
    }
    greet('Andre', 'Lawrence');

    //Function eg calculating a value
    function square(number) {
        return number * number;
    }
    console.log(square(2));


    
    Constants, Primitive Types ,Dynamic Typing 
    Objects
    Arrays
    Functions
    Types of Functions 