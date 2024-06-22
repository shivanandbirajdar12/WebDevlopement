var myName="Siva";
console.log(myName);
console.log(typeof myName);  // String

var myAge=23;
console.log(myAge);
console.log(typeof myAge);  // Number

var myContact;
console.log(typeof myContact); // Undefined

var myValue=null;
  console.log(myValue);
  console.log(typeof myValue); //object

var isRaining=true;
console.log(isRaining);
console.log(typeof isRaining);//boolean

var myFavnumber="10";
console.log(typeof +myFavnumber);// you can add + symbol prefix to varaible name to 
var newNumber= Number(myFavnumber) // using Number Constructor you can convert it in to number
console.log(typeof newNumber);

var str=5;
console.log(typeof str);  // number

var newStr= String(str);
console.log(newStr, typeof newStr);
console.log(typeof (str+""));

// truthy values
//  1.non empty String  "value"
//  2.Non-zero number
//  3.Arrays and Objects even if they are non-empty
//  4.true

//falsy  values
    // 1.0
    // 2.false
    // 3.Empty string " "
    // 4.undefined
    // 5.NaN

    // how to check it is truthy value or falsy value 

    var myName="Siva";
    if (myName) {
        console.log("it is truthy value");
    }
    else
     console.log("it is falsy value");

     var myCame="";
     if (myCame) {
         console.log("it is truthy value");
     }
     else
      console.log("it is falsy value");

     if (NaN) {
         console.log("it is truthy value");
     }
     else
      console.log("it is falsy value");



    //   parseInt and parseFloat these are the function in javascript which are 
    //     used to string into whole number and floating number respectively

    var age="23";
    console.log(typeof parseInt(age));
    var weigt="45.6"
    console.log(typeof parseFloat(age), parseFloat(age));