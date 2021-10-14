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

  const twoNumbersComparison = {}
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

// EXERCÍCIO 10 ✅ 
function segundoMaiorEMenor(array) {
  // let highestNumber = -Infinity
  // let lowestNumber = Infinity
  // let secondhighestNumber = -Infinity
  // let secondlowestNumber = Infinity

  // array.filter(item => {
  //   if (item >= highestNumber){
  //     secondhighestNumber = highestNumber
  //     highestNumber = item
  //   } else if (item < highestNumber && item > secondhighestNumber) {
  //     secondhighestNumber = item
  //   }
  //   return(secondhighestNumber)
  // })

  // array.filter(item => {
  //   if (item <= lowestNumber){
  //     secondlowestNumber = lowestNumber
  //     lowestNumber = item
  //   } else if (item > lowestNumber && item < secondlowestNumber) {
  //     secondlowestNumber = item
  //   }
  //   return(secondlowestNumber)
  // })

  // const newArray = [secondhighestNumber, secondlowestNumber]
  // return(newArray)

  // Tentativa mais simples 2️⃣

  const newArray = []

  for (value of array) {
    let positionArray = 0
    for (comparedvalue of array) {
      if (value > comparedvalue) {
        positionArray ++
      }
    }

    newArray[positionArray] = value
  }
  return([newArray[newArray.length - 2], newArray[1]])

  }

// EXERCÍCIO 11 ✅
function ordenaArray(array) {
//   const newArray = []
//   let arrayLeft = array
//   let lowestNumber = Infinity
//   let arrayDiscart = array
//   let arraySize = array.length

//   for (let i = 0; i < arraySize; i++){
//     arrayDiscart.filter(item => {

//       if (item < lowestNumber) {
//         lowestNumber = item
//       }
//       return(lowestNumber)
//     })
  
//     newArray.push(lowestNumber)

//     let indexToSplice = array.indexOf(lowestNumber)
//     arrayLeft.splice(indexToSplice, 1)
//     arrayDiscart = arrayLeft

//     lowestNumber = Infinity
//   }
//  return(newArray)

// Tentativa mais simples 2️⃣

  const newArray = []
  for (value of array) {
    let positionArray = 0
    for (comparedvalue of array) {
      if (value > comparedvalue) {
        positionArray++
      }
    }
    newArray[positionArray] = value
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

// EXERCÍCIO 19A ✅ 🟡 Qual é a forma mais eficiente de fazer isso? 
function ordenaPorNome(consultasNome) {
  
  let lastPatient = {
    nome: ""
  }
  const newOrder = []

  while (consultasNome.length > 0){

    for (patient of consultasNome) {
      if (patient.nome > lastPatient.nome){
        lastPatient = patient
      } 
    }
    newOrder[consultasNome.length - 1] = lastPatient
    consultasNome.splice(consultasNome.indexOf(lastPatient), 1)
    lastPatient = {nome: ""}
  }
  return(newOrder)

}

// EXERCÍCIO 19B ✅ 🟡 Qual é a forma mais eficiente de fazer isso? 
function ordenaPorData(consultasData) {
  for (patient of consultasData) {
    patient.date = patient.dataDaConsulta.split('/')
    patient.date = new Date(patient.date[2],patient.date[1], patient.date[0])
  }

  const appointmentsByDate = []

  for (let i = 0; i < consultasData.length; i++) {
    let position = 0
    for (let y = 0; y < consultasData.length; y++){
      if (consultasData[i].date > consultasData[y].date){
        position++
      }
    }

    appointmentsByDate[position] = consultasData[i]
  }

  for (patient of consultasData) {
    delete patient.date
  }

  return(appointmentsByDate)

}

// EXERCÍCIO 20 ✅
function calculaSaldo(contas) {
  const updatedBalance = contas.map((value, index, array) => {
    let totalSpent = 0
    for (purchase of value.compras) {
      totalSpent += purchase
    }
    value.saldoTotal = value.saldoTotal - totalSpent
    return(value)
  })
  return(contas)
}

// Challenge do dia 06 de outubro - Função para verificar se o número é primo
const verityPrimeNumber = (numero) => {
  
  for (let i = 2 ; i <= numero; i++) {
      if (numero % i === 0 && numero !== i) {
          return(`${numero} não é primo. Uma prova disso é que ele é divisível por ${i}`)
      } else if (i === numero) {
          return(`${numero} é primo`)
      }
  }
}
