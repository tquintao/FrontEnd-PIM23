const ContratoTrabalho = require('../models/ContratoTrabalho');

exports.getAll = async (req, res) => {
    try {
        const contratos = await ContratoTrabalho.findAll();
        res.json(contratos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const contrato = await ContratoTrabalho.findByPk(req.params.id);
        if (contrato) {
            res.json(contrato);
        } else {
            res.status(404).send('Contrato de Trabalho não encontrado.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const contrato = await ContratoTrabalho.create(req.body);
        res.status(201).json(contrato);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const contrato = await ContratoTrabalho.findByPk(req.params.id);
        if (contrato) {
            await contrato.update(req.body);
            res.json(contrato);
        } else {
            res.status(404).send('Contrato de Trabalho não encontrado.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const contrato = await ContratoTrabalho.findByPk(req.params.id);
        if (contrato) {
            await contrato.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Contrato de Trabalho não encontrado.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = exports;
