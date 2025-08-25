# Gerenciador de Tarefas - API REST

## 📌 Informações do Projeto

* **Aluno:** *Igor Costa*
* **Disciplina:** Serviços para Web
* **Tema Escolhido:** Gerenciador de Tarefas (To-Do List)
* **Tecnologias:** Node.js + Express
* **Persistência de Dados:** Em memória.

---

## 🚀 Como executar o projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/) instalado na sua máquina.
* [npm](https://www.npmjs.com/) (já vem junto com o Node.js).

### Passo a passo

1. Descompacte o diretório:

    ```
    QI-API-JS.rar
    ```

2. Acesse a pasta do projeto:

   ```bash
   cd QI-API-JS
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
    "completed": false
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
      "completed": false
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
    "completed": false
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
    "completed": true
  }
  ```
* **Resposta de sucesso (200 OK):**

  ```json
  {
    "id": 1,
    "title": "Estudar para a prova de matemática",
    "description": "Revisar capítulos 1 a 3",
    "completed": true
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