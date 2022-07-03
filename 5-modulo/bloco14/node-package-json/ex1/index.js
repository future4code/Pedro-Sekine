// Exercício 1

//A ✅ Como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// usando ProcessingInstruction.argv[] e referenciando o index do elemnento da array qeu eu quero buscar

// B✅
const nameUser = process.argv[2]
const age = process.argv[3]

// console.log(`Olá, ${nameUser}! Você tem ${age} anos.`)

//C ✅

const futureAge = Number(age) + 7

if (nameUser && age){
  console.log(`Olá, ${nameUser}! Você tem ${age} anos. Em sete anos você terá ${futureAge}`)
} else {
  console.log("ficou faltando alguma informação. Tente novamente.")
}