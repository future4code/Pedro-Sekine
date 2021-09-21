console.log("Hello, World")

// # EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ------------------------------------------------------------------------

// ## EXERCÍCIO 01

    // console.log(filme.elenco[0]) //  Matheus Nachtergaele
    // console.log(filme.elenco[filme.elenco.length - 1])   //  Virginia Cavendish
    // console.log(filme.transmissoesHoje[2])   //  canal: "Globo", horario: "14h"
    // ✅

// ## EXERCÍCIO 02

    // console.log(cachorro)    //  	nome: "Juca", idade: 3, raca: "SRD"
    // console.log(gato)    //  nome: "Juba", idade: 3, raca: "SRD"
    // console.log(tartaruga)   //  nome: "Jubo", idade: 3, raca: "SRD"
    // A sintaxe de três pontos antes do nome de um objeto copia a sua estrutura e os seus valores para um novo objeto. 
    // Essa sintaxe também funciona para Arrays, que são essencialmente objetos.

// ## EXERCÍCIO 03

    //console.log(minhaFuncao(pessoa, "backender")) //  false
    // console.log(minhaFuncao(pessoa, "altura"))   //  erro, pois a propriedade altura não foi definida no objeto pessoa.
        // 🔴 na verdade o resultado é undefined. 
    // ✅



// # EXERCÍCIOS DE ESCRITA DE CÓDIGO ------------------------------------------------------------------------

// EXERCÍCIO 01
    // a

    // const person = {
    //     name: "Pedro",
    //     nickname: ["Sek", "Sekine", "Peu"],
    // }

    // const printNicknamePerson = (objectPerson) => {
    //     console.log(`Eu sou ${objectPerson.name}, mas pode me chamar de: ${objectPerson.nickname[0]}, ${objectPerson.nickname[1]} ou ${objectPerson.nickname[2]}`)
    // }

    // const messagePerson = printNicknamePerson(person)
    // console.log(messagePerson)

    // b

    // const newPerson = {
    //     ...person,
    //     nickname: ["Seking", "Pepeu", "Pe"],
    // }
    
    // const messageNewPerson = printNicknamePerson(newPerson)
    // console.log(messageNewPerson)

    // ✅

// EXERCÍCIO 02
    // const firstObject = {
    //     name: "Pedro",
    //     age: 27,
    //     profession: "Programador",
    // }

    // const secondObject = {
    //     name: "Anja",
    //     age: 30,
    //     profession: "Professora",
    // }

    // const objectToArray = (object) => {
    //     const objectName = object.name
    //     const objectNameLength = object.name.length
    //     const objectAge = object.age
    //     const objectProfession = object.profession
    //     const objectProfessionLength = object.profession.length
    //     const finalArray = [objectName, objectNameLength, objectAge, objectProfession, objectProfessionLength]

    //     return(finalArray)
    // }

    // console.log(objectToArray(firstObject))
    // console.log(objectToArray(secondObject))

    // // ✅

// EXERCÍCIO 03
    // const carrinho = []
    // const primeiraFruta = {
    //     nome: "Banana da Terra",
    //     disponibilidade: true,
    // }
    // const segundaFruta = {
    //     nome: "Abacate",
    //     disponibilidade: true,
    // }
    // const terceiraFruta = {
    //     nome: "Alho Poró",
    //     disponibilidade: true,
    // }

    // const adicionarCarrinho = (objeto) => {
    //     carrinho.push(objeto)
    //     return(carrinho)
    // }

    // adicionarCarrinho(primeiraFruta)
    // adicionarCarrinho(segundaFruta)
    // adicionarCarrinho(terceiraFruta)

    // console.log(carrinho)


// # DESAFIO ----------------------------------------------------------------------------------------------------


// EXERCÍCIO 01
    // const userQuestions = () => {
    //     const username = prompt("What is your name?")
    //     const userAge = Number(prompt("What is your age?"))
    //     const userProfession = prompt("What is your profession?")
    //     const userObject = {
    //         name: username,
    //         age: userAge,
    //         profession: userProfession,
    //     }
    //     return(userObject)
    // }

    // const funcaoFinal = userQuestions()
    // const userFinalObject = console.log(funcaoFinal)
    // console.log(typeof funcaoFinal)

// EXERCÍCIO 02
    
    // const firstMovie = {
    //     name: "Velozes e Furiosos: Desafio em Tóquio",
    //     releaseYear: 2006,
    // }
    
    // const secondMovie = {
    //     ...firstMovie,
    //     name: "Em Busca da Felicidade",
    // }
    
    // const compareReleaseYear = (movie1, movie2) => {
    //     const releasedBefore = movie1.releaseYear < movie2.releaseYear
    //     const releasedSame = movie1.releaseYear === movie2.releaseYear
    //     const releaseYearArray = [releasedBefore, releasedSame]

    //     return(releaseYearArray)
    // }

    // const yearComparison = compareReleaseYear(firstMovie, secondMovie)
    // console.log(`O primeiro filme foi lançado antes do segundo? ${yearComparison[0]}`)
    // console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${yearComparison[1]}`)

// EXERCÍCIO 03

const carrinho = []
const primeiraFruta = {
    nome: "Banana da Terra",
    disponibilidade: true,
}
const segundaFruta = {
    nome: "Abacate",
    disponibilidade: true,
}
const terceiraFruta = {
    nome: "Alho Poró",
    disponibilidade: true,
}

const adicionarCarrinho = (objeto) => {
    carrinho.push(objeto)
}

adicionarCarrinho(primeiraFruta)
adicionarCarrinho(segundaFruta) 
adicionarCarrinho(terceiraFruta)


console.log(carrinho)

const controlarEstoque = (fruta) => {
    fruta.disponibilidade = !fruta.disponibilidade
}

controlarEstoque(primeiraFruta)
controlarEstoque(segundaFruta)
controlarEstoque(terceiraFruta)

console.log(primeiraFruta, segundaFruta, terceiraFruta)