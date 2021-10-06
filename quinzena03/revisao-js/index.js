
// // EXERCÍCIO 08 ✅
// function checaTriangulo(a, b, c) {
//     // return 'Escaleno'
//     // return 'Equilátero'
//     // return 'Isósceles'
//     if (a === b && a === c) {
//       return('Equilátero')
//     } else if (a === b || a === c || b === c) {
//       return('Isósceles')
//     } else {
//       return('Escaleno')
//     }
//   }
  
//   // EXERCÍCIO 09 ✅
//   function comparaDoisNumeros(num1, num2) {
//     // Formato do objeto a ser retornado:
//     // {
//     //   maiorNumero: X,
//     //   maiorDivisivelPorMenor: Y,
//     //   diferenca: Z
//     // }
  
//     const twoNumbersComparison = {
//       maiorNumero: null,
//       maiorDivisivelPorMenor: null,
//       diferenca: null
//     }
//     let highestNumber
//     let lowestNumber
  
//     if (num1 >= num2) {
//       highestNumber = num1
//       lowestNumber = num2
//     } else if (num2 > num1) {
//       highestNumber = num2
//       lowestNumber = num1
//     }
  
//     twoNumbersComparison.maiorNumero = highestNumber
//     twoNumbersComparison.maiorDivisivelPorMenor = highestNumber % lowestNumber === 0
//     twoNumbersComparison.diferenca = highestNumber - lowestNumber
  
//     return(twoNumbersComparison)
//   }
  
//   // EXERCÍCIO 10
//   function segundoMaiorEMenor(array) {
//     const newArray = []
//     let highestNumber
//     let secondhighestNumber
//     let lowestNumber
//     let secondlowestNumber
  
//     for (item of array) {
//       if 
  
//     }
  
//   }
  
//   // EXERCÍCIO 11
//   function ordenaArray(array) {
  
//   }
  
//   // EXERCÍCIO 12
//   function filmeFavorito() {
  
//   }
  
//   // EXERCÍCIO 13
//   function imprimeChamada() {
//     // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
//   }
  
//   // EXERCÍCIO 14
//   function criaRetangulo(lado1, lado2) {
  
//   }
  
//   // EXERCÍCIO 15
//   function anonimizaPessoa(pessoa) {
  
//   }
  
//   // EXERCÍCIO 16A
//   function maioresDe18(arrayDePessoas) {
  
//   }
  
//   // EXERCÍCIO 16B
//   function menoresDe18(arrayDePessoas) {
  
//   }
  
//   // EXERCÍCIO 17A
//   function multiplicaArrayPor2(array) {
  
//   }
  
//   // EXERCÍCIO 17B
//   function multiplicaArrayPor2S(array) {
  
//   }
  
//   // EXERCÍCIO 17C
//   function verificaParidade(array) {
  
//   }
  
//   // EXERCÍCIO 18A
//   function retornaPessoasAutorizadas(pessoas) {
  
//   }
  
//   // EXERCÍCIO 18B
//   function retornaPessoasNaoAutorizadas(pessoas) {
  
//   }
  
//   // EXERCÍCIO 19A
//   function ordenaPorNome(consultasNome) {
  
//   }
  
//   // EXERCÍCIO 19B
//   function ordenaPorData(consultasData) {
  
//   }
  
//   // EXERCÍCIO 20
//   function calculaSaldo(contas) {
  
//   }
  

const verityPrimeNumber = (number) => {
    for (let i = 2 ; number % i !== 0; i++) {
        if (number % i === 0) {
            return(`${number} não é primo. Uma prova disso é que ele é divisível por ${i}`)
        } else if (i === number) {
            return(`${number} é primo`)
        }
    }
}

console.log(verityPrimeNumber(2))
console.log(verityPrimeNumber(3))
console.log(verityPrimeNumber(5))
console.log(verityPrimeNumber(7))
console.log(verityPrimeNumber(11))
console.log(verityPrimeNumber(13))
console.log(verityPrimeNumber(17))
console.log(verityPrimeNumber(19))
console.log(verityPrimeNumber(23))
console.log(verityPrimeNumber(29))
console.log(verityPrimeNumber(31))
console.log(verityPrimeNumber(37))
console.log(verityPrimeNumber(109))
console.log(verityPrimeNumber(449))