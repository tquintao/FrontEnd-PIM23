// src/Funcionarios.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Funcionarios = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const backendURL = "http://localhost:3333"; // ajuste conforme a URL do seu backend

  useEffect(() => {
    // Obtém a lista de funcionários ao carregar o componente
    axios.get(`${backendURL}/funcionarios`)
      .then(response => {
        setFuncionarios(response.data);
      })
      .catch(error => {
        console.error("Erro ao obter funcionários:", error);
      });
  }, []);

  return (
    <div>
      <h1>Funcionários</h1>
      <ul>
        {funcionarios.map(funcionario => (
          <li key={funcionario.idfuncionario}>
            {funcionario.nome} {/* Supondo que existe um campo 'nome' */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Funcionarios;
