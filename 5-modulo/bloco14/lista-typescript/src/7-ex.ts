type Product = {
  nome: string;
  quantidade: number;
  valorUnitario: number | string;
};

const stock: Product[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

const finalList: string[] = [];
const organizeStock = (listProducts: Product[]): Product[] => {
  const orderedList: Product[] = listProducts.sort(
    (a, b) => a.quantidade - b.quantidade
  );
  const formattedList: Product[] = orderedList.map((product) => {
    const newPrice = ajustaPreco(product.valorUnitario as number);
    finalList.push(product.nome);
    product.valorUnitario = newPrice;
    return product;
  });

  return formattedList;
};

console.log("Estoque ajustado", organizeStock(stock))
console.log("Lista Organizada por Estoque em Ordem Crescente", finalList);
