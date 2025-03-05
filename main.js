function createSum () {
    let start = 0;
    return function counter (item) {
        start += item
        return start
    }
}

let sum = createSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));