// Exercício 2

const checkType = (parameter:any):string => {
  const queryType = typeof(parameter)
  return queryType
}

console.log(checkType(8))
console.log(checkType("8"))
console.log(checkType([]))
console.log(checkType({}))
console.log(checkType(undefined))
console.log(checkType(null))
console.log(checkType(false))