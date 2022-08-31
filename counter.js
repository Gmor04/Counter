let count = 0;
let suface = document.getElementById("result")

suface.innerHTML = count

function myaddbtn(){
    count++
    suface.innerHTML = count
}

function myresetbtn() {
    count = 0
    suface.innerHTML = count
}
function mysubbtn(){
    count--
    if (count < 0 ) {
        count = 0
        suface.innerHTML = count 
    }
    else {
        suface.innerHTML = count 
    }
}

let innput = document.getElementById("myinput")
let mycounter = document.getElementById("counter-div")
function displayco() {
    // mycounter.style.background = `#${innput.value}`
    mycounter.style.background = innput.value
    
}

