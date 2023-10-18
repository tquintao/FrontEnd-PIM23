const express = require('express');
const router = express.Router();
const folhaPagamentoController = require('../controllers/folhaPagamentoController');

router.get('/', folhaPagamentoController.getAllFolhas);
router.get('/:id', folhaPagamentoController.getFolhaById);
router.post('/', folhaPagamentoController.createFolha);
router.put('/:id', folhaPagamentoController.updateFolha);
router.delete('/:id', folhaPagamentoController.deleteFolha);

module.exports = router;
