////////////////// 1 /////////////////////////////
// Correct the syntax error 
//  [ 1,7  9  45, ]                             [1,7,9,45]

//  ["Str" "alex","moh"                         ["Str","alex","moh"]

//  'the','fox' 'over' lazy, 'dog',  ]          ['the','fox','over','lazy','dog']


////////////////// 2 ///////////////////////////////
// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]
// "Banana"         => 1
// "Tomato"         => 0


///////////////// 3 ///////////////////////////////
let favFood=['Mashawy','Mansaf','Saggeh','Burger','Shawarma'];
let favSport=['Football','Basktball','Tennis'];
let favMovie=['GodFather','Trainingday','Intersteller','fast & ferouis'];




//////////////// 4 ////////////////////////////////

// Create a function called firstOfArray
// that take an array as a parameter
// and return the first element in an array
// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"

function firstOfArray(arr){
    return arr[0];
}


//////////////// 5 /////////////////////////

// Create a function called lastOfArray
// that take an array as a parameter
// and return the first element in an array
// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"

function lastOfArray(arr){
    return arr[arr.length-1];
}


console.log("######################### 6 ######################");
//////////////// 6 //////////////////////////
// Using console make this array to be like this one (push, unshift, shift, pop)
// var array = [0,5,7,9]
// => [1,3,4,6,8,9,10]

// push     add one or more elemnts At the end
// pop      remove last elemnt and retrun it
// unshift  add one or more elemnt At the begin
// shift    remove first elemnt and retrun it

var array=[0,5,7,9];

console.log(array.shift());
console.log(array.shift());
console.log(array.shift());
console.log(array.push(10));
console.log(array.unshift(1,3,4,6,8));
console.log(array);



console.log("######################### 7 ######################");

//////////////////// 7 ///////////////////////
// Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
// var array2 = [5,9,-7,3.5]
var array2 = [5,9,-7,3.5];
console.log(array2.push(1)); // retrun the len of array after push
console.log(array2);
console.log(array2.unshift(4,5)); // retrun the len of array after unshift
console.log(array2);
console.log(array2.shift()); // retrun the element that removed from begin 
console.log(array2);
console.log(array2.pop());  // retrun the element thet removed from last
console.log(array2);

console.log("######################### 8 ######################");
/////////////////// 8 //////////////////////
// Create a function called middleOfArray
// that take an array as a parameter
// and return the middle element in an array if it is have an odd elemnets
// and return the two middle elemnt in an array if it is have an even elemnets
// Ex: middleOfArray([1,4,5]) => 4
// Ex: middleOfArray(["t","u","g","x"]) =>"u and g"

function middleOfArray(arr){
    if(arr.length%2==1)
    return arr[parseInt((arr.length/2))];
    return [ arr[(arr.length/2)-1],arr[(arr.length/2)] ];
}
console.log(middleOfArray(["t","u","g","x"]));


console.log("######################### 9 ######################");
/////////////////// 9 //////////////////////
// Using assignment operator (=)
// make the animals array have these animals
// var animals = ['cat', 'ele', 'bird']
// animals; => ['zebra', 'elephant']
// ** hint: animals[0]=something
// var nums= [1,2,3,8,9]
// nums => [5,-22,3.5,44,98,44]

var animals = ['cat', 'ele', 'bird'];
animals[0]='zebra';
animals[1]='elephant';
animals.length=2;
console.log(animals);


console.log("######################### 10 ######################");
/////////////////// 10 //////////////////////
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index

// var nums= [1,2,3,8,9]
// Ex: indexOfArray(nums,3) => 8
// Ex: indexOfArray(nums,1) => 2
// Ex: indexOfArray(nums,4) => 9

function indexOfArray(arr,index){
    return arr[index];
}

var nums= [1,2,3,8,9];
console.log(indexOfArray(nums,1));


console.log("######################### 11 ######################");
/////////////////// 11 //////////////////////
// Create a function called arrayExceptLast
// that accept an array
// and return the entire array except the last elemnt
// ** hint: search abou the function that will cut the array on MDN
// var nums= [1,2,3,8,9]
// Ex: arrayExceptLast(nums) =>  [1,2,3,8]

function arrayExceptLast(arr){
    arr.length--;
    return arr;
}

var nums= [1,2,3,8,9];
console.log(arrayExceptLast(nums));


console.log("######################### 12 ######################");
/////////////////// 12 //////////////////////
// Create a function called addToEnd
// that accept an array and value
// and return the entire array with add this value to the end of this array

// var nums= [1,2,3,8,9]
// Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

function addToEnd(arr,val){
    arr[arr.length-1]=val;
    return arr;
}
var nums= [1,2,3,8,9];
console.log(addToEnd(nums,11111111));


console.log("######################### 13 ######################");
/////////////////// 13 //////////////////////
// Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

// var nums= [1,2,3,8,9]
// Ex: sumArray(nums) => 23

function sumArray1(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
function sumArray2(arr){
    let sum=0;
    let i=0;
    while(arr.length>i){
        sum+=arr[i];
        i++;
    }
    return sum;
}
var nums= [1,2,3,8,9];
console.log(sumArray1(nums)); 

console.log(sumArray2(nums));


console.log("######################### 14 ######################");
/////////////////// 14 //////////////////////
// Create a function called minInArray
// that accept an array
// and return the minimum value inside this array

// var nums= [1,2,3,8,9]
// Ex: minInArray(nums) => 1

function minInArray1(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min) min=arr[i];
    }
    return min;
}
function minInArray2(arr){
    let min=arr[0];
    let i=1;
    while(arr.length>i){
        if(arr[i]<min) min=arr[i];
        i++;
    }
    return min;
}
var nums= [1,2,3,8,9];
console.log(minInArray1(nums));
console.log(minInArray2(nums));


console.log("######################### 15 ######################");
/////////////////// 15 //////////////////////
// Create a function called removeFromArray
// that accept an array and elemnt to remove
// and return the array after remove this elemnt from it
// var nums= [1,2,3,8,9]
// Ex: minInArray(nums,8) => [1,2,3,9]

function removeFromArray1(arr,ele){
    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==ele){
            index=i;
            break;
        } 
    }   
    
    arr.splice(index,1);
    return arr;
}


function removeFromArray2(arr,ele){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==ele){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    arr.length--;
    return arr;
}

function removeFromArray3(arr,ele){
    let i=0;
    while(arr.length-1>i){
        if(arr[i]==ele){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
        i++;
    }
    arr.length--;
    return arr;
}
var nums= [1,2,3,8,9];
console.log(removeFromArray1(nums,2));



console.log("######################### 16 ######################");
/////////////////// 16 //////////////////////
// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts
// var nums= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]


function oddArray1(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

function oddArray2(arr){
    let newArr=[];
    let i=0;
    while (arr.length>i){
        if(arr[i]%2==1){
            newArr.push(arr[i]);
        }
        i++;
    }
    return newArr;
}
var nums= [1,2,3,8,9];
console.log(oddArray1(nums));
console.log(oddArray2(nums));




console.log("######################### 17 ######################");
/////////////////// 17 //////////////////////
// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6

// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6

function aveArray1(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
function aveArray2(arr){
    let sum=0;
    let i=0;
    while(arr.length>i){
        sum+=arr[i];
        i++;
    }
    return sum/arr.length;
}
var nums= [1,2,3,8,9,77];
console.log(aveArray1(nums));
console.log(aveArray2(nums));


console.log("######################### 18 ######################");
/////////////////// 18 //////////////////////
// Create a function called shorterInArray
// that accept an array of strings
// and return the shortest string inside this array (first)
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: shorterInArray(strings) => "alex"

function shorterInArray1(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i].length<min.length) min=arr[i];
    }
    return min;
}
function shorterInArray2(arr){
    let min=arr[0];
    let i=1;
    while(arr.length>i){
        if(arr[i].length<min.length) min=arr[i];
        i++;
    }
    return min;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(shorterInArray1(strings));
console.log(shorterInArray2(strings));


console.log("######################### 19 ######################");
/////////////////// 19 //////////////////////
// Create a function called repeatChar
// that accept a string and char
// and return the times that this char repeat inside this string
// var string= "alex mercer madrasa rashed2 emad hala"
// Ex: repeatChar(string,"a") => 6
// Ex: repeatChar(string,"z") => 0

function repeatChar1(str,char){
    let sum=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==char) sum++;
    }
    return sum;
}
function repeatChar2(str,char){
    let sum=0;
    let i=0;
    while(str.length>i){
        if(str[i]==char) sum++;
        i++;
    }
    return sum;
}
var string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar1(string,"z"));
console.log(repeatChar2(string,"z"));


console.log("######################### 20 ######################");
/////////////////// 20 //////////////////////
// Create a function called evenIndexOddLength
// that accept an array of strings
// and return a new array that have the string with odd length in even index
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: evenIndexOddLength(strings) => ["madrasa"]

function evenIndexOddLength1(str){
    let newArr=[];
    for(let i=0;i<str.length;i+=2){
        if(str[i].length%2==1) newArr.push(str[i]);
    }
    return newArr;
}
function evenIndexOddLength2(str){
    let newArr=[];
    let i=0;
    while(str.length>i){
        if(str[i].length%2==1){
            newArr.push(str[i]);
        }
        i+=2;
    }
    return newArr;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(evenIndexOddLength1(strings));
console.log(evenIndexOddLength2(strings));


console.log("######################### 21 ######################");
/////////////////// 21 //////////////////////
// Create a function called powerElementIndex
// that accept an array of number
// and return a new array that have the elemnt power by the index of it self
// var nums= [44, 5, 4, 3, 2, 10]
// Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

function powerElementIndex1(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(Math.pow(arr[i],i));
    }
    return newArr;
}
function powerElementIndex2(arr){
    let newArr=[];
    let i=0;
    while(arr.length>i){
        newArr.push(Math.pow(arr[i],i));
        i++;
    }
    return newArr;
}
var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex1(nums));
console.log(powerElementIndex2(nums));

console.log("######################### 22 ######################");
/////////////////// 22 //////////////////////
// Create a function called evenNumberEvenIndex
// that accept an array of nums
// and return a new array that have the even number in even index
// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// Ex: evenNumberEvenIndex(nums) => [2,8,34]

function evenNumberEvenIndex1(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i+=2){
        if(arr[i]%2==0) newArr.push(arr[i]);
    }
    return newArr;
}
function evenNumberEvenIndex2(arr){
    let newArr=[];
    let i=0;
    while(arr.length>i){
        if(arr[i]%2==0) newArr.push(arr[i]);
        i+=2;
    }
    return newArr;
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex1(nums));
console.log(evenNumberEvenIndex2(nums));