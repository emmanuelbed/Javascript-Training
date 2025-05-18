/** Currency Converter
 * 
 * Turn the elements in an array from USD to AUD
 * 
 * USD to AUD formular:
 * AUD = USD x 1.5
 * 
 * @example
 * [10, 20, 30, 40] -> [15, 30, 45, 60]
 * 
 * 
 */

let usd = [10, 20, 30, 40]

let aud = usd.map((element) => {
    return element * 1.5
})


console.log(aud);

