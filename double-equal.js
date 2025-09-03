//double equal converts the type automatically , he focuses on the value not on the type. It's called type coersion, it converts the type
console.log(2 == 2)
console.log(2 == '2')
console.log(2 == '12')

/**
 * if one value is string, another is number: converts string --> number then compare
 * 
 * if one is boolean and another is number. converts boolean to number true ---> 1
 * 
 * false --> 0
*/


console.log(true == 1)
console.log(false == 0)
console.log(true == '1')
console.log(false == '0')
console.log(null == undefined)
console.log(NaN == NaN)
console.log(0 === '')
console.log({} == {})
console.log([5] == [5])
console.log([] == '')

const p = [4, 5, 6, 7]
const q = p;
console.log( p==q )

console.log([5].toString())