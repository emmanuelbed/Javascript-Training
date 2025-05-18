/**  Write a for loop that loops through 1 to 15
 * If the number is odd, print "ASAP"
 * If the number is rven, print "Frontend"
 * If the number is divisible by 5, print "ASAP Frontend"
 * 
 * 
 * @example
 * 1 - "ASAP"
 * 2 - "Frontend"
 * 3 - "ASAP"
 * 4 - "Fronend"
 * 5 - "ASAP Frontend"
 * 
*/
 for (let i = 1; i <= 15; i++){
    if(i % 5 === 0){
        console.log(`${i} - ASAP Frontend`);
    }
    else if(i % 2 === 0){
        console.log(`${i} - Frontend`);
    }
    else{
        console.log(`${i} - ASAP`);
    }
 }
