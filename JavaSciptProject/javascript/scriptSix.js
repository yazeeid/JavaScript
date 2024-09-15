///////////////////// 1 //////////////////////
console.log("############## 1 #############");
let str1="Hello";
let str2="World";
console.log(str1.concat(" ").concat(str2));


///////////////////// 2 //////////////////////
console.log("############## 2 #############");
let js1="JavaScript";
console.log(js1.length);




///////////////////// 3 //////////////////////
console.log("############## 3 #############");
let pro="Programming";
console.log(pro[0]);





///////////////////// 4 //////////////////////
console.log("############## 4 #############");
let cod="coding is fun";
console.log(cod.substring(0,4));


///////////////////// 5 //////////////////////
console.log("############## 5 #############");
let cat="cat";
console.log(cat.replace('a','e'));


///////////////////// 6 //////////////////////
console.log("############## 6 #############");
let JavaScript11="javascript";
console.log(JavaScript11.toUpperCase());


///////////////////// 7 //////////////////////
console.log("############## 7 #############");
let all1="apple,banana,orange";
console.log(all1.split(","));

///////////////////// 8 //////////////////////
console.log("############## 8 #############");
let arr1=["hello","world"];
console.log(arr1.join(" "));



///////////////////// 9 //////////////////////
console.log("############## 9 #############");
let ss1=" hello wolrd ";
console.log(ss1.trim());


///////////////////// 10 //////////////////////
console.log("############## 10 #############");
let search="hello world";
console.log(search.includes('world'));



///////////////////// 11 //////////////////////
console.log("############## 11 #############");
let ss2="hello";
console.log(ss2.split("").reverse().join(""));





///////////////////// 12 //////////////////////
console.log("############## 12 #############");
let sss3="elephant";
console.log((sss3.split('e').length)-1);




///////////////////// 13 //////////////////////
console.log("############## 13 #############");
let palindrome="racecar";
let reversed1=palindrome.split("").reverse().join("");
console.log(reversed1 === palindrome);


///////////////////// 14 //////////////////////
console.log("############## 14 #############");
let h122="hello world";
function splittt(a){
    return a.charAt(0).toUpperCase() + a.slice(1);
}
let cap1=h122.split(" ");
console.log(splittt(cap1[0]) +" "+splittt(cap1[1]) );


///////////////////// 15 //////////////////////
console.log("############## 15 #############");
let num=1234.5678;
console.log((Math.round(num * 100) / 100).toFixed(2));


///////////////////// 16 //////////////////////
console.log("############## 16 #############");
let text ="There are 3 apples and 2 oranges";
let arr11=text.split(" ");
let newarr11=[];
for(let i=0; i<arr11.length;i++){
    if(! isNaN(arr11[i])){
        newarr11.push(arr11[i]);
    }
    
}
console.log(newarr11);


///////////////////// 17 //////////////////////
console.log("############## 17 #############");
let email="example@email.com";
let isvalid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log(isvalid);


///////////////////// 18 //////////////////////
console.log("############## 18 #############");
let sda="This is a bad word";
console.log(sda.replaceAll('bad','good'))


///////////////////// 19 //////////////////////
console.log("############## 19 #############");
let xyz1="aabbc";
console.log([... new Set(xyz1)].join(''));


///////////////////// 20 //////////////////////
console.log("############## 20 #############");

let sort1="hello";
console.log(sort1.split('').sort().join(''));

///////////////////// 21 //////////////////////
console.log("############## 21 #############");

function isana (arr1,arr2){
    if(arr1.length != arr2.length) return false;

    arr1.sort();
    arr2.sort();

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]) return false;
    }
    return true;
}

let v1="listen";
let v2="silent";
console.log(isana(v1.split(''),v2.split('')));

///////////////////// 22 //////////////////////
console.log("############## 22 #############");

let fox="The quick brown fox";
let sp1=fox.split(' ');
fox=sp1.reverse().join(' ');
console.log(fox);

///////////////////// 23 //////////////////////
console.log("############## 23 #############");

let largest="Web development is fascinating";
let lar1=largest.split(" ");
let max=lar1[0];
for(let i=1;i<lar1.length;i++){
    if(lar1[i].length>max.length) max=lar1[i];
}
console.log(max);

///////////////////// 24 //////////////////////
console.log("############## 24 #############");
let strrr1="A man, a plan, a canal, Panama!";
strrr1=strrr1.trim();
strrr1=strrr1.replaceAll(" ","");
strrr1=strrr1.replaceAll("!","");
strrr1=strrr1.replaceAll(",","");
strrr1=strrr1.toLowerCase();
function v(str){
    let j=strrr1.length-1;
    for(let i=0;i<str.length;i++){
        if(str[i]!=str[j]) return false;
        j--;
    }
    return true;
}
console.log(v(strrr1));

///////////////////// 25 //////////////////////
console.log("############## 25 #############");

function associative(str){
    let newArr=new Object();
    for(let i=0;i<str.length;i++){
        if(! newArr.hasOwnProperty([str[i]])){
            newArr[str[i]]=1;
        }else{
            newArr[str[i]]++;
        }
    }

    console.log(newArr);
} 
associative("mississippi");

///////////////////// 26 //////////////////////
console.log("############## 26 #############");

function zezo(str){
    for(let i=0;i<str.length;i++){
        if(str[i]==='a'){
            str=str.replace('a',1);
        }else if(str[i]==='e'){
            str=str.replace('e',2);
        } 
        else if(str[i]==='i'){
            str=str.replace('i',3);
        }else if(str[i]==='o'){
            str=str.replace('o',4);
        }else if(str[i]===''){
            str=str.replace('u',5);
        }
    }
    console.log(str);
}
zezo("Hello World");