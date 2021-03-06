//Functions 


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






// Writing functions:

// Q1. Function that recieves an array and returns the sum of the elements squeres.  

// Q1. Program 01.
function pow_sum(x){
        let i = 0; let j = 0;
        while (i < x.length){
        j += x[i] * x[i];  
        i++;
        }
    return j;
}

let arr1 = [1,2,3,4,10];
console.log(pow_sum(arr1));


// Q1. Program 02.
function sum(x){
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += x[i]*x[i];
    }
    return sum; 
}

var a = [1,2,3,4]; 
console.log(sum(a));




// Q2. Function that recieves 2 arrays and returns a 3rd arrays with the sum of each element location of the 2 arrays.

// Q2. Program 01.
function arr_sum(a,b){

    let k = 0; 
    let i = 0;
    let c = [];

    if (a.length > b.length){
        let diff = a.length - b.length; 
        while ( k < a.length){
            b.push(0);
            c[i] = a[i] + b[i];
            k++; 
            i++;
        };
    }

    else {
        let diff = b.length - a.length;
        while (k < b.length){
            a.push(0);
            c[i] = a[i] + b[i];
            k++;
            i++;
        };
    };
    return console.log(a, b, c);
};

var a = [1,2,3,4]; 
var b = [1,2,3,4,5,6];
arr_sum(a,b);


// Q2. Program 02. 
function arr_sum2(a,b){

    let k = 0; 
    let i = 0;
    let c = [];

    if (a.length > b.length){
        let diff = a.length - b.length; 
        while( i < a.length){
            while (k < diff){
                    b.push(0);
                    k++;
                    };
            c[i] = a[i] + b[i];
            i++;
        };
    }

    else {
        let diff = b.length - a.length;
        while(i < b.length){
            while (k < diff) {
                a.push(0);
                k++;
                };
            c[i] = a[i] + b[i];
            i++;
        };
    };
    return console.log(a, b, c);
};

let x = [1,2,3,4];
let y = [1,2,3,2,10];
console.log(arr_sum(x,y));


// Q2. Program 03.
function sumarrays(a,b){
    var c = [];
    var i = 0; 

    if (a.length > b.length){
        var diff = a.length - b.length; 
        while ( i < diff){ 
            b.push(0);
            i++;
        }
        for (var j = 0; j < a.length; j++) {
            c[j] = a[j] + b[j];
        }
    } 

    else {
        var diff = b.length - a.length;
        while ( i < diff){
            a.push(0); 
            i++;
        }
        for (var j = 0; j < b.length; j++){
            c[j] = a[j] + b[j]
        }
    }

    return c;
}
var a = [1,2,3,4]; 
var b = [1,2,3,4,5,6];  
console.log(sumarrays(a,b));



// Q3. Write a function that recieves an array and calculate the sume of all even numbers in the array. 
function sumeven(a){
    var z = 0;
    var sum = 0;
    for (z = 0; z < a.length; ++z){
        if (a[z] % 2 == 0){
            sum += a[z];
        }   
    }
return sum;
}

var b = [1,2,3,4,5,6];
console.log(sumeven(b));



// Q4. Write a function that recives an array and returns it after each element is equal to itself + the sum of the previous elements

// Q4. Program 01.
function sumPrev(x){
    for (var i = 1; i < x.length; i++){
        x[i] = x[i] + x[i-1];
    }
    return x;
}

var b = [1,2,3,4,5,6];
console.log(sumPrev(b));


// Q4. Program 02.
function array_sum(x){
    for (var i = 1; i < x.length; i++){
        x[i] = x[i] +x[i-1];
    }
    return x;
}

var h = [1,2,3,4,5,6]
console.log(array_sum(h));



// Q5. Write a function that rotate an array to the right: [1,2,3,4] --> [4,1,2,3]

// Q5. Program 01.
function rotation(a){

    var b = [];
    for (var i = 1; i < a.length; i++){
        b[i] = a[i-1];
        b[0] = a[i]
    }
    return b;
}
var c = [1,2,3,4,5,6,7,8];
console.log(rotation(c));


// Q5. Program 02.
function rotateright(x){
    var loc_last = x.length - 1;
    var loc_last_value = x[loc_last];
    c = [];
    
    for (var i = 1; i < x.length; i++){
        c[i] = x[i-1];
    }
    c[0] = loc_last_value;

    for ( var i = 0; i < x.length; i++){
        x[i] = c[i];
    }

    return x;
}

var b = [1,2,3,4,5,6];
console.log("rotation of array b[1,2,3,4,5,6] to the right results as " + rotateright(b));



// Q6. Write a function that rotate an array to the left: [1,2,3,4] --> [2,3,4,1]

// Q6. Program 01. 
function rotationleft(x){
    var b = [];

    var last = x.length;
    var first = x[0];

    for (var i = 0; i < x.length-1; i++){
        b[i] = x[i + 1];
    }
    b[last-1] = first;   // -1 BECAUSE last = 8 (number of elements in array) !BUT! The last element position is ACTUALLY 7!! 
    return b;
}

var c = [1,2,3,4,5,6,7,8];
console.log(rotationleft(c));


// Q6. Program 02.
function rotateleft(x){
    var last_location = x.length  - 1; 
    var first_value = x[0];

    for (i = 0; i < x.length; i++){
        x[i] = x[i + 1];
    }

    x[last_location] = first_value
    return x;
}

var d = [1,2,3,4,5,6];
console.log("rotation of array d[1,2,3,4,5,6] to the left results as " + rotateleft(d));



// Q7. Program that recieves an array and returns only the nubers which appears in it once.
function once(array){
    arr2 = [];
    for (var i = 0; i < array.length; i++){
      if (array[i] != array[i+1] && array[i] != array[i-1]){
        arr2.push(array[i])
      }    
    }
    return arr2;
    
  }

v = [1,2,2,3,4,5,5,5,6,7,7,8];
console.log(once(v));
