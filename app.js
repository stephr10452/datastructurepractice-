//Data structure Practice will be doing this everyday new Plan 
const arr = [1, 2,3, 'Vishwas']

arr.push(4)// add to end of the array 
arr.unshift(0) // add to the front of the array 
arr.pop() // delete from the end of the array 
arr.shift() // delete from the front of the array 




for(const item of arr ){
    console.log(item)
}

// looping through and array 

for(let i = 0; i < arr.length; i++){
    console.log(arr)
}
// INbuilt Loop Methos 

const numbers = [1,2,3,4,5];

// newNums = numbers.map((item,index, array)=>{
//     return item + 5;
// })

// filter in javascript
// const newNums = numbers.filter((items, index, array)=>{
//     return items > 3;
// })
// some is like filter but it only returns true or false 


//reduce 
// const sum = numbers.reduce((prev, item)=>{
//     return prev + item;
// }, 0);
// console.log(sum);

//Spread and Rest Operators 

const nums = [1,2,3,];

const nums2 = [4,5,6,7];

// const finalNums = [...nums, ...nums2]

// function sum(...numbers){
//     return numbers
// }

// console.log(sum(nums,nums2, 5, 'hello'));

//concat 
// 1

const newArray = ['apples' , 'bananas', 'cherry']

//slice 
// const newAr = newArray.slice(0,2);

// console.log(newAr)

//splice 

// const newArr = newArray.splice(1,2,'orange');
// console.log(newArr)

// const flatEx = [1,[2,3],[[4,5],6]]

// const flattenedArray = flatEx.flat(1)
// console.log(flattenedArray)

// const unsorted = [ 5,2,10,7,3,1];

// unsorted.sort((a,b)=>a-b)

// console.log(unsorted)