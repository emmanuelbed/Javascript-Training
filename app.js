/** Night Club Exercise
 * 
 * Filter out all the people wo are not 18 years old
 * 
 * @example
 * [18, 20, 14, 15, 21] -> [18, 20, 21]
 */



let people = [18, 20, 14, 15, 21] 

let allowedPeople = []

for(i = 0; i< people.length; i++){
    if (people[i] >= 18){
        allowedPeople.push(people[i])
    }
}

console.log(allowedPeople);


