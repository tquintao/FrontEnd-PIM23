const FolhaPagamento = require('../models/FolhaPagamento');

exports.getAll = async (req, res) => {
    try {
        const folhas = await FolhaPagamento.findAll();
        res.json(folhas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const folha = await FolhaPagamento.findByPk(req.params.id);
        if (folha) {
            res.json(folha);
        } else {
            res.status(404).send('Folha de Pagamento não encontrada.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const folha = await FolhaPagamento.create(req.body);
        res.status(201).json(folha);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const folha = await FolhaPagamento.findByPk(req.params.id);
        if (folha) {
            await folha.update(req.body);
            res.json(folha);
        } else {
            res.status(404).send('Folha de Pagamento não encontrada.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const folha = await FolhaPagamento.findByPk(req.params.id);
        if (folha) {
            await folha.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Folha de Pagamento não encontrada.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = exports;
