////////////////    1   //////////////
function tellFortune(s1,s2,s3,s4){
    console.log("You will be " + s1 + " in " + s2 + ", and married to " + s3 + " with " + s4 + " kids." );
}

//////////  2   //////////////
function calculateDogAge(s1){
    console.log("Your doggie is " +  (s1*7) + " years old in dog years!")
}

///////////    3   ///////////
function calculateSupply(s1,s2){
    let x1=100-s1;
    console.log("You will need " + (((x1*12*30))*s2) + " to last you until the ripe old age of 100")
}

////////////    4   ////////////////
function greet(name){
    return "Hello " + name ;
}

/////////// 5   ////////////////
/*
5
what is the error:
function double(cat) {
  return 2 * x;                     ////////  x not defined
} 

function double(7) {
  return 2 * 7;                    ///////// named parameters only 
}

function double('7') {
  return 2 * 'x';                 ////// should use named parameters only && trying to multi a string with a number and x is not defiend
}
*/


//////////////////  6   ///////////////////


function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3 (x) {
  return 2 * x;
}


////////////////    7   /////////////

function cube(s1){
    return s1*s1*s1;
}

/////////////////   8   ////////////////

function multiply(s1,s2){
    return s1*s2;
}

//////////////  9   ////////////////
function canIGetADrivingLicense(s1){
    if(s1 >= 20){ 
        return "yes you can";
    }
    return "please come back after " + (20 - s1) + " years to get one";
}

/////////////// 10  ////////////////
function sameLength(s1,s2){
    if(s1.length==s2.length){
        return "true";
    }
    return "false";
}

//////////////// 11 ////////////////
function largerNubmer(s1,s2){
    if(s1>s2){
        return s1;
    }
    return s2;
}

//////////////// 12 ////////////////
function smallerNubmer(s1,s2,s3){
    return Math.min(s1,s2,s3);
}

/////////////// 13 ///////////////////
function shorterString(s1,s2,s3,s4,s5){
    let x=Math.min(s1.length,s2.length,s3.length,s4.length,s5.length)

    switch (x){
        case s1.length: return s1;
        case s2.length: return s2;
        case s3.length: return s3;
        case s4.length: return s4;
        case s5.length: return s5;
    }
}

////////////////     14     ////////////////
function longerString(s1,s2,s3,s4){
    let x=Math.max(s1.length,s2.length,s3.length,s4.length)

    switch (x){
        case s1.length: return s1;
        case s2.length: return s2;
        case s3.length: return s3;
        case s4.length: return s4;
    }
}

/////////////////// 15  ///////////////////////
function isEven(s){
    return s%2==0;
}

/////////////////// 16  ///////////////////////
function isOdd(s){
    return s%2==1;
}

/////////////////// 17  ///////////////////////
function positive(s){
    if($s<0){
        return s*-1;
    }
    return s;
}

/////////////////// 18  ///////////////////////
function fullName(s1,s2){
    return s1+" "+s2;
}

/////////////////// 19 //////////////////
function average(s1,s2,s3,s4,s5) {
    return (s1+s2+s3+s4+s5)/5;
}

/////////////////// 20 //////////////////
function randomNumber() {
    return Math.random();
}

/////////////////// 21 //////////////////
function randomBetweenNumbers(s1,s2) {
    return (Math.random()*Math.max(s1,s2)) + Math.min(s1,s2);
}

/////////////////// 22 //////////////////
function scoreInUniversty(s) {
        if(s>=95 && s<=100){
            return "A";
        }
        else if(s>=95 && s<=94){
            return "B";
        }
        
        else if(s>=70 && s<=84){
            return "C";
        }
        
        else if(s>=50 && s<=69){
            return "D";
        }
        else if(s>=0 && s<=49){
            return "F";
        }else{
            return "Please enter a vaild num";
        }
}

//////////////////// 23 && 24   ///////////// 
var x=0;

function counter(){
    return ++x;
}


function resetCounter(){
    let z=x;
    x=0;
    return z + " and the counter reset now"  ;
}



