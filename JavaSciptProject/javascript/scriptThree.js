///////////////     1   /////////////////
let month=Number(prompt("Please enter your birthday month"));

switch(month){
    case 1: console.log("January");break;
    case 2: console.log("February");break;
    case 3: console.log("March");break;
    case 4: console.log("April");break;
    case 5: console.log("May");break;
    case 6: console.log("June");break;
    case 7: console.log("July");break;
    case 8: console.log("August");break;
    case 9: console.log("September");break;
    case 10: console.log("October");break;
    case 11: console.log("November");break;
    case 12: console.log("December");break;
    default: console.log("Pleas enter a valid number");break;
}

////////////////////////    2   ///////////////////////////

let sum=1;
for(let i=1;i<=4;i++){
    let x="";
    for(let k=1;k<=i;k++){
        x+=sum+" "; 
        sum++;
        if(k==i){
            console.log(x);
            break;
        }
    }
}


/////////////   3  ////////////////////  

for(let i=1;i<=1000;i++){
    if(i%13==0){
        console.log(i);
    }
}


////////////////// 4 /////////////////////

function multiplication2(x1,x2){
    return x1*x2;
}
console.log(multiplication2(2,4));


////////////////    5   ///////////////////

function area(base,height){
    return 1/2*base*height;
}
console.log(area(10,7));


//////////////////////  6   /////////////////////


function isPandigital(s1) {
    let s = String(s1);
    let digits = new Set(s);
    for (let i = 0; i <= 9; i++) {
        if (!digits.has(String(i))) {
            return false;
        }
    }
    return true;
}

////////////////////    7   /////////////////////////

let drink=String(prompt("Pleas Enter your favourite drink "));

switch(drink){
    case "tea": console.log("The price of a tea drink is 20 dollars");break;
    case "coffee": console.log("The price of a coffee drink is 30 dollars");break;
    case "nesscafe": console.log("The price of a nesscafe drink is 24 dollars");break;
    default : console.log("Pleas enter a valid drink");break;
}