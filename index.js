let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

   // JavaScript Notes!

        // This is my first JavaScript code!

        // adding numbers 
        var sum = 10 + 10;
        console.log(sum);

        // subtracting number
        var difference = 45 - 33;
        console.log(difference);

        //multiplying number
        var product = 8 * 10;
        console.log(product);

        //dividing numbers
        var quotient = 66 / 10;
        console.log(quotient);

        // incrementing numbers
        var myVar =87;
        myVar = myVar + 1;
        console.log(myVar)
           //or
        var myVar =87;
        myVar++;
        console.log(myVar)

         // decrementing numbers
        var myVar = 12;
        var myVar = myVar -1;
        console.log(myVar)
           //or 
        var myVar = 11;
        myVar--;
        console.log(myVar)

        // decimal numbers
        var ourDecimal = 5.7 + 1.1;
        console.log(ourDecimal)

        // multiply decimals
        var product = 3.0 * 2.5;
        console.log(product)

        // divide decimals
        var quotient = 4.4 / 2.0;
        console.log(quotient)

        // finding a remainder
        var remainder
        remainder = 11 % 3;
        console.log(remainder)


        // compound assignment with augmented addition 
        var d = 12;
        d = d + 6;
        console.log(d) 

        // compound assignment with augmented subtraction
        var d = 12;
        d = d - 6;
        console.log(d) 

        // compound assignment with augmented multiplying 
        var d = 12;
        d = d * 6;
        console.log(d)  

        // compound assignment with augmented division
        var d = 12;
        d = d / 6;
        console.log(d)  

        // declare string variables
        var myFirstName = 'Andre';
        console.log(myFirstName);

        var myLastName = 'Lawrence';
        console.log(myLastName);

        // ESCAPING LITERAL QUOTES IN STRINGS
        var myStr = "I am a \"double quoted\" string inside \"double quotes";
        console.log(myStr)

        // quoting strings with single quotes
        var myStr =  'I am a "double quoted" string inside "double quotes"';
        
        // escape sequences in strings
        /*****
        CODE    OUTPUT
        \'      single quote
        \"      double quote
        \\      backslash
        \n      newline
        \r      carriage return
        \t      tab
        \b      backspace
        \f      form feed
        ****/
        //eg
        var myStr = "FirstLine\n\tSecondLine\nThirdLine"
        console.log(myStr)

        //Concatenating strings with plus operator
        var ourStr = "I come first. " + "I come second.";
        console.log(ourStr);

        //Concatenating strings with plus equals operator
        var myStr = "This is the first sentence. "
        myStr += "This is the second sentence."
        console.log(myStr)

        //Concatenating strings with variables
        var myName = "Andre";
        var myStr = " My name is " + myName + " and i am well"
        console.log(myStr)

        //Appending variables to strings
        var someAdjective = "worthwhile";
        var myStr = "Learning to code is ";
        myStr += someAdjective;
        console.log(myStr) 

        //Find length of string
        var firstLetterOfLastName = "";
        var LastName = "Lawrence"
        firstLetterOfLastName = LastName[0]
        console.log(firstLetterOfLastName)
        
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

        /* Variables use to store data temporarily, cannot be a reserved keyword, should be meaningful, Cannot start with a number, Cannot contain a space or hyphen */
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

