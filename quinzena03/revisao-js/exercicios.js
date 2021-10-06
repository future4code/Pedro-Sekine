// EXERCÍCIO 01 ✅
function inverteArray(array) {

  arrayIndex = array.length - 1
  const invertedArray = []

  for (let i=0; i <= arrayIndex; i++) {
    invertedArray[arrayIndex - i] = array[i]
  }

  return(invertedArray)
}

// EXERCÍCIO 02 ✅
function retornaNumerosParesElevadosADois(array) {
    const arrayEvenSquare = array.filter((item) => {return(item % 2 === 0)}).map(item => {return(item**2)})
    
    return(arrayEvenSquare)
}

// EXERCÍCIO 03 ✅
function retornaNumerosPares(array) {
    const arrayOnlyEven = array.filter(item => {return(item % 2 === 0)})
  
    return(arrayOnlyEven)
}

// EXERCÍCIO 04 ✅
function retornaMaiorNumero(array) {
  let highestNumber = null

  for (item of array) {
    if (item > highestNumber){
      highestNumber = item
    }
  }

  return(highestNumber)
}

// EXERCÍCIO 05 ✅
function retornaQuantidadeElementos(array) {
  return(array.length)
}

// EXERCÍCIO 06 ✅
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  const booleanOperations = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]

  return(booleanOperations)
}

// EXERCÍCIO 07 ✅
function retornaNNumerosPares(n) {
  const arrayEven = []

  for (let i = 0; n > arrayEven.length; i++) {
    arrayEven[i] = i * 2
  }

  return(arrayEven)
}


// EXERCÍCIO 08 ✅
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  if (a === b && a === c) {
      return('Equilátero')
  } else if (a === b || a === c || b === c) {
      return('Isósceles')
  } else {
      return('Escaleno')
    }
}

// EXERCÍCIO 09 ✅
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }

  const twoNumbersComparison = {
    maiorNumero: null,
    maiorDivisivelPorMenor: null,
    diferenca: null
  }
  let highestNumber
  let lowestNumber

  if (num1 >= num2) {
    highestNumber = num1
    lowestNumber = num2
  } else if (num2 > num1) {
    highestNumber = num2
    lowestNumber = num1
  }

  twoNumbersComparison.maiorNumero = highestNumber
  twoNumbersComparison.maiorDivisivelPorMenor = highestNumber % lowestNumber === 0
  twoNumbersComparison.diferenca = highestNumber - lowestNumber

  return(twoNumbersComparison)
}

// EXERCÍCIO 10 ✅ 🟡 qual é a forma mais eficiente de fazer isso?
function segundoMaiorEMenor(array) {
  let highestNumber = -Infinity
  let lowestNumber = Infinity
  let secondhighestNumber = -Infinity
  let secondlowestNumber = Infinity

  array.filter(item => {
    if (item >= highestNumber){
      secondhighestNumber = highestNumber
      highestNumber = item
    } else if (item < highestNumber && item > secondhighestNumber) {
      secondhighestNumber = item
    }
    return(secondhighestNumber)
  })

  array.filter(item => {
    if (item <= lowestNumber){
      secondlowestNumber = lowestNumber
      lowestNumber = item
    } else if (item > lowestNumber && item < secondlowestNumber) {
      secondlowestNumber = item
    }
    return(secondlowestNumber)
  })

  const newArray = [secondhighestNumber, secondlowestNumber]
  return(newArray)
  }

// EXERCÍCIO 11 ✅ 🟡 Qual é a forma mais eficiente de fazer isso? 
function ordenaArray(array) {
  const newArray = []
  let arrayLeft = array
  let lowestNumber = Infinity
  let arrayDiscart = array
  let arraySize = array.length

  for (let i = 0; i < arraySize; i++){
    arrayDiscart.filter(item => {

      if (item < lowestNumber) {
        lowestNumber = item
      }
      return(lowestNumber)
    })
  
    newArray.push(lowestNumber)

    let indexToSplice = array.indexOf(lowestNumber)
    arrayLeft.splice(indexToSplice, 1)
    arrayDiscart = arrayLeft



    console.log("lowestNumber", lowestNumber)
    console.log("newArray", newArray) // teste
    console.log("indexToSplice",indexToSplice)
    console.log("arrayLeft", arrayLeft)
    console.log("arrayDiscart", arrayDiscart)
    console.log(array)
    console.log(array.length)
    console.log(i)

    lowestNumber = Infinity
  }
 return(newArray)
}

// EXERCÍCIO 12 ✅
function filmeFavorito() {
  const filmeFavoritoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
  }
  return(filmeFavoritoAstrodev)
}

// EXERCÍCIO 13 ✅
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filmeDaChamada = filmeFavorito()

  const chamada = `Venha assistir ao filme ${filmeDaChamada.nome}, de ${filmeDaChamada.ano}, dirigido por ${filmeDaChamada.diretor} e estrelado por ${filmeDaChamada.atores[0]}, ${filmeDaChamada.atores[1]}, ${filmeDaChamada.atores[2]}, ${filmeDaChamada.atores[3]}.`
  return(chamada)
}

// EXERCÍCIO 14 ✅
function criaRetangulo(lado1, lado2) {
  const rectangleProperties = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

    return(rectangleProperties)
}

// EXERCÍCIO 15 ✅
function anonimizaPessoa(pessoa) {
  pessoa.nome = "ANÔNIMO"
  return(pessoa)
}

// EXERCÍCIO 16A ✅
function maioresDe18(arrayDePessoas) {
  const adults = arrayDePessoas.filter((item) => {
    if (item.idade >= 18) {
      return(item)
    }
  })
  return adults
}

// EXERCÍCIO 16B ✅
function menoresDe18(arrayDePessoas) {
  const underage = arrayDePessoas.filter(pessoa => {
    if (pessoa.idade < 18) {
      return(pessoa)
    }
  })
  return(underage)
}

// EXERCÍCIO 17A ✅
function multiplicaArrayPor2(array) {
  const multipliedArray = array.map(item => {return(item * 2)})
  
  return(multipliedArray)
}

// EXERCÍCIO 17B ✅
function multiplicaArrayPor2S(array) {
  const multipliedArray = array.map(item => {
    const itemStringTimesTwo = (item * 2).toString()
    return(itemStringTimesTwo)
  })
  
  return(multipliedArray)
}

// EXERCÍCIO 17C ✅
function verificaParidade(array) {
  const parityNumbersArray = array.map(number =>{
    if (number % 2 === 0) {
      return(`${number} é par`)
    } else {
      return(`${number} é ímpar`)
    }
  })
  return(parityNumbersArray)
}

// EXERCÍCIO 18A ✅
function retornaPessoasAutorizadas(pessoas) {
  let authorizedPeople 
  authorizedPeople = pessoas.filter(pessoa => {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      
      return(pessoa)
    }
  })

  return(authorizedPeople)
}

// EXERCÍCIO 18B ✅
function retornaPessoasNaoAutorizadas(pessoas) {
  const notAuthorizedPeople = pessoas.filter(pessoa => {
    if (pessoa.altura < 1.5 || pessoa.idade <=14 || pessoa.idade >= 60){
      return(pessoa)
    }
  })
  return(notAuthorizedPeople)
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
