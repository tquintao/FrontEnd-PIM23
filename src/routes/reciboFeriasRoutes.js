const express = require('express');
const router = express.Router();
const reciboFeriasController = require('../controllers/reciboFeriasController');

router.get('/', reciboFeriasController.getAllRecibos);
router.get('/:id', reciboFeriasController.getReciboById);
router.post('/', reciboFeriasController.createRecibo);
router.put('/:id', reciboFeriasController.updateRecibo);
router.delete('/:id', reciboFeriasController.deleteRecibo);

module.exports = router;
