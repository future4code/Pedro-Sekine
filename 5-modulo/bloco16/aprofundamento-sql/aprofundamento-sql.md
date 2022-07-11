# Aula - Aprofundamento em SQL

## Exercício 1

Leia os comandos abaixo e indique o que eles fazem. **Não** **os rode** nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas. Você, provavelmente, terá que fazer algumas pesquisas para responder

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

- Na tabela `Actor`, deletar a coluna com o nome `salary`

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

- Na tabela `Actor`, mude o nome da coluna `gender` para `sex`, sendo que ela deve receber uma string de no máximo 6 caracteres.

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

- Na tebela `Actor`, mantenha o nome da coluna `gender` o mesmo, mas altere o seu tipo. Agora, ela dever receber até 255 caracteres de qualquer tipo.

> Agora, altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

`ALTER TABLE Actor CHANGE gender gender VARCHAR(100)`

---

## Exercício 2

> Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`

```sql
UPDATE Actor
SET name = "Fernanda Montanha Escura", birth_date = "1929-10-18"
WHERE id="003";
```

Error Code: 1292. Truncated incorrect DOUBLE value: 'Fernanda Montanha Escura'

> Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.

```sql
UPDATE Actor
SET name = UPPER(name)
WHERE name="Juliana Paes";
```

```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name="JULIANA PAES";
```

> Escreva uma query que atualize todas as informações do ator com o id `005`

```sql
UPDATE Actor
SET name = "Juliano Peace", salary = 900000, birth_date = "1979-03-25", gender = "male"
WHERE id = "005"
```

> Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

```sql
UPDATE Actor
SET gender = "male"
WHERE id="100"
```

_0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0_

- O resultado da Query não foi um erro, como eu esperava. Ele retorna o resultado da busca, mas pontua que nenhum item foi afetado pela operação.

---

## Exercício 3

> Escreva uma query que apague o ator com o nome Drake

```sql
DELETE FROM Actor
WHERE name = "Drake";
```

> Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

```sql
DELETE FROM Actor
WHERE salary > 1000000 AND gender = "male";
```

---

## Exercício 4

> Escreva uma query que pegue o maior salário de todos os atores e atrizes

```sql
SELECT MAX(salary) FROM Actor;
```

> Escreva uma query que pegue o menor salário das atrizes

```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

> Escreva uma query que pegue a quantidade de atrizes

```sql
SELECT COUNT(*) FROM Actor;
```

> Escreva uma query que pegue a soma de todos os salários
```sql
SELECT SUM(salary) FROM Actor;
```
---
## Exercício 5
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```
>Releia a última query. Teste-a. Explique o resultado com as suas palavras

O resultado dessa Query é uma contagem do agrupamento da tabela atores por gênero. Ou seja, considerando um total de 4 atores com 2 homens e 2 mulheres, o retorno da tabela seria uma tabela com duas linhas e duas colunas. Ela traria a contagem de mulheres e diria que essa contagem se refere às mulheres. A outra linha viria com a contagem de homens e a sinalização de que tal número se refere aos homens.

>Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
```sql
SELECT id, name
FROM Actor
ORDER BY name DESC; 
```
>Faça uma query que retorne todos os atores ordenados pelo salário
```sql
SELECT * FROM Actor
ORDER BY salary;
```
>Faça uma query que retorne os atores com os três maiores salarios
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
>Faça uma query que retorne a média de salário por gênero
```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```
---
## Exercício 6
>Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema. 
```sql
ALTER TABLE Movie
ADD playing_limit_date DATE;
```
>Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.
```sql
ALTER TABLE Movie
CHANGE review rating FLOAT NOT NULL;
```
>Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
```sql
UPDATE Movie
SET playing_limit_date = "2022-12-07"
WHERE id = 1;
```

```sql
UPDATE Movie
SET playing_limit_date = "2020-13-03"
WHERE id = 2;
```


>Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
```sql
DELETE FROM Movie
WHERE id = 3;
```
```sql
UPDATE MOVIE
SET synopsis = "update synopsis"
WHERE id = 3;
```
*0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0*

A Query efetuada foi executada e retornou uma lista vazia, dado que não há nenhum elemento com `id = 3` na tabela.
---
## Exercício 7
>Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?
```sql
SELECT COUNT(*) FROM Movie
WHERE rating > 7.5;
```
>Qual a média das avaliações dos filmes?
```sql
SELECT AVG(rating) FROM Movie;
```
>Qual a quantidade de filmes em cartaz?
```sql
SELECT COUNT(*) FROM Movie
WHERE CURDATE() <= playing_limit_date;
```

>Qual a quantidade de filmes que ainda irão lançar?
```sql
SELECT COUNT(*) FROM Movie
WHERE CURDATE() < launchDate;
```

>Qual a maior nota dos filmes?
```sql
SELECT MAX(rating) FROM Movie;
```

>Qual a menor nota dos filmes?
```sql
SELECT MIN(rating) FROM Movie;
```
--- 
## Exercício 7
Escreva **uma** query que:

>Retorne todos os filmes em ordem alfabética
```sql
SELECT * FROM Movie
ORDER BY name ASC;
```
>Retorne os 2 primerios filmes em ordem descrente alfabética 
```sql
SELECT * FROM Movie
ORDER BY name DESC
LIMIT 2;
```
>Retorne os 2 filmes mais recentes em cartaz
```sql
SELECT * FROM Movie
ORDER BY playing_limit_date DESC
LIMIT 2;
```
>Retorne os 2 filmes melhor avalidos
```sql
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 2;
```