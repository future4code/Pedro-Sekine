>Explique como é a resposta que temos quando usamos o raw. 
- Quando usamo o Raw, obtemos uma array com dois elementos dentro. O primeiro contém a resposta para a Query feita, enquanto o segundo possui informações sobre o banco de dados. Por ser a forma mais "crua" de se interagir com o banco de dados, as informações também vem no mesmo estado.

---
### Rascunho
- Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
- Para a tabela de filmes: 
  - Criar o filme na tabela
  - Deve ser um POST (`/movie`)
  - Receber todas as informações pelo body

  ```
  id
  name
  synopsis
  launchDate
  rating
  playing_limit_date
  ```
### Outro ex
- Deve ser um GET (`/movie/all`)
- Não recebe nada
- Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens

### Outro ex
- Deve ser um GET (`/movie/search`)
- Deve receber o termo de busca como uma query string (`/movie/search?query=`)
- Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse. Além disso, a lista deve vir ordenada pela data de lançamento