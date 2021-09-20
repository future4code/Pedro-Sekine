// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ----------------------------------------------------------------

// Exercício 1 ----------------------------------------------------------------

    // a. 
        // 10
        // 50
    // b. 
        // Nada apareceria no console se o `console.log` fosse removido. As funções ainda seriam executadas, e o valor de `return` ainda funcionaria normalmente, mas o usuário não conseguiria ver esse resultado.

// Exercício 2 ----------------------------------------------------------------

    // a. 
        // A função outraFuncao tem o papel de entender se o `texto`, parâmetro da função, possui a string "cenoura" dentro dele. Um ponto importante é a transformação da String para loweCase, garantindo que "Cenoura" com "C" maiúsculo também fosse uma String contemplada.
    // b. 
        // true
        // true
        // false 🥸 - na verdade a resposta é true. Isso porque a busca vai mais na linha de "contain" ao invés de "exatamente essa string"



// EXERCÍCIO DE ESCRITA DE CÓDIGO ----------------------------------------------------------------


// Exercício 1 ----------------------------------------------------------------

    // a
    // function aboutMe(){
    //     console.log("Hey there! My name is Pedro, I'm 27, and I was born and raised in São Paulo, Brazil. I've just finished my bachelors in Public Relations and I've been working at Labenu for almost 2 years now.")

    // }
    
    // aboutMe()
    
    // b
    // function aboutAnyone(name, age, city, profession){

    //     return(`Hey there! My name is ${name}, I'm ${age}, and I am from ${city}. Professionaly, I work with ${profession}.`)

    // }

    // console.log(`testing the function aboutAnyone: ${aboutAnyone("Pedro", 27, "São Paulo", "Employability")}`)

// Exercício 2 ----------------------------------------------------------------

    // a.
    // function sumTwoNumbers(number1, number2){
    //     sum = number1 + number2
    //     return(sum)
    // }

    // const firstNumber = Number(prompt("Tell me a number:"))
    // const secondNumber = Number(prompt("Tell me another number:"))
    // const finalResult = sumTwoNumbers(firstNumber, secondNumber)
    // console.log(finalResult)

    // b.
    // function isItHigher(number1, number2){
    //     const compare = number1 >= number2
    //     return(compare)
    // }

    // const firstNumber = Number(prompt("Tell me a number:"))
    // const secondNumber = Number(prompt("Tell me another number:"))
    // const finalResult = isItHigher(firstNumber, secondNumber)
    // console.log(finalResult)

    // c.
    // function isItEven(number){
    //     numberRemainder = number % 2
    //     numberEven = numberRemainder === 0
    //     return(numberEven)
    // }

    // const userNumber = Number(prompt("Tell me a number:"))
    // const userNumberEven = isItEven(userNumber)
    // console.log(userNumberEven)

    // d.
    // function stringPrototypes(string){
    //     const stringLength = string.length
    //     const stringCaps = string.toUpperCase()
    //     console.log(`O tamanho da string "${string}" é de ${stringLength} e sua versão em letras maiúsculas é: "${stringCaps}".`)
    // }

    // const userString = prompt("Type something:")
    // stringPrototypes(userString)

// Exercício 3 ----------------------------------------------------------------

// function sumTwoNumbers(sum1, sum2){
//     sum = sum1 + sum2
//     return(sum)
// }

// function subtractionTwoNumbers(sub1, sub2){
//     subtraction = sub1 - sub2
//     return(subtraction)
// }

// function multiplicationTwoNumbers(mult1, mult2){
//     multiplication = mult1 * mult2
//     return(multiplication)
// }

// function divisionTwoNumbers(div1, div2){
//     division = div1 / div2
//     return(division)
// }

// const firstNumber = Number(prompt("Type a number:"))
// const secondNumber = Number(prompt("Type another number:"))
// const finalSum = sumTwoNumbers(firstNumber,secondNumber)
// const finalSubtraction = subtractionTwoNumbers(firstNumber,secondNumber)
// const finalMultiplication = multiplicationTwoNumbers(firstNumber,secondNumber)
// const finalDivision = divisionTwoNumbers(firstNumber,secondNumber)

// console.log(`
// Números inseridos: ${firstNumber} e ${secondNumber}
// Soma: ${finalSum}
// Diferença: ${finalSubtraction}
// Multiplicação: ${finalMultiplication}
// Divisão: ${finalDivision}
// `)


// DESAFIOS ----------------------------------------------------------------


// Exercício 1 ----------------------------------------------------------------

    // // a.
    // const firstArrowFunction = (parameter) => {
    //     console.log(parameter)
    // }

    // // b.
    // const secondArrowFunction = (number1, number2) => {
    //     const sum = number1 + number2
    //     firstArrowFunction(sum)
    // }

    // const firstNumber = Number(prompt("Tell me a number"))
    // const secondNumber = Number(prompt("Tell me another number"))

    // secondArrowFunction(firstNumber, secondNumber)

// Exercício 2 ----------------------------------------------------------------

const pythagorasCalculator = (firstSide, secondSide) => {
    const hypotenuse = Math.sqrt((firstSide * firstSide) + (secondSide * secondSide))
    return(hypotenuse)
}

const userFirstSide = Number(prompt("Tell me the size of the first side of your triangle"))
const userSecondSide = Number(prompt("Tell me the size of the second side of your triangle"))

const finalHypotenuse = pythagorasCalculator(userFirstSide, userSecondSide)

console.log(finalHypotenuse)