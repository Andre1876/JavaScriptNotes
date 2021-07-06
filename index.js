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

        //String immutability
        var myStr = "Jello World";
        myStr = "Hello World";
        console.log(myStr) 

        // bracket notation to find NTH character in string
        var thirdLetterOfLastName = "";
        var LastName = "Lawrence"
        thirdLetterOfLastName = LastName[2]
        console.log(thirdLetterOfLastName)

        // bracket notation to find last character in string
        var myLastName = "Lawrence"
        var lastLetterOfLastName = myLastName[myLastName.length - 1];
        console.log(lastLetterOfLastName)


        // Word Blanks 
        function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
        var result = "";
        result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the story";
        return result;

        }
        console.log(worldBlanks("dog", "big", "ran", "quickly"));
        console.log(worldBlanks("bike", "slow", "flew", "slowly"));

        // store multiple values with arrays
        var ourArray = ["July", 4, 7, 2021];
        console.log(ourArray)


        let selectedColors =['red', 'black'];
        selectedColors[2] = 1; 
        console.log(selectedColors);

        // Nested Arrays
        var ourArray = [["the universe", 42], ["everything", 101010]];
        console.log(ourArray)

        // Access array data with indexes
        var ourArray = [50,60,70];
        var ourData = ourArray[0]
        console.log(ourData)

        //Modify Array Data
        var ourArray = [ 18,64,99];
        ourArray[1] =45;
        console.log(ourArray)

        //Access Multi-Dimensional Arrays
        var myArray = [[1,2,3], [4,5,6],[7,8,9], [[10,11,12], 13, 14]];
        var myData = myArray[2][1];
        console.log(myData)

        //Manipulate arrays with push() 
        var ourArray = ["Black", "J", "cat"];
        ourArray.push(["happy", "joy"]);
        console.log(ourArray) 

         //Manipulate arrays with pop()
        var ourArray = [1,2,3];
        var removedFromOurArray =ourArray.pop();
        console.log(ourArray) 

        //Use console.table() to log key:value pairs to the console instead of console.log()
        let man ={
            Name: "Andre",
            Age: 32,
            Sex: "Male",
            Location: "Sea",
            Occupation: "Developer",
        };
        console.table(man);

        //Manipulate arrays with shift()
        var ourArray = [1,2,3];
        var removedFromOurArray =ourArray.shift();
        console.log(ourArray) 

        //Manipulate arrays with unshift()
        var ourArray = ["Street", "J", "Cat"];
        ourArray.shift();
        ourArray.unshift("Happy");
        console.log(ourArray)

        //Shop list !!(i'm using table and not log)!! 
        var myList = [["cereal", 3], ["milk",2], ["bananas", 3],["juice",2],["eggs",12]];
        console.table(myList);

        //Function

        //Write reusable code with functions 
        function ourReusableFunction() {
            console.log("Hey World");
        }
        ourReusableFunction();
        ourReusableFunction();
        ourReusableFunction();

       //Passing values to functions with arguments 
        function ourFunctionWithArgs(a, b) {
        console.log(a - b);
        }
        ourFunctionWithArgs(10, 5);
        


        









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

