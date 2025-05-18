/** Currency Converter
 * 
 * Turn the elements in an array from USD to AUD
 * without using .map method
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

let aud = []

for (i = 0; i < usd.length; i++){
    aud.push(usd[i] * 1.5 );
}

console.log(aud);

