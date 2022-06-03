// Faça um programa para ler a hora de início e a hora de fim de um jogo de Xadrez
//  e calcular a duração do jogo em horas. Considere:
// - Apenas horas inteiras, sem os minutos.
// - O tempo máximo de duração do jogo é de 24 horas e 
// o jogo pode iniciar em um dia e terminar no dia seguinte

// Resolução

// 1. perguntar que horas o jogo começou
// 2. perguntar que horas o jogo terminou
// 3. verificar se a hora de término do jogo for menor que a hora de início
// 4. caso positivo, somar 24 ao horário de término e calculcar a diferença entre eles
// 5. caso negativo, só seguir com a diferença entre eles

const startTime = Number(prompt("que horas o jogo começou (24h)?"))
const finishTime = Number(prompt("que horas o jogo terminou (24h)?"))
let duration = 0

if (finishTime < startTime) {
  const finalFinishTime = finishTime + 24
  duration = finalFinishTime - startTime
} else {
  duration = finishTime - startTime
}

console.log("A duração do jogo foi de", duration, "horas")