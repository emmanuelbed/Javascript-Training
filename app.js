/** Night Club Exercise
 * 
 * Filter out all the people wo are not 18 years old
 * 
 * @example
 * [18, 20, 14, 15, 21] -> [18, 20, 21]
 */



let array = [18, 20, 14, 15, 21] 

let filterredArray = array.filter((element) => {
    return element >= 18
})

console.log(filterredArray)