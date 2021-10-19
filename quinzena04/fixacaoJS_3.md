function calculaNota(ex, p1, p2) {
  let notaFinal
  let ponderada = (ex + p1*2 + p2*3)/6
  
  if (ponderada >= 9) {
    notaFinal = "A" 
  } else if (ponderada < 9 && ponderada >= 7.5) {
    notaFinal = "B"
  } else if (ponderada < 7.5 && ponderada >= 6) {
    notaFinal = "C"
  } else if (ponderada < 6) {
    notaFinal = "D"
  }
  
  return notaFinal
}