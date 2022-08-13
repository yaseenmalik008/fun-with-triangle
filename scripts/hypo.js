const sides = document.querySelectorAll(".side-input")
const hypoBtn = document.querySelector("#hypotenuse-btn")
const outputDiv = document.querySelector("#output-div")

function calculateSumOfSquare(a,b){
const sumOfSquare = a*a + b*b
return sumOfSquare

}

function calculateHypo(){
    const sumOfSquare = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value))
    const hypo = Math.sqrt(sumOfSquare)
    let sides1 = sides[0].value
    let sides2 = sides[1].value
    if(!sides1[0] || !sides2[1]){
        outputDiv.innerText = "Please enter all the fields"
    }else if(sides1.value<0 || sides2.value<0){
        outputDiv.innerText = "the value should not be negative"
    }
    else{

        outputDiv.innerText = `The Length Of Hypotenuse Is ${hypo}`
    }
}


hypoBtn.addEventListener("click", calculateHypo)



