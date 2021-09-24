// # EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 01

// a.
// O código analisa se o número que o usuário digitou, quando dividido por 2, tem resto zero
// Se a resposta for positiva, ele passa no teste. Se for negativa, não passa.
// No final das contas, passar no teste significa que o número é par.

// b.
// Números pares

// c.
// Números ímpares


// Exercício 02

// a.
// O código serve para consultar o preço dos produtos de um supermercado. Produtos diferentes
// possuem preços diferentes.

// b.
// "O preço da fruta Maçã é R$ 2.25"

//c.
// "O preço da fruta Pêra é R$ 5"


// Exercício 03

// a.
// A primeira linha está declarando um uma variável chamada numero, que é do tipo Número e 
// recebe o input de um usuário.

// b. 
// 10: "Esse número passou no teste" e "Essa mensagem é secreta!!!"
// -10: O fato de -10 não passar pelos critérios do if faz com que a variável mensagem não
// seja declarada e, portanto, não possa ser impressa no console.log. Por isso, um erro de 
// escopo acaba acontecendo

// c. 
// resposta acima
// 🔴 na verdade let ou const dentro de um if dá problema de escopo de qualquer forma. A 
// declaração acontece dentro de um escopo filho, que não é levado para um escopo pai, como
// acontece em casos de return de uma função.


// # EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 01

// const userAge = Number(prompt("What is your age?"))

// if (userAge >= 18){
//     console.log("You can drive!")
// } else {
//     console.log("You cannot drive")
// }

// Exercício 02

// const userShift = prompt("Do you study in the Morning (M), afternoon (A) or evening (E)?")

// if (userShift === "M") {
//     console.log("Good Morning!")
// } else if (userShift === "A") {
//     console.log("Good Afternoon!")
// } else if (userShift === "E") {
//     console.log("Good Evening!")
// } else {
//     console.log("Hi :)")
// }

// Exercício 03

// switch (userShift) {
//     case 'M':
//         console.log("Good Morning!")
//         break
//     case 'A':
//         console.log("Good Afternoon")
//         break
//     case 'E':
//         console.log("Good Evening")
//         break
//     default:
//         console.log("Hi! :)")
//         break
// }

// Exercício 04

// const movieGenre = prompt("What is the genre of the movie you're watching?")
// const moviePrice = Number(prompt("How much does the ticket cost?"))


// if ((movieGenre.toUpperCase() === "FANTASIA") && (moviePrice < 15)) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }


// # DESAFIOS


// Exercício 01

// const movieGenre = prompt("What is the genre of the movie you're watching?")
// const moviePrice = Number(prompt("How much does the ticket cost?"))


// if ((movieGenre.toUpperCase() === "FANTASIA") && (moviePrice < 15)) {
//     const snack = prompt("What will you snack during the movie?")
//     console.log(`Bom filme! Aproveite o seu ${snack}`)
// } else {
//     console.log("Escolha outro filme :(")
// }


// Exercício 02

// Resolução 01

// const fullName = prompt("What is your full name?")
// const matchType = prompt("What is the kind of match? International (IN) or domestic (DO)?")
// const seasonProgress = prompt("How far into the season is the match? Semi-finals (SF), Third Pace (DT) or Finals (FI)?")
// const ticketCategory = Number(prompt("What is the ticket category you're going for? 1, 2 3 or 4."))
// const amountTickets = Number(prompt("How many tickets do you want to buy?"))
// let costMultiplier
// let ticketPrice
// let finalPrice

// if (seasonProgress.toUpperCase() === "SF"){
//     if (ticketCategory === 1){
//         ticketPrice = 1320
//     } else if (ticketCategory === 2) {
//         ticketPrice = 880
//     } else if (ticketCategory === 3) {
//         ticketPrice = 550
//     } else if (ticketCategory === 4) {
//         ticketPrice = 220
//     }
    
// } else if (seasonProgress.toUpperCase() === "DT") {
//     if (ticketCategory === 1){
//         ticketPrice = 660
//     } else if (ticketCategory === 2) {
//         ticketPrice = 440
//     } else if (ticketCategory === 3) {
//         ticketPrice = 330
//     } else if (ticketCategory === 4) {
//         ticketPrice = 170
//     }

// } else if (seasonProgress.toUpperCase() === "FI") {
//     if (ticketCategory === 1){
//         ticketPrice = 1980
//     } else if (ticketCategory === 2) {
//         ticketPrice = 1320
//     } else if (ticketCategory === 3) {
//         ticketPrice = 880
//     } else if (ticketCategory === 4) {
//         ticketPrice = 330
//     }

// }

// if (matchType === "DO") {
//     costMultiplier = 1
// } else {
//     costMultiplier = 4.1
// }

// finalPrice = amountTickets * costMultiplier * ticketPrice

// console.log(`
// Seu nome: ${fullName}
// Partida local ou internacional: ${matchType}
// Momento da temporada: ${seasonProgress}
// Categoria de Ingresso: ${ticketCategory}
// Quantidade de Ingressos: ${amountTickets}
// Valor do dolar: ${costMultiplier}

// Valor final do ingresso: ${finalPrice} = ${amountTickets} * ${costMultiplier} * ${ticketPrice}
// `)


// Resolução 02

const fullName = prompt("What is your full name?")
const matchType = prompt("What is the kind of match? International (IN) or domestic (DO)?")
const seasonProgress = prompt("How far into the season is the match? Semi-finals (SF), Third Pace (DT) or Finals (FI)?")
const ticketCategory = Number(prompt("What is the ticket category you're going for? 1, 2 3 or 4."))
const amountTickets = Number(prompt("How many tickets do you want to buy?"))
let ticketPrice
let finalPrice
let currencyOperator
let seasonProgressOperator
let matchTypeOperator

let seasonProgressIndex
let ticketCategoryIndex = ticketCategory - 1

const priceTable = [
    [1320, 880, 550, 220], 
    [660, 440, 330, 170], 
    [1980, 1320, 880, 330], 
    [0.2439, 1]
]

if (seasonProgress === "SF") {
    seasonProgressIndex = 0
    seasonProgressOperator = "Semi-Finais"
} else if (seasonProgress === "DT") {
    seasonProgressIndex = 1
    seasonProgressOperator = "Terceiro Lugar"
} else if (seasonProgress === "FI") {
    seasonProgressIndex = 2
    seasonProgressOperator = "Finais"
}

const matchTypeIndex = Number(matchType === "DO")

ticketPrice = priceTable[3][matchTypeIndex] * priceTable[seasonProgressIndex][ticketCategoryIndex]
finalPrice = amountTickets * priceTable[3][matchTypeIndex] * priceTable[seasonProgressIndex][ticketCategoryIndex]

if (matchTypeIndex === 0) {
    currencyOperator = "U$"
    matchTypeOperator = "Internacional"
} else {
    currencyOperator = "R$"
    matchTypeOperator = "Nacional"
}

console.log(`
---Dados da compra--- 

Seu nome: ${fullName}
Tipo de jogo: ${matchTypeOperator}
Etapa do jogo: ${seasonProgressOperator}
Categoria: ${ticketCategory}
Quantidade de Ingressos: ${amountTickets}


---Dados da compra--- 

Valor do dolar: R$${priceTable[3][matchTypeIndex]}
Valor do ingresso: ${currencyOperator}${ticketPrice}
Valor final: ${currencyOperator}${finalPrice}
`)