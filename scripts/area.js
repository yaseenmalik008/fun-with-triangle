const numberInput = document.querySelectorAll(".number-input")
const checkBtn = document.querySelector("#check-btn")
const outputDiv = document.querySelector("#output-div")

function calculateTheArea(a,b){
const area = (a*b)
return area
}
function theArea(){
    const area = calculateTheArea(Number(numberInput[0].value), Number(numberInput[1].value))
const output = 0.5 * area;
    outputDiv.innerText = `the area is equal to ${output}`
}

checkBtn.addEventListener("click", theArea)