let input = document.querySelectorAll(".angle-input")
let triangleBtn = document.querySelector("#triangle-btn")
let output = document.querySelector("#output")

function calculateSumOfAngles(angle1,angle2,angle3){
    let sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles
}



function isTriangle(){
let sumOfAngles = calculateSumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value))
if(sumOfAngles === 180){
    output.innerText = "Yay! The Angles Form A Traingles"
}else{
    output.innerText = "Oh No! The Angles Do Not Form A Traingles"
}
}

triangleBtn.addEventListener("click", isTriangle )
        
