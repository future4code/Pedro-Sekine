## Exercício 1
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
> Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
- o `ID`, além de ser a Primary Key da tabela, possui um limite de 255 caracteres no seu campo, podendo receber qualquer tipo de string desde que o limite seja respeitado. O mesmo referente ao limite de caracteres é válido para o campo `name`, apesar de ele não ser a Primary Key e ser obrigatoriamente um campo não nulo. O limite de caracteres para o campo `gender` é ainda menor e ele também é um campo não nulo. Por fim, `birth_date`, apesar de não possuir limite de caracteres, possui uma formatação específica por meio do tipo `date`, que força uma entrada a seguir o padrão `YYYY/MM/DD`.

> O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
- Usar o comando `SHOW DATABASES` tem como resposta uma lista com todos os bancos de dados do Workbench do usuário. Já o comando `SHOW TABLES` mostra as tabelas que o usuário tem no ambiente específico onde o comando está sendo executado. 

> O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
- O comando `DESCRIBE Actor` cumpre um papel de descrever a propriedades da tabela, expondo o seu tipo, seu valor padrão, se o valor pode ser nulo e propriedades extras. As informações que podem ser visualizadas são as mesmas descritas no primeiro item deste exercício. O que foi declarado por meio do comando `CREATE-TABLE` é agora descrito.
---
## Exercício 2
> Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

*"Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'"*

- Primary Key é um identificador único de cada elemento da tabela. Assim, ele não aceitaria uma segunda entrada com um id pré-existente.

> Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta

🔴
```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
- *Error Code: 1136. Column count doesn't match value count at row 1*
- O erro acima é que faltaram itens da lista na sua descrição: `(id, name, salary, birth_date, gender)`

✅
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
---

🔴
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
- *Error Code: 1364. Field 'name' doesn't have a default value*
- Nome Faltando -tanto na lista quanto na declaração de valores- e ele não possui um valor padrão para ser assumido caso o campo não possua um input.

✅
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Drake",
  400000,
  "1949-04-18", 
  "male"
);
```
---
🔴
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
- *Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1* 
- Birthday is not a string.

✅
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
---
> Escreva uma query que retorne todas as informações das atrizes

`SELECT * FROM Actor WHERE gender = "female";`

> Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`

`SELECT salary FROM Actor WHERE name= "Tony Ramos";`

> Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.

A resposta é uma lista vazia, já que todos os itens que a compõe possuem um valor "male" ou "female"

> Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

`SELECT id,name, salary FROM Actor WHERE salary <=500000;`

> Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

- 🔴 `SELECT id, nome from Actor WHERE id = "002"`
- *Error Code: 1054. Unknown column 'nome' in 'field list'* 
- `nome` é uma coluna não criada nessa tabela. O correto nessa situação seria `name`.
- ✅ `SELECT id, name from Actor WHERE id = "002";`
- ✅ `'002', 'Glória Pires'`
---

> `SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000`

> Explique com as suas palavras a query acima
- A Query está selecionando todas as informações da tabela `Actor` com os seguintes filtros: o valor salário precisa ser maior que 300000 e o nome precisa começar com A ou J.

> Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
- `SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND (salary >350000)`

> Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.
- `SELECT * FROM Actor WHERE (name LIKE "G%" OR name LIKE "g%" OR name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%G" OR name LIKE "%g");`
> Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
- `SELECT * FROM Actor WHERE (name LIKE "G%" OR name LIKE "g%" OR name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%G" OR name LIKE "%g" OR name LIKE "A%" OR name LIKE "a%" OR name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%A" OR name LIKE "%a") AND (salary BETWEEN 350000 AND 900000);`
---
## Exercício 6

> Retorne o id, título e avaliação a partir de um id específico;

`SELECT id, name, review FROM Movie WHERE id = 1;`
> Retorne um filme a partir de um nome específico;

`SELECT * FROM Movie WHERE name = "Deus é Brasileiro";`
> Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

`SELECT id, name, synopsis FROM Movie WHERE review >= 7;`

---
## Exercício 7
> a) Retorna um filme cujo título contenha a palavra `vida`

`SELECT * FROM Movie WHERE name LIKE "%vida%" OR name LIKE "%Vida%" OR name LIKE "%vida" OR name LIKE "%Vida" OR name LIKE "Vida%" OR name LIKE "vida%";`
> Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

`SELECT * FROM Movie WHERE name LIKE "%vida%" OR name LIKE "%Vida%" OR name LIKE "%vida" OR name LIKE "%Vida" OR name LIKE "Vida%" OR name LIKE "vida%" OR synopsis LIKE "%vida%" OR synopsis LIKE "%Vida%" OR synopsis LIKE "%vida" OR synopsis LIKE "%Vida" OR synopsis LIKE "Vida%" OR synopsis LIKE "vida%";`
> Procure por todos os filmes que já tenham lançado

`SELECT * FROM Movie WHERE launchDate < "2018-01-01";`
> Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`

`SELECT * FROM Movie WHERE (launchDate < "2015-12-30") AND (review > 7) AND name LIKE "%Mãe";`