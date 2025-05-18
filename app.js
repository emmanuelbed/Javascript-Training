let array = [1, 2, 3, 4, 5]
// Changes the original values of the array based on what is returned
// NB it is a non-mutationg methd.
let newArray = array.map((element) => {
    console.log(element);
    return null
})

console.log(newArray);
