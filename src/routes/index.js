const express = require('express');
const pessoas = require('./pessoasRoute.js')

const app = express();

module.exports = app => {
    app.use(express.json(), pessoas)
}