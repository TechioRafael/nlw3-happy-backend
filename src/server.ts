import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path';
import cors from 'cors';

import errorHandler from './errors/handler';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
app.listen(3333);

// REQ / RES
// localhost:3333

// Rota = conjunto
// Recurso = usuário
// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros 

// GET = Buscar uma informação
// POST = Criando uma informação nova
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=Rafa&idade=17
// Route Params: https://localhost:3333/users/1 (Identificar um recurso)
// Body: 


// BD: Driver Nativo, Query Builder, ORM
// Driver Nativo = Querys literais (SELECT * from ...)
// Query Builder = Comandos que ajudam nas querys (knex(users).where(id = 1)...)
// ORM = Object Relation Mapping - Cada tabela é um objeto. Querys retornam esses objetos