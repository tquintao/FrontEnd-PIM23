const express = require('express');
const router = express.Router();
const contratoTrabalhoController = require('../controllers/contratoTrabalhoController');

router.get('/', contratoTrabalhoController.getAllContratos);
router.get('/:id', contratoTrabalhoController.getContratoById);
router.post('/', contratoTrabalhoController.createContrato);
router.put('/:id', contratoTrabalhoController.updateContrato);
router.delete('/:id', contratoTrabalhoController.deleteContrato);

module.exports = router;
