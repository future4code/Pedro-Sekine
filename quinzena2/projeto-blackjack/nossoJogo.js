/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// const playRound = () => {

//    const player = {
//       firstCard: comprarCarta(),
//       secondCard: comprarCarta(),
//       score: null ,
//       text: null,
//    }

//    const computer = {
//       ...player,
//       firstCard: comprarCarta(),
//       secondCard: comprarCarta(),
//    }

//    player.score = player.firstCard.valor + player.secondCard.valor
//    player.text = `Usuário - cartas: ${player.firstCard.texto} ${player.secondCard.texto} - pontuação ${player.score}`,
//    computer.score = computer.firstCard.valor + computer.secondCard.valor
//    computer.text = `Computador - cartas: ${computer.firstCard.texto} ${computer.secondCard.texto} - pontuação ${computer.score}`,

//    console.log(`
//    ${player.text}
//    ${computer.text}
//    `)

//    if (player.score > computer.score) {
//       return("O usuário ganhou!")
//    } else if (player.score === computer.score) {
//       return("Empate!")
//    } else {
//       return("O computador ganhou!")
//    }

// }


// console.log("Boas vindas ao jogo de Blackjack!")
// const startGame = confirm("Quer iniciar uma nova rodada?")

// if (startGame === false) {
//    console.log("O jogo acabou") // aqui posso tentar uma forma de "começar uma nova partida"
// } else {
//    const finalResult = playRound()
//    console.log(finalResult)
// }
