let screen = document.querySelector('#input_screen')

// function display(num){
//     screen.value +=num
// }

function display(num){
    if(screen.value==="NaN" ||screen.value==="Invalid Input" 
    ||screen.value==="Infinity")
    {
        screen.value=""
    }
    screen.value +=num
}

function Clear(){
    screen.value=""
}

function Delete(){
    screen.value=screen.value.slice(0,-1)
}
// function calc(){
//     screen.value=eval(screen.value)
// }
function calc(){
    try {
        screen.value=eval(screen.value)   
    } 
    catch (error) {
        screen.value="Invalid Input"
    }
}
