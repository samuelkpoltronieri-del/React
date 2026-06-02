const express = require('express');
const router = express.Router();
const buscaController = require('../controllers/buscaController');

// Rota para listar todas as questões da view
router.get('/questoes-tema', buscaController.listarTodos);

// Rota para filtrar por tema específico
router.get('/questoes-tema/filtrar/:tema', buscaController.listarPorTema);

// Rota para filtrar por vestibular específico
router.get('/questoes-tema/vestibular/:vestibular', buscaController.listarPorVestibular);

module.exports = router;
