let input = document.querySelectorAll(".angle-input")
let triangleBtn = document.querySelector("#triangle-btn")
let output = document.querySelector("#output")

function calculateSumOfAngles(angle1,angle2,angle3){
    let sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles
    
}



function showOutput(){
let sumOfAngles = calculateSumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value))
if(sumOfAngles === 180 && input[0].value>0 && input[1].value>0 && input[2].value>0){
    output.innerText = "Yay! The Angles Form A Traingles"
}else {
    output.innerText = "Oh No! The Angles Do Not Form A Traingles"
}
}


triangleBtn.addEventListener("click", showOutput )
        
function isTriangle(){
    var angle1 = input[0].value
    var angle2 = input[1].value
    var angle3 = input[2].value

    if (!angle1 || !angle2 || !angle3){
        output.innerText = "Please enter all the Feild"
    } else if(angle1 < 0 || angle2 < 0 || angle3 < 0){
        outputBox.innerText = `The value should not be negative`
    }
    else{
        showOutput(input.value)
    } 
}


triangleBtn.addEventListener("click" , isTriangle)