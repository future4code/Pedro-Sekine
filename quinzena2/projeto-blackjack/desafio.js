// EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

// const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
// console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
// console.log(carta)

// COMEÇO DO PROJETO ------------------------------------------------------------------


const checkDoubleAces = () => {
   player.bothAces = (player.card1.valor === 11) && (player.card2.valor === 11)
   computer.bothAces = (computer.card1.valor === 11) && (computer.card2.valor === 11)
}


const showCards = (object, whoseCard) => {
   let textCardsCombined = ""
   for (let i = 1; i <= whoseCard; i++) {
      textCardsCombined += object["card" + `${i}`]["texto"] + " "
   }
   return(textCardsCombined)
}

const playExtraRound = () => {
   for (let i = 3; player.extraRound === true && player.score <= 21; i++) {
      player["card" + `${i}`] = comprarCarta()
      cardCounterPlayer += 1
      calculateScore()

      if (player.score < 21){
         player.extraRound = confirm(`
            Suas cartas são ${showCards(player, cardCounterPlayer)}. 
            A carta revelada do computador é ${computer.card1.texto}.
            Deseja comprar mais uma carta?`
         )
      }
      

   }
}

const computerRound = () => {
   // enquanto a pontuação do computador for menor da do jogador, comprar uma carta 
   for (let i = 3; computer.score < player.score; i++){
      computer["card" + `${i}`] = comprarCarta()
      cardCounterComputer += 1
      calculateScore()
   }
   
}

const calculateScore = () => {
   player.score = 0
   computer.score = 0
   
   for (let i = 1; i <= cardCounterPlayer; i++) {
      const playerCard = player["card" + `${i}`]
      player.score += playerCard.valor
   }

   for (let i = 1; i <= cardCounterComputer; i++) {
      const computerCard = computer["card" + `${i}`]
      computer.score += computerCard.valor
   }

   console.log(`O score parcial do player é ${player.score}. O score parcial do computador é ${computer.score}`)
}

const finishMatch = () => {
   console.log("passou pelo finishMatch")
   
   console.log(`
      Suas cartas são ${showCards(player, cardCounterPlayer)}. 
      Sua pontuação é ${player.score}.

      As cartas do computador são ${showCards(computer, cardCounterComputer)}. 
      A pontuação do computador é ${computer.score}.`)

   if (player.score > 21) {
      return("O computador ganhou!")      
   } else if (computer.score > 21) {
      return("O usuário ganhou!")
   } else if (player.score > computer.score && player.score <= 21) {
      return("O usuário ganhou!")
   } else if (player.score === computer.score) {
      return("Empate!")
   } else {
      return("O computador ganhou!")
   }
}

const playRound = () => {

   while (player.bothAces || computer.bothAces) {
      
      if (player.bothAces) {
         player.card1 = comprarCarta()
         player.card2 = comprarCarta()
         console.log("tive que dar shuffle nas cartas do jogador")

      } else if (computer.bothAces) {
         computer.card1 = comprarCarta()
         computer.card2 = comprarCarta()
         console.log("tive que dar shuffle nas cartas do computador")
      }
      
      checkDoubleAces()
   }

   player.extraRound = confirm(`
      Suas cartas são ${showCards(player, cardCounterPlayer)}. 
      A carta revelada do computador é ${computer.card1.texto}.
      Deseja comprar mais uma carta?`
   )
   // acho que tenho que colocar aqui um calculateScore() de return finishGame() CASO calculateScore() seja 21

   if (player.extraRound) {
      playExtraRound() 
      if (player.score >= 21) {
         return(finishMatch())
      } else if (player.extraRound === false && player.score <= 21) { // computador joga
         computerRound()
         return(finishMatch())
      }
   } else {
      calculateScore()

      computerRound() //tentativa - FUNCIONOU!

      return(finishMatch())
   }
}


const player = {
   name: "player",
   card1: comprarCarta(),
   card2: comprarCarta(),
   score: null,
   text: null,
   bothAces: null,
   extraRound: true,
}

const computer = {
   ...player,
   name: "computer",
   card1: comprarCarta(),
   card2: comprarCarta(),
}

let cardCounterPlayer = 2
let cardCounterComputer = 2 

checkDoubleAces()

console.log("Boas vindas ao jogo de Blackjack!")
const startGame = confirm("Quer iniciar uma nova rodada?")

if (startGame === false) {
   console.log("O jogo acabou") // aqui posso tentar uma forma de "começar uma nova partida"
} else {
   const finalResult = playRound()
   console.log(finalResult)
}

// Se a pessoa começa com 21 pontos, ela ainda tem a opção de comprar mais uma carta,
// Isso não me parece o ideal