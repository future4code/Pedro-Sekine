// [
//  nome:
// preco:
// classificacao:
// ]

// [
//  nome:
//  preco:
//  classificacao:
//  precoComDesconto:
// ]

enum DescontoCategoria {
  VERAO = 5,
  INVERNO = 10,
  BANHO = 4,
  INTIMAS = 7,
}

const meusProdutosTeste: Produtos = [
  { nome: "sunga show", preco: 100, classificacao: DescontoCategoria.VERAO },
  { nome: "meia linda", preco: 100, classificacao: DescontoCategoria.INVERNO },
  { nome: "cueca limpa", preco: 100, classificacao: DescontoCategoria.INTIMAS },
  { nome: "touca de banho fashion", preco: 100, classificacao: DescontoCategoria.BANHO },
];

// 🟡

type Produto = {
  nome: string;
  preco: number;
  classificacao: DescontoCategoria;
};

type ProdutoFinal = Produto & PrecoFinal;

type Produtos = {
  nome: string;
  preco: number;
  classificacao: DescontoCategoria;
}[];

type PrecoFinal = {
  precoComDesconto: number;
};

type ProdutosFinal = {
  nome: string;
  preco: number;
  classificacao: DescontoCategoria;
  precoComDesconto: number;
}[];

const calculaDescontoProdutoss = (produtos: Produtos): ProdutosFinal => {
  const novaArray: ProdutosFinal = produtos.map((item, index) => {
    const ProdutoComDesconto: ProdutoFinal = {
      ...item,
      precoComDesconto: (item.preco * (100 - item.classificacao)) / 100,
    };
    return ProdutoComDesconto;
  });

  return novaArray;
};

console.table(calculaDescontoProdutoss(meusProdutosTeste));
