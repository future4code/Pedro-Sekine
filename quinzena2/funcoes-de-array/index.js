// #EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------------------------------------------------

// Interpretação - 1 
//   { nome: "Amanda Rangel", apelido: "Mandi" } 0 Array
//   { nome: "Laís Petra", apelido: "Laura" } 1 Array
//   { nome: "Letícia Chijo", apelido: "Chijo" } 2 Array

// Interpretação - 2
// [ "Amanda Rangel" , "Laís Petra" , "Letícia Chijo" ]

// Interpretação - 3 
// ["Mandi" , "Laura"] 🔴
// Incorreto, pois filtro 👉 NÃO ALTERA👈 o Array. Ele simplesmente filtra seus elementos.
// Para alteração, map()



// #EXERCÍCIOS DE ESCRITA DE CÓDIGO ------------------------------------------------------


// Escrita - 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a

//  const petsNames = pets.map((item, index, array) => {
//      const eachPetName = item.nome
//      return eachPetName
//  })

//  console.log(petsNames)

 // b

//  const petsSausages = pets.filter((item, index, array) => {
//      const onlySausage = item.raca === "Salsicha"
//      return(onlySausage)
//  })

// console.log(petsSausages)

// c

// const onlyPoodle = pets.filter((item,index,array) => {
//     const isItPoodle = item.raca === "Poodle"
//     return(isItPoodle)
// })

// console.log(onlyPoodle)

// const poodleInvitation = onlyPoodle.map((item, index, array) => {
//     const ownerMessage = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
//     return(ownerMessage)
// })

// console.log(poodleInvitation)



// Escrita - 2 


const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


// // a

// const onlyNames = produtos.map((item) => {
//     return(item.nome)
// })

// console.log(onlyNames)

// // b

// const newPrices = produtos.map((item) => {
//     const newObject = {
//         nome: item.nome,
//         preco: item.preco * 0.95,
//     }
//     return(newObject)
// })

// console.log(newPrices)

// // c

// const onlyBeverages = produtos.filter((item) => {
//     return(item.categoria === "Bebidas")
// })

// console.log(onlyBeverages)

// // d

// const onlyYpe = produtos.filter((item, index, array) => {
//     return(item.nome.includes("Ypê"))
// })

// console.log(onlyYpe)

// // e

// const buyYpe = onlyYpe.map((item) => {
//     const buyMessage = `Compre ${item.nome} por ${item.preco}`
//     return(buyMessage)
// })

// console.log(buyYpe)

// VERSÃO ENCADEADA

const ypeMessage = produtos
    .filter((item) => {
        const ypeFilter = item.nome.includes("Ypê")
        return(ypeFilter)
    })
    .map((item) => {
        const ypeFinalMessage = `Compre ${item.nome} por ${item.preco}`
        return(ypeFinalMessage)
    })

console.log(ypeMessage)