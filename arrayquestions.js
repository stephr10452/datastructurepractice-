//Ques 1 - Second Largest Number
//Given an array Arr of size N , print second largest 
// distint element from the Array 

//

function secondLargest(arr){
 
    let uniqueArr = Array.from(new Set(arr));
     
    uniqueArr.sort((a,b)=>{
        return b - a;
    })

    if(uniqueArr.length >=2){
    return uniqueArr[1]
    } else {
        return -1
    }

}
console.log(secondLargest([10,10,5]))