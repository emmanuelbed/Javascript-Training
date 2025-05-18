

let array = [20, 15, 10, 30]


// ["Apples", "Bananas", "Oranges", "Eggs", "Milk"]

let filteredArray = array.filter((element) => {
    
    if(element >= 15){
        return true
    }
    else{
        return false
    }
})



console.log(filteredArray)

