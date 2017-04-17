var globalVariable = 'This is global variable'

function globalFunction () {
    var localVariable = 'This is loacl variable'

    console.log('Visit global/local variable')
    console.log(globalVariable)
    console.log(localVariable)
         
    function localFunction () {
        var innerLocalVariable = 'inner'
        console.log('inner-------------------')
             
        console.log(localVariable,globalVariable,innerLocalVariable)
             
    }
    localFunction()
}
globalFunction()