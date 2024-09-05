const express = require('express');
const pessoas = require('./pessoasRoute.js');
const categorias = require('./categoriasRoutes.js');
const cursos = require('./cursosRouter.js');

const app = express();

module.exports = app => {
    app.use(express.json(), 
    pessoas,
    categorias,
    cursos
)
}