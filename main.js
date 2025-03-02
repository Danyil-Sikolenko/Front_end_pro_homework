let MyArray = [14, 34, 56 , true , 'false' , 56 , '56', 50, ];
console.log(MyArray);

function MyArrayCounter (array) {
    let sum = 0
    let count = 0
    let result;
    for (let i = 0; i < MyArray.length; i++) {
        if(typeof array[i] === 'number') {
            sum += array[i]
            count++
        }
    }

    if (count === 0) {
        result = 0;
    } else {
        result = sum / count;
    }

    return result
}

console.log(
    MyArrayCounter(MyArray) 
);
