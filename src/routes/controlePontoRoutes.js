const express = require('express');
const router = express.Router();
const controlePontoController = require('../controllers/controlePontoController');

router.get('/', controlePontoController.getAllPontos);
router.get('/:id', controlePontoController.getPontoById);
router.post('/', controlePontoController.createPonto);
router.put('/:id', controlePontoController.updatePonto);
router.delete('/:id', controlePontoController.deletePonto);

module.exports = router;
