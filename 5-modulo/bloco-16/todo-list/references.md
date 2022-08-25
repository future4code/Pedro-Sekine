**Método:** POST

**Path:** `/user`

**Body:**

```json
{
  "name": "Astro Dev",
  "nickname": "astrodev",
  "email": "astro@dev.com"
}
```

**Observações**:

- O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
- O seu código deve gerar o id do usuário
- ✅

---

**Método:** GET
**Path:** `/user/:id`

**Path Param**: é o id do usuário

**Body de Resposta:**

```json
{
  "id": "001",
  "nickname": "astrodev"
}
```

**Observações**:

- O endpoint deve retornar um erro se não encontrar o usuário
- ✅

---

## Editar Usuário

**Método:** PUT
**Path:** `/user/edit/:id`

**Path Param**: é o id do usuário

**Body:**

```json
{
  "name": "Astro Dev",
  "nickname": "astrodev"
}
```

**Observações**:

- O seu código só deve alterar o que for enviado ✅
- Se algum valor enviado for vazio, deve retornar um erro ✅

---

## Criar Tarefa

**Método:** POST
**Path:** `/task`

**Body:**

```json
{
  "title": "Criar banco dos alunos",
  "description": "Devemos criar o banco dos alunos para o módulo do backend",
  "limitDate": "04/05/2020",
  "creatorUserId": "001"
}
```

**Observações**:

- O seu código deve validar se todos os campos não estão vazios, ✅
- O seu código deve gerar o id da tarefa,✅
- A data deve se recebida no formato mostrado acima: `DD/MM/YYYY` e o seu código deve fazer a conversão necessária para salvar no banco ✅

---

## Pegar tarefa pelo id

**Método:** GET
**Path:** `/task/:id`

**Path Param**: é o id da tarefa

**Body de Resposta:**

```json
{
  "taskId": "001",
  "title": "Criar banco dos alunos",
  "description": "Devemos criar o banco dos alunos para o módulo do backend",
  "limitDate": "04/05/2020",
  "status": "to_do",
  "creatorUserId": "001",
  "creatorUserNickname": "astrodev",
  "responsibleUsers": [
    {
      "id": "001",
      "nickname": "astrodev"
    }
  ]
}
```

**Observações**:

- O endpoint deve retornar um erro se não encontrar a task ✅
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador ✅
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`) ✅
- O seu código deve validar se o id da task foi enviado
- O endpoint deve retornar um erro se não encontrar a task
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador e de todos os usuários responsáveis

---

## Pegar todos os usuários

**Método:** GET
**Path:** `/user/all`

**Body de Resposta:**

```json
{
  "users": [
    {
      "id": "001",
      "nickname": "astrodev"
    }
  ]
}
```

**Observações**:

- O endpoint deve retornar um array vazio se não encontrar os resultados 🟡 Não fiz esse teste, mas quero fazer ele antes de entregar o projeto. Vai ser possível fazer ele quando eu criar o endpoint de deleter usuários.

---

## Pegar tarefas criadas por um usuário

**Método:** GET
**Path:** `/task?creatorUserId=id`

**Query String:** indica o id do usuário que criou através da chave `creatorUserId`

**Body de Resposta:**

```json
{
  "tasks": [
    {
      "taskId": "001",
      "title": "Criar banco dos alunos",
      "description": "Devemos criar o banco dos alunos para o módulo do backend",
      "limitDate": "04/05/2020",
      "creatorUserId": "001",
      "status": "to_do",
      "creatorUserNickname": "astrodev"
    }
  ]
}
```

**Observações**:

- O seu código deve verificar se foi enviado o `creatorUserId` e devolver um erro específico caso não tenha sido ✅
- O endpoint deve retornar um array vazio se não encontrar os resultados ✅
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador ✅
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`) ✅

---

## Pesquisar usuário

**Método:** GET
**Path:** `/user?query=astro`

**Query String:** indica o termo de busca através da chave `query`

**Body de Resposta:**

```json
{
  "users": [
    {
      "id": "001",
      "nickname": "astrodev"
    }
  ]
}
```

**Observações**:

- O seu código deve verificar se foi enviado a `query` e devolver um erro específico caso não tenha sido ✅
- Você deve buscar no banco por usuários cujo apelido ou email contenham a `query` fornecida ✅
- O endpoint deve retornar um array vazio se não encontrar os resultados ✅

---

## Atribuir um usuário responsável a uma tarefa

**Método:** POST
**Path:** `/task/responsible`

**Body:**

```json
{
  "task_id": "Astro Dev",
  "responsible_user_id": "astrodev"
}
```

**Observações**:

- O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios ✅

---

## Pegar usuários responsáveis por uma tarefa

**Método:** GET
**Path:** `/task/:id/responsible`

**Path Param**: é o id da tarefa

**Body de Resposta:**

```json
{
  "users": [
    {
      "id": "001",
      "nickname": "astrodev"
    }
  ]
}
```

**Observações**:

- O seu código deve validar se o id da task foi enviado ✅
- O endpoint deve retornar um erro se não encontrar a task ✅

---

## Atualizar o status da tarefa pelo id

**Method:** PUT

**Path:** `/task/status/:id/`

**Body:**

```json
{
  "status": "doing"
}
```

**Observações**:

- O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios ✅

---

## Pegar todas as tarefas por status

**Método:** GET
**Path:** `/task?status=valor_do_status`

**Query String:** indica o status através da chave `status`

**Body de Resposta:**

```json
{
  "tasks": [
    {
      "taskId": "001",
      "title": "Criar banco dos alunos",
      "description": "Devemos criar o banco dos alunos para o módulo do backend",
      "limitDate": "04/05/2020",
      "creatorUserId": "001",
      "creatorUserNickname": "astrodev"
    }
  ]
}
```

**Observações**:

- O seu código deve validar se o status da task foi enviado ✅
- O endpoint deve retornar um array vazio se não encontrar nenhum resultado ✅
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador ✅
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`) ✅

---

## Pegar todas as tarefas atrasadas

**Método:** GET
**Path:** `/task/delayed`

**Body de Resposta:**

```json
{
  "tasks": [
    {
      "taskId": "001",
      "title": "Criar banco dos alunos",
      "description": "Devemos criar o banco dos alunos para o módulo do backend",
      "limitDate": "04/05/2020",
      "creatorUserId": "001",
      "creatorUserNickname": "astrodev"
    }
  ]
}
```

**Observações**:

- O seu código deve validar se o status da task foi enviado ✅
- O endpoint deve retornar um erro se não encontrar a task ✅
- O endpoint deve retornar um array vazio se não encontrar nenhum resultado ✅
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`) ✅

---

## Retirar um usuário responsável de uma tarefa

**Método:** DELETE
**Path:** `/task/:taskId/responsible/:responsibleUserId`

**Path Param**: o primeiro indica o id da task (`taskId`)e o segundo o id do usuário responsável (`responsibleUserId`)

**Observações**:

- O seu código deve validar se os ids da task e do usuário foiram enviados ✅
- O endpoint deve retornar um erro se não encontrar a task, ou se não encontrar o usuário ou se o usuário não for responsável por essa tarefa, antes de deletar ✅

---

## Atribuir mais de um responsável a uma tarefa

**Método:** POST
**Path:** `/task/responsible`

**Body:**

```json
{
  "task_id": "001",
  "responsible_user_ids": ["001"]
}
```

**Observações**:

- O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios ✅
- O seu código deve verificar se a task e todos os usuários existem ✅
- Perceba que ele possui o mesmo path do endpoint do exercício 9. A ideia é que você utilize o mesmo endpoint, altere-o para que funcione com um array de ids de usuário. ✅

---

## Procurar tarefa por termos

**Método:** GET
**Path:** `/task?query=tarefa`

**Query String:** indica o termo de busca através da chave `query`

**Body de Resposta:**

```json
{
  "tasks": [
    {
      "taskId": "001",
      "title": "Criar banco dos alunos",
      "description": "Devemos criar o banco dos alunos para o módulo do backend",
      "limitDate": "04/05/2020",
      "creatorUserId": "001",
      "creatorUserNickname": "astrodev"
    }
  ]
}
```

**Observações**:

- O seu código deve validar se o status da task foi enviado ✅
- O endpoint deve retornar um erro se não encontrar a task ✅
- O endpoint deve retornar um array vazio se não encontrar nenhum resultado ✅
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`) ✅

---

## Atualizar o status de várias tarefas

**Método:** PUT
**Path:** `/task/status/edit`

**Body:**

```json
{
  "task_ids": ["001"],
  "status": "done"
}
```

**Observações**:

- O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios ✅
- O seu código deve verificar se todas as tasks existem ✅
- Perceba que ele possui o mesmo path do endpoint do exercício 12. A ideia é que você utilize o mesmo endpoint, altere-o para que funcione com um array de ids de task, ao invés dos parâmetros de path. ✅

---

## Deletar tarefa

**Método:** DELETE
**Path:** `/task/:id`

**Path Param**: o parâmetro indica o id da task (`taskId`)

**Observações**:

- O seu código deve validar se o id da task foi enviado ✅
- Ao apagar a task, todas as relações de usuários responsáveis relacionadas a essa task devem ser apagadas ✅

1. Check whether the id actually exists.
1. Search for all reference to the task in table Responsible
2. delete all of those lines 
      
    - This probably means that three connections with the database will be needed. It will, at least, be easier for me to understand it this way.
3. Proceed to delete the task in table Task

    - This is the second connection.
4. Send Response to user

---

## Deletar usuário

**Método:** DELETE
**Path:** `/user/:id`

**Path Param**: o parâmetro indica o id do usuário (`id`)

**Observações**:

- O seu código deve validar se o id do usuário foi enviado
- Ao apagar a task, todas as relações de usuários responsáveis relacionadas a essa task devem ser apagadas
- Além disso, todas as tasks criadas por esse usuário devem ser deletas e todas as relações de responsáveis atraeladas a essas tasks

1. Check whether the ID was sent ✅
2. Check whether the ID exists ✅
3. Check if the User is responsible for any tasks and delete those references ✅
4. Check if the user has created any tasks ✅
    - Check if the task has more responsibles
    - Delete the references at the Repsonsible table
5. Delete the tasks ✅
6. Delete the user ✅
7. Send response to user ✅