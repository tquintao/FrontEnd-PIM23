const Funcionario = require('../models/Funcionario');

exports.getAllFuncionarios = async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar funcionários', error });
  }
};

exports.getFuncionarioById = async (req, res) => {
  const id = req.params.id;
  try {
    const funcionario = await Funcionario.findByPk(id);
    if (funcionario) {
      res.json(funcionario);
    } else {
      res.status(404).json({ message: 'Funcionário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar funcionário', error });
  }
};

exports.createFuncionario = async (req, res) => {
  try {
    const novoFuncionario = await Funcionario.create(req.body);
    res.status(201).json(novoFuncionario);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar funcionário', error });
  }
};

exports.updateFuncionario = async (req, res) => {
  const id = req.params.id;
  try {
    const funcionarioAtualizado = await Funcionario.update(req.body, { where: { id } });
    if (funcionarioAtualizado[0]) { // Retorna array onde primeiro elemento é a contagem de registros alterados
      res.json({ message: 'Funcionário atualizado com sucesso' });
    } else {
      res.status(404).json({ message: 'Funcionário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar funcionário', error });
  }
};

exports.deleteFuncionario = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteCount = await Funcionario.destroy({ where: { id } });
    if (deleteCount) {
      res.json({ message: 'Funcionário excluído com sucesso' });
    } else {
      res.status(404).json({ message: 'Funcionário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir funcionário', error });
  }
};
