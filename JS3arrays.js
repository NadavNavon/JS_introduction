
// Q1. Function that recieves an array and returns the sum of the elements squeres.  
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



//Q3. Write a function that recieves an array and calculate the sume of all even numbers in the array. 

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


//Q4. Write a function that recives an array and returns it after each element is equal to itself + the sum of the previous elements

function sumPrev(x){
    for (var i = 1; i < x.length; i++){
        x[i] = x[i] + x[i-1];
    }
    return x;
}
console.log(sumPrev(b));


//Q5. Write a function that rotate an array to the right: [1,2,3,4] --> [4,1,2,3]

var c = [1,2,3,4,5,6,7,8];

function rotation(a){

    var b = [];
    for (var i = 1; i < a.length; i++){
        b[i] = a[i-1];
        b[0] = a[i]
    }
    return b;
}
console.log(rotation(c));

//Q6. Write a function that rotate an array to the left: [1,2,3,4] --> [2,3,4,1]

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
console.log(rotationleft(c));

/*

###################################################################################################

*/ 


var a = [1,2,3,4]; var b = [1,2,3,4,5,6];

function sum(x){
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += x[i]*x[i];
    }
    return sum; 
}
console.log(sum(a));


function sumwhile(y){
    var sum = 0; var i = 0;
    while (i < y.length){
        sum += y[i] * y[i];
        i++;
    }
return sum;
}
console.log(sumwhile(a));



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
console.log(sumarrays(a,b));



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
console.log("rotation of array b[1,2,3,4,5,6] to the right results as " + rotateright(b));



function rotateleft(x){
    var last_location = x.length  - 1; 
    var first_value = x[0];

    for (i = 0; i < x.length; i++){
        x[i] = x[i + 1];
    }

    x[last_location] = first_value;
    return x;
}
var d = [1,2,3,4,5,6];
console.log("rotation of array d[1,2,3,4,5,6] to the left results as " + rotateleft(d));



function array_sum(x){
    for (var i = 1; i < x.length; i++){
        x[i] = x[i] +x[i-1];
    }
    return x;
}
var h = [1,2,3,4,5,6]
console.log(array_sum(h));


function unique(array){
    arr2 = [];
    for (var i = 0; i < array.length; i++){
      if (array[i] != array[i+1] && array[i] != array[i-1]){
        arr2.push(array[i])
      }    
    }
    return arr2;
    
  }
  
v = [1,2,2,3,4,5,5,5,6,7,7,8]
console.log(unique(v));