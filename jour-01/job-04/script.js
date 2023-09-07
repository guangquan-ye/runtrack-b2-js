function mySumArray(array){
    let sum = 0;
    
    for (const number of array){
      sum +=  array[number] + array[number];
        console.log(sum);
    }
}
console.log(mySumArray([3, 3, 3]));