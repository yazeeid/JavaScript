/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/

//////////////// 1 ///////////////////////
console.log("######### 1 #######");

let arr=[1,2,3];

function doubleValues(arr){
    let newarr=[];
    arr.forEach(function (current,i){
        newarr[i]=current+current;
    });
    return newarr;
}
console.log(doubleValues(arr));

/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/

//////////////// 2 ///////////////////////
console.log("######### 2 #######");

function onlyEvenValues(arr){
    //Your Code Here
    let newarr=[];
    arr.forEach(function (element){
        if(element%2===0){
            newarr.push(element);
        }
    })
    return newarr;
}
console.log(onlyEvenValues(arr));

/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
//////////////// 3 ///////////////////////
console.log("######### 3 #######");

function showFirstAndLast(arr){
    let newarr=[];
    arr.forEach(function(element,i,ar){
        if(i==0 || i==ar.length-1){
            newarr.push(element);
        }
    })
    return newarr;
}
str=["ct", "mt", "tm", "uy"];
console.log(showFirstAndLast(str));


/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
//////////////// 4 ///////////////////////
console.log("######### 4 #######");

function addKeyAndValue(arr,key,value){
    let newarr=[];
    arr.forEach(function(element,i,ar){
        let newobj={...element};
        newobj[key]=value;
        newarr.push(newobj);
    })
    return newarr;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));


/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/
//////////////// 5 ///////////////////////
console.log("######### 5 #######");

function vowelCount(str){
    str=str.toLowerCase();
    str=str.split('');
    newobj={};
    // Elie "e","l","i","e"
    str.forEach(function(element,i,st){
        switch(element){
            case 'a': if(! newobj.hasOwnProperty([element]))
                { newobj[st[i]]=1;} else {newobj[st[i]]++;} break;

            case 'e': if(! newobj.hasOwnProperty([element]))
                { newobj[st[i]]=1;} else {newobj[st[i]]++;} break;

            case 'i': if(! newobj.hasOwnProperty([element]))
                { newobj[st[i]]=1;} else {newobj[st[i]]++;} break;

            case 'o': if(! newobj.hasOwnProperty([element]))
                { newobj[st[i]]=1;} else {newobj[st[i]]++;} break;

            case 'u': if(! newobj.hasOwnProperty([element]))
                { newobj[st[i]]=1;} else {newobj[st[i]]++;} break;
        }
    })
    return newobj;
}

console.log(vowelCount('Elie'));

////

