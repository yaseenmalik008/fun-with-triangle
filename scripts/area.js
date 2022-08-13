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
let number1 = numberInput[0].value
let number2 = numberInput[1].value
if(!number1[0] || !number2[1] ){
    outputDiv.innerText = "Please enter all the feild"
}else{

    outputDiv.innerText = `The Area Is Equal to ${output}`
}

}

checkBtn.addEventListener("click", theArea)