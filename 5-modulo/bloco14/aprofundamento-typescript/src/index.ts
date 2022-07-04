// Exercício 1

// const minhaString: string = "Pedro" ✅
// const minhaString: string = 20 🔴 Number is not assignable to type String

// const meuNumero: number = 20 ✅
// const meuNumero: number | string = 20 ✅
// const meuNumero2: number | string = "20" ✅

// const objetoPessoa: { nome: string; idade: number; corFavorita: string } = {
//   nome: "Pedro",
//   idade: 28,
//   corFavorita: "laranja",
// };

// enum CoresArcoIris {
//   VERMELHO = "Vermelho",
//   LARANJA = "Laranja",
//   AMARELO = "Amarelo",
//   VERDE = "Verde",
//   AZUL = "Azul",
//   ANIL = "Anil",
//   VIOLETA = "Violeta",
// }

// type Pessoa = {
//   nome: string;
//   idade: number;
//   corFavorita: CoresArcoIris;
// };

// const novaPessoa1: Pessoa = {
//   corFavorita: CoresArcoIris.AZUL,
//   idade: 19,
//   nome: "Flor",
// };

// const novaPessoa2: Pessoa = {
//   corFavorita: CoresArcoIris.VERMELHO,
//   idade: 48,
//   nome: "Renato",
// };

// const novaPessoa3: Pessoa = {
//   corFavorita: CoresArcoIris.VERDE,
//   idade: 55,
//   nome: "Bob",
// };

// EXERCÍCIO 2 ✅

// type AmostraDeIdades = {
//   numeros: number[];
//   obterEstatisticas: (numeros: any) => {
//     maior: number;
//     menor: number;
//     media: number;
//   };
// };

// function obterEstatisticas(numeros: number[]) {
//   const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

//   let soma: number = 0;

//   for (let num of numeros) {
//     soma += num;
//   }

//   const estatisticas: {
//     maior: number;
//     menor: number;
//     media: number;
//   } = {
//     maior: numerosOrdenados[numeros.length - 1],
//     menor: numerosOrdenados[0],
//     media: soma / numeros.length,
//   };

//   return estatisticas;
// }

// Exercício 3 ✅


// type post = {
//   autor: string,
//   texto: string
// }

// const posts: post[] = [
//   {
//     autor: "Alvo Dumbledore",
//     texto: "Não vale a pena viver sonhando e se esquecer de viver",
//   },
//   {
//     autor: "Severo Snape",
//     texto: "Menos 10 pontos para Grifinória!",
//   },
//   {
//     autor: "Hermione Granger",
//     texto: "É levi-ô-sa, não levio-sá!",
//   },
//   {
//     autor: "Dobby",
//     texto: "Dobby é um elfo livre!",
//   },
//   {
//     autor: "Lord Voldemort",
//     texto: "Avada Kedavra!",
//   },
// ];

// function buscarPostsPorAutor(posts:post[], autorInformado: string):post[] {
//   return posts.filter(
//     (post) => {
//       return post.autor === autorInformado
//     }
//   )
// }

