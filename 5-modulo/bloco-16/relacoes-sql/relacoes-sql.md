## Exercício 1
>Explique o que é uma chave estrangeira
- Foreign Key é um elemento pertencente a um item que se relaciona a outro item de outra tabela. Um exemplo seria uma tabela que documenta todas as compras de um comércio. Uma compra está sempre atrelada a um caixa, a pessoa responsável por executar a transação. Assim, essa compra, que é um item de uma tabela, carrega a o código do funcionário responsável pela compra. Só que as informações desse funcionário além do seu código só podem ser encontradas em uma outra tabela, a tabela de funcionários, que está relacionada à tabela de compras por meio do seu código Primário, que é o a Foreign Key na tabela de compras.

>Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

*Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`joy-4110172-pedro-sekine`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))*
O erro acima aponta que o Constraint, ou seja, a regra imposta para a criação de uma Foreign Key, não é respeitada na criação do item e, portanto, não o cria.

> Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

*Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`joy-4110172-pedro-sekine`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))*
Da mesma forma que eu não posso criar um item com uma FOREIGN KEY refereciando um outro item que não existe, eu não posso deletar um item que já está relacionado a um outro.

```sql
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
>Explique, com as suas palavras, essa tabela

A tabela acima tem o papel ser o elo entre Atores e Filmes. Por motivos de evitar o caos, um ator, que pode fazer múltiplos filmes pela sua carreia, não deve carregar múltiplas Foreign Keys que se referenciam a esses filmes. cada filme, por sua vez, não deve carregar uma quantidade enorme de referências aos atores que fizeram parte de seu elenco. Para isso, cria-se uma tabela intermediária que faz inúmeras conexões para os dois lados. Cada item conecta um único ator a um único filme. Essa operação pode ser feita inúmeras vezes e, no final, é possível saber de quais filmes um ator participou ou quais atores participaram de um filme. 

>Crie, ao menos, 6 relações nessa tabela 

>Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

*Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`joy-4110172-pedro-sekine`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))*
Assim como nos outros erros descritos nos exercícios acima, o que acontece nesse caso é uma falha em seguir as regras impostas na criação da tabela. Se a Foreign Key precisa se referenciar a um item de outra tabela, mas esse item não existe, então a operação retorna um erro e não é completa.

>Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

*Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`joy-4110172-pedro-sekine`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))*

Apagar um ator que já está relacionado a um filme não é possível e o retorno da operação é um erro. Isso acontece pq essa operação faria com que as regras de outra tabela fossem quebradas e que ela fosse, então, comprometida. 

```sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
>Explique, com suas palavras, a query acima. O que é o operador `ON`?

O operador ON, pelo que eu entendi, é o elemento responsável por determinar as regras da junção proposta pelo INNER JOIN. Assim, a ideia é que `Movie` e `Rating` se juntem de acordo com a regra de que o valor `Movie.id` seja igual a `Rating.movie_id`.
>Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

```sql
SELECT name,Movie.id,rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
---
```sql
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
>Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?

A ideia de duas operações JOIN existe porque precisamos consolidar dados de duas tabelas que não se relacionam diretamente e formar uma terceira. O meu ponto é que ambas se relacionam com `MovieCast`, mas não entre si. Assim, precisamos fazer duas operações com MovieCast e garantir que as referencias criadas são agora resgatadas.

--- 
## Exercício 6
Para finalizar esse exercício, você vai ter que implementar, a sós, uma nova relação no nosso sistema: os Óscar dos filmes. Armazene o nome do óscar (`Óscar de melhor filme`,  `Óscar de melhor direção`, etc) e a data em que o filme o ganhou. Lembre-se que, nesse caso, estamos só considerando o óscar para os filmes.

>Que tipo de relação é essa?

A relação descrita é de 1:N. Isso acontece porque cada Oscar é único e só pode ser dado para um filme. Contudo, cada filme pode receber mais de um prêmio.

>Explicite a query que você usou para criar a tabela

```sql
CREATE TABLE Oscar (
		id INT AUTO_INCREMENT PRIMARY KEY,
        prize ENUM ("Óscar de melhor filme", "Óscar de melhor direção"),
        movie_id INT,
        FOREIGN KEY (movie_id) REFERENCES Movie(id),
        award_date DATE;
);
```
>Crie ao menos 2 óscar para cada um dos filmes 

>Faça uma query que retorne todos os filmes e seus respectivos óscar



Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '("Óscar de melhor filme",7, "2020-01-10"),  ("Óscar de melhor direção",6, "2' at line 5
