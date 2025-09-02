/**
 * undefined --> not defined 
 */

let money;
console.log(money)

function total(a, b){
    console.log('value of parameters', a, b)
    const sum = a+b
    console.log('total is', sum)
}
total()
total(2)



function total2(a, b){
    console.log('value of parameters', a, b)
    if(a === undefined || b=== undefined){
        return;
    }
    if( a && b){
        const sum = a+b;
        return sum;
    }
}

const result = total2(1)
console.log(result);



const phone = {name: 'samsu', price: 50000}
// console.log(phone.color)


const banks = ['sonali', 'rupali', 'jamuna']
console.log(banks[3])

delete banks[1]
console.log(banks[1])


////////
console.log("type of undefined", typeof undefined)


console.log('type of null', typeof null)