// let username
// let userAge

// console.log("Programa 1")

// console.log(`Antes de enviar o prompt, o tipo da variável de username é ${typeof username} e o tipo da variável de userAge é ${userAge}.`)

// /*

// Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// Imprimir os tipos de ambas as variáveis resultou em uma resposta "undefined". 
// O motivo para isso ter acontecido é porque eu não atribuí nenhum valor a elas.
// É importante lembrar que esse é um caso exclusivo para variáveis do tipo "let" e não variáveis do tipo "const".
// Variáveis do tipo "const" não suportam a não atribuição de valor. 

// */

// username = prompt(`what is your name?`)
// userAge = prompt(`what is your age?`)

// console.log(`Depois do prompt ser respondido, o tipo da variável de username é ${typeof username} e o tipo da variável de userAge é ${typeof userAge}.`)

// /* 

// Imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

// Depois de enviar o prompt, ambas as variáveis demonstraram ser strings.
// Isso porque toda a vez que eu uso prompt, o resultado é uma string, mesmo que a resposta seja um número.

// */

// console.log(`Olá, ${username}, você tem ${userAge} anos.`)

// // TRANSIÇÃO PARA O PROGRAMA 2

// /*

// Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado cada uma em uma variável. 

// Por exemplo: "Você está usando uma roupa azul hoje?". 

// Depois, siga os passos:
//     a) Crie três novas variáveis, contendo as respostas
//     b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. 
    
//     Por exemplo: Você está usando uma roupa azul hoje? - SIM

// */

// console.log("Programa 2")

// let missBrotas = prompt("Do you miss Brotas? SIM OR NÃO")
// let comeBack = prompt("Would come back there? SIM OR NÃO")
// let wouldRecommend = prompt("Would you recommend this destination to a friend? SIM OR NÃO")

// console.log(`Do you miss Brotas? - ${missBrotas}`, `\n`, `Would come back there - ${comeBack}`, `\n`, `Would you recommend this destination to a friend? - ${wouldRecommend}`)

// /* Alternativa

// console.log(`Do you miss Brotas? - ${missBrotas}`)
// console.log(`Would come back there - ${comeBack}`)
// console.log(`Would you recommend this destination to a friend? - ${wouldRecommend}`)

// Nesse caso, teríamos 3 comandos ao invés de um.
// Ao mesmo tempo, a exibição dele parece ficar mais organizada.


// */



// // TRANSIÇÃO PARA O PROGRAMA 3

//     // Suponha que temos duas variáveis A e B, cada uma com um valor inicial

// let a = 10
// let b = 25

// // Agora, queremos trocar os valores delas, de forma que A passe a ter o valor de B e B passe a ter o valor de A.

// // Aqui faremos uma lógica para trocar os valores

// let c = a
// a = b
// b = c

// // Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10



// TRANSIÇÃO PARA O DESAFIO

/* 
Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:

    1. O primeiro número somado ao segundo número resulta em: x.
    2. O primeiro número multiplicado pelo segundo número resulta em: y.
*/

let firstNumber = prompt("Type a number")
let secondNumber = prompt("Now type another number")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

console.log(`O tipo do primeiro número é ${typeof firstNumber} e o tipo do segundo número é ${typeof secondNumber}`)

let x = firstNumber + secondNumber
let y = firstNumber * secondNumber

console.log(`O resultado de ${firstNumber} + ${secondNumber} é ${x}, enquanto o resultado de ${firstNumber} * ${secondNumber} é ${y}`)