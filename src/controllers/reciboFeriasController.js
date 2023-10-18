const ReciboFerias = require('../models/ReciboFerias');

exports.getAll = async (req, res) => {
    try {
        const recibos = await ReciboFerias.findAll();
        res.json(recibos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const recibo = await ReciboFerias.findByPk(req.params.id);
        if (recibo) {
            res.json(recibo);
        } else {
            res.status(404).send('Recibo de Férias não encontrado.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const recibo = await ReciboFerias.create(req.body);
        res.status(201).json(recibo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const recibo = await ReciboFerias.findByPk(req.params.id);
        if (recibo) {
            await recibo.update(req.body);
            res.json(recibo);
        } else {
            res.status(404).send('Recibo de Férias não encontrado.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const recibo = await ReciboFerias.findByPk(req.params.id);
        if (recibo) {
            await recibo.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Recibo de Férias não encontrado.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = exports;
