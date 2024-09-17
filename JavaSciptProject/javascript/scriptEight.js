/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/

//////////////// 1 ///////////////////////
console.log("######### 1 #######");
function doubleNumbers(...arr){
    // your code here
    return arr.map(num => num*2);
}
console.log(doubleNumbers(2,5,100));



/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/
//////////////// 2 ///////////////////////
console.log("######### 2 #######");
function stringItUp(arr){
    return arr.map((num => String(num) ));
}
console.log(stringItUp([2,5,100]));



/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]     
*/

//////////////// 3 ///////////////////////
console.log("######### 3 #######");

function capitalizeNames(arr){
    arr.map((num,i) => {
        arr[i]=(num[0].toUpperCase() + num.slice(1).toLowerCase());
    })
    return arr;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/

//////////////// 4 ///////////////////////
console.log("######### 4 #######");


    function namesOnly(arr){
        return  arr.map(num => num.name );
    }
    console.log(namesOnly([
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kayne West",
           age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }
        ])); 


//////////////// 5 ///////////////////////
console.log("######### 5 #######");

function makeStrings(arr){
    arr.map(num => {if(num.age>20) console.log(`${num.name} can go to The Matrix`);
                    else{console.log(`${num.name} is under age!!`); } })
}
console.log(makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ]));  



//////////////// 6 ///////////////////////
console.log("######### 6 #######");

function readyToPutInTheDOM(arr){
    return arr.map(num => { return `<h1>${num.name}</h1><h2>${num.age}</h2>`});
}
console.log(readyToPutInTheDOM([
       {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
          name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ])); 




//////////////// 7 ///////////////////////
console.log("######### 7 #######");

function doubleValues11(arr){    
    let newarr=arr.map(num => num*2);
    return newarr;

}
let sss1=[1,2,3];
console.log(doubleValues11(sss1));


//////////////// 8 ///////////////////////
console.log("######### 8 #######");
function valTimesIndex(arr){
    let newarr=arr.map((num,i) => { return num*i  });
    return newarr;
}
let ss2=[1,2,3];
console.log(valTimesIndex(ss2));


//////////////// 9 ///////////////////////
console.log("######### 9 #######");
function extractKey(arr, key){
    let newarr=arr.map(num => num[key] );
    return newarr;
}
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));

//////////////// 10 ///////////////////////
console.log("######### 10 #######");

/*
  * Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    let newarr=arr.map((num) => {
        return [num.first +" "+ num.last];
    });
    return newarr;
}
console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));
