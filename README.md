# TechBlog

Projeto de CRUD de artigos desenvolvido com React, Express e MySQL.

## Funcionalidades

- Listar artigos
- Criar artigo
- Editar artigo
- Remover artigo
- Buscar artigo por ID
- Filtro de pesquisa no frontend

---

# Tecnologias

## Frontend
- React
- React Router DOM
- Axios

## Backend
- Node.js
- Express
- MySQL2

## Banco de dados
- MySQL

---

# Estrutura do projeto

## Backend

- database/
- models/
- controllers/
- routes/

## Frontend

- pages/
- components/
- routes/

---

# Como rodar o projeto

## Backend

Entrar na pasta:

```bash
cd Backend
```

Instalar dependências:

```bash
npm install
```

Rodar servidor:

```bash
node app.js
```

Servidor:

```bash
http://localhost:3000
```

---

## Frontend

Entrar na pasta:

```bash
cd frontend
```

Instalar dependências:

```bash
npm install
```

Rodar projeto:

```bash
npm run dev
```

Frontend:

```bash
http://localhost:5173
```

---

# Rotas da API

## Buscar todos os artigos

```http
GET /articles
```

## Buscar artigo por ID

```http
GET /articles/:id
```

## Criar artigo

```http
POST /articles
```

## Atualizar artigo

```http
PUT /articles/:id
```

## Remover artigo

```http
DELETE /articles/:id
```

---

# Banco de dados

Tabela utilizada:

```sql
CREATE TABLE articles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    author VARCHAR(100),
    content TEXT,
    tag1 VARCHAR(30),
    tag2 VARCHAR(30),
    tag3 VARCHAR(30)
);
```