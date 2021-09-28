// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


// Exercício 1
// 10 ✅


// Exercício 2
// 19
// 21
// 23
// 25
// 27
// 30

// b. Como no exemplo abaixo, o protótipo indexOf poderia ser utilizado para procurar o index de numero dentro da lista.
// Uma alternativa seria usar uma espécie variável de controle para acessar os itens da lista dentro de um loop do tipo for, não for of.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   console.log("estou no index", lista.indexOf(numero))
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }


// Exercício 3

// quantidadeTotal = 4
// quantidadeAtual = 0

// linha = *

// quantidadeAtual = 1


// linha = **

// quantidadeAtual = 2


// linha = ***

// quantidadeAtual = 3

// linha = ****
// quantidadeAtual = 4



// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 1

// const userPetAmount = Number(prompt("How many pets do you have?"))
// const petNameList = []

// if (userPetAmount === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     for (let i = 0; i < userPetAmount; i++) {
//         const userPetName = prompt(`What is the name of your pet number ${i + 1}?`)
//         petNameList.push(userPetName)
//     }
//     console.log(petNameList)
// }


// Exercício 2

// const arrayOriginal = [10, 20, 30, 40, 50, 55, 67, 35, 22] // teste
// const evenNumbersFromOriginal = []
// const stringsFromOriginal = []
// let biggestNumber = -Infinity

// const printArrayItem = (array) => {
//     for (let item of array) {
//         const itemDivided = item / 10
//         console.log(`o valor original do índice é ${item}. Quando dividido por 10, temos ${itemDivided}`)

//         if ((item % 2) === 0) {
//             evenNumbersFromOriginal.push(item)
//         }

//         const itemIndex = array.indexOf(item)
//         const stringToArray = `O elemento do índex ${itemIndex} é ${item}`
//         stringsFromOriginal.push(stringToArray)

//         if (item > biggestNumber) {
//             biggestNumber = item
//         }
//     }
//     console.log(`O Array somente com números pares é: ${evenNumbersFromOriginal}`)
//     console.log(`O array contendo strings é: ${stringsFromOriginal}`)
//     console.log(`O maior número dessa lista é ${biggestNumber}`)
// }

// printArrayItem(arrayOriginal)


// DESAFIOS

// Exercício 01

// const playerOneNumber = Number(prompt("type the number the other player will have to guess:"))
// let playerTwoNumber
// let playerTwoAttemptsCounter = 0
// const playerTwoAttempts = []

// console.log("Vamos jogar!")

// for (let attempts = 0 ; playerTwoNumber !== playerOneNumber ; attempts++) {
//     playerTwoNumber = Number(prompt("Type the number you think the other player thought of:"))
//     console.log(`O número chutado foi: ${playerTwoNumber}`)
    
//     playerTwoAttemptsCounter += 1

//     if (playerTwoNumber > playerOneNumber) {
//         console.log("Errou. O número escolhido é menor.")
//     } else if (playerTwoNumber < playerOneNumber) {
//         console.log("Errou. O número escolhido é maior.")
//     } else if (playerTwoNumber === playerOneNumber) {
//         console.log(`
//         Acertou! 
//         O número de tentivas foi ${playerTwoAttemptsCounter}`)
//     } else {
//         console.log("Errou. Tente mais uma vez com um número.")
//     }

//     playerTwoAttempts.push(playerTwoNumber)
// }
// console.log(`Os números que o usuário chutou foram: ${playerTwoAttempts}`)


// Exercício 02

const numberRandomizer = (max) => {
    const randomNumber = Math.random() * (max + 1)
    const randomNumberInteger = Math.floor(randomNumber)
    return(randomNumberInteger)
}

console.log("Vamos jogar!")
const rangeMatch = Number(prompt("Type the maximum number to define the range of the match. The highest the number, the harder it might be!"))

const computerNumber = numberRandomizer(rangeMatch)
let playerTwoNumber
let playerTwoAttemptsCounter = 0
const playerTwoAttempts = []



for (let attempts = 0 ; playerTwoNumber !== computerNumber ; attempts++) {
    playerTwoNumber = Number(prompt("Type the number you think the other player thought of:"))
    console.log(`O número chutado foi: ${playerTwoNumber}`)
    
    playerTwoAttemptsCounter += 1

    if (playerTwoNumber > computerNumber) {
        console.log("Errou. O número escolhido é menor.")
    } else if (playerTwoNumber < computerNumber) {
        console.log("Errou. O número escolhido é maior.")
    } else if (playerTwoNumber === computerNumber) {
        console.log(`
        Acertou! 
        O número de tentivas foi ${playerTwoAttemptsCounter}`)
    } else {
        console.log("Errou. Tente mais uma vez com um número.")
    }

    playerTwoAttempts.push(playerTwoNumber)
}
console.log(`Os números que o usuário chutou foram: ${playerTwoAttempts}`)

/* 

Fazer essa alteração foi relativamente fácil. Entendo que o que fez com que isso fosse
tranquilo foi o fato de eu ter nomeado bem as variáveis do meu código.

Outra coisa que facilitou muito foi o fato de eu ter usado uma função para mexer o 
mínimo possível com a estrutura do código!

*/