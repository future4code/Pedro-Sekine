// Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes.
// Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

// a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.

type TypePratos = {
  nome: string;
  custo: number;
  valorDeVenda: number;
  ingredientes: string[];
}[];

type Prato = {
  nome: string;
  custo: number;
  valorDeVenda: number;
  ingredientes: string[];
};

const pratos: Prato[] = [];

const novoPrato = (prato: Prato): void => {
  pratos.push(prato);
  console.log("pratos", pratos);
};

novoPrato({
  nome: "Pão na Chapa",
  custo: 0.5,
  valorDeVenda: 5,
  ingredientes: ["pão, manteiga"],
});

novoPrato({
  nome: "Pão Chapado com Requeijão na saída",
  custo: 0.75,
  valorDeVenda: 8,
  ingredientes: ["pão, manteiga, requeijão"],
});

novoPrato({
  nome: "Café Americano",
  custo: 0.8,
  valorDeVenda: 7,
  ingredientes: ["café, água"],
});

type ResultadoDeBusca = {
  nome: string;
  valorDeVenda: number;
};

const buscaProduto = (produto: string): ResultadoDeBusca[] => {
  const novaArrayBusca: Prato[] = pratos.filter((prato) => {
    return prato.nome.toLowerCase().includes(produto.toLowerCase());
  });
  const resultadoFormatado: ResultadoDeBusca[] = novaArrayBusca.map((prato) => {
    return { nome: prato.nome, valorDeVenda: prato.valorDeVenda };
  });
  return resultadoFormatado;
};

console.log(buscaProduto("caf"));

// Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

type TypeVenda = {
  nomePrato: string;
  nomeCliente: string;
};

const todasVendas: TypeVenda[] = [];

// Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.

const novaVenda = (prato: string, cliente: string): void => {
  const validacaoProduto: ResultadoDeBusca[] = buscaProduto(prato);
  if (!validacaoProduto.length) {
    console.log("produto não encontrado, busque por outras palavras-chave");
  } else if (validacaoProduto.length === 1) {
    const objetoNovaVenda: TypeVenda = {
      nomePrato: validacaoProduto[0].nome,
      nomeCliente: cliente,
    };
    todasVendas.push(objetoNovaVenda);
    console.log("venda feita!");
  } else {
    console.log("busca ampla demais. Faça uma busca mais específica.");
  }
};

console.log(novaVenda("café", "Jeremias"));
console.log(novaVenda("Requeijão", "Rafinha"));
console.log(novaVenda("Sabão", "Jeremias"));
console.log(todasVendas);

// calcular lucro

const buscaProdutoCompleto = (produto: string): Prato => {
  const novaArrayBusca: TypePratos = pratos.filter((prato) => {
    return prato.nome.toLowerCase().includes(produto.toLowerCase());
  });
  const finalObject: Prato = novaArrayBusca[0];
  return finalObject;
};

const calculaLucro = (): number => {
  const arrayDePratos: string[] = todasVendas.map((venda) => {
    return venda.nomePrato;
  });
  const arraydeProdutosVendidos: TypePratos = arrayDePratos.map((nomePrato) => {
    return buscaProdutoCompleto(nomePrato);
  });

  const profitCalculator: number[] = arraydeProdutosVendidos.map(
    (objetoPrato) => {
      return objetoPrato.valorDeVenda - objetoPrato.custo;
    }
  );

  const finalProfit: number = profitCalculator.reduce((a, b) => a + b, 0);
  
  return finalProfit
};

console.log("O lucro foi de R$", calculaLucro())
