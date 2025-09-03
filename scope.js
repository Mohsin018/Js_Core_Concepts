//global variable
const name = 'Tom Hanks'

/**
 * we can call function scope in anywhere 
 * if we make a function inside a function the parent function makes it it's part. we can call the function anywhere inside the function. it's called function hoisting
 */

//block scope
if(data){
    const data = 58
    console.log('inside the if block', data, name)

}



//for block
for(const num of [1,2,3,4]){
    
}



//function scope or local block 
function doMath(a, b){
    console.log(a,b)
    const sum = a+ b;
    const total = sum + 10;
    function doubleIt(x){
        return x*2;
    }

    console.log('calling double It', doubleIt(450))

}


//temporal dead zone, we can't use it above.
let b = 44;