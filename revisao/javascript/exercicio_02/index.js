// Faça um programa que leia a idade de uma pessoa expressa em anos, 
// meses e dias e imprima a idade dessa pessoa expressa apenas em dias. 
// Considerar ano com 365 dias e mês com 30 dias.

// Resolução

// 1. Perguntar para a pessoa quando ela nasceu
// 2. Fazer o cálculo de quantos dias isso é com relação a zero
// 3. Fazer o cálculo de quantos dias "hoje" significa
// 4. Comparar "hoje" menos 

const birthYear = Number(prompt("em que ano você nasceu?"))
const birthMonth = Number(prompt("em que mês você nasceu?"))
const birthDay = Number(prompt("em que dia você nasceu?"))

console.log(birthYear)
console.log(birthMonth)
console.log(birthDay)

const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth() //vem como objeto, tenho que somar mais um
const currentDay = currentDate.getDate()


console.log(currentDate)
console.log(currentYear)
console.log(currentMonth)
console.log(currentDay)

const daysFromBirth = (birthYear - 1) * 365 + (birthMonth - 1) * 30 + (birthDay)
const daysFromToday = (currentYear - 1) * 365 + currentMonth * 30 + currentDay

const ageDays = daysFromToday - daysFromBirth

console.log(ageDays)