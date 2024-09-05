const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router.post('/cursos', (req, res) => cursoController.criar(req, res));
router.get('/cursos', (req, res) => cursoController.pegaTodos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegarUmRegistroPorId(req, res))
router.put('/cursos/:id', (req, res) => cursoController.atualiza(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.deletarRegistro(req, res));

module.exports = router;