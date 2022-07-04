// Escreva uma função que receba uma string e retorne a string reversa. 
// Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba" .

const reverseString: (input:string) => string = (input) => {
  const array: string[] = input.split("")
  const reverseArray: string[] = array.reverse()
  const reverseString: string = reverseArray.join("")

  return reverseString
}

console.log(reverseString('abcde'))