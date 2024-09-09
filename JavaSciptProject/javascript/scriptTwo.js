let e1=String(prompt("Enter the opearation"));
let e2=Number(prompt("Enter the first number"));
let e3=Number(prompt("Enter the seconde number"));


if(e1=="+"){
    let sum=e2 + e3;
    console.log("the sum of " + e2 + " and " + e3 + " is " + sum);
}else if(e1=="-"){
    let sub=e2+e3;
    console.log("the sub of " + e2 + " and " + e3 + " is " + sub);
}
else if(e1=="*"){
    let multi=e2*e3;
    console.log("the multi of " + e2 + " and " + e3 + " is " + multi);
}
else if(e1=="/") { 
    let div=e2/e3;
    console.log("the div of " + e2 + " and " + e3 + " is " + div);
}


let mark=65;

if(mark<50){
    mark="fail";
}else if((mark>=50) && (mark <= 58)){
    mark="D";
}else if((mark>=60) && (mark <= 69)){
    mark="C";
}else if((mark>=70) && (mark <= 79)){
    mark="B";
}else if((mark>=80) && (mark <= 89)){
    mark="A";
}else if((mark>=90) && (mark <= 100)){
    mark="A+";
}

document.write(mark);
document.write("<br>");

const pi=Math.PI;
const anyNumber=5;

document.write(pi*anyNumber);


document.write("<br>");

let val1=Number(prompt("Enter value of X "));
let val2=Number(prompt("Enter value of Y "));

if(val1>=val2){
    document.write("Hello World");
    alert("Hello World");
    document.getElementById("pp1").innerHTML="Hello World";
}else if(val1<val2){
    document.write("Goodbye");
    alert("Goodbye");
    document.getElementById("pp2").innerHTML="Goodbye";
}

