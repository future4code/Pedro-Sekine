Recebo uma string como referência e uma outra string para dizer se ela é `one edit` ou não.

checkOneEdit(array1, array2)

- Length diference is -+1
- All comparisons are going to be the same but one
- I can compare character by character and count differences

- Transformar as uma das strings em array, fazer uma varredura para ver comparar os valores.

A questão é que quando a segunda array é maior que a primeira, isso não funciona. Assim, tenho que transformar em array a maior array.

if they have different lengths, the difference must be in the last character
everything else must be the same

---

**Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial**

Receber string, devolve string
Se compressão for maior que original, devolver original
Contar quantos caracteres repetidos antes de patir para o próximo

Para cada caractere da string, comparar ele com o próximo caractere.
Se ele for igual, somar no contador.
Contador sempre começa com o valor 1, que é o mínimo de vezes que um caractere aparece.
Se ele for diferente, zerar o contador, mas adicionar a letra e o número em uma array.
Contemplar o último caractere. Usar um `for` que, na última ocorrência, não compara com o último tempo, mas trata como se fosse um valor diferente.

```ts
const stringCompressor = (input: string): string => {
  const compressedString: [] = [];
  let counter: number = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      counter += 1;
    } else {
      compressedString.push(input[i]).push(counter);
      counter = 1;
    }

    if (compressedString.length < input.split().length) {
      return compressedString;
    } else {
      return input;
    }
  }
};
```
