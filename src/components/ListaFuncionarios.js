
import React from 'react';

function ListaFuncionarios({ funcionarios, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Funcionários</h2>
      <ul>
        {funcionarios.map(funcionario => (
          <li key={funcionario.idfuncionario}>
            {funcionario.nmfuncionario}
            <button onClick={() => onEdit(funcionario)}>Editar</button>
            <button onClick={() => onDelete(funcionario.idfuncionario)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFuncionarios;
