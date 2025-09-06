//callback
function pakhiBhai (callMeBack, patro, patri){
    console.log('name of patro', patro)
    console.log('callmeback parameter', callMeBack)
    if(patri){
        // console.log(callMeBack)
        callMeBack('jodu')
    }
    else{
        console.log('tor kopale bike nai')
    }
}


function callSomeOne(person){
    console.log('calling', person)
}

pakhiBhai(callSomeOne, 'jodu', 'modu')


addEventListener('click', ()=>{

})

const addFive = x=>x+5
[1, 2, 3, 4, 5].map(x=>x+5)