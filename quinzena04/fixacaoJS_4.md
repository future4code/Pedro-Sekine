function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  const finalArray = arrayDeNumeros.filter(item => {
    if (item === numeroEscolhido) {
      return item
    }
  })
  
  const numberRepetition = finalArray.length
  
  if (numberRepetition !== 0) {
    return(`O número ${numeroEscolhido} aparece ${numberRepetition}x`)
  } else {
    return("Número não encontrado")
  }