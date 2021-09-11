/*

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2 // bool3 = true

let resultado = bool1 && bool2 // resultado = false
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 // resultado = false
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) // resultado = true && true = true
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // d. boolean

*/

/* 

// EXERCÍCIOS 2 E 3
// Seu colega se aproxima de você falando que o código dele não funciona como devia.
// Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = Number(prompt("Digite um numero!")) // Adicionei Number()
let segundoNumero = Number(prompt("Digite outro numero!")) // Adicionei Number()

const soma = primeiroNumero + segundoNumero

console.log(soma)

// Toda a vez que usamos a função prompt o seu resultado acaba sendo uma String.
// Apesar de da resposta "Digite um número" ser um algarismo, ele ainda vai ser reconhecido como texto.
// Como soma de duas strings não se comporta da mesma forma que a soma de dois números, precisamos transformar as variáveis em números.
// A solução aqui seria user Number() para transformar as strings em numbers. 

*/



// EXERCÍCIOS DE ESCRITA DE CÓDIGO



/* 

EXERCÍCIO 1

Faça um Programa que:
    a) Pergunte a idade do usuário

    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) 

*/

/* 

// Primeiro: definir variáveis 
 
let userAge
let friendAge
let areYouOlder
let ageDifference

// Em seguida, perguntar idades

userAge = Number(prompt("What is your age?"))
friendAge = Number(prompt("What is your best friends' age?"))

// Comparações

areYouOlder = userAge > friendAge
ageDifference = Math.abs(userAge - friendAge) // Aqui eu usei a função Math.abs() para trazer o número absoluto e nunca ter resultados negativos! - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Impressões

console.log(`Sua idade é maior do que a do seu melhor amigo? - ${areYouOlder}`)
console.log(`A diferença de idade entre vocês é de ${ageDifference}`) 

*/

/* 

EXERCÍCIO 2

Faça um programa que: 
    a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

*/

/* 

//Definição de variáveis

let insertNumber
let remainderByTwo

// Pedido ao usuário

insertNumber = Number(prompt("Insert an even number"))

// Resto da divisão

remainderByTwo = insertNumber % 2

// Impressão

console.log(`The remainder of the division between ${insertNumber} and 2 is ${remainderByTwo}`)

// O resultado por qualquer número par dividido por 2 é zero. 
// Já o resultado de qualquer número ímpar dividido por 2 é 1.  

*/

/* 

EXERCÍCIO 3

Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

    a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas

*/

 

// Definição de variáveis

let userAgeYears
let userAgeMonths
let userAgeDays
let userAgeHours


// ATENÇÃO: para considerar anos bissextos, esse programa considera a duração de um ano 365.25 ao invés de 365.
// Contudo, essa contagem não é precisa. Se uma pessoa nasceu no dia 01 de janeiro de um ano bissexto, por exemplo, ela vai viver 366 dias nesse ano, mas esse programa só vai computar 365.25.
// Para lidar com isso, teríamos que saber o ano de nascimento do usuário e o anoo atual para determinar quantos anos bissextos ele já viveu.
// A idade em meses não é comprometida, mas a idade em dias e horas sim.


// Pergunta ao usuário

userAgeYears = Number(prompt("What is your age?"))

// Correlação entre variáveis

userAgeMonths = userAgeYears * 12
userAgeDays = userAgeYears * 365.25
userAgeHours = userAgeYears * 365.25 * 24

// Impressões

console.log(`Sua idade em meses é ${userAgeMonths} meses`)
console.log(`Sua idade em dias é ${userAgeDays} dias`)
console.log(`Sua idade em horas é ${userAgeHours} horas`) 


/* 

EXERCÍCIO 4

Faça um programa que pergunte ao usuário dois números. 
Em seguida, faça as operações e imprima no console as seguintes mensagens:

    O primeiro numero é maior que segundo? true ou false
    O primeiro numero é igual ao segundo? true ou false
    O primeiro numero é divisível pelo segundo? true ou false
    O segundo numero é divisível pelo primeiro? true ou false

    obs: O resultado true ou false vai depender dos números inseridos e do resultado das operações.

*/

/* 

// Definições de variável

let firstNumber
let secondNumber

let question1
let question2
let question3
let question4

let answer1
let answer2
let answer3
let answer4

// Atribuições de Variáveis

firstNumber = Number(prompt("Please type a number"))
secondNumber = Number(prompt("Please type another number"))

question1 = "O primeiro numero é maior que segundo?"
question2 = "O primeiro numero é igual ao segundo?"
question3 = "O primeiro numero é divisível pelo segundo?"
question4 = "O segundo numero é divisível pelo primeiro?"

answer1 = firstNumber > secondNumber
answer2 = firstNumber === secondNumber
answer3 = (firstNumber % secondNumber) === 0 // Comparar se o resto da divisão é igual a zero. Se for, o número é divisível, portantto true
answer4 = (secondNumber % firstNumber) === 0 // Comparar se o resto da divisão é igual a zero. Se for, o número é divisível, portantto true 

// Imprimir

console.log(question1, answer1)
console.log(question2, answer2)
console.log(question3, answer3)
console.log(question4, answer4)

*/



// DESAFIOS



/* 

EXERCÍCIO 1 

Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K).
    
    a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

    b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

    c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

    d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

FORMULAS


(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

CELSIUS + 273.15 = KELVIN

CELSIUS = (FAHRENHEIT − 32) × 5/9


*/


/* 
// Item a - °F to K 

//Definição das Variáveis

let temperatureA = 77
let unitA = "°F"

let newTemperature
let newUnit = "K"

// Cálculo da conversão de temperatura

newTemperature = (temperatureA - 32)*(5/9) + 273.15

// Impressão do resultado

console.log(`O valor 77°F em K é ${newTemperature}${newUnit}`)
*/

/* 
// Item b - °C to °F

//Definição das Variáveis

let temperatureA = 80
let unitA = "°C"

let newTemperature
let newUnit = "°F"

// Cálculo da conversão de temperatura

newTemperature = (temperatureA)*(9/5) + 32

// Impressão do resultado

console.log(`O valor de 80°C em °F é ${newTemperature}${newUnit}`) 
*/

/* 
// item c

//Definição das Variáveis

let temperatureC = 30
let unitC = "°C"

let temperatureF
let unitF = "°F"

let temperatureK
let unitK = "K"

// Cálculo da conversão de temperatura

temperatureF = (temperatureC)*(9/5) + 32

temperatureK = temperatureC + 273.15

// Impressão do resultado

console.log(`O valor de 30°C em °F é ${temperatureF}${unitF} e em K é ${temperatureK}${unitK}`) 
*/

/* 
//item d

//Definição das Variáveis

let temperatureC
let unitC = "°C"

let temperatureF
let unitF = "°F"

let temperatureK
let unitK = "K"

// Pedido ao usuário pela temperatura em °C

temperatureC = Number(prompt("What is the temperature in °C that you would like to convert? Type numbers only"))

// Cálculo da conversão de temperatura

temperatureF = (temperatureC)*(9/5) + 32

temperatureK = temperatureC + 273.15

// Impressão do resultado

console.log(`O valor de ${temperatureC}°C em °F é ${temperatureF}${unitF} e em K é ${temperatureK}${unitK}`) 
*/


/* 

EXERCÍCIO 2

Quilowatt-hora é uma unidade de energia; 
Sabe-se que o quilowatt-hora de energia custa R$0.05. 
Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

    a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

    b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

*/

/* 

// Definições de variáveis

let consumption
let pricekWh = 0.05
let totalPrice
let discount
let discountPrice

// Pedir para usuário quanto foi consumido

consumption = Number(prompt("How many kWh have your house consumed?"))

// Atribuição de variável

totalPrice = consumption * pricekWh

// Impressão do resultado

console.log(`Dado que a sua residência consumiu ${consumption}kWh e o valor por kWh é de R$${pricekWh}, o valor a ser pago é de ${totalPrice}`)

// Adicionando o desconto sobre o valor final.

// Pedir para usuário % do desconto

discount = Number(prompt("What is the percentage of the discount that you got? (1-100)")) //Não é aplicável para situações onde o desconto é zero!

//Cálculo do preço com desconto

discountPrice = totalPrice * (1 - discount/100)

console.log(`Considerando um desconto de ${discount}%, o valor final passa a ser R$${discountPrice}`) 

*/




/* 

EXERCÍCIO 3

*/



/* Item a

Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg.
Imprima  a resposta no console da seguinte forma: 
20lb equivalem a X kg 

lb / 2.205= kg


*/

/* 

//Definição de variáveis

let weightKilogram
let weightPound

//Pedido para o usuário

weightPound = Number(prompt("What is the weight in pounds that you want to convert to kg?"))

// Conversão para kg

weightKilogram = weightPound / 2.205

// Impressão final

console.log(`${weightPound}lb equivale a ${weightKilogram}kg`) 

*/

/* Item b

Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg.
Imprima  a resposta no console da seguinte forma: 

10.5oz equivalem a X kg
*/

/* 

let weightKilogram
let weightOz

//Pedido para o usuário

weightOz = Number(prompt("What is the weight in Oz that you want to convert to kg?"))

// Conversão para kg

weightKilogram = weightOz / 35.274

// Impressão final

console.log(`${weightOz}oz equivale a ${weightKilogram}kg`) 

*/

/* Item c

Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.
Imprima  a resposta no console da seguinte forma: 

100mi equivalem a X m
*/

/* 
//Definição de variáveis

let distanceMile
let distanceMeter

//Pedido au usuário

distanceMile = Number(prompt("What is the distance, in Miles, that you wish to convert to Meters?"))

//Conversão para Metro

distanceMeter = distanceMile * 1609.34

//Impressão para Usuário

console.log(`${distanceMile}mi equivalem a ${distanceMeter}m`)

*/

/* item d 

Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.
Imprima  a resposta no console da seguinte forma: 

50ft equivalem a X m

*/

/* 
//Definição das variáveis

let distFeet
let distMeter

// Pedido ao usuário pelo retorno

distFeet = Number(prompt("what is the distance in feet that you would like to convert to meters?"))

// Conversão

distMeter = distFeet / 3.281

// Imprressão no Console

console.log(`${distFeet}ft equivalem a ${distMeter}m`) 
*/

/* item e 

Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro.
Imprima  a resposta no console da seguinte forma: 

103.56gal equivalem a X l
*/

// Definição de Variáveis
/* 
let gallon
let liter

//Pedir conversão para usuário

gallon = Number(prompt("How many gallons you wish to convert to liters?"))

// Converter para Litros

liter = gallon * 3.78541

// Impressão para usuário

console.log(`${gallon}gal equivalem a ${liter}l`) 

*/

/* item f

Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.
Imprima  a resposta no console da seguinte forma: 

450 xic equivalem a X l
*/
/* 
// Definição das variáveis

let cup
let liter

// Pedido ao usuário

cup = Number(prompt("How many cups you wish to convert to liters?"))

// Conversão para litros

liter = cup / 4.227

// Impressão para usuário

console.log(`${cup} xic equivalem a ${liter} l`) */