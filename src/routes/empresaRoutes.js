const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

// Rota para obter todas as empresas
router.get('/', empresaController.getAllEmpresas);

// Rota para obter uma empresa por ID
router.get('/:id', empresaController.getEmpresaById);

// Rota para criar uma empresa
router.post('/', empresaController.createEmpresa);

// Rota para atualizar uma empresa
router.put('/:id', empresaController.updateEmpresa);

// Rota para deletar uma empresa
router.delete('/:id', empresaController.deleteEmpresa);

module.exports = router;
