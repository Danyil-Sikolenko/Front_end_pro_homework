let arr = [0,1,2,3,4,5,6,7,8,9,10,];
let newArr
console.log(arr)

function arrFunction () {
     newArr = arr.filter(arr => arr % 2 === 0);
    return console.log(newArr)
} 
arrFunction();
console.log(newArr);