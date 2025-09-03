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

pakhiBhai(callSomeOne, 'jodu')