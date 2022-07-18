### Exercício 1

1. Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por **query params**.

2. Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por **tipo** de user. O tipo de user deve ser passado por **path params.**
---
### Exercício 2
Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de **ordenação** que possa receber nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.

---
### Exercício 3
Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por query params.

---
### Exercício 4
Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:

- Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
- Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
- Caso o usuário não forneça número de página, deve começar na página 1