
import React, { useState } from 'react';

function AdicionarFuncionario({ onAdd }) {
  const [idempresa, setIdEmpresa] = useState('');          // Empresa
  const [nmfuncionario, setNmFuncionario] = useState('');  // Nome
  const [cpffuncionario, setCpfFuncionario] = useState('');// CPF
  const [cargofuncionario, setCargoFuncionario] = useState(''); // Cargo
  const [dtcontratacao, setDtContratacao] = useState('');  // Data de Contratação
  const [vlsalariobase, setVlSalarioBase] = useState('');  // Salário Base
  
  const handleSubmit = () => {
    // Verificação básica para o nome e o CPF.     
    if (nmfuncionario && cpffuncionario) {
      onAdd({ 
        idempresa, 
        nmfuncionario, 
        cpffuncionario, 
        cargofuncionario, 
        dtcontratacao, 
        vlsalariobase 
      });

      // Reset dos campos após o cadastro
      setIdEmpresa('');
      setNmFuncionario('');
      setCpfFuncionario('');
      setCargoFuncionario('');
      setDtContratacao('');
      setVlSalarioBase('');
    }
  };

  return (
    <div>
      <h2>Adicionar Funcionário</h2>
      
      <input type="number" placeholder="ID da Empresa" value={idempresa} onChange={e => setIdEmpresa(e.target.value)} />
      <input type="text" placeholder="Nome" value={nmfuncionario} onChange={e => setNmFuncionario(e.target.value)} />
      <input type="text" placeholder="CPF" value={cpffuncionario} onChange={e => setCpfFuncionario(e.target.value)} />
      <input type="text" placeholder="Cargo" value={cargofuncionario} onChange={e => setCargoFuncionario(e.target.value)} />
      <input type="date" placeholder="Data de Contratação" value={dtcontratacao} onChange={e => setDtContratacao(e.target.value)} />
      <input type="text" placeholder="Salário Base" value={vlsalariobase} onChange={e => setVlSalarioBase(e.target.value)} />
      
      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
}


export default AdicionarFuncionario;
