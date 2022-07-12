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
  "creatorUserNickname": "astrodev"
}
```

**Observações**:

- O endpoint deve retornar um erro se não encontrar a task ✅
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador ✅
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`) ✅
