// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

// a) A soma desses números

// b) A subtração desses números

// c) A multiplicação desses números

// d) Qual deles é o maior

export const numberManipulator: (number1: number, number2: number) => void = (number1, number2) => {
  console.log("A soma dos dois números é: ", (number1 + number2))
  console.log("A subtração dos dois números é: ",(number1 - number2))
  console.log("A multiplicação dos dois números é: ", (number1 * number2))

  if ( number1 > number2) {
    console.log("O maior número é: ", number1)
  } else if (number1 < number2){
    console.log("O maior número é: ", number2)
  } else if ( number1 === number2) {
    console.log("Os números sâo iguais")
  } else {
    console.log("eita, erro. :(")
  }

}

numberManipulator(10,5)