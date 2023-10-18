
import React, { useState, useEffect } from 'react';
import { getFuncionarios, addFuncionario } from '../api/funcionario';
import AdicionarFuncionario from './AdicionarFuncionario';
import ListaFuncionarios from './ListaFuncionarios';
import EditFuncionarioModal from './EditFuncionarioModal';
import axios from 'axios';


function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFuncionario, setEditingFuncionario] = useState(null);


  useEffect(() => {
    loadFuncionarios();
  }, []);

  const loadFuncionarios = () => {
    getFuncionarios().then(response => {
      setFuncionarios(response.data);
    });
  };

  const handleAdd = (funcionario) => {
    addFuncionario(funcionario).then(() => {
      loadFuncionarios();
    });
  };

  const handleEdit = (funcionario) => {
    setEditingFuncionario(funcionario);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    axios.delete(`/funcionarios/${id}`)
        .then(() => {
            loadFuncionarios();  // Recarregar a lista após excluir
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.error) {
                alert(error.response.data.error);
            } else {
                alert('Ocorreu um erro ao excluir o funcionário.');
            }
        });
  };

  const handleSave = (updatedFuncionario) => {
    console.log("handleSave chamada com:", updatedFuncionario);
    
    axios.put(`/funcionarios/${updatedFuncionario.idfuncionario}`, updatedFuncionario)
         .then(() => {
             loadFuncionarios();
             setIsModalOpen(false);
         })
         .catch(error => {
             // Trate qualquer erro que ocorra durante a atualização
             console.error("Erro ao atualizar o funcionário:", error);
         });
};


  return (
    <div>
      <AdicionarFuncionario onAdd={handleAdd} />
      <ListaFuncionarios funcionarios={funcionarios} onEdit={handleEdit} onDelete={handleDelete} />
      <EditFuncionarioModal show={isModalOpen} onClose={() => setIsModalOpen(false)} funcionario={editingFuncionario} onSave={handleSave} />
    </div>
  );
}

export default Funcionarios;
