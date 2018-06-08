
console.log("\nJavaScript basics:\n")

//Intoduction
console.log("Introduction:\nJS has 5 datatypes:\nString, Integer, Boolean, null, and Undefined:");
//The console.log ~ print statement.
console.log("Ex. String: Hello, world!"); //String.
console.log(`Ex. String: Declareing 8/4 inside the console.log returns a string: ${8/4}`); //str 
console.log(`Ex. String: Calculating the length of "I write code." string returns a string: ${"I write code.".length}`); //string.
console.log('EX: Integer: console.log(8/4):'); console.log(8/4);
console.log("Ex. Boolean: 1 == 1 ");
console.log(1 == 1); //Boolean. 
console.log("\n\n");


//Built-in Methods
console.log("Built-in methods:\nEx.1: Does 'hey' starte with H: hey.startsWith('H)'?");
console.log('hey'.startsWith('H'));
console.log("EX.2: trim empty spaces in a string: '  Nadav  '.trim()")
console.log("   Nadav   ".trim());
console.log("\n\n")


//Using libraries:
console.log("Libreries:\nExamples from Math and Number libreries");
console.log("Math.random()*100");
console.log(Math.random()*100);              // Math
console.log("Math.floor(Math.random()*100)");
console.log(Math.floor(Math.random()*100));  // Math
console.log("Number.isInteger(30)");
console.log(Number.isInteger(30));           // Number
console.log("\n\n");


//Variables: 
console.log("Variables: \nconst, let, var and undefined");
console.log("const: variable that cannot be change: const food = broccoli ")
const food = "broccoli"; //Constant variable is a variable that cannot change: const food = "broccoli".
console.log("let: variable that can be change: here drink = 'Soda' and than drink = 'Cola'")
let drink = "Soda"; //let variable is a variable that can be reassigned.
console.log(drink);
drink = "Cola";
console.log(drink); 
console.log("Undefiend: declaring a variable without assigning any value to it.\nEx: let valueless;")
let valuesless; //Undefined varaible is the 5th Datatype in JS (togather with Strings, Numbers, Booleans and Null)
console.log(valuesless);
console.log("var: variable that can be reassigned.\nUnlike 'let', it is a global varaible.\nvar name = 'nadav', than name - 'john'")
var name = 'nadav';
console.log(name);
name = 'john';
console.log(name);



//Mathematical Assignment Operators
console.log("\n\nMathematical Assignment Operators");
console.log("+  - / *   += -= *=   ++   --\nAll following statements declared inside console.log statements:")
console.log("let x = 4\nlet y = 0\ny += x\ny++\ny *=y\ny--\ny\n\nOutput:"); 
let x = 4;
let y = 0;
console.log(y += x);
y++;
console.log(y);
console.log(y*=y);
console.log(y--); // This shows ++ or -- does not print out the new value of y if it is assigned in console.log
console.log(y);
console.log("# Notic, the y-- statment prints out 25. The value 24 is printed only in the next line.\nThat's because the current value is 25, and the assignemts occures only after\nexecution of the command.")


//String Interpolation
console.log("\n\nString Interpolation")
console.log("Created a variable: let myDog = 'Joy'");
let myDog = 'Joy';
console.log("Two ways to declare it inside console.log:\n1.'My dog name is' + my dog +'.'\n2.'my dog name is ${name}.'\nOutputs:");
console.log("My dog name is " + myDog +"." );  // The classic way to insert variables to a string. 
console.log(`my dog name is ${myDog}.`);       //Using ` `(next to the 1 bottom) and ${variable_name}, much more simple.
console.log("\n\n");