const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.post('/categorias', (req, res) => categoriaController.criar(req, res));
router.get('/categorias', (req, res) => categoriaController.pegaTodos(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.pegarUmRegistroPorId(req, res))
router.put('/categorias/:id', (req, res) => categoriaController.atualiza(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.deletarRegistro(req, res));

module.exports = router;