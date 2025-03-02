
function removeEvent(array, item) {
    let index = array.indexOf(item)
    if(index !== -1) {
        array.splice(index, 1);
    }
    return array


}
const MyArray = [1, 3, 4, 6, 2, 5, 7];
console.log(MyArray);

console.log(
 removeEvent(MyArray, 1 )
);