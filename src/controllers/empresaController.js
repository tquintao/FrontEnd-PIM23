const Empresa = require('../models/Empresa');

exports.getAll = async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        res.json(empresas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const empresa = await Empresa.findByPk(req.params.id);
        if (empresa) {
            res.json(empresa);
        } else {
            res.status(404).send('Empresa não encontrada.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const empresa = await Empresa.create(req.body);
        res.status(201).json(empresa);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const empresa = await Empresa.findByPk(req.params.id);
        if (empresa) {
            await empresa.update(req.body);
            res.json(empresa);
        } else {
            res.status(404).send('Empresa não encontrada.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const empresa = await Empresa.findByPk(req.params.id);
        if (empresa) {
            await empresa.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Empresa não encontrada.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
