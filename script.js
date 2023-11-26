function displayNumber(num) {
  result.value+=num
}
//clear the text field
function clearText(){
result.value=""
}
// evaluate the expresion
function evaluateExpr(){
//     exp=result.value
//     output=eval(result.value)
//     result.value=output
result.value=eval(result.value)
}

//remove last character from the text field
function removeLastchar(){
    result.value=result.value.slice(0,-1)
}