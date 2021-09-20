/* // Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // Área do retângulo = altura * largura
  // Ambas precisam estar na mesma unidade de medida
  const rectangleHeight = Number(prompt("Please type the height of the rectangle in centimeters"))
  const rectangleWidth = Number(prompt("Plesae type the width of the rectangle in centimeters"))

  console.log(rectangleHeight * rectangleWidth)

  // ✅
}

// Exercício 2
function imprimeIdade() {

  const currentYear = Number(prompt("What is the current year?"))
  const birthYear = Number(prompt("Please type the year you were born:"))

  console.log(currentYear - birthYear)

  // ✅
}

// Exercício 3
function calculaIMC() {
  // IMC = peso / (altura x altura)

  const userWeight= Number(prompt("Please type your weight in kilograms:"))
  const userHeight = Number(prompt("Please type your height in meters"))

  console.log(userWeight / (userHeight ** 2))

  // ✅
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // nome, idade, email

  const username = prompt("Please type your name:")
  const userAge = prompt("Please type your age")
  const userEmail = prompt("Please type your email address")

  console.log(`Meu nome é ${username}, tenho ${userAge} anos, e o meu email é ${userEmail}.`)

  // ✅
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // Escreva um código que pede ao usuário suas três cores favoritas e 
  // imprime no console um array que contenha essas três cores.

  const favoriteColor1 = prompt("Tell me your first favorite color:")
  const favoriteColor2 = prompt("Tell me your second favorite color:")
  const favoriteColor3 = prompt("Tell me your third favorite color:")

  const favoriteColor = [favoriteColor1, favoriteColor2, favoriteColor3]

  console.log(favoriteColor)

  // ✅
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // Escreva um código que **pede ao usuário** uma **string** e **imprima no console** ela em letra maiúscula.

  const userString = prompt("Please type something")

  console.log(userString.toUpperCase())

  // ✅
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // Definição de variáveis

  const showCost = Number(prompt("How much does organizing the show cost?"))
  const ticketPrice = Number(prompt("What is the cost of each ticket of the show?"))

  // Imprimir quantos ingressos precisam ser vendidos
  
  // Forma 1
  // Se o resultado da divisão for zero, então o número de ingressos é o resultado da divisão
  // Caso contrário, é o resultado inteiro da divisão +1

  if ((showCost % ticketPrice) === 0) {
    console.log(showCost / ticketPrice)
  } else {
    console.log(Math.trunc(showCost / ticketPrice) + 1)
  }

  // ✅
}

// Exercício 8
function checaStringsMesmoTamanho() {
  
  const string1 = prompt("Type something!")
  const string2 = prompt("Now Type something else!")

  console.log(string1.length === string2.length)

  // ✅
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  
  const string1 = prompt("Type something!")
  const string2 = prompt("Now Type something else!")

  // fazendo com que todas as strings sejam minúsculas.
  const string1Case = string1.toLowerCase()
  const string2Case = string2.toLowerCase()


  console.log(string1Case === string2Case)

  // ✅
}

// Exercício 10
function checaRenovacaoRG() {

// TRUE OR FALSE: PRECISA RENOVAR A CARTEIRA OU NÃO?

// Declaração de Variáveis

const currentYear = Number(prompt("Type the current year:"))
const birthYear = Number(prompt("Type the year you were born"))
const licenceYear = Number(prompt("Type the year you got your drivers licence"))

const age = currentYear - birthYear
const licenceAge = currentYear - licenceYear

// Sempre que der 5 anos e a pessoa tiver 18-20 anos, tem que ser renovada

const renew20 = (age <= 20) && (licenceAge >= 5)

// Sempre que der 10 anos e a pessoa tiver 21-50 anos, tem que ser renovada

const renew50 = (age > 20) && (age <= 50) && (licenceAge >= 10)

// Sempre que der 15 anos e a pessoa tiver 51+ anos, tem que ser renovada

const renew51 = (age > 50) && (licenceAge >= 15)

// Criar um Array com o combinado dos resultados

const needToRenew = [renew20, renew50, renew51]

// Achar um elemento que seja true

console.log(needToRenew.includes(true))

// ✅

}

// Exercício 11
function checaAnoBissexto() {

// Perguntar para o usuário qual é o ano

const year = Number(prompt("Type the year you want to analize"))

// Declarar variáveis para cada condição para que um ano seja bissexto

const firstCondition = (year % 400) === 0

const secondCondition = ((year % 4) === 0) && !(((year % 100) === 0) && !((year % 400) === 0 ))

  // (year % 400) === 0 //multiplo de 400
  // (year % 100) === 0 //multiplo de 100
  // ((year % 100) === 0) && !((year % 400) === 0 ) // é múltiplo de 100 e não é múltiplo de 400

// colocar variáveis em um Array

const isLeapYear = [firstCondition, secondCondition]

// Procurar se pelo menos um elemento é true e, se for, retornar true

console.log(isLeapYear.includes(true))

// ✅

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  
//Condições Labenu
  // Ter mais de 18 anos E
  // Ter Ensino Médio Completo E
  // Possuir disponibilidade

// Respostas vão vir como "sim" e "não"

// Pedidos ao usuário

let ofAge = prompt("Você tem mais de 18 anos?")
let highSchool = prompt("Você tem o Ensino Médio Completo?")
let availability = prompt("Você tem disponibilidade para fazer o curso?")

// Comparações

ofAge = ofAge === "sim"
highSchool = highSchool === "sim"
availability = availability === "sim"

// Pode vir para a Labenu

const canStudy = ofAge && highSchool && availability

// Imprimir condições com o Comparador &&

console.log(canStudy)

// ✅

} */



// SEGUNDA VEZ ----------------------------------------------------------------



// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const largura = Number(prompt("tell me a number"))
  const altura = Number(prompt("tell me another number"))
  const area = largura * altura
  console.log(area)
}

// Exercício 2
function imprimeIdade() {
  const currentYear = Number(prompt("Tell me the current year"))
  const birthYear = Number(prompt("Tell me your Birth Year"))
  const userAge = currentYear - birthYear
  console.log(userAge)
}

// Exercício 3
function calculaIMC() {
  const userWeight = Number(prompt("Tell me your weight"))
  const userHeight = Number(prompt("Tell me your height"))
  const imc = userWeight / (userHeight ** 2)
  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const userName = prompt("Tell me your name")
  const userAge = Number(prompt("Tell me your age"))
  const userEmail = prompt("Tell me your email")
  console.log(`Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userEmail}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const firstColor = prompt("Tell me a color")
  const secondColor = prompt("Tell me a color")
  const thirdColor = prompt("Tell me a color")
  const arrayColor = []

  arrayColor.push(firstColor, secondColor, thirdColor)

  console.log(arrayColor)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const userString = prompt("Write a text")

  console.log(userString.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const showCost = Number(prompt("How much did the show cost?"))
  const ticketPrice = Number(prompt("What is the price of each ticket?"))
  const remainder = showCost % ticketPrice
  const rawAmount = (showCost - remainder) / ticketPrice
  const finalAmount = rawAmount + Number(!Number.isInteger(showCost/ticketPrice))

  console.log(finalAmount)  
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const userString1 = prompt("Write a text")
  const userString2 = prompt("Write another text")

  const stringComparison = userString1.length === userString2.length

  console.log(stringComparison)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const firstString = prompt("Type a text!")
  const secondString = prompt("Type another text!")
  const comparison = (firstString.toUpperCase()) === (secondString.toUpperCase())

  console.log(comparison)
}

// Exercício 10
function checaRenovacaoRG() {
  const currentYear = Number(prompt("What is the current year?"))
  const birthYear = Number(prompt("What is your birth year?"))
  const idYear = Number(prompt("When was the year that you got your ID?"))
  
  const userAge = currentYear - birthYear
  const idAge = currentYear - idYear

  const renew20 = (userAge <= 20) && (idAge >= 5)
  const renew2150 = (userAge > 20) && (userAge <= 50) && (idAge >= 10)
  const renew50plus = (userAge > 50) && (idAge >= 15)

  console.log(renew20 || renew2150 || renew50plus)
}

// Exercício 11
function checaAnoBissexto() {
  const currentYear = Number(prompt("tell me the current year"))
  const firstCondition = (currentYear % 400) === 0
  const secondCondition = ((currentYear % 4) === 0) && !(((currentYear % 100) === 0) && !((currentYear % 400) === 0))

  console.log(firstCondition || secondCondition)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const userAge = prompt("Are you above 18? sim/nao")
  const highSchool = prompt("Have you complete high School? sim/nao")
  const availability = prompt("Are you available to take the couse? sim/nao")

  const conditionAge = userAge === "sim"
  const conditionSchool = highSchool === "sim"
  const conditionAvailatility = availability === "sim"

  console.log(conditionAge && conditionSchool && conditionAvailatility)
  

}