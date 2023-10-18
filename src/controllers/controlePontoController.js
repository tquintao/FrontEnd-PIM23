const ControlePonto = require('../models/ControlePonto');

exports.getAll = async (req, res) => {
    try {
        const pontos = await ControlePonto.findAll();
        res.json(pontos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const ponto = await ControlePonto.findByPk(req.params.id);
        if (ponto) {
            res.json(ponto);
        } else {
            res.status(404).send('Controle de Ponto não encontrado.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const ponto = await ControlePonto.create(req.body);
        res.status(201).json(ponto);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const ponto = await ControlePonto.findByPk(req.params.id);
        if (ponto) {
            await ponto.update(req.body);
            res.json(ponto);
        } else {
            res.status(404).send('Controle de Ponto não encontrado.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const ponto = await ControlePonto.findByPk(req.params.id);
        if (ponto) {
            await ponto.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Controle de Ponto não encontrado.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = exports;
