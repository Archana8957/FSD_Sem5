// // output method
// console.log("FSD Class");
// // input method
// // let a = prompt("Enter a number:");
// // console.log(a);

// // diffrence bewtween var and char
// // var is redeclare
// // always use let because this is  not redeclare
// reassignmnet is allow both var and let
// var a = 20;
//  var a = 30;   


//  let b = 30;
//  console.log("enter the first value:" +b);
//  b  = 70;
//  console.log("After the regestraion of b:"+b);
//  {
//     let name = "Archana";
//     console.log("name:"+name);
//     name = "XYZ";
//     console.log("name:"+name);
//     b = 60;
//  }
// //  string
// let firstName = "Archana";
// let LastName = "singh";
// let message = "Hello";
// // let outputMessage =  message + " ," + firstName + " " + LastName +

// let sum =   2-2 + "22";
// console.log(sum);
// console.log(typeof(sum));

// // implicit type   iske liye koi method ki use nhi krni pdti
// // string to number  
// let op = "22"-2;
// console.log(op + " type of op: " + typeof(op));
// let strToNum = "hey"-2;
// console.log(strToNum + typeof(strToNum));


// console.log(a,);
// var a = 30;
// console.log(message());
// function message(){
//     console.log("Hell");
// }
// console.log(a);
// {
//     var a = 50;
//     console.log(a);
// }
// console.log(a);



// let numToBool = Boolean("-22");
// console.log(numToBool);


// for loop
/*
let row = 5;

for (let i = 1; i <= row; i++) {
    let line = ""; 
    
    for (let j = 1; j <= 2*row - 1; j++) {
        if (  i+j>row && j-i < row -1) {
            line += "*"; 
        } else {
            line += " "; 
        }
    }

    console.log(line); 
}
    */
//    for in loop
let arr=[1,2,3,4,['2','3','4']];
// for(i of arr){
//     console.log(i);
//     console.log(arr.length);
// }
// console.log(arr[4][1]);

arr.forEach((i) => console.log(i))
