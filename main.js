
function removeCharacters(string, arrToDelete) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (!arrToDelete.includes(string[i])) {
            result += string[i];
        }
    }
    return result;
}

console.log(
    removeCharacters('hello Worlddddddd', ['l', 'd', 'e'])
);



