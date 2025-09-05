# Gerenciador de Tarefas - API REST

## 📌 Informações do Projeto

* **Aluno:** *Igor Costa*
* **Tema Escolhido:** Gerenciador de Tarefas (To-Do List)
* **Tecnologias:** Node.js + Express
* **Persistência de Dados:** Arquivo JSON.

---
## O que é este projeto?

Surgiu como um trabalho escolar, agora mantido de maneira independente como uma aplicação completa de um kanban para gerenciador de tarefas (semelhante ao trello ou jira).

#### **Projeto ainda em desenvolvimento.**

---

## 🚀 Como executar o projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/) instalado na sua máquina.
* [npm](https://www.npmjs.com/) (já vem junto com o Node.js).
* [git](https://git-scm.com/) - para clonar e eventualmente alterar o projeto.

### Passo a passo

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/igorcosta110/api-lista-tarefas.git
    ```

2. Acesse a pasta do projeto:

   ```bash
   cd API-LISTA-TAREFAS
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```
4. Inicie o servidor:

   ```bash
   npm start
   ```
5. A API ficará disponível em:

   ```
   http://localhost:3000
   ```

---

## 📖 Documentação da API

### 1. Criar uma nova tarefa

* **Método:** `POST`
* **Endpoint:** `/tasks`
* **Exemplo de requisição:**

  ```json
  {
    "title": "Estudar para a prova",
    "description": "Revisar unidades 1 a 6"
  }
  ```
* **Resposta de sucesso (201 Created):**

  ```json
  {
    "id": 1,
    "title": "Estudar para a prova",
    "description": "Revisar unidades 1 a 6",
    "status": "ok"
  }
  ```

---

### 2. Listar todas as tarefas

* **Método:** `GET`
* **Endpoint:** `/tasks`
* **Resposta de sucesso (200 OK):**

  ```json
  [
    {
      "id": 1,
      "title": "Estudar para a prova",
      "description": "Revisar unidades 1 a 6",
      "status": "ok"
    }
  ]
  ```

---

### 3. Buscar uma tarefa por ID

* **Método:** `GET`
* **Endpoint:** `/tasks/{id}`
* **Exemplo de resposta (200 OK):**

  ```json
  {
    "id": 1,
    "title": "Estudar para a prova",
    "description": "Revisar unidades 1 a 6",
    "status": "ok"
  }
  ```
* **Erro (404 Not Found):**

  ```json
  { "error": "Tarefa não encontrada" }
  ```

---

### 4. Atualizar uma tarefa existente

* **Método:** `PUT`
* **Endpoint:** `/tasks/{id}`
* **Exemplo de requisição:**

  ```json
  {
    "title": "Estudar para a prova de matemática",
    "description": "Revisar capítulos 1 a 3",
    "status": "ok"
  }
  ```
* **Resposta de sucesso (200 OK):**

  ```json
  {
    "id": 1,
    "title": "Estudar para a prova de matemática",
    "description": "Revisar capítulos 1 a 3",
    "status": "ok"
  }
  ```

---

### 5. Deletar uma tarefa

* **Método:** `DELETE`
* **Endpoint:** `/tasks/{id}`
* **Resposta de sucesso (204 No Content):**
  *(sem corpo na resposta)*
* **Erro (404 Not Found):**

  ```json
  { "error": "Tarefa não encontrada" }
  ```

---

## ✅ Status HTTP Utilizados

* **200 OK** → Operação realizada com sucesso.
* **201 Created** → Novo recurso criado com sucesso.
* **204 No Content** → Recurso removido com sucesso.
* **400 Bad Request** → Requisição inválida.
* **404 Not Found** → Recurso não encontrado.

---