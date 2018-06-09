//Intro: Basic if, else, while loop, and function declaration. 


//If,else conditions
//My first if/else program in JS.
console.log('\nMy first if/else program in JS.\nx is equal to 10, y is equal to 15.');
let x = 10;
let y = 15;

if (y > x){
    console.log(`${y} is greater than ${x}.\n`);
}
else{
    console.log(`${x} is greater than ${y}.\n`);
}


//while loops
let i = 0; //i itereation example
while (i < 10){
    console.log(i);
    i++;
}
console.log('\n');

let arr1 = [1,2,3,4,5]; //arr1 example
console.log(arr1);
let j = 0;
while (j < arr1.length){
    console.log(arr1[j]); 
    j++;
}


//Functions
// ID: A function that prints out personal data
function ID(name,age,location){ 
    return console.log(`Your name is ${name}, you're ${age} years old and you live in ${location}.`);
}
A = ID('Nadav', 30, 'Netanya', 'Geologist');
console.log(A);

