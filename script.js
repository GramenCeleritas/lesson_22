let num1 = parseFloat(prompt('Enter first number for operation'))
let num2 = parseFloat(prompt('Enter second number for operation'))


// alert(`Sum: ${num1 + num2}\nDifference: ${num1 - num2}\nMultiplication: ${num1 * num2}\nDivision: ${num1 / num2}`)

if (isNaN(num1) || isNaN(num2)) {
    alert('there is an empty string in your numbers when enter')
} else if (typeof num1 === 'number' || typeof num2 === 'number') {
    alert(`Sum of numbers are: ${num1 + num2}`)
    if ( num2 > num1) {
        if(window.confirm('Do you really want to continue calculate difference')){
            alert(`Diffrence of numbers are: ${num1 - num2}`)
        }
    } else {
        alert(`Diffrence of numbers are: ${num1 - num2}`)
    }
    if (num2 === 0){
        alert('Dividing on zero currently not possible')
    } else {
        alert(`Division of numbers: ${num1 / num2}`)
    }

    alert(`Multiplication of numbers: ${num1 * num2}`)

}
