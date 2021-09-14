// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ------------------------------------------

// Exercício 1

// let array
// console.log('a. ', array) // a. undefined ✅

// array = null
// console.log('b. ', array) // b. null ✅

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11 ✅

// let i = 0
// console.log('d. ', array[i]) // d. 3 ✅

// array[i+1] = 19
// console.log('e. ', array) // e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 ✅

// const valor = array[i+6]
// console.log('f. ', valor) // f. 9 ✅

// --------------------------------

// Exercício 2

// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27

// --------------------------------


// EXERCÍCIOS DE ESCRITA DE CÓDIGO ------------------------------------------


// --------------------------------

// Exercício 1 ✅

// Permitir entrada de nome e email

// const username = prompt("What is your name?")
// const userEmail = prompt("What is your email address?")

// // Impressão na tela

// console.log(`O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${username}!`)

// --------------------------------

// Exercício 2 ✅

// Criação do Array

// const favoriteMeals = ["Pão com manteiga", "Strogonoff", "Moqueca de Banana", "Strogonoff de Shimeji", "Bolo de Fubá"]

// // Impressão do Array

// console.log(favoriteMeals)

// // Impressão da mensagem

// console.log(`Essas são as minhas comidas preferidas:

// ${favoriteMeals[0]}
// ${favoriteMeals[1]}
// ${favoriteMeals[2]}
// ${favoriteMeals[3]}
// ${favoriteMeals[4]}
// `)

// // Pergunta ao usuário

// const userFavoriteMeal = prompt("What is your favorite meal?")

// favoriteMeals[1] = userFavoriteMeal

// // Impressão da nova lista

// console.log(favoriteMeals)

// --------------------------------

// Exercício 3 ✅

// // criação de array vazio

// const listaDeTarefas = []

// // Perguntas ao usuário

// listaDeTarefas.push(prompt("Escreva uma tarefa que você vai precisar realizar hoje:"))
// listaDeTarefas.push(prompt("Escreva outra tarefa que você vai precisar realizar hoje:"))
// listaDeTarefas.push(prompt("Escreva mais uma tarefa que você vai precisar realizar hoje:"))

// // Impressão na tela

// console.log(listaDeTarefas)

// // Pedido ao usuário

// const removerLista = prompt("Você já completou uma das tarefas que você colocou? Digite 0, 1 ou 2")

// // Remoção do item do Array

// listaDeTarefas.splice(removerLista, 1)

// // Impressão do Array

// console.log(listaDeTarefas)


// DESAFIO 1 ------------------------------------------------------------------------------------


// // Pedir uma string

// const userString = prompt("Type a text or a phrase:")

// // Fazer o Trim das suas extremidades

// const userStringTrim = userString.trim()

// console.log(userStringTrim)

// // Encontrar todos os espaços e transformar a String em um Array
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 

// const stringToArray = userStringTrim.split(' ')

// console.log(stringToArray)


// DESAFIO 2 ------------------------------------------------------------------------------------

const arrayFruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// Achar o índice

const findIndex = arrayFruits.indexOf("Abacaxi")

// Impressão

console.log(`O índice da palavra "Abacaxi" é ${findIndex}. Já o tamanho do array é de ${arrayFruits.length} elementos`)