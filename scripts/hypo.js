// const sides = document.querySelectorAll(".side-input")
// const hypoBtn = document.querySelector("#hypotenuse-btn")
// const outputDiv = document.querySelector("#output-div")

// function calculateSumOfSquare(a,b){
// const sumOfSquare = a*a + b*b
// return sumOfSquare

// }

// function calculateHypo(){
//     const sumOfSquare = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value))
//     const hypo = Math.sqrt(sumOfSquare)
//     outputDiv.innerText = `The Length Of Hypotenuse Is ${hypo}`
    
// }


// hypoBtn.addEventListener("click", calculateHypo)

const sides = document.querySelectorAll(".side-input")
const hypoBtn = document.querySelector("#hypotenuse-btn")
const outputDiv = document.querySelector("#output-div")

function calculateSumOfSquare(a,b){
    const sumOfSquare = a*a + b*b
    return sumOfSquare
}
function calculateHypo(){
    const sumOfSquare = calculateSumOfSquare(Number(sides[0].value),Number(sides[1].value))
    const hypo = Math.sqrt(sumOfSquare)
    outputDiv.innerText = `The Length Of Hypotenuse is ${hypo}`
}


hypoBtn.addEventListener("click", calculateHypo)